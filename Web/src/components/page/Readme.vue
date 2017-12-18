<template>
  <div>
    <!-- <div class="crumbs">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item style="font-size:1.5em;">
            <i class="el-icon-setting"></i> 最近实验</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div v-loading="loading">
        <div class="work-doc" v-for="item in workList" v-bind:key="item.id">
          <div class="experTitle"> {{item.couseName}}</div>
          <el-table :data="item.courses" style="width: 100%" :default-sort="{prop:'date',order:'descending'}" @row-click="lookDetail">
            <el-table-column prop="jobName" label="作业" width="180"></el-table-column>
            <el-table-column prop="startTime" label="开始日期" sortable></el-table-column>
            <el-table-column prop="deadline" label="截止日期" sortable></el-table-column>
            <el-table-column prop="state" label="状态"></el-table-column>
            <el-table-column prop="score" label="分数" sortable></el-table-column>
          </el-table>
        </div>
      </div>

      <div class="crumbs">
        <el-breadcrumb separator="/" style="font-size:1.5em;">
          <el-breadcrumb-item>
            <i class="el-icon-document"></i> 最近博客</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="blogthrough">
        <el-card class="box-card" v-for="item in blogList" :key="item.id">
          <div slot="header" class="clearfix">
            <div class="head-left">
              <span style="padding-right:10px">
                <strong>{{item.author}}</strong>
              </span>
              <span>{{item.title}}</span>
            </div>
            <div class="head-right">
              <el-button type="primary" @click="toThrough(item)">
                <i class="el-icon-view"></i>
              </el-button>

            </div>
          </div>
          <div v-for="it in 4" :key="it" class="text">
            博客内容: {{item.content}}
          </div>
          <img src="../../assets/test.png" alt="sorry" width="300px" style="margin-left:0%;">
          <div class="card-foot">
            <div>{{item.time}}</div>
          </div>
        </el-card>
      </div> -->
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="item in pics" :key="item">
        <img :src="item" class="pics">
      </el-carousel-item>
    </el-carousel>
    <el-card class="box-card">
      <!-- <div v-for="o in 4" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div> -->
      <el-row :gutter="300">
        <el-col :span="4">
          <img src="http://p12cke86k.bkt.clouddn.com/yuanhui.png" style="width:200px;height:200px;padding:20px">
        </el-col>
        <el-col :span="18">
          <p>
            云南大学国家示范性软件学院是在云南省委、省政府的高度重视和大力支持下，经教育部和国家计委批准，于2002年4月建立的全国35所国家示范性软件学院之一。学院分别在翠湖北路2号（云南大学校本部）及昆明市呈贡新区大学城东外环西路云南大学呈贡校区（新校区）办学。软件学院的建设得到了教育部、国家发改委、中共云南省委、云南省政府的高度重视和大力支持。省委、省政府在党代会报告、“十五”规划、政府工作报告中把软件学院建设列为重点建设的社会发展项目，多次召开省政府常务会议、全体会议和专题会议研究和决定软件学院建设事项。
          </p>
        </el-col>
      </el-row>

      <p>
        软件学院拥有“系统分析与集成”博士学位授权，“系统工程”一级学科硕士学位授权、“软件工程”一级学科硕士学位授权和“软件工程”专业硕士学位授权；设有“软件工程”、“数字媒体技术”、“网络工程”、“信息安全”4个重点本科专业。学院现有专职教师55人，兼职教师79人。专职教师中，有教育部教学指导委员会委员2人，国务院特殊津贴获得者1人，云南省有突出贡献的专家1人，云南省中青年学术和技术带头人2人，云南省技术创新人才1人，云南省教学名师2人，云南省首批“百人计划”1人，全国示范性软件学院“十佳教师”1人，云南省教学团队1个；教育部、科技部、云南省、昆明市等各类专家委员会的委员10余人；具有高级职称教师17人，博士生导师4人，博士16人，全职外教4人。

      </p>
      <p>
        建院十年来，软件学院共培养了1643名本科毕业生、1958名硕士毕业生、17名博士毕业生。学院现有在校学生近4200人，其中本科生1200人、硕士研究生3000人、博士研究生20人。
      </p>
      <p>
        软件学院拥有16个实验室，其中基础实验室5个、专业实验室4个、企业联合实验室2个、省级重点实验室1个、省级工程研究中心1个。学院实验室使用面积19700平方米，拥有各类仪器设备3000多台套，实验设备总值达到3100万元。学院实验中心于2006年被评为首批云南省示范教学实验中心。

      </p>
      <p>
        学院拥有国家软件人才国际培训基地（昆明）、国家Linux技术培训与推广中心、中国信息安全产品测评认证中心云南测评中心、国家软件人才培养改革创新实验区、“网络工程”国家级特色专业等国家级品牌；拥有“软件工程”云南省省级重点实验室、云南省云计算工程研究中心、云南省电子政务研发中心、云南省实验教学示范中心、 “软件工程”省级重点专业以及“昆明信息化发展研究院”等品牌，构成了研发、服务相结合的社会服务体系，为人才的培养营造了良好的科教环境。

      </p>
      <p>
        学院承担了包括国家和省级攻关项目、信息专项项目、省校省院合作项目、自然科学基金项目在内的一大批重要科研项目，获得了重要科研成果奖励，发表和出版了一大批科研论文与专著。

      </p>
      <p>
        按照培养国际化工程型、应用型高层次软件人才的要求，学院建立了校外实习基地39个，其中国外3个（美国1个，日本2个）、省外12个、省内24个，建立了校内实习基地9个。学院与英国De Montfort大学、美国Michigan州立大学、澳大利亚Monash大学、印度Pune大学、韩国岭南大学、马来西亚华校董事联合会总会等大学或教育组织建立了合作关系，进行了学生互派、招收留学生、聘请外方教师授课、培养专任教师等形式的合作。与一批国际、国内知名企业在教学条件建设、学生实习就业等方面建立了广泛的合作关系。
      </p>
      <p>
        软件学院以培养国际化、工程型人才为目标，按国际通行模式培养具有国际竞争能力的高层次人才，推行教学、实践、开发相结合，产学研一体化的人才培养模式。强调学生的英语“听、说、读、写”能力培养，50%以上的专业基础课、专业课采用英文原版教材、实行双语教学；强调工程技术能力培养，通过国际通行的企业认证是毕业的基本条件；除了正常教学实验、专业实践外，还安排了不少于6个月的毕业实习。
      </p>
      <p>
        软件学院本科学制四年，实行按专业招生。学习前两年按云南大学统一标准收取学费；经云南省发展计划委员会批准，后两年按办学成本收取学费，每学年12000元。
      </p>
    </el-card>
  </div>

