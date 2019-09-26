import SendMessageButton from '@/components/SendMessageButton/SendMessageButton.vue';

import ToxicityClassifier from '@/utils/toxicityClassifier';

export default {
  data() {
    return {
      isSending: false,
      message: '',
      toxicityClassifier: new ToxicityClassifier(),
    };
  },
  components: {
    SendMessageButton,
  },
  methods: {
    async classifyMessage() {
      const predictions = await this.toxicityClassifier.classify(this.message);
      return predictions.every(
        ({ results }) => results.every(({ match }) => !match),
      );
    },
    onKeydown(e) {
      if ((e.metaKey || e.ctrlKey) && e.keyCode === 13) {
        this.onSentMessage();
      }
    },
    async onSentMessage() {
      this.isSending = true;
      const canSendMessage = await this.classifyMessage();
      if (canSendMessage) {
        this.$emit('sentMessage', this.message);
      } else {
        // eslint-disable-next-line no-alert
        alert('This message is to rude to be sent.');
      }
      this.isSending = false;
      this.message = '';
      this.$refs.textarea.focus();
    },
    textareaResize() {
      const el = this.$refs.textarea;
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    },
  },
  async mounted() {
    await this.toxicityClassifier.load();
    await this.$nextTick();
    this.$refs.textarea.focus();
  },
};
