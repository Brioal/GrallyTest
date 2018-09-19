<template>
  <div>
    <el-container>
      <el-header style="height: 180px;">
        <Header></Header>
      </el-header>
      <el-main class="main">
        <el-row>
          <el-col style="height:  100px" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></el-col>
          <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
            <router-view></router-view>
          </el-col>
          <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" style="height:  100px"></el-col>
        </el-row>
      </el-main>
      <el-footer style="height: 200px;margin: 0px 0px;padding: 0;">
        <HomeFooter></HomeFooter>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
  import Header from '../common/Header';
  import HomeFooter from '../common/Footer';

  export default {
    components: {Header, HomeFooter}
  }
</script>

<style scoped>
  .el-header {
    padding: 0 0;
  }

  .main {
    padding: 0px 0px;
    padding-bottom:  150px;
    background: url("/static/back.png") repeat;
  }
</style>
