<template>
  <div class="conversation">
    <messages :messages="messages" />
    <message-form @sentMessage="onSentMessage" />
  </div>
</template>
<style lang="scss" src="./Conversation.scss" scoped></style>
<script src="./Conversation.js" />
