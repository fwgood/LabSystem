<template>
  <div class="my-lab">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-message"></i> 我的课程</el-breadcrumb-item>
        <div class="el-icon-circle-plus" @click="toAddCourse" style="font-size:1.5em;text-align:right;cursor:pointer;">申请加课</div>
      </el-breadcrumb>
    </div>

    <div v-for="item in myCourse" :key="item.id" style="margin-bottom:20px;">
        <div class="course-name">{{item.courseName}}</div>
        <el-table :data="item.labList" style="width: 100%" :default-sort="{prop:'date',order:'descending'}" @row-click="lookDetail">
        <el-table-column prop="jobName" label="作业" width="180"></el-table-column>
        <el-table-column prop="startTime" label="开始日期" sortable></el-table-column>
        <el-table-column prop="deadline" label="截止日期" sortable></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
      </el-table>
    </div>
    <el-dialog title="请填写申请信息" :visible.sync="isAdd">
      <el-form :model="addCourseForm">
        <el-form-item label="课程名称" label-width="120px">
          <el-input v-model="addCourseForm.courseName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程教师" label-width="120px">
          <el-input v-model="addCourseForm.teacher" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAdd = false">取 消</el-button>
        <el-button type="primary" @click="isAdd = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isAdd: false,
      addCourseForm: {
        id: '',
        courseName: '',
        teacher: ''
      },
      myCourse: [
        {
          id: '10033',
          courseName: 'python入门',
          labList: [
            {
              id: 'dsaf',
              jobName: 'python入门第一个实验',
              startTime: '2017-11-22',
              deadline: '2017-11-30',
              state: '已截至'
            }
          ]
        }
      ]
    }
  },
  methods: {
    toAddCourse() {
      console.log('djakjdhfkj')
      this.isAdd = true
    }
  }
}
</script>
<style>
.course-name {
  font-family: 'Helvetica Neue', Helvetica, 'microsoft yahei', arial, STHeiTi,
    sans-serif;
  font-size: 1.5em;
  color: #97a8be;
}
</style>
