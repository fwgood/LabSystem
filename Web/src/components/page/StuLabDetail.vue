<template>
  <div>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item style="font-size:1.5em;">
          <i class="el-icon-info"></i> 学生详细成绩</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div>
      <span class="course-name">{{scoreList.courseName}}</span>
      <span style="padding-left:30px;">{{scoreList.name}}</span>
      <el-table :data="scoreList.labList" style="width: 100%">
        <el-table-column prop="labName" label="作业" width="180"></el-table-column>
        <el-table-column prop="score" sortable label="成绩"></el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button @click="editLabScore(scope.row)" style="color:red;" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="修改成绩" :visible.sync="isEdit">
      <el-input  :placeholder="concreateLab.score" v-model="concreateLab.score">
      </el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="isEdit = false">取 消</el-button>
        <el-button type="primary" @click="handleEdit">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isEdit: false,
      concreateLab: {
        labId: '',
        stdId: '',
        score: ''
      },
      scoreList: {
        stdId: '23489832',
        name: '小名',
        courseName: 'python入门',
        labList: [
          { labId: '4583', labName: 'numpy入门建南街', score: '100' },
          { labId: '46583', labName: 'numpy入门建南街', score: '50' },
          { labId: '4453', labName: 'numpy入门建南街', score: '430' }
        ]
      }
    }
  },
  created() {
    console.log(this.$route)
  },
  methods: {
    editLabScore(row) {
      this.isEdit = true
      this.concreateLab.labId = row.labId
      this.concreateLab.labName = row.labName
      this.concreateLab.score = row.score
      console.log(row)
      console.log(this.concreateLab)
    },
    handleEdit() {
      if (this.concreateLab.score === '') {
        this.fail('请输入成绩')
      } else {
        if (parseInt(this.concreateLab.score)) {
          console.log(this.concreateLab)
          console.log('添加')
        } else {
          this.fail('输入必须为数字')
        }
      }
    }
  }
}
</script>
