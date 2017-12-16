<template>
  <!-- 这是我的博客 -->
  <div class="my-forum">
    这是我的博客
    <el-card class="box-card" v-for="item in myforumList" :key="item.id">
      <div slot="header" class="clearfix">
        <span>{{item.username}}</span>
        <div class="title">{{item.title}}</div>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <span style="font-size: 0.8em;">标签：
        <span v-for="it in item.tag" class="tag">{{it}}</span>
      </span>
      <div style="margin-bottom:10px;">{{item.content}}</div>
      <img src="../../assets/test.png" alt="sorry" width="300px" style="margin-left:0%;">
      <div class="card-foot">
        <div class="noty-time">发布时间：{{ item.time }}</div>
      </div>
      <div class="answer">
        <div style="display:inline-block;height:60px">
          <img src="../../assets/head.jpg" alt="sorry" width="50px" style="border-radius:50%;">
          <span class="answer-name" style="line-height:60px;">冯伟</span>
        </div>
        <div class="answer-content">你说的对</div>
        <!-- 如果之前有回复显示upstair里面的标签 -->
        <div class="upstair">
          <span class="up-name">回复 九劫:</span>
          <span class="up-content">你说的不对</span>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      myforumList: [
        {
          id: 0,
          title: '关于c语言指针问题',
          tag: ['c语言', '指针'],
          content: '野指针，指针异常，内存泄漏如上图',
          username: '冯伟',
          time: '2012-12-12'
        },
        {
          id: 1,
          title: '关于c语言指针问题',
          tag: ['c语言', '指针'],
          content: '野指针，指针异常，内存泄漏',
          username: '冯伟',
          time: '2012-12-12'
        },
        {
          id: 2,
          title: '关于c语言指针问题',
          tag: ['c语言', '指针'],
          content: '野指针，指针异常，内存泄漏',
          username: '冯伟',
          time: '2012-12-12'
        }
      ]
    }
  }
}
</script>
<style scoped>

</style>
