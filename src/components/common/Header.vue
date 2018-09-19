<template>
  <div class="header_container" style="overflow: hidden">
    <el-row>
      <el-col style="height:  130px;padding: 0px 0px ;margin: 0px 0px" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" style="height: 130px">
        <img src="/static/logo.png" style="margin-top: 28px;float: left;width: 210px;height: 84px">
      </el-col>
      <el-col style="height:  100px" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: "Footer"
  }
</script>

<style scoped>
  .hot_classify {
    color: white;
    font-size: 16px;
    text-align: center;
    cursor: pointer;
  }

  * {
    margin: 0px 0px;
    padding: 0px 0px;
  }

  .header_container {
    background-color: #F1EEE4;
    width: 100%;
    height: 130px;
  }

  .hr {
    margin-top: 5px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.18);
  }
</style>
