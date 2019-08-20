<template>
  <div id="app">
    <Header></Header>
    <div class="postss clearfix">
      <router-view name="main">
        <PostList></PostList>
      </router-view>
      <router-view name="slidebar"></router-view>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import PostList from "./components/PostList";

export default {
  name: "App",
  components: {
    Header,
    PostList
  }
};
</script>

<style>
body,
ul,
ol,
li,
p,
h1,
h2,
h3,
h4,
h5,
h6,
form,
fieldset,
table,
td,
img,
div,
dl,
dt,
dd,
input {
  margin: 0;

  padding: 0;
}
aaa body {
  font-size: 12px;
}

img {
  border: none;
  max-width: 850px;
}
a {
  color: black;
}
input,
select,
textarea {
  outline: none;
}

a {
  text-decoration: none;
}

/* 清除浮动 */

.clearfix:after {
  content: "";
  display: block;
  clear: both;
}

.clearfix {
  zoom: 1;
}
ul {
  list-style: none;
}

.postss {
  background-color: #e1e1e1;
  width: 100%;
  min-width: 800px;
  padding-top: 5px;
  display: flex;
  min-height: 100vh;
  margin-top: -50px;
}
.container {
  width: 90%;
  min-width: 800px;
  margin: 0 auto;
  margin-top: 15px;
}
.main {
  width: 80%;
  margin: 0 auto;
}
</style>
