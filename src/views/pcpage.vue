<template>
  <div>
    <div>
      <iframe class="pc-viwer" scrolling="no" :src="currentPage"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      timer: "",
      QRCodeUrl: "",
      currentPage: "/static/transfer/transfer.html",
      PageList: ["/static/transfer/transfer.html"]
    };
  },
  created() {
    //this.$store.commit("HeaderHide");
    const params = this.$route.params;

    if (params.id == 1) {
      this.currentPage = this.PageList[0];
    } else if (params.id == 2) {
      this.currentPage = this.PageList[1];
    }
  },
  methods: {
    showHead() {
      this.$store.commit("HeaderShow");
    }
  }
};
</script>

<style lang="scss">
.pc-viwer {
  width: 100%;
  min-height: 600px;
  border: 0;
  padding: 0;
  background-color: white;
  overflow: scroll;
}
</style>
