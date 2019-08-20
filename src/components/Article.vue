<template>
  <div class="article">
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" />
    </div>
    <div v-else>
      <div class="container clearfix">
        <div class="topic_header">
          <div class="topoc_title">
            <span
              :class="[{put_good:(post.good==true),put_top:(post.top==true),'topiclist_tab':(post.good!=true&&post.top!=true)}]"
            >
              <span>{{post |tabFormatter}}</span>
            </span>
            <a>{{post.title}}</a>
            <ul>
              <li>发布于 {{post.create_at|formatDate}}</li>
              <li>作者 {{post.author.loginname}}</li>
              <li>{{post.visit_count}}次浏览</li>
              <li>来自 {{post|tabFormatter}}</li>
            </ul>
          </div>
        </div>
        <hr />
        <!-- 正文内容  -->
        <div v-html="post.content" class="topic_content"></div>
      </div>
    </div>
    <div class="topoc_reply container">
      <div class="topbar">{{post.reply_count}} 回复</div>
      <div v-for="(reply,index) in post.replies" :key="index" id="reply">
        <router-link :to="{name:'user_Infor',params:{loginname:reply.author.loginname}}">
          <img :src="reply.author.avatar_url" alt />
          <span>{{reply.author.loginname}}</span>
        </router-link>
        <span style="color: blue">{{reply.create_at | formatDate}}</span>
        <span>{{index+1}}楼</span>
        <span v-if="reply.ups.length>0" style="float: right;">已有{{reply.ups.length}}点赞</span>
        <p v-html="reply.content"></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Article",
  data() {
    return {
      isLoading: false, //是否正在加载
      post: {} //代表当前文章页的所有内容，所有属性
    };
  },
  methods: {
    getArticleData() {
      this.$http
        .get(`https://cnodejs.org/api/v1/topic/${this.$route.params.id}`)
        .then(res => {
          {
            this.isLoading = false;
            this.post = res.data.data;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getArticleData();
  },
  watch:{
    '$route'(to,from){
       this.getArticleData()
    }
  }
};
</script>

<style scoped>
.loading {
  text-align: center;
  margin: auto 0;
}

.container {
  background-color: #fff;
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

.topic_header {
  padding: 20px 30px;
}

.topoc_title > a {
  font-size: 22px;
  font-weight: 700;
}

.topoc_title > ul > li {
  font-size: 12px;
  color: #838383;
  margin-left: 23px;
  margin-top: 8px;
  list-style: initial;
  float: left;
}

.topoc_title > ul > li:first-child {
  margin-left: 0px;
}

.topic_content {
  padding: 15px 30px;
}
.markdown-text > p > img {
  width: 100px;
}
.topoc_reply {
  margin-top: 20px;
  background-color: #fff;
}
.topbar {
  height: 20px;
  border: 1px solid #f0f0f0;
  background-color: #f6f6f6;
  padding: 5px 5px;
}
#reply,
.topic_header {
  background-color: #fff;
}

#reply {
  padding: 10px 20px;
  border-top: #f0f0f0 solid 1px;
}

#reply img {
  width: 30px;
  height: 30px;
  position: relative;
  bottom: -9px;
}

#reply a,
#reply span {
  font-size: 13px;
  color: #666;
  text-decoration: none;
}
.replySec {
  border-bottom: 1px solid #e5e5e5;
  padding: 0 10px;
}

.loading {
  text-align: center;
  padding-top: 300px;
}

.replyUp a:nth-of-type(2) {
  margin-left: 0px;
  display: inline-block;
}
#reply p {
  padding: 10px 0 0 40px;
}
.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

.article:not(:first-child) {
  margin-right: 340px;
  margin-top: 15px;
}
</style>