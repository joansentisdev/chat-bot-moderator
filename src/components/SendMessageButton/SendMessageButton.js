import SendIcon from '@/assets/icons/send.svg';

export default {
  props: {
    isSending: {
      type: Boolean,
      default: false,
    },
    message: {
      type: String,
      default: null,
    },
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
    async onClick() {
      this.$emit('sentMessage', this.message);
    },
  },
};
