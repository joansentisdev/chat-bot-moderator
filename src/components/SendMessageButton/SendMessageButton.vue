<template>
  <div
    :class="sendButtonClasses"
    @click="onClick">
    <div
      v-if="isSending"
      class="send-message-button__loader" />
    <SendIcon
      v-else
      class="send-message-button__icon"/>
  </div>
</template>
<style lang="scss" src="./SendMessageButton.scss" scoped></style>
<script src="./SendMessageButton.js" />
