<template>
  <div class="s-footer">
    <ul>
      <li>design by li</li>
      <li>Version: v1.0</li>
      <li>Last Update:2020-4-14</li>
    </ul>
    <ul>
      <li>
        <a href="http://www.beian.miit.gov.cn/" target="_blank"
          >粤ICP备20025851号-1</a
        >
      </li>
    </ul>
  </div>
</template>

<style lang="scss">
.s-footer {
  margin: 10px 0;
}

.s-footer ul {
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}

.s-footer div {
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  text-align: center;
}

.s-footer a {
  color: #01aaed !important;
}

.s-footer ul li {
  margin-right: 30px;
  font-size: 12px;
  font-family: Langdon;
  list-style: none;
  display: list-item;
  text-align: -webkit-match-parent;
}
</style>
