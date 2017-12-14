<template>
  <div>
    <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item style="font-size:2em;"><i class="el-icon-setting"></i> 我的资料</el-breadcrumb-item>
            </el-breadcrumb>
    </div>
    <el-row :gutter="20">
      <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="16"><div class="grid-content bg-purple"></div></el-col>
    </el-row>

  </div>
</template>
<style scoped>
.crumbs {
  margin-top: 10px;
}

.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
