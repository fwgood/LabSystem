<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/" style="font-size:1.5em;">
        <el-breadcrumb-item>
          <i class="el-icon-tickets"></i> 最近话题</el-breadcrumb-item>
      </el-breadcrumb>
      <i class="el-icon-back" @click="checkAll" style="cursor:pointer;" v-if="isCheckMy"></i>
      <el-button type="text" @click="checkMy">我的帖子</el-button>
    </div>
    <!-- 编辑帖子发布 -->
    <div class="write" style="margin-bottom:10px;">
      <div style="display:inline-block;margin-bottom:10px;">
        <el-button type="text" icon="el-icon-edit" @click="isWrite = true">写点什么</el-button>
        <el-button type="text" icon="el-icon-upload2" v-if="isWrite">发布</el-button>
      </div>
      <div class="writeArea" v-if="isWrite">
        <el-input type="textarea" :autosize="{ minRows: 1, maxRows: 2}" placeholder="请输入主题" v-model="textTitle"></el-input>
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入内容" v-model="textContent"></el-input>
      </div>
    </div>
      <div v-for="item in forums" :key="item.id">
        <el-card class="box-card">
          <div slot="header" class="clearfix" style="font-size:1.5em">
            <span style="padding-right:10px;cursor:pointer;" @click="handlelll">
              <strong>{{item.username}}</strong>
            </span>
            <span>{{item.title}}</span>
            <!-- <span>{{item.username}}</span>
            <div class="title">{{item.title}}</div> -->
            <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
          </div>
          <span style="font-size: 0.8em;">标签：
            <span v-for="it in item.tag" class="tag">{{it}}</span>
          </span>
          <div style="margin-bottom:10px;">{{item.content}}</div>
          <img src="../../assets/test.png" alt="sorry" width="300px" style="margin-left:0%;">
          <div class="card-foot">
            <div class="noty-source">发布人：{{ item.username }}</div>
            <div class="noty-time">发布时间：{{ item.time }}</div>
          </div>
          <div class="answer-block">
            <!-- 回复框 -->
            <div style="display:inline-block;width:88%;">
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入内容" v-model="answerText"></el-input>
            </div>
            <div style="display:inline-block;width:8%">
              <el-button type="text" icon="el-icon-edit" @click="handleAnswer">回复</el-button>
            </div>
          </div>
          <div class="answer" v-for="answer in item.answerList" :key="answer.id" @click="handleAnswerUp(answer)">
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
      textTitle: '',
      textContent: '',
      // 回复内容变量
      answerText: '',
      isWrite: false,
      isCheckMy: false,
      isAnswer: false,
      //  当前点击的回复对象
      concreteClickAnswer: {},
      // 回复别人的回复表单,answerId:被回复的id，answerContent：回复的内容
      answerForm: {
        answerId: '',
        answerContent: ''
      },
      forums: [
        {
          id: 0,
          title: '关于c语言指针问题',
          tag: ['c语言', '指针'],
          content: '野指针，指针异常，内存泄漏如上图',
          username: '冯伟',
          time: '2012-12-12',
          // 评论列表 ，直接回复帖子则upstare为空，回复别人的回复则显示upstare内容
          answerList: [
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
              id: 2,
              answername: '大葱',
              time: '2012-12-13',
              content: '这是另一条回复别人的回复'
              // upstare: { answername: '账号已注销', content: '这是一条帖子的回复' }
            }
          ]
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
  },
  methods: {
    handle() {
      console.log('you clisk')
    },
    // 回复帖子
    handleAnswer() {
      console.log('回复')
    },
    handleAnswerUp(answer) {
      console.log(answer)
      this.concreteClickAnswer.answername = answer.answername
      this.concreteClickAnswer.id = answer.id
      this.isAnswer = true
    },
    checkAll() {
      this.isCheckMy = false
      var AllForum = []
      this.forums = AllForum
      console.log('向服务器请求所有的帖子')
    },
    checkMy() {
      this.isCheckMy = true
      var myForum = []
      this.forums = myForum
      console.log('向服务器请求我的帖子')
    }
  }
}
</script>
<style>
.card-foot {
  text-align: right;
}

.box-card {
  margin-bottom: 10px;
}

.tag {
  margin-right: 10px;
  line-height: 30px;
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
