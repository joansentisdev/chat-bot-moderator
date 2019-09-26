import MessageItem from '@/components/MessageItem/MessageItem.vue';

export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    MessageItem,
  },
};
