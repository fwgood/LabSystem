<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-bell"></i> 最近博客</el-breadcrumb-item>
      </el-breadcrumb>
      <i class="el-icon-back" @click="checkAll" style="cursor:pointer;" v-if="isCheckMy"></i>
      <el-button type="text" @click="checkMy">我的博客</el-button>
    </div>
    <div class="write" style="margin-bottom:10px;">
      <div style="display:inline-block;margin-bottom:10px;">
        <el-button type="text" icon="el-icon-edit" @click="isWriteBlog = true">写点什么</el-button>
        <el-button type="text" icon="el-icon-upload2" v-if="isWriteBlog">发布</el-button>
      </div>
      <div class="writeArea" v-if="isWriteBlog">
        <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 2}" placeholder="请输入主题" v-model="blogTitle"></el-input>
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入内容" v-model="blogContent"></el-input>
      </div>
    </div>
    <div class="blogthrough">
      <el-card class="box-card" v-for="item in blogList" :key="item.id">
        <div slot="header" class="clearfix">
          <div class="head-left">
            <span style="padding-right:10px;cursor:pointer;" @click="handlelll">
              <strong>{{item.author}}</strong>
            </span>
            <span>{{item.title}}</span>
          </div>
          <div class="head-right">
            <el-button type="primary">
              <i class="el-icon-delete"></i>
            </el-button>
          </div>
        </div>
        <div v-for="it in 4" :key="it" class="text">
          博客内容: {{item.content}}
        </div>
        <img src="../../assets/test.png" alt="sorry" width="300px" style="margin-left:0%;">
        <div class="card-foot">
          <div>{{item.time}}</div>
        </div>
        <div class="answer-block">
          <!-- 回复框 -->
          <div style="display:inline-block;width:88%;">
            <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入内容" v-model="comment"></el-input>
          </div>
          <div style="display:inline-block;width:8%">
            <el-button type="text" icon="el-icon-edit" @click="handleAnswer">回复</el-button>
          </div>
        </div>
        <div class="answer" v-for="answer in item.comment" :key="answer.id" @click="handleAnswerUp(answer)">
          <div style="display:inline-block;height:60px">
            <img src="../../assets/head.jpg" alt="sorry" width="50px" style="border-radius:50%;">
            <span class="answer-name" style="line-height:60px;">{{answer.answername}}</span>
          </div>
          <div v-if="answer.upstare">
            <div class="answer-content">
              <span class="up-name">回复 {{answer.upstare.answername}}:</span>{{answer.content}}</div>
            <!-- 如果之前有回复显示upstair里面的标签 /有回复跟无回复情况-->
            <div class="upstair">
              <span class="up-content">{{answer.upstare.answername}}：{{answer.upstare.content}}</span>
            </div>
          </div>
          <div class="answer-content" v-else>{{answer.content}}</div>
        </div>
      </el-card>
    </div>
    <el-dialog title="回复" :visible.sync="isAnswer">
      <el-input v-model="answerForm.answerContent" auto-complete="off" :placeholder="concreteClickAnswer.answername"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAnswer = false">取 消</el-button>
        <el-button type="primary" @click="isAnswer = false">确 定</el-button>
      </div>
    </el-dialog>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogTitle: '',
      blogContent: '',
      comment: '',
      isCheckMy: false,
      isWriteBlog: false,
      isAnswer: false,
      concreteClickAnswer: {},
      answerForm: {
        answerId: '',
        answerContent: ''
      },
      gridData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      blogList: [
        {
          id: 0,
          account: 20151120222,
          author: '冯伟',
          title: '我是世界上最好的程序员',
          content: '一个王者带一群青铜是怎样一种体验，哈哈哈哈哈哈哈哈哈好绝望',
          blogTime: '2017-12-12',
          comment: [
            {
              id: 0,
              answername: '如果天空不死',
              time: '2012-12-15',
              content: '这是一条回复别人的回复',
              upstare: {
                answername: '账号已注销',
                content: '这是一条帖子的回复'
              }
            },
            {
              id: 1,
              answername: '大葱',
              time: '2012-12-13',
              content: '这是另一条回复别人的回复'
              // upstare: { answername: '账号已注销', content: '这是一条帖子的回复' }
            }
          ]
        }
      ]
    }
  },
  methods: {
    checkAll() {
      this.isCheckMy = false
      var allBlog = []
      this.blogList = allBlog
      console.log('请求最近的所有blog')
    },
    handlelll() {
      console.log('dddddd')
    },
    checkMy() {
      this.isCheckMy = true
      var myBlog = []
      this.blogList = myBlog
      console.log('请求我的blog')
    },
    handleAnswer() {
      console.log('回复')
    },
    handleAnswerUp(answer) {
      console.log(answer)
      this.concreteClickAnswer.answername = answer.answername
      this.concreteClickAnswer.id = answer.id
      this.isAnswer = true
    }
  }
}
</script>
<style scoped>
.blogthrough {
  margin-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif;
}

.crumbs {
  margin-top: 10px;
}

.text {
  height: 25px;
}

.head-left {
  display: inline-block;
  font-size: 1.5em;
}

.head-right {
  float: right;
  display: inline-block;
}

.card-foot {
  text-align: right;
}

.box-card {
  margin-top: 10px;
}

.answer-block {
  margin: 10px;
}

.answer {
  cursor: pointer;
  margin: 10x;
  border: 1px blanchedalmond solid;
}

.answer-name {
  font-weight: bold;
  margin-left: 10px;
  line-height: 60px;
}

.answer-content {
  margin-left: 30px;
  text-align: left;
}

.upstair {
  border: 1px blanchedalmond solid;
  padding: 10px 0px;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
