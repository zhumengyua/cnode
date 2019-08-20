import Vue from 'vue'
import Router from 'vue-router'
import Article from '../components/Article'
import PostList from '../components/PostList'
import UserInfo from '../components/UserInfo'
import slidebar from '../components/SlideBar'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name:'root',
      path:'/',
      components:{
        main:PostList,
      }
    },
   {
     name:'post_content',
     path:'/topic/:id&author=:name',
     components:{
       main:Article,
       slidebar
     }
   },
   {
    name:'user_Infor',
    path:'/user/:loginname',
    components:{
      main:UserInfo
    }
  },
  {
    name:'reply_counts',
    path:'/user/:post_reply',
    components:{
      main:UserInfo
    }
  },
  {
    name:'recent_topics',
    path:'/topic/:id&author=:name',
    components:{
      main:  slidebar,
      Article,
    
    }
  },
  {
    name:'recent_replies',
    path:'/topic/:id',
    components:{
      main:Article
    }
  },
  ]
})
