<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/" style="font-size:1.5em;">
        <el-breadcrumb-item>
          <i class="el-icon-date"></i> 最近话题</el-breadcrumb-item>
      </el-breadcrumb>
      <i class="el-icon-back" @click="isCheckMy = false" style="cursor:pointer;" v-if="isCheckMy"></i>
      <el-button type="text" @click="isCheckMy = true">我的帖子</el-button>
    </div>
    <div class="write" style="margin-bottom:10px;">
      <div style="display:inline-block;margin-bottom:10px;">
        <el-button type="text" icon="el-icon-edit" @click="isWrite = true">写点什么</el-button>
        <el-button type="text" icon="el-icon-upload2" v-if="isWrite">发布</el-button>
      </div>
      <div class="writeArea" v-if="isWrite">
        <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 10}" placeholder="请输入内容" v-model="textarea">
        </el-input>
      </div>
    </div>
    <myforum v-if="isCheckMy === true"></myforum>
    <div v-else>
      <div v-for="item in forums" :key="item.id">
        <el-card class="box-card">
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
            <div class="noty-source">发布人：{{ item.username }}</div>
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
    </div>
  </div>
</template>
<script>
import myforum from './MyForum'
export default {
  components: {
    myforum
  },
  data() {
    return {
      textarea: '',
      isWrite: false,
      isCheckMy: false,
      forums: [
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
  },
  methods: {
    handle() {
      console.log('you clisk')
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
.answer {
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
  padding: 10px 0px;
  margin-left: 100px;
  margin-right: 100px;
}
</style>
