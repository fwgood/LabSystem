<template>
  <div class="my-lab">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-message"></i> 我的课程</el-breadcrumb-item>
        <div class="el-icon-circle-plus" @click="toAddCourse" style="font-size:1.5em;text-align:right;cursor:pointer;"> 申请加课</div>
      </el-breadcrumb>
    </div>
    <el-tabs v-model="activeTab" type="border-card" @tab-click="chooseTab">
        <el-tab-pane v-for="item in courseList" :key="item.courseId" :label="item.courseName" :name="item.courseId">
            <span style="padding-left:30px;">
        <el-button type="text" class="el-icon-circle-plus-outline" @click="distributeLab(item)">发布实验</el-button>
        <el-button type="text" class="el-icon-phone" @click="toNodify(item)">发布公告</el-button>
      </span>
          <el-table :data="labList" style="width: 100%" :default-sort="{prop:'date',order:'descending'}">
        <el-table-column prop="jobName" label="作业" width="180"></el-table-column>
        <el-table-column prop="startTime" label="开始日期" sortable></el-table-column>
        <el-table-column prop="deadline" label="截止日期" sortable></el-table-column>
        <el-table-column prop="state" label="状态"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="CheckLab(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="giveMark(scope.row)" type="text" size="small">评分</el-button>
          </template>
        </el-table-column>
      </el-table>
        </el-tab-pane>
      </el-tabs>
    <el-dialog :title="concreateLab.jobName" :visible.sync="isCheck">
      <el-form :model="labForm">
        <el-form-item label="实验" label-width="100px">
          <el-input v-model="labForm.name" auto-complete="off" :disabled="isEdit" :placeholder="concreateLab.jobName"></el-input>
        </el-form-item>
        <el-form-item label="备注" label-width="100px">
          <el-input :placeholder="concreateLab.remark" type="textarea" :autosize="{ minRows: 2, maxRows: 5}" v-model="labForm.remark"
            :disabled="isEdit"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="block" style="text-align:center">
            <span class="demonstration" style="padding-left:20px;">起止时间</span>
            <el-date-picker :disabled="isEdit" v-model="labForm.time" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
              default-value="2017-11-11">
            </el-date-picker>
          </div>
        </el-form-item>
      </el-form>
      <div v-if="!isEdit">
      <el-upload style="text-align:center" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove"
        multiple :limit="3" :on-exceed="handleExceed" :file-list="concreateLab.fileList">
        <el-button type="primary">点击上传</el-button>
      </el-upload>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isCheck = false">取 消</el-button>
        <el-button type="danger" @click="toEdit">编辑</el-button>
        <el-button :disabled="isEdit" type="primary" @click="handleCheck">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 发布一门新实验 -->
    <el-dialog title="发布实验" :visible.sync="isAddLab">
      <el-form :model="addLabForm">
        <el-form-item label="实验" label-width="100px">
          <el-input v-model="addLabForm.name" auto-complete="off" :placeholder="concreateLab.jobName"></el-input>
        </el-form-item>
        <el-form-item label="备注" label-width="100px">
          <el-input :placeholder="concreateLab.remark" type="textarea" :autosize="{ minRows: 2, maxRows: 5}" v-model="labForm.remark"
            ></el-input>
        </el-form-item>
        <el-form-item>
          <div class="block" style="text-align:center">
            <span class="demonstration" style="padding-left:20px;">起止时间</span>
            <el-date-picker v-model="addLabForm.time" type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"
              default-value="2017-11-11">
            </el-date-picker>
          </div>
        </el-form-item>
      </el-form>
      <div >
      <el-upload style="text-align:center" class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove"
        multiple :limit="3" :on-exceed="handleExceed" :file-list="addLabForm.fileList">
        <el-button type="primary">点击上传</el-button>
      </el-upload>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAddLab = false">取 消</el-button>
        <el-button type="primary" @click="handleAddLab">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 申请开一门实验 -->
    <el-dialog title="请填写申请信息" :visible.sync="isAddCourse">
      <el-form :model="addCourseForm">
        <el-form-item label="课程名称" label-width="120px">
          <el-input v-model="addCourseForm.courseName" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程教师" label-width="120px">
          <el-input v-model="addCourseForm.teacher" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isAddCourse = false">取 消</el-button>
        <el-button type="primary" @click="handleAddCourse">确 定</el-button>
      </div>
    </el-dialog>
    <!-- 发布公告 -->
    <el-dialog :title="concreateCourse.courseName" :visible.sync="isNotify">
      <el-input placeholder="公告内容" type="textarea" :autosize="{ minRows: 2, maxRows: 5}" v-model="notifyForm.notifyArea"
            ></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isNotify = false">取 消</el-button>
        <el-button type="primary" @click="handleNotify">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: '214332',
      isAddCourse: false,
      isAddLab: false,
      isNotify: false,
      isCheck: false,
      isEdit: true,
      concreateLab: {},
      //   concreateCourse保存当前再哪门课程下发公告
      concreateCourse: {},
      labForm: {},
      //   addlabForm为保存当前需要在哪个课程下发布实验
      addLabForm: {},
      editCount: 0,
      notifyForm: {
        notifyCourseId: '',
        notifyArea: ''
      },
      addCourseForm: {
        id: '',
        courseName: '',
        teacher: ''
      },
      courseList: [
        {
          courseId: '214332',
          courseName: 'python'
        },
        {
          courseId: '34534',
          courseName: 'java'
        }
      ],
      labList: [
        {
          id: 'dsaf',
          jobName: 'python入门第实验',
          startTime: '2017-11-12',
          deadline: '2017-11-30',
          state: '已截至',
          remark: '这是一个备注',
          fileList: [
            { name: '第一个指导书', url: 'ww.baudknfka' },
            { name: '第二个指导书', url: 'kksdjf' }
          ]
        },
        {
          id: 'dsa23',
          jobName: 'python入门第一个实验',
          startTime: '2017-11-22',
          deadline: '2017-11-30',
          state: '已截至'
        }
      ],
      myCourse: [
        {
          id: '10033',
          courseName: 'python入门',
          labList: [
            {
              id: 'dsaf',
              jobName: 'python入门第实验',
              startTime: '2017-11-12',
              deadline: '2017-11-30',
              state: '已截至',
              remark: '这是一个备注',
              fileList: [
                { name: '第一个指导书', url: 'ww.baudknfka' },
                { name: '第二个指导书', url: 'kksdjf' }
              ]
            },
            {
              id: 'dsa23',
              jobName: 'python入门第一个实验',
              startTime: '2017-11-22',
              deadline: '2017-11-30',
              state: '已截至'
            }
          ]
        },
        {
          id: '1003',
          courseName: 'python入门',
          labList: [
            {
              id: 'd00af',
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
    chooseTab(tab, event) {
      console.log(tab.name)
      //   加载不同课的成绩单
    },
    toAddCourse() {
      console.log('djakjdhfkj')
      this.isAddCourse = true
    },
    distributeLab(item) {
      this.addLabForm.courseId = item.courseId
      this.isAddLab = true
      console.log(this.addLabForm)
    },
    toNodify(item) {
      this.concreateCourse.courseId = item.courseId
      this.concreateCourse.courseName = item.courseName
      console.log(this.concreateCourse)
      this.isNotify = true
    },
    handleAddCourse() {
      console.log('加课')
    },
    CheckLab(row) {
      console.log(row)
      this.isCheck = true
      this.concreateLab.id = row.id
      this.concreateLab.jobName = row.jobName
      this.concreateLab.startTime = row.startTime
      this.concreateLab.deadline = row.deadline
      this.concreateLab.state = row.state
      this.concreateLab.remark = row.remark
      this.concreateLab.fileList = row.fileList
      //   console.log(row)
    },
    handleCheck() {
      console.log('编辑发布的实验')
      console.log(this.concreateLab)
    },
    handleNotify() {
      this.notifyForm.notifyCourseId = this.concreateCourse.courseId
      console.log(this.notifyForm)
      console.log('发布公告')
      this.notifyForm.notifyArea = ''
    },
    handleAddLab() {
      console.log(this.addLabForm)
      this.isAddLab = false
      console.log('新发布实验')
    },
    giveMark(row) {
      this.concreateLab.id = row.id
      this.concreateLab.jobName = row.jobName
      this.concreateLab.startTime = row.startTime
      this.concreateLab.deadline = row.deadline
      this.concreateLab.state = row.state
      this.concreateLab.remark = row.remark
      this.concreateLab.fileList = row.fileList
      console.log(row)
      this.$router.push({
        path: '/checkLab/' + this.concreateLab.id,
        params: { labId: this.concreateLab.jobName }
      })
    },
    toEdit() {
      this.editCount++
      if (this.editCount % 2 === 1) {
        this.isEdit = false
      } else {
        this.isEdit = true
      }
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
      console.log('移除文件')
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length +
          fileList.length} 个文件`
      )
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
