<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/" style="font-size:1.5em;">
        <el-breadcrumb-item >
          <i class="el-icon-date"></i> 公告</el-breadcrumb-item>
        <el-breadcrumb-item>最近发布</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-card class="box-card" v-for="item in notify" :key="item.id">
        <div slot="header" class="clearfix">
          <span>{{item.label}}</span>
          <div style="float:right;padding:3px 0">发布人：{{ item.username }}</div>
          
        </div>
        <div class="noty-content">
          {{item.contents}}
        </div>
        <div class="card-foot">
          <div class="noty-time">发布时间：{{ item.time }}</div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Schart from 'vue-schart'
export default {
  components: {
    Schart
  },
  data: function() {
    return {
      notify: [
        {
          id: 0,
          title: '今天不上课',
          content: '由于机房爆炸导致网络原因。。。。。。。。',
          username: '冯伟',
          time: '2017-12-12'
        },
        {
          id: 1,
          title: '今天不上课',
          content: '由于机房爆炸导致网络原因。。。。。。。。',
          username: '冯伟',
          time: '2017-12-12'
        }
      ]
    }
  },
  mounted: function() {
    console.log(45646)
    this.$store
      .dispatch('getnotice')
      .then(res => {
        this.notify = res.data.notices
      })
      .catch(e => {
        this.$message.error('错了哦，请稍后重试')
      })
  }
}
</script>

<style scoped>
.schart {
  width: 600px;
  display: inline-block;
}

.content-title {
  clear: both;
  font-weight: 400;
  line-height: 50px;
  margin: 10px 0;
  font-size: 22px;
  color: #1f2f3d;
}

.time-title {
  line-height: 30px;
  padding: 0px 0px 0px 10px;
}

.box-card {
  margin-bottom: 10px;
}

.card-foot {
  text-align: right;
}
</style>
