import * as tensorFlow from '@tensorflow/tfjs-core';
import * as tensorFlowConverter from '@tensorflow/tfjs-converter';
import * as tensorFlowEncoder from '@tensorflow-models/universal-sentence-encoder';

const MODEL_PATH = 'https://storage.googleapis.com/tfjs-models/savedmodel/toxicity/model.json';

function loadModel() {
  return tensorFlowConverter.loadGraphModel(MODEL_PATH);
}

function loadTokenizer() {
  return tensorFlowEncoder.loadTokenizer();
}

class ToxicityClassifier {
  constructor() {
    this.threshold = 0.7;
    this.tokenizer = null;
    this.model = null;
    this.labels = [];
    this.load = this.load.bind(this);
    this.classify = this.classify.bind(this);
  }

  async load() {
    const [model, tokenizer] = await Promise.all([
      loadModel(),
      loadTokenizer(),
    ]);

    this.model = model;
    this.tokenizer = tokenizer;
    this.labels = model.outputs.map(output => output.name.split('/')[0]);
  }

  async classify(inputs) {
    let classifiedInputs = inputs;

    if (typeof classifiedInputs === 'string') {
      classifiedInputs = [classifiedInputs];
    }

    const encodings = classifiedInputs.map(input => this.tokenizer.encode(input));
    const encodingsIndices = encodings.map((list, i) => list.map((item, index) => [i, index]));
    let flattenedIndices = [];
    encodingsIndices.forEach((indices) => {
      flattenedIndices = flattenedIndices.concat(indices);
    });
    const indices = tensorFlow.tensor2d(flattenedIndices, [flattenedIndices.length, 2], 'int32');
    const values = tensorFlow.tensor1d(tensorFlow.util.flatten(encodings), 'int32');
    const labels = await this.model.executeAsync({
      Placeholder_1: indices,
      Placeholder: values,
    });

    indices.dispose();
    values.dispose();

    return labels
      .map((label, index) => {
        const prediction = label.dataSync();
        const results = classifiedInputs.map((input, i) => {
          const probabilities = prediction.slice(i * 2, i * 2 + 2);
          let match = null;
          if (Math.max(probabilities[0], probabilities[1]) > this.threshold) {
            match = probabilities[0] < probabilities[1];
          }
          return { probabilities, match };
        });

        return {
          label: this.labels[index],
          results,
        };
      });
  }
}

export default ToxicityClassifier;
