<template>
  <div :class="messageItemClasses">
    <div
      v-if="!isMe"
      class="message-item--avatar" />
    <div class="message-item--content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </div>
  </div>
</template>
<style lang="scss" src="./MessageItem.scss" scoped></style>
<script src="./MessageItem.js" />
