export default {
  // TODO change to a computed property
  props: {
    isMe: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    messageItemClasses() {
      return [
        'message-item',
        { 'message-item--is-me': this.isMe },
      ];
    },
  },
};
