<template>
  <div id="app">
    <webHeader />
    <transition>
      <router-view />
    </transition>
    <webFooter />
  </div>
</template>

<script>
import webHeader from "@/components/header.vue";
import webFooter from "@/components/footer.vue";

export default {
  components: {
    webHeader,
    webFooter
  },
  mounted() {
    document.write(unescape("%3Cspan id='cnzz_stat_icon_1278817062'%3E%3C/span%3E%3Cscript src='https://s9.cnzz.com/z_stat.php%3Fid%3D1278817062%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));
    //console.log("loaded");
  },
  // 监听,当路由发生变化的时候执行
  watch: {
    //$route(to, from) {
    // if (
    //   to.path == "/about"
    // ) {  //隐藏头部的路由
    //   this.$store.commit("HeaderHide");
    // } else {
    //   this.$store.commit("HeaderShow");
    // }
    //}
  }
};
</script>

<style lang="scss">
@import "./assets/css/common.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.example {
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.09);
  border-radius: 2px;
  background-color: #fff;
  padding: 1.5rem;
  margin-bottom: 3.5rem;
}

.flex {
  display: flex;
}
</style>
