<template>
  <div>
    <!-- 数据正在加载 loading -->
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" />
    </div>
    <!-- 主题列表 -->

    <div class="container clearfix" v-else>
      <div class="topbar">
        <ul>
          <li>
            <span class="click_bar">全部</span>
            <span>精华</span>
            <span>分享</span>
            <span>问答</span>
            <span>招聘</span>
          </li>
        </ul>
      </div>
      <div class="postList">
        <ul>
          <li v-for="post in posts" :key="post">
            <!-- 头像 -->
            <img class="clearfix" :src="post.author.avatar_url" alt />
            <span class="reply_count">
              <!-- 回复/浏览 -->
              <span>{{post.reply_count}}</span>
              /{{post.visit_count}}
            </span>
            <!-- 帖子类型 -->
            <span
              :class="[{put_good:(post.good==true),put_top:(post.top==true),'topiclist_tab':(post.good!=true&&post.top!=true)}]"
            >
              <span>{{post |tabFormatter}}</span>
            </span>
            <!-- 标题  params:要传递的数据-->
            <router-link :to="{name:'post_content',params:{id:post.id,name:post.author.loginname}}">
              <span class="title">{{post.title}}</span>
            </router-link>
            <!-- 最终回复时间 -->
            <span class="last_reply">{{post.last_reply_at|formatDate}}</span>
          </li>
          <li>
            <!-- 分页 、子组件给父组件传递数据-->
            <pagination @handleList="renderList"></pagination>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import pagination from "./Pagination";
export default {
  name: "postList",
  data() {
    return {
      isLoading: false,
      posts: {}, //代表页面列表数据
      postpage: 1
    };
  },
  components: {
    pagination
  },
  methods: {
    getDate() {
      this.$http
        .get("https://cnodejs.org/api/v1/topics", {
          params: {
            page: this.postpage,
            limit: 20
          }
        })
        .then(res => {
          this.isLoading = false; //加载成功,去除动画
          this.posts = res.data.data;
        })
        .catch(function(err) {
          //处理返回失败数据
          console.log(err);
        });
    },
    renderList(value) {
      this.postpage = value;
      this.getDate();
    }
  },
  beforeMount() {
    this.isLoading = true; //加载动画
    this.getDate();
  }
};
</script>

<style scoped>
.router-link {
  color: #333;
}
.loading {
  text-align: center;
  margin: auto 0;
}

.topbar {
  font-size: 15px;
  height: 40px;
  padding-top: 20px;
  color: #80bd01;
}
.topbar > ul > li {
  background-color: #f6f6f6;
}
.topbar > ul > li > span {
  margin-left: 20px;
  cursor: pointer;
}
.topbar > ul > li > span:hover {
  color: #9e78c0;
}
.click_bar {
  padding: 1px 5px;
  background-color: #80bd01;
  color: #fff;
}
ul {
  width: 100%;
}
ul > li {
  border: 1px solid #e1e1e1;
  border-bottom: none;
  width: 95%;
  margin: 0 2%;
  padding: 10px 0;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  background-color: white;
}

.postList > ul > li:hover {
  background-color: #f6f6f6;
}
.postList > ul > li:last-child {
  border-top: none;
}
.postList > ul > li:last-child:hover {
  background-color: white;
}

ul > li > img {
  width: 30px;
  margin-left: 20px;
  vertical-align: middle;
  cursor: pointer;
}
ul > li > span {
  height: 30px;
}
.reply_count {
  width: 70%;
  text-align: center;
  font-size: 10px;
  color: #333;
}
.reply_count > span {
  font-size: 15px;
  color: #9e78c0;
}
.last_reply {
  font-size: 10px;
  float: right;
  color: #778087;
  margin-right: 10px;
}
.reply_count {
  color: #9e78c0;
  font-size: 14px;
}

.put_good,
.put_top {
  background: #80bd01;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  color: #fff;
  font-size: 12px;
  margin-right: 10px;
}

.topiclist_tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}

.last_reply {
  text-align: right;
  min-width: 50px;
  display: inline-block;
  white-space: nowrap;
  float: right;
  color: #778087;
  font-size: 12px;
}

.topiclist-tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
  margin-right: 10px;
}
.title {
  cursor: pointer;
}
</style>