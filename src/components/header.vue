<template>
  <div>
    <div v-show="HeaderShow">
      <div class="s-header">
        <div class="flex">
          <a class="s-header-a" href="index.html">
            <img src="../assets/logo.png" alt class="s-header-logo" />
          </a>
          <ul class="s-header-menu">
            <li>
              <router-link to="/" class="active">首页</router-link>
            </li>
            <li>
              <a href="/static/Login.html">登录模板</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="s-subheader">
        <ul class="flex" style="padding-inline-start: 0px;">
          <!-- <li>
            <a href="transfer/transfer.html">穿梭组件</a>
          </li>-->
          <li>
            <router-link :to="{ name: 'h5page', params: { id: 1 } }"
              >答题组件</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'h5page', params: { id: 2 } }"
              >日历组件</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'h5page', params: { id: 3 } }"
              >筛选组件</router-link
            >
          </li>
          <li>
            <router-link :to="{ name: 'pcpage', params: { id: 1 } }"
              >穿梭组件</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "webHeader",
  computed: {
    HeaderShow() {
      return this.$store.getters.CheckHeadShow;
    }
  }
};
</script>

<style lang="scss">
.s-header {
  display: flex;
  align-items: center;
  padding: 16px 30px;
  border-bottom: 1px solid #e1e2e8;
  background-color: #fff;
  position: relative;

  & .s-header-a {
    display: inline-block;
    margin-right: 20px;
  }

  & .s-header-r {
    margin-left: auto !important;

    & .s-header-avatar {
      width: 36px;
      height: 36px;
      border-radius: 50%;
    }
  }

  & .s-header-logo {
    width: 50px;
    height: 50px;
    // margin-right: 20px;
  }

  & .s-header-menu {
    display: flex;
    align-items: center;

    & li {
      list-style: none;
      margin-left: 40px;
      & a {
        color: #c8c8c8;
        &:hover {
          color: #666;
        }

        &.active {
          color: #666;
        }
      }
    }
  }
}

.s-subheader {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  box-shadow: 0 10px 60px 0 rgba(29, 29, 31, 0.09);
  background-color: #fff;
  margin-bottom: 2rem;

  & ul {
    margin: 0;
    padding-inline-start: 0px;
  }

  & li {
    list-style: none;
  }

  & li a {
    display: inline-block;
    margin: 0 15px 0 0;
    padding: 10px 4px;
    color: #b2b2b2;
    font-weight: 500;
    font-size: 12px;

    &:hover {
      color: #757575;
    }

    &.active {
      color: #757575;
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