</template>

<script>
export default {
  data: function() {
    return {
      loading: true,
      workList: [],
      blogList: [
        {
          id: 0,
          account: 20151120222,
          author: '冯伟',
          title: '我是世界上最好的程序员',
          content: '一个王者带一群青铜是怎样一种体验，哈哈哈哈哈哈哈哈哈好绝望',
          blogTime: '2017-12-12'
        },
        {
          id: 1,
          account: 20151120222,
          author: '九戒天子',
          title: '我是世界上最好的天道',
          content: '论#女朋友和别的女生吵架了#，怎么快速安抚女友！',
          blogTime: '2017-12-12'
        }
      ],
      pics: [
        'http://p12cke86k.bkt.clouddn.com/1.jpg',
        'http://p12cke86k.bkt.clouddn.com/2.jpg',
        'http://p12cke86k.bkt.clouddn.com/3.png'
      ]
    }
  },
  methods: {
    lookDetail: function(row) {
      console.log(row)
    },
    toThrough(blog) {
      console.log(blog)
    }
    // formatter: function (row, column) {
    //     return row.address;
    // }
  },
  mounted: function() {
    // this.$store
    //   .dispatch('getIndex')
    //   .then(res => {
    //     let work = res.data.lab
    //     work.map(d => {
    //       d.courses.map(c => {
    //         c.state = c.state ? '已提交' : '未提交'
    //       })
    //     })
    //     this.workList = work
    //     this.blogList = res.data.blog
    //     this.loading = false
    //   })
    //   .catch(e => {
    //     this.$message.error('出现了未知错误，请稍后重试')
    //     throw e
    //   })
  }
}
</script>

<style scoped>
/* .el-table {
  cursor: pointer;
}
.experTitle {
  font-family: 'Helvetica Neue', Helvetica, 'microsoft yahei', arial, STHeiTi,
    sans-serif;
  font-size: 2em;
  font-weight: 1.5em;
  padding: 5px;
  color: #97a8be;
}
.blogthrough {
  margin-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  max-width: 980px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif;
}
.work-doc {
  padding-bottom: 10px;
  width: 100%;
  max-width: 980px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial,
    sans-serif;
}
.crumbs {
  margin-top: 10px;
}
.text {
  height: 25px;
}
.head-left {
  display: inline-block;
  font-size: 1.5em;
}
.head-right {
  float: right;
  display: inline-block;
}
.card-foot {
  text-align: right;
}
.box-card {
  margin-top: 10px;
} */

/* .ms-doc h3{
        padding: 9px 10px 10px;
        margin: 0;
        font-size: 14px;
        line-height: 17px;
        background-color: #f5f5f5;
        border: 1px solid #d8d8d8;
        border-bottom: 0;
        border-radius: 3px 3px 0 0;
    }
    .ms-doc article{
        padding: 45px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-bottom-right-radius: 3px;
        border-bottom-left-radius: 3px;
    }
    .ms-doc article h1{
        font-size:32px;
        padding-bottom: 10px;
        margin-bottom: 15px;
        border-bottom: 1px solid #ddd;
    }
    .ms-doc article h2 {
        margin: 24px 0 16px;
        font-weight: 600;
        line-height: 1.25;
        padding-bottom: 7px;
        font-size: 24px;
        border-bottom: 1px solid #eee;
    }
    .ms-doc article p{
        margin-bottom: 15px;
        line-height: 1.5;
    }
    .ms-doc article .el-checkbox{
        margin-bottom: 5px;
    } */
/* .el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
} */

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.text {
  font-size: 14px;
}

.item {
  padding: 18px 0;
} */

.box-card {
  width: 80%px;
  text-indent: 2rem;
  font-size: large;
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  padding: 20px;
}
.pics {
  height: 300px;
  width: 100%;
  box-shadow: #475669;
  border-radius: 20px;
}
</style>