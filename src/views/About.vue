<template>
  <div class="about">
    <button @click="showHead">show head</button>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  created() {
    this.$store.commit("HeaderHide");
  },
  methods: {
    showHead() {
      this.$store.commit("HeaderShow");
    }
  }
};
</script>
