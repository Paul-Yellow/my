<template>
  <div class="file-upload">
    <el-card class="">
      <el-row class="allinfo-style">
        <el-col :span="3">
          <span>上传总进度：</span>
        </el-col>
        <el-col :span="11">
          <el-progress :percentage="getAllPercent()"></el-progress>
        </el-col>
        <el-col :span="2">
          <span>{{ formatSpeed(speed) }}</span>
        </el-col>
        <el-col :span="3" :offset="1">
          <div v-if="start" @click='stopAll' class="btn-style">全部暂停</div>
          <div v-else @click='startAll' class="btn-style">全部开始</div>
        </el-col>
        <el-col :span="3">
          <div class="btn-style" @click='removeAll'>全部取消</div>
        </el-col>
      </el-row>
      <el-row>
        <div class="file-select" @click='openFileSelect'>
          <div><img class="icon-upload" src='./cloud32.png'/></div>
          <div>点击或将文件拖拽到此区域上传</div>
          <div>支持单个或批量上传</div>
        </div>
      </el-row>
      <el-row>
        <div class="file-length">总共上传{{ files.length }}个文件</div>
      </el-row>
      <el-row class="file-list">
        <div>
          <el-row v-for="file in files" :key="file.fileName" class="file-info">
            <el-col :span="1">
              <img class='file-icon' src='./folder-icon.png'/>
            </el-col>
            <el-col :span="6">
              <div>{{ file.fileName}}</div>
              <div>{{ formatBytes(file.uploadedSize) }}/{{formatBytes( file.fileSize )}}</div>
            </el-col>
            <el-col :span="2">
              <div >{{ formatTime(file.time) }}</div>
            </el-col>
            <el-col :span="10">
              <div><el-progress :percentage="formatPercent(file.uploadedSize, file.fileSize)"></el-progress></div>
              <div>{{ formatSpeed(file.speed) }}</div>
            </el-col>
            <el-col :span="2" :offset="1">
              <img v-if="file.start" @click='stopOne(file.fileName)' class='stop-icon' src='./stop.png'/>
              <img v-else @click='startOne(file.fileName)' class='start-icon' src='./start.png'/>
            </el-col>
            <el-col :span="2">
              <img @click='removeOne(file.fileName)' class='remove-icon' src='./remove.png'/>
            </el-col>
          </el-row>
        </div>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: true,
      speed: 0,
      files: []
    }
  },
  methods: {
    startAll() {
      this.start = true
      for (let j = 0; j < this.files.length; j++) {
        if (!this.files[j].start) {
          this.files[j].start = true
        }
      }
    },
    stopAll() {
      this.start = false
      for (let j = 0; j < this.files.length; j++) {
        if (this.files[j].start) {
          this.files[j].start = false
        }
      }
    },
    removeAll() {
      this.files = []
      this.start = false
    },
    startOne(fileName) {
      for (let j = 0; j < this.files.length; j++) {
        if (this.files[j].fileName === fileName) {
          this.files[j].start = true
          break
        }
      }
    },
    stopOne(fileName) {
      for (let j = 0; j < this.files.length; j++) {
        if (this.files[j].fileName === fileName) {
          this.files[j].start = false
          break
        }
      }
    },
    removeOne(fileName) {
      for (let j = 0; j < this.files.length; j++) {
        if (this.files[j].fileName === fileName) {
          this.files.splice(j, 1)
          break
        }
      }
    },
    openFileSelect() {
      let content = "<input type='file'>"
      const b = document.createElement('div')
      b.innerHTML = content
      content = b.childNodes
      const fileList = content[0].parentNode.removeChild(content[0])
      fileList.onchange = this.getFileSelected
      fileList.click()
    },
    getFileSelected(event) {
      const fileInput = event.target
      for (let i = 0; i < fileInput.files.length; i++) {
        let state = false
        for (let j = 0; j < this.files.length; j++) {
          if (this.files[j].fileName === fileInput.files[i].name) {
            this.$message.error('请不要选择重复文件：' + fileInput.files[i].name)
            state = true
            break
          }
        }
        if (!state) {
          this.files.push({
            fileName: fileInput.files[i].name,
            fileSize: fileInput.files[i].size,
            speed: 0,
            uploadedSize: 0,
            time: 0,
            start: true
          })
        }
      }
    },
    formatBytes(size) {
      if (size < 100) {
        return (size + 'B')
      } else if (size < 102400) {
        size = Math.round(100 * (size / 1024)) / 100
        size = isNaN(size) ? 0 : parseFloat(size).toFixed(2)
        return (size + 'K')
      } else if (size < 1047527424) {
        size = Math.round(100 * (size / 1048576)) / 100
        size = isNaN(size) ? 0 : parseFloat(size).toFixed(2)
        return (size + 'M')
      }
      size = Math.round(100 * (size / 1073741824)) / 100
      size = isNaN(size) ? 0 : parseFloat(size).toFixed(2)
      return (size + 'G')
    },
    formatSpeed(a) {
      let b = 0
      Math.round(a / 1024) >= 1024 ? (b = Math.round(100 * (a / 1048576)) /
					100, b = Math.max(0, b), b = isNaN(b) ? 0 : parseFloat(b)
          .toFixed(2), a = b + 'MB/s') : (b = Math.round(100 *
					(a / 1024)) /
					100, b = Math.max(0, b), b = isNaN(b) ? 0 : parseFloat(b)
          .toFixed(2), a = b + 'KB/s')
      return a
    },
    formatTime(_time) {
      const time = parseInt(_time)
      let hh = 0
      let mm = 0
      let ss = 0
      if (time < 60) {
        ss = time
      } else if (time < 3600) {
        mm = parseInt(time / 60)
        ss = parseInt(time % 60)
      } else {
        hh = parseInt(time / 3600)
        mm = parseInt((time - hh * 3600) / 60)
        ss = parseInt(time % 60)
      }
      return (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
    },
    formatPercent(num1, num2) {
      if (num2 <= 0) {
        return 0
      }
      return (num1 / num2).toFixed(2)
    },
    getAllPercent() {
      let num1 = 0
      let num2 = 0
      for (let i = 0; i < this.files.length; i++) {
        num1 += this.files[i].uploadedSize
        num2 += this.files[i].fileSize
      }
      if (num2 <= 0) {
        return 0
      }
      return (num1 / num2).toFixed(2)
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
.file-upload {
  text-align: center;
  font-size: 1vw;

  .el-progress-bar__outer {
    height: 0.5em !important;
  }

  .allinfo-style {
    text-align: center;
    border-bottom: 0.1em solid #eee;
    padding-bottom: 0.5em;
    color: #8D8D8D;
    font-size: 0.9em;
  }

  .file-length {
    text-align: left;
    margin-top: 0.5em;
    color: #333333;
    font-size: 0.8em;
    border-bottom: 0.1em solid #eee;
  }

  .file-select {
    text-align: center;
    border: 0.2em dashed #bfbfbf;
    height: 7em;
    margin-top: 0.5em;
    color: #8D8D8D;
    cursor: pointer;
    font-size: 0.8em;
    border-radius: 0.4em;
  }

  .file-list {
    border: 0.1em solid #eee;
    height: auto;
    margin-top: 0.5em;
    color: #8D8D8D;
    font-size: 0.8em;
    height: 10em;
    overflow-y: scroll;
    border-radius: 0.4em;
  }

  .file-info {
    text-align: left;
    color: #333333;
    margin-left: 1em;
    border-bottom: 0.1em solid #eee;
    margin-top: 1em;
  }

  .btn-style {
    color: #ffffff;
    background: rgb(45, 140, 226);
    background-size: 100% 100%;
    width: 70%;
    cursor: pointer;
    font-size: 0.9em;
    height: 1.5em;
    padding: 0.2em;
    border-radius: 0.4em;
  }

  .file-icon {
    width: 1.8em;
    height: 1.8em;
  }
  .start-icon {
    width: 1.2em;
    height: 1.2em;
    cursor: pointer;
  }
  .stop-icon {
    width: 1.2em;
    height: 1.2em;
    cursor: pointer;
  }
  .remove-icon {
    width: 1.8em;
    height: 1.8em;
    cursor: pointer;
  }
  .icon-upload {
    width: 3em;
    height: 3em;
  }
}
</style>
