import ToxicityClassifier from '@/utils/toxicityClassifier';

import SendIcon from '@/assets/icons/send.svg';

export default {
  props: {
    message: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      toxicityClassifier: new ToxicityClassifier(),
    };
  },
  components: {
    SendIcon,
  },
  computed: {
    sendButtonClasses() {
      return [
        'send-message-button',
        { 'send-message-button--visible': this.message },
      ];
    },
  },
  methods: {
    async classifyMessage() {
      const predictions = await this.toxicityClassifier.classify(this.message);
      const canSendMessage = predictions.every(({ results }) => results.every(({ match }) => !match));
      console.log(canSendMessage);
    },
    async handleSubmit() {
      await this.classifyMessage();
    },
  },
  async mounted() {
    await this.toxicityClassifier.load();
  },
};
