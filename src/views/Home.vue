<template>
  <div class="home">
    <div class="example">
      <h1>组件分享展示</h1>
      <p class="text-center mgt10">
        <router-link :to="{ name: 'h5page', params: { id: 1 } }"
          >答题组件</router-link
        >
        <a
          href="https://github.com/Lijinghan9611/Li-ExamWidget"
          target="_blank"
          style="margin-left:20px"
          >githup</a
        >
      </p>
      <p class="text-center mgt10">
        <router-link :to="{ name: 'h5page', params: { id: 2 } }"
          >日历组件</router-link
        >
        <a
          href="https://github.com/Lijinghan9611/Li-Calendar"
          target="_blank"
          style="margin-left:20px"
          >githup</a
        >
      </p>

      <p class="text-center mgt10">
        <router-link :to="{ name: 'h5page', params: { id: 3 } }"
          >筛选组件</router-link
        >
      <a
          href="https://github.com/Lijinghan9611/li-filter"
          target="_blank"
          style="margin-left:20px"
          >githup</a
        >
        
      </p>

      <p class="text-center mgt10">
        <router-link :to="{ name: 'pcpage', params: { id: 1 } }"
          >穿梭组件</router-link
        >
      </p>
    </div>

    <div>
      <img style="width:150px;height:180px" src="../assets/pk1.gif" />

      <img style="width:150px;height:150px" src="../assets/logo.png" />
      <img style="width:180px;height:150px" src="../assets/pk2.jpg" />
      <img style="width:150px;height:150px" src="../assets/pk3.jpg" />
      <img style="width:150px;height:150px" src="../assets/pk4.jpg" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  beforeRouteUpdate(to, from, next) {
    //console.log(to);
    //console.log(from);
    next();
  },
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
    //console.log("beforeRouteEnter");
    next(vm => {
      vm.$store.commit("HeaderShow");
    });
  }
};
</script>

<style>
a {
  color: #01aaed;
}

.example {
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.09);
  border-radius: 2px;
  background-color: #fff;
  padding: 1.5rem;
  margin-bottom: 3.5rem;
}
</style>
