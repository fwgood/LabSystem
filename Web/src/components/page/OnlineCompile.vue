<template>
  <div>
    <el-row >
    <el-select v-model="language" placeholder="请选择" :change="languageChange" class="menu">
      <el-option v-for="item in languages" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
        <el-input placeholder="文件名" v-model="filename" style="width:100px" class="menu"></el-input>
        <el-button @click="run" type="primary" class="menu">运行</el-button>
        <el-button @click="clear" type="warning" class="menu">清空</el-button>
    </el-row>

    <el-row :gutter="40" style="margin-top:15px">
      <el-col :span="11">
        <el-input   type="textarea" @keydown.native.tab.prevent="tab" placeholder="请输入内容" v-model="code" :autosize="{ minRows: 6, maxRows: 16}">
        </el-input>

        <pre >
          <code :class="language" v-html="codePre" class="code">

          </code>
        </pre>
      </el-col>
      <el-col :span="11">
                <el-input type="textarea" :rows="4" placeholder="输入区" v-model="input" class="result">
        </el-input>
        <el-input type="textarea" :rows="4" placeholder="结果显示区" v-model="result" disabled class="result">
        </el-input>
                <el-input type="textarea" :rows="4" placeholder="错误显示区" v-model="error" disabled class="result">
        </el-input>
      </el-col>
    </el-row>



  </div>
</template>

<script>
export default {
  data: function() {
    return {
      languages: [
        {
          value: 'c',
          label: 'C'
        },
        {
          value: 'python',
          label: 'Python'
        },
        {
          value: 'java',
          label: 'Java'
        },
        {
          value: 'javascript',
          label: 'JavaScript'
        },
        {
          value: 'php',
          label: 'PHP'
        }
      ],
      language: '',
      code: '',
      filename: '',
      result: '',
      error: '',
      input: ''
    }
  },
  methods: {
    run() {
      this.$store
        .dispatch('compile', {
          language: this.language,
          filename: this.filename,
          content: this.code.replace(/\n/, '\n'),
          input: this.input
        })
        .then(res => {
          this.result = res.data.stdout.replace('/n', '\n')
          this.error = res.data.stderr
        })
        .catch(e => {
          this.$message.error('代码似乎有错误，无法正常编译')
        })
    },
    languageChange() {
      let codes = document.querySelectorAll('pre code')
      codes.forEach(element => {
        window.hljs.highlightBlock(element)
      })
    },
    tab(e) {
      this.code += '    '
    },
    clear() {
      console.log(this)
      this.code = ''
      this.result = ''
      this.error = ''
      this.input = ''
    }
  },
  created: function() {},
  updated: function() {
    let codes = document.querySelectorAll('pre code')
    codes.forEach(element => {
      window.hljs.highlightBlock(element)
    })
  },
  computed: {
    codePre() {
      return this.code.replace('<', '< ')
    }
  }
}
</script>

<style>
.code {
  margin-top: 10px;
  border-radius: 10px;
}
.menu {
  margin: 0 10px 0 0;
}
.result {
  margin: 0 0 20px 0;
}
</style>
