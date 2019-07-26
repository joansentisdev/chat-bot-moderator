import SendMessageButton from '@/components/SendMessageButton/SendMessageButton.vue';

export default {
  data() {
    return {
      message: '',
    };
  },
  components: {
    SendMessageButton,
  },
  methods: {
    textareaResize() {
      const el = this.$refs.textarea;
      el.style.height = 'auto';
      el.style.height = `${el.scrollHeight}px`;
    },
  },
  async mounted() {
    await this.$nextTick();
    this.$refs.textarea.focus();
  },
};
