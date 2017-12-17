<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-date"></i> 成绩管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <el-tabs v-model="activeTab" type="border-card" @tab-click="chooseTab">
        <el-tab-pane v-for="item in courseList" :key="item.courseId" :label="item.courseName" :name="item.courseId">
          <el-table :data="scoreList" style="width: 100%">
            <el-table-column prop="stuId" label="学号" width="180"></el-table-column>
            <el-table-column prop="name" label="名字"></el-table-column>
            <el-table-column prop="score" sortable label="成绩"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="CheckLab(scope.row,item)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeTab: '214332',
      concreateStd: {
        courseId: '',
        stdId: ''
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
      scoreList: [
        {
          stuId: '2015112233',
          name: '张思',
          score: '100'
        },
        {
          stuId: '20151123233',
          name: '张思',
          score: '100'
        },
        {
          stuId: '201511234233',
          name: '张思',
          score: '100'
        },
        {
          stuId: '20143452233',
          name: '张思',
          score: '100'
        }
      ]
    }
  },
  methods: {
    chooseTab(tab, event) {
      console.log(tab.name)
      //   加载不同课的成绩单
    },
    CheckLab(row, item) {
      this.concreateStd.courseId = item.courseId
      this.concreateStd.stdId = row.stuId
      this.$router.push({
        path: '/stuManage/' + this.concreateStd.stuId,
        query: {
          courseId: this.concreateStd.courseId
        }
      })
      console.log(this.concreateStd)
    }
  }
}
</script>
