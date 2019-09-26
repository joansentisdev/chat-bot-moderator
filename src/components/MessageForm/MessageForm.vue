<template>
  <div class="message-form">
    <div class="message-form--wrapper">
      <div class="message-form--textarea__wrapper">
        <textarea
          placeholder="Send a message"
          class="message-form--textarea__input"
          @input="textareaResize"
          @keydown="onKeydown"
          ref="textarea"
          rows="1"
          v-model="message" />
      </div>
      <send-message-button
        :is-sending="isSending"
        :message="message"
        @sentMessage="onSentMessage" />
    </div>
  </div>
</template>
<style lang="scss" src="./MessageForm.scss" scoped></style>
<script src="./MessageForm.js" />
