import MessageForm from '@/components/MessageForm/MessageForm.vue';
import Messages from '@/components/Messages/Messages.vue';

export default {
  components: {
    MessageForm,
    Messages,
  },
  data() {
    return {
      messages: [],
    };
  },
  methods: {
    onSentMessage(message) {
      this.messages.push(message);
    },
  },
};
