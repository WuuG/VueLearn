<template>
  <div>
    <h2>这里有问题吗 消息的</h2>
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
        "这是来自message的消息1",
        "这是来自message的消息2",
        "这是来自message的消息3",
        "这是来自message的消息4",
        "这是来自message的消息5",
      ],
    };
  },
};
</script>

<style scoped>
</style>