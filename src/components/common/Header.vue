<template>
  <div class="header_container" style="overflow: hidden">
    <el-row>
      <el-col style="height:  100px;padding: 0px 0px ;margin: 0px 0px" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></el-col>
      <el-col :xs="8" :sm="8" :md="8" :lg="8" :xl="8" style="height: 130px">
        <img src="/static/head_logo.png" style="margin-top: 28px;float: left;width: 210px;height: 84px">
      </el-col>
      <el-col :xs="6" :sm="6" :md="6" :lg="6" :xl="6" style="height: 130px">
        <el-input
          style="margin-top: 80px"
          placeholder="请输入要搜索的关键字"
        >
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </el-col>
      <el-col style="height:  100px" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></el-col>
    </el-row>
    <el-row>
      <el-col style="height:  1px;padding: 0px 0px ;margin: 0px 0px" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></el-col>
      <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14" class="hr">
        <el-row :gutter="20" style="line-height: 40px">
          <el-col :span="4">
            <p class="hot_classify">动物</p>
          </el-col>
          <el-col :span="4">
            <p class="hot_classify">影视</p>
          </el-col>
          <el-col :span="4">
            <p class="hot_classify">设计</p>
          </el-col>
          <el-col :span="4">
            <p class="hot_classify">游戏</p>
          </el-col>
          <el-col :span="4">
            <p class="hot_classify">植物</p>
          </el-col>
          <el-col :span="4">
            <p class="hot_classify">风景</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col style="height:  1px" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></el-col>
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
    background-color: #000000;
    width: 100%;
    height: 180px;
  }

  .hr {
    margin-top: 5px;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.18);
  }
</style>
