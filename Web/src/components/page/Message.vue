<template>
  <div>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <div class="head-left">
                <div style="padding-right:10px"><strong>发布人：</strong></div>
                <div style="padding-right:10px"><strong>学号：</strong></div>
            </div>
            <div class="head-right">
                <el-button type="primary" ><i class="el-icon-edit"></i></el-button>           
            </div>
        </div>
        <div>
        </div>
    </el-card>

  </div>
</template>
<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped>
.crumbs {
  margin-top: 10px;
}
.personal-info {
  line-height: 30px;
  margin-left: 20px;
}
.box-card {
}
.head-left {
  display: inline-block;
}
.head-right {
  float: right;
  display: inline-block;
}
</style>
