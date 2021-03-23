<template>
  <div>
    <like-header>
      <template v-slot:title>
        <h1>トータルのいいね数</h1>
      </template>
      <template v-slot:likeNumber>
        <h2>{{ number }}</h2>
      </template>
    </like-header>
    <Like :total-number="number" v-on:plus-one-click="number = $event"></Like>
    <Like :total-number="number"></Like>
  </div>
</template>

<script>
import LikeHeader from "./components/LikeHeader.vue";

export default {
  data() {
    return {
      number: 10
    };
  },
  components: {
    LikeHeader
  }
};
</script>

<style>

</style>
