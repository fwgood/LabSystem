<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-info"></i> 课程管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="notify">
      <el-badge :value="courseReqNum" :max="99" class="item">
        <el-button @click="openTip">开课请求</el-button>
      </el-badge>
    </div>
    <div class="reqList" v-if="isShowReq">
      <el-card class="box-card" v-for="item in courseReqList" :key="item.courseName">
        <div slot="header" class="clearfix">
          <span>申请开课</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="addCourse(item)">开课</el-button>
        </div>
        <div>开课时间：{{item.time}}</div>
        <div>开课教师：{{item.teacher}}</div>
        <div>课程名称：{{item.courseName}}</div>
      </el-card>
    </div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-info"></i> 所有课程</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="all-course">
        <el-table :data="allCourseList" style="width: 100%">
            <el-table-column prop="courseName" label="课程" width="180"></el-table-column>
            <el-table-column prop="teacher" label="教师"></el-table-column>
            <el-table-column fixed="right" label="操作" width="150">
              <template slot-scope="scope">
                <el-button @click="CheckLab(scope.row)" type="text" size="small">查看</el-button>
                <el-button style="color:red;" @click="moveOut(scope.row)" type="text" size="small">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
    </div>
    <el-dialog title="发布实验" :visible.sync="isAdd">
      <el-form :model="addCourseForm">
        <el-form-item label="实验" label-width="100px">
          <el-input v-model="addCourseForm.courseName" auto-complete="off" ></el-input>
        </el-form-item>
        <el-form-item label="教师" label-width="100px">
          <el-input v-model="addCourseForm.teacher"></el-input>
        </el-form-item>
        <el-form-item label="加课密码" label-width="100px">
          <el-input v-model="addCourseForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="block" style="text-align:center">
            <span class="demonstration" style="padding-left:20px;">起止时间</span>
            <el-date-picker v-model="addCourseForm.time" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
              default-value="2017-11-11">
            </el-date-picker>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAdd = false">取 消</el-button>
        <el-button type="primary" @click="handleAddCourse">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="移除学生" :visible.sync="isDelete">
      <div>您将会删除课程 {{concreateCourse.courseName}}</div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isDelete = false">取 消</el-button>
        <el-button type="primary" @click="handleDelete">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isDelete: false,
      isShowReq: false,
      isAdd: false,
      clickCount: 0,
      courseReqNum: 3,
      addCourseForm: {},
      concreateCourse: {},
      allCourseList: [
        { courseId: '289758', courseName: 'oythons', teacher: 'ee' },
        { courseId: '289758', courseName: 'javad', teacher: 'dfsd' },
        { courseId: '289758', courseName: 'shuxue', teacher: 'sdfa' }
      ],
      courseReqList: [
        {
          courseName: 'python',
          teacher: 'bao',
          time: '2017-11-11'
        },
        {
          courseName: 'python2',
          teacher: 'bao12',
          time: '2017-11-13'
        },
        {
          courseName: 'pyqerthon',
          teacher: 'baewro',
          time: '2017-11-121'
        }
      ]
    }
  },
  methods: {
    openTip() {
      if (this.clickCount % 2 === 0) {
        this.isShowReq = true
      } else {
        this.isShowReq = false
      }
      this.clickCount++
      console.log('请求列表')
    },
    addCourse(item) {
      this.isAdd = true
      this.addCourseForm.courseName = item.courseName
      this.addCourseForm.teacher = item.teacher
    },
    CheckLab(row) {
      this.concreateCourse.courseId = row.courseId
      this.concreateCourse.courseName = row.courseName
      this.concreateCourse.teacher = row.teacher
      this.$router.push({
        path: '/course/' + this.concreateCourse.courseId,
        params: { query: this.concreateCourse.courseName }
      })
      console.log(row)
    },
    moveOut(row) {
      this.concreateCourse.courseId = row.courseId
      this.concreateCourse.courseName = row.courseName
      this.concreateCourse.teacher = row.teacher
      this.isDelete = true
      console.log(row)
    },
    handleAddCourse() {
      this.courseReqList.splice(0, 1)
      this.courseReqNum--
      this.isAdd = false
      console.log(this.addCourseForm)
      console.log('开课完成')
    },
    handleDelete() {}
  }
}
</script>

<style>
.box-card {
  margin-bottom: 20px;
}

.notify {
  margin-bottom: 20px;
}
</style>
