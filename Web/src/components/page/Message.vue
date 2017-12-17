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
            <strong>来源：{{item.name}} ({{item.type}})</strong>
          </div>
          <div style="padding-right:10px">
            <strong>账号：{{item.username}}</strong>
          </div>
        </div>
        <div class="head-right">
          <el-button type="primary" @click="toSend(item.id)">
            <i class="el-icon-edit"></i>
          </el-button>
        </div>
      </div>
      <div class="message-content">
        <div style="margin:20px;">
          <span v-if="item.srcContent">我：{{item.srcContent}}</span>
        </div>
        {{item.content}}
      </div>
      <div class="card-foot">
        <div class="message-time:">时间：{{item.time}}</div>
      </div>
    </el-card>
    <el-dialog :title="concreateUser.username" :visible.sync="isSend" :autosize="{ minRows: 2, maxRows: 5}" placeholder="请输入内容">
      <el-input type="textarea" v-model="textArea" auto-complete="off"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isSend = false">取 消</el-button>
        <el-button type="primary" @click="handleSend">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      concreateUser: {},
      isSend: false,
      // textarea回复消息
      textArea: '',
      message: [
        {
          id: 0,
          username: '九劫',
          account: '20151120222',
          content: '没吃呢',
          srcContent: '你吃饭了吗',
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
  },
  methods: {
    toSend(item) {
      console.log(item)
      this.isSend = true
      this.concreateUser.id = item.id
      this.concreateUser.username = item.username
    },
    handleSend() {
      console.log(this.concreateUser)
    }
  },
  created: function() {
    this.$store.dispatch('getnews').then(res => {
      let news = res.data.newes
      news.map(d => {
        if (d.type === 0) {
          d.type = '私信'
        } else if (d.type === 1) {
          d.type = '来自博客回复'
        } else {
          d.type = '来自讨论区回复'
        }
      })
      this.message = news
    })
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
