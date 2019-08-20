<template>
  <div class="autherinfo">
    <div class="container"></div>
    <div class="authersummay">
      <div class="topbar">作者</div>
      <router-link :to="{name:'user_Infor',params:{loginname:uselnfo.loginname}}">
        <img :src="uselnfo.avatar_url" alt />
        <span>{{uselnfo.loginname}}</span>
      </router-link>
    </div>
    <div class="recent_topics">
      <div class="topbar">最近创建</div>
      <ul v-for="(top_item,index) in topcilimtopcilimitby5" :key="index">
        <li>
          <router-link
            :to="{name:'post_content',params:{id:top_item.id,name:top_item.author.loginname}}"
          >{{top_item.title}}</router-link>
        </li>
      </ul>
    </div>
    <div class="recent_replies">
      <div class="topbar">最近回复</div>
      <ul v-for="(rep_item,index) in repcilimtopcilimitby5" :key="index">
        <router-link
          :to="{name:'post_content',params:{id:rep_item.id,name:rep_item.author.loginname}}"
        >
          <li>{{rep_item.title}}</li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Userinfo",
  data() {
    return {
      isLoading: false,
      uselnfo: [] //存放用户信息
    };
  },
  methods: {
    getUserinfoDate() {
      this.$http
        .get(`https://cnodejs.org/api/v1/user/${this.$route.params.name}`)
        .then(res => {
          this.uselnfo = res.data.data;
          this.isLoading = false;
        })
        .catch(function(err) {
          console.log("err");
        });
    }
  },
  computed: {
    topcilimtopcilimitby5() {
      if (this.uselnfo.recent_topics) {
        return this.uselnfo.recent_topics.slice(0, 5);
      }
    },
    repcilimtopcilimitby5() {
      if (this.uselnfo.recent_replies) {
        return this.uselnfo.recent_replies.slice(0, 5);
      }
    }
  },
  beforeMount() {
    this.isLoading = true; //加载动画
    this.getUserinfoDate();
  }
};
</script>

<style scoped>
.authersummay,
.recent_replies,
.recent_topics {
  background-color: #fff;
}
.autherinfo {
  width: 328px;
  float: right;
  margin-top: 0;
  margin-right: 30px;
}
li {
  padding: 3px 0;
}
.recent_replies ul,
.recent_topics ul {
  margin-top: 0px;
  margin-bottom: 0px;
  list-style: none;
  padding-left: 14px;
  font-size: 12px;
}

ul a {
  font-size: 12px;
  text-decoration: none;
  color: #778087;
}

.topbar {
  padding: 10px;
  background-color: #f6f6f6;
  height: 16px;
  font-size: 12px;
  margin-top: 10px;
}

img {
  height: 48px;
  width: 48px;
  border-radius: 3px;
  margin: 10px;
}

.loginname {
  width: 100px;
  float: right;
  margin-top: 22px;
  margin-right: 159px;
  font-size: 14px;
}

.loginname a {
  text-decoration: none;
  color: #778087;
}

.authersummay .topbar {
  margin-top: 0px;
}
</style>