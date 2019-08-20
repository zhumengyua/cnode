基本框架：
Header 头部
PosltList 列表
Article 文章详情页
SlideBar 侧边栏
UserInfo 用户个人信息
Psgination 分页组件

PostList 组件 
Api接口：
 头像：author.avatar_uel
 回复量/浏览量 ：reply_count/visit_count
 标题：title
需要使用到过滤器 ：
时间：last_reply_at
帖子分类：top:代表是否置顶
          good:代表是否精华
          tab:是表示除了置顶和精华的其余分区
              -share 分享
              -ask 问答
              -job 招聘