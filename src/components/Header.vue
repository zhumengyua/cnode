<template>
  <div class="header">
    <div class="container">
      <router-link :to="{name:'root'}">
        <img src="../assets/cnodejs_logo.svg" alt />
      </router-link>
      <ul>
        <li>
          <router-link :to="{name:'root'}">
            <a href="#">首页</a>
          </router-link>
        </li>
        <li>
          <a href="#">新手入门</a>
        </li>
        <li>
          <a href="#">API</a>
        </li>
        <li>
          <a href="#">关于</a>
        </li>
        <li>
          <a href="#">注册</a>
        </li>
        <li>
          <a href="#">登录</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  width: 90%;
  min-width: 800px;
  text-align: center;
  margin: 0 auto;
 color:   #ccc;
}
.header {
  background-color: #5a5555;
  height: 50px;
}
img {
  width: 150px;
  height: 50px;
  float: left;
}
ul {
  height: 50px;
  float: right;
  list-style: none;
}
ul > li {
  display: inline-block;
  line-height: 50px;
}
ul > li > a {
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  margin-left: 20px;
}
</style>