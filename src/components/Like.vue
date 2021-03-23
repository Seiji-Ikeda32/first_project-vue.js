<template>
  <div>
    <p>Like!({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: ["totalNumber"],
  computed: {
    halfNumber() {
      return this.totalNumber / 2;
    }
  },
  methods: {
    increment() {
      this.$emit("plus-one-click", this.totalNumber + 1);
    }
  }
};
</script>

<style scoped>
  div {
    border: 1px solid red
  }
</style>