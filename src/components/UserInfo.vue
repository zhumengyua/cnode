<template>
  <div>
    <div class="loading" v-if="isLoading">
      <img src="../assets/loading.gif" />
    </div>

    <div v-else>
      <div class="container">
        <div class="topbar">
          主页
          <a>/</a>
        </div>
        <div class="userinfo">
          <img :src="uselist.avatar_url" alt />
          {{uselist.loginname}}
          <p>{{uselist.score}}积分</p>
          <p>{{topicCollect.length}}个话题收藏</p>
          <ul>
            <li>github：{{"http://"+uselist.githubUsername+".github.io"}}</li>
            <li>用户名：{{uselist.githubUsername}}</li>
          </ul>
          <span>注册时间{{uselist.create_at|formatDate}}</span>
        </div>
      </div>
      <div class="container">
        <div class="topbar">最近创建的话题</div>
        <!-- 创建话题列表 -->
        <div class="recent_topics">
          <ul>
            <li v-for="(recent_topics,index) in uselist.recent_topics" :key="index">
              <router-link :to="{name:'recent_topics',params:{id:recent_topics.id}}">
                <span>{{recent_topics.title}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="topbar">最近参与的话题</div>
        <!-- 创建话题列表 -->
        <div class="recent_topics">
          <ul>
            <li v-for="(recent_replies,index) in uselist.recent_replies" :key="index">
              <router-link :to="{name:'recent_replies',params:{id:recent_replies.id}}">
                <span>{{recent_replies.title}}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Userinfo",
  data() {
    return {
      isLoading: false,
      uselist: [], //存放用户信息
      topicCollect: []
    };
  },
  methods: {
    getUserinfoDate() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.loginname}`)
        .then(res => {
          this.uselist = res.data.data;
          this.isLoading = false;
        })
        .catch(function(err) {
          console.log("err");
        });
    },
    gettopicCollect() {
      this.$http
        .get(
          `https://cnodejs.org/api/v1/topic_collect/${this.$route.params.loginname}`
        )
        .then(res => {
          this.topicCollect = res.data.data;
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.isLoading = true;
    this.getUserinfoDate();
    this.gettopicCollect();
  }
};
</script>

<style scoped>
.container {
  background-color: white;
  font-size: 10px;
}
.topbar {
  height: 20px;
  border: 1px solid #f0f0f0;
  background-color: #f6f6f6;
  padding: 5px 10px;
  color: #80bd01;
  font-size: 15px;
}
.topbar > a {
  color: #999;
}
.userinfo {
  margin: 10px 20px;
  vertical-align: middle;
  color: #778087;
}
.userinfo > img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
}
.userinfo > p {
  margin-top: 5px;
}

.recent_topics > ul {
  width: 100%;
}
.recent_topics > ul > li {
  border: 1px solid #e1e1e1;
  border-right: none;
  border-left: none;
  border-bottom: none;
  width: 98%;
  padding: 10px 0;
  margin-left: 2%;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  background-color: white;
}
</style>