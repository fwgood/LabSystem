<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-edit-outline"></i> 所有成绩</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="work-doc" v-for="item in workList" v-bind:key="item.id" >
      <div>
        <div class="experTitle">课程： {{item.jobName}}</div>
        <div class="experTitle">教师： {{item.teacher}}</div>
        <div class="experTitle">成绩： {{item.finalScore}}</div>
      </div>
      <div>
      <el-table :data="item.labList" style="width: 100%" :default-sort="{prop:'date',order:'descending'}">
        <el-table-column prop="labName" label="作业" width="180"></el-table-column>
        <el-table-column prop="startTime" label="开始日期" sortable></el-table-column>
        <el-table-column prop="deadline" label="截止日期" sortable></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column prop="score" label="分数" sortable></el-table-column>
      </el-table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      workList: [
        {
          id: '999',
          jobName: 'java',
          teacher: 'Mr.hu',
          finalScore: 100,
          labList: [
            {
              id: '78',
              labName: '接口与集成',
              startTime: '2015-11-11',
              deadline: '2015-12-12',
              state: '未提交',
              score: '99'
            }
          ]
        },
        {
          id: '999',
          jobName: 'python',
          teacher: 'Mr.hu',
          finalScore: 100,
          labList: [
            {
              id: '78',
              labName: '接口与集成',
              startTime: '2015-11-11',
              deadline: '2015-12-12',
              state: '未提交',
              score: '99'
            }
          ]
        },
        {
          id: '99',
          jobName: 'python',
          teacher: 'Mr.hu',
          finalScore: 100,
          labList: [
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
      ]
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


