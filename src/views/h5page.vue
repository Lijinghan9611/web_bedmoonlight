<template>
  <div>
    <div class="goback">
      <router-link to="/">返回首页</router-link>
    </div>
    <div class="wrapper">
      <img id="qrcode" class="barcode-image" :src="QRCodeUrl" alt="二维码" />
      <div class="list">
        <p class="list-cell">请使用手机浏览器，扫描上方二维码预览。</p>
        <p class="list-cell">
          PC浏览器，请打开控制台并切换至手机模式后并再次刷新浏览。
        </p>
        <p class="list-cell">页面样式借鉴hbuilder，具体样式以F12显示的为准。</p>
      </div>
    </div>
    <div class="h5-bg-phone">
      <div class="h5-viwer-box">
        <div class="h5-head-bar">
          <div class="h5-header-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="12">
              <path
                d="M1.25 6.5h1a1 1 0 0 1 1 1V10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V7.5a1 1 0 0 1 1-1zM5.75 5h1a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm4.5-2h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm4.5-2h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div class="h5-header-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="12">
              <path
                d="M8.007 2.787a8.64 8.64 0 0 1 5.953 2.379c.12.118.314.116.433-.004l1.156-1.166a.322.322 0 0 0-.003-.456 10.897 10.897 0 0 0-15.08 0 .322.322 0 0 0-.003.456L1.62 5.162c.119.12.312.122.433.004a8.641 8.641 0 0 1 5.954-2.379zm0 3.796c1.217 0 2.391.452 3.294 1.27a.31.31 0 0 0 .433-.006l1.155-1.167a.322.322 0 0 0-.005-.459 7.16 7.16 0 0 0-9.752 0 .322.322 0 0 0-.005.46l1.155 1.166a.31.31 0 0 0 .433.006 4.907 4.907 0 0 1 3.292-1.27zm2.219 2.784a.314.314 0 0 0-.01-.457 3.422 3.422 0 0 0-4.42 0 .314.314 0 0 0-.009.457l1.998 2.016a.312.312 0 0 0 .443 0l1.998-2.016z"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <div style="flex-grow:1"></div>
          <div class="h5-header-item">12:00</div>
          <div class="h5-header-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="12">
              <path
                d="M2.667 1.333C1.747 1.333 1 2.08 1 3v6c0 .92.746 1.667 1.667 1.667h16.666C20.253 10.667 21 9.92 21 9V3c0-.92-.746-1.667-1.667-1.667H2.667zm0-1h16.666A2.667 2.667 0 0 1 22 3v6a2.667 2.667 0 0 1-2.667 2.667H2.667A2.667 2.667 0 0 1 0 9V3A2.667 2.667 0 0 1 2.667.333z"
                opacity=".35"
              />
              <path d="M23 4v4a2.17 2.17 0 0 0 0-4" opacity=".4" />
              <rect x="2" y="2.333" width="18" height="7.333" rx="1.333" />
            </svg>
          </div>
        </div>
        <iframe
          id="h5-viwer"
          class="h5-viwer"
          scrolling="no"
          :src="currentPage"
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";

export default {
  data() {
    return {
      timer: "",
      QRCodeUrl: "",
      currentPage: "/static/exam/index.html",
      PageList: [
        "/static/exam/index.html",
        "/static/calendar/index.html",
        "/static/filter/index.html"
      ]
    };
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    //console.log("beforeRouteLeave");
    window.removeEventListener("resize", this.resizeFun);
    next();
  },
  created() {
    //console.log("page created");
    this.$store.commit("HeaderHide");
    const params = this.$route.params;

    //console.log(params);

    if (params.id == 1) {
      this.currentPage = this.PageList[0];
    } else if (params.id == 2) {
      this.currentPage = this.PageList[1];
    } else if (params.id == 3) {
      this.currentPage = this.PageList[2];
    }

    QRCode.toDataURL(
      window.location.href,
      function(err, url) {
        this.QRCodeUrl = url;
      }.bind(this)
    );

    this.redirectToLaunch();

    window.addEventListener("resize", this.resizeFun);
  },
  methods: {
    showHead() {
      this.$store.commit("HeaderShow");
    },
    resizeFun() {
      this.timer && clearTimeout(this.timer);
      this.timer = setTimeout(
        function() {
          this.redirectToLaunch();
        }.bind(this),
        500
      );
    },
    redirectToLaunch() {
      if (document.documentElement.clientWidth <= 1024) {
        location.href = this.currentPage;
      }
    }
  }
};
</script>

<style lang="scss">
.wrapper {
  width: 500px;
  height: 500px;
  margin-top: 6%;
  margin-left: 5%;
  text-align: center;
}

.barcode-image {
  display: inline-block;
  vertical-align: middle;
  width: 200px;
  height: 200px;
}

.list {
  width: 500px;
}

.h5-bg-phone {
  position: absolute;
  width: 50vh;
  height: 92vh;
  right: 100px;
  top: 5vh;
  background-image: url("../assets/iphone_xs_max.png");
  background-repeat: no-repeat;
  background-position: 10px 10px;
  background-size: 95% 95%;
}

.h5-viwer-box {
  width: 82%;
  height: 90%;
  position: relative;
  top: 4%;
  left: 9%;
}

.h5-viwer {
  width: 100%;
  height: 96%;
  border: 0;
  padding: 0;
  background-color: white;
  overflow: scroll;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
}

.h5-head-bar {
  display: flex;
  font-size: 14px;
  justify-content: center;

  & .h5-header-item {
    align-self: flex-end;
  }
}

.h5-copy-link {
  position: absolute;
  width: 45vh;
  height: 40px;
  right: 50px;
  bottom: 4vh;
  text-align: center;
}

#copy-link-btn {
  display: inline-block;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  border-radius: 6px;
  color: white;
  font-size: 16px;
  cursor: pointer;
  user-select: none;
  -ms-user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  background-color: #42b983;
}

#copy-link-btn:active {
  opacity: 0.7;
}

#copy-link-tooltip {
  position: absolute;
  width: 100px;
  height: 30px;
  left: 50%;
  top: 5px;
  margin-left: 120px;
  line-height: 30px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 6px;
  opacity: 0;
  transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -webkit-transition: all 0.3s ease;
}

#copy-link-tooltip:after {
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  right: 100%;
  top: 50%;
  margin-top: -8px;
  border: solid 8px transparent;
  border-right: solid 8px rgba(0, 0, 0, 0.5);
}

#copy-link-tooltip.show {
  opacity: 1;
  transform: translateX(-50px);
  -ms-transform: translateX(-50px);
  -moz-transform: translateX(-50px);
  -webkit-transform: translateX(-50px);
}

.goback {
  text-align: left;
}
</style>
