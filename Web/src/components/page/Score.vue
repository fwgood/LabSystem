<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-edit-outline"></i> 所有成绩</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-tabs v-model="activeTab" type="border-card" @tab-click="chooseTab">
        <el-tab-pane v-for="item in courseList" :key="item.courseId" :label="item.courseName" :name="item.courseId">
          <span style="margin-right:30px;"><strong>课程：{{item.courseName}}</strong></span>
          <span style="margin-right:30px;"><strong>教师：{{item.teacher}}</strong></span>
          <span style="margin-right:30px;"><strong>总分{{item.finalScore}}</strong></span>
          <el-table :data="labList" style="width: 100%" :default-sort="{prop:'date',order:'descending'}">
        <el-table-column prop="labName" label="作业" width="180"></el-table-column>
        <el-table-column prop="startTime" label="开始日期" sortable></el-table-column>
        <el-table-column prop="deadline" label="截止日期" sortable></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="score" label="分数" sortable></el-table-column>
      </el-table>
        </el-tab-pane>
      </el-tabs>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: '',
      courseList: [
        {
          courseId: '214332',
          courseName: 'python',
          teacher: 'Mr.hu',
          finalScore: 100
        },
        {
          courseId: '34534',
          courseName: 'java',
          teacher: 'Mr.hu',
          finalScore: 100
        }
      ],
      labList: [
        {
          id: '78',
          labName: '接口与集成',
          startTime: '2015-11-11',
          deadline: '2015-12-12',
          state: '未提交',
          score: '99'
        },
        {
          id: '78',
          labName: '接口与集成',
          startTime: '2015-11-11',
          deadline: '2015-12-12',
          state: '未提交',
          score: '99'
        }
      ]
    }
  },
  methods: {
    chooseTab(tab, event) {
      console.log(tab.name)
      //   加载不同课
    }
  }
}
</script>
<style scoped>
.experTitle {
  font-family: 'Helvetica Neue', Helvetica, 'microsoft yahei', arial, STHeiTi,
    sans-serif;
  font-size: 1.5em;
  color: #97a8be;
  width: 30%;
  display: inline-block;
}
.work-doc {
  margin-bottom: 20px;
}
</style>


