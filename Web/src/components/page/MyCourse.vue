<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-tickets"></i> {{courseInfo.courseName}}</el-breadcrumb-item>
          <div @click="toCompile" style="font-size:1.5em;text-align:right;cursor:pointer;">在线编译</div>
      </el-breadcrumb>
    </div>
    <div>
      <el-card class="box-card" v-for="item in labList" :key="item.id">
        <div slot="header" class="clearfix">
          <span class="header-title">实验名称：{{item.labName}}</span>
          <span class="header-title" style="font-size:0.8em">{{item.time}}至{{item.deadline}}</span>
          <span class="header-title">状态：{{item.state}}</span>
          <el-button v-if="item.state !=='已提交'" style="float: right; padding: 3px 0" type="text" @click="handleGetScore">请求评分</el-button>
        </div>
        <div>备注：{{item.remark}}</div>
        <div class="lab-body">
          <el-row>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <div class="body-title">附件下载</div>
                <div class="download" v-for="dow in item.downLoad" :key="dow.name">
                  <i class="el-icon-download"></i>
                  <a :href="dow.url"> {{dow.name}}</a>
                </div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple-light">
                <div class="body-title">资源上传</div>
                <div class="done" v-if="item.state ==='已提交'" style="text-align:center;line-height:30px;">
                  <i class="el-icon-download"></i>
                  <a :href="item.file.url">{{item.file.name}}</a>
                </div>
                <el-upload v-else class="upload-demo" action="" :on-preview="handlePreview" :on-remove="handleRemove"
                  multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList" style="text-align:center;">
                  <el-button style="margin-top:10px;" type="primary">点击上传</el-button>
                </el-upload>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple" style="color:red;font-weight:boild">
                <div class="body-title">评分</div>
                <div class="score">本次实验得分：{{item.score}}/100</div>
                <div>评分人：{{item.teacher}}</div>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="card-foot">
          <el-button type="text" icon="el-icon-more-outline" v-if="isLaunch" @click="isLaunch=false">讨论</el-button>
          <el-button type="text" icon="el-icon-more" @click="handleLaunchMore(item)" v-else>讨论</el-button>
        </div>
        <div v-if="isLaunch">
          <div class="answer-block">
            <!-- 回复框 -->
            <div style="display:inline-block;width:88%;">
              <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入内容" v-model="inputComment"></el-input>
            </div>
            <div style="display:inline-block;width:8%">
              <el-button type="text" icon="el-icon-edit" @click="handleAnswer">发表看法</el-button>
            </div>
          </div>
          <div class="answer" v-for="answer in item.comment" :key="answer.id" @click="handleAnswerUp(answer)">
            <div style="display:inline-block;height:60px">
              <img src="../../assets/head.jpg" alt="sorry" width="50px" style="border-radius:50%;">
              <span class="answer-name" style="line-height:60px;">{{answer.answername}}</span>
            </div>
            <div v-if="answer.upstare">
              <div class="answer-content">
                <span class="up-name">回复 {{answer.upstare.answername}}:</span><span >{{answer.content}}</span></div>
              <!-- 如果之前有回复显示upstair里面的标签 /有回复跟无回复情况-->
              <div class="upstair">
                <span class="up-content">{{answer.upstare.answername}}：{{answer.upstare.content}}</span>
              </div>
            </div>
            <div class="answer-content" v-else>{{answer.content}}</div>
          </div>
        </div>
      </el-card>
    </div>
    <el-dialog title="提示" :visible.sync="isSure" width="30%">
      <span>请求评分后不可修改</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="isSure = false">算了</el-button>
        <el-button type="primary" @click="isSure = false">确 定</el-button>
      </span>
    </el-dialog>
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
      isSure: false,
      isLaunch: false,
      isAnswer: false,
      concreateLab: {},
      concreteClickAnswer: {},
      inputComment: '',
      fileList: [],
      courseInfo: {
        courseName: 'java实验',
        teacher: 'Mr Bao'
      },
      answerForm: {
        answerId: '',
        answerContent: ''
      },
      labList: [
        {
          id: '1',
          labName: 'java实验一，输入流输出流',
          time: '2017-12-01',
          remark: '这是备注',
          state: '已提交',
          deadline: '2017-12-12',
          downLoad: [{ name: '指导书1', url: '' }, { name: '指导书2', url: '' }],
          score: '90',
          teacher: '保命',
          file: { name: '提交的报告', url: '' },
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
        },
        {
          id: '2',
          labName: 'java实验一，输入流输出流',
          time: '2017-12-01',
          remark: '这是备注',
          state: '未提交',
          deadline: '2017-12-12',
          downLoad: [{ name: '指导书1', url: '' }, { name: '指导书2', url: '' }],
          score: '90',
          teacher: '保命',
          file: { name: '提交的报告', url: '' }
        }
      ]
    }
  },
  created() {
    this.courseInfo.courseName = this.$route.params.name
    console.log(this.$route)
  },
  methods: {
    handleLaunchMore(item) {
      console.log(item)
      this.isLaunch = true
    },
    handleGetScore() {
      this.isSure = true
    },
    handleAnswer() {
      console.log('回复')
    },
    handleAnswerUp(answer) {
      console.log(answer)
      this.concreteClickAnswer.answername = answer.answername
      this.concreteClickAnswer.id = answer.id
      this.isAnswer = true
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
      console.log('移除')
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length +
          fileList.length} 个文件`
      )
    },
    toCompile() {
      this.$router.push({ path: '/onlineCompile' })
    }
  }
}
</script>
<style scoped>
.card-foot {
  text-align: right;
}
.header-title {
  margin-right: 20px;
}
.box-card {
  margin: 10px;
}

.body-title {
  text-align: center;
}

.bg-purple {
  text-align: center;
  line-height: 30px;
}
.answer-block {
  margin: 10px;
}

.answer {
  cursor: pointer;
  margin: 10x;
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
  padding: 10px 0px;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
