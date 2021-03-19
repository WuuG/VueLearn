<template>
  <div>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        "这是来自news的消息1",
        "这是来自news的消息2",
        "这是来自news的消息3",
        "这是来自news的消息4",
        "这是来自news的消息5",
      ],
    };
  },
};
</script>

<style scoped>
</style>