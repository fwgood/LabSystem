<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-message"></i> 最近消息</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-card class="box-card" v-for="item in message" :key="item.id">
      <div slot="header" class="clearfix">
        <div class="head-left">
          <div style="padding-right:10px">
            <strong>来源：{{item.username}}</strong>
          </div>
          <div style="padding-right:10px">
            <strong>账号：{{item.account}}</strong>
          </div>
        </div>
        <div class="head-right">
          <el-button type="primary">
            <i class="el-icon-edit"></i>
          </el-button>
        </div>
      </div>
      <div class="message-content">
        {{item.content}}
      </div>
      <div class="card-foot">
        <div class="message-time:">时间：{{item.time}}</div>
      </div>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      message: [
        {
          id: 0,
          username: '九劫',
          account: '20151120222',
          content: '下面，就来看看Flex如何实现，从1个点到9个点的布局。你可以到codepen查看Demo。',
          time: '2012-12-12'
        },
        {
          id: 1,
          username: '九劫',
          account: '20151120222',
          content: '下面，就来看看Flex如何实现，从1个点到9个点的布局。你可以到codepen查看Demo。',
          time: '2012-12-12'
        },
        {
          id: 2,
          username: '九劫',
          account: '20151120222',
          content: '下面，就来看看Flex如何实现，从1个点到9个点的布局。你可以到codepen查看Demo。',
          time: '2012-12-12'
        }
      ]
    }
  }
}
</script>

<style scoped>
.crumbs {
  margin-top: 10px;
}

.personal-info {
  line-height: 30px;
  margin-left: 20px;
}
.box-card {
  margin-bottom: 10px;
}
.card-foot {
  text-align: right;
}
.head-left {
  display: inline-block;
}

.head-right {
  float: right;
  display: inline-block;
}
</style>
