<template>
  <div
    :class="sendButtonClasses"
    @click="handleSubmit">
    <SendIcon class="send-message-button__icon"/>
  </div>
</template>
<style lang="scss" src="./SendMessageButton.scss" scoped></style>
<script src="./SendMessageButton.js" />
