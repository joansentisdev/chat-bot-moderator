<template>
  <div class="messages">
    <div class="messages--top" />
    <message-item
      v-for="(message, index) in messages"
      :key="index"
      :message="message" />
  </div>
</template>
<style lang="scss" src="./Messages.scss" scoped></style>
<script src="./Messages.js" />
