<template>
  <div class="footer">
    <el-row style="top: 10%">
      <el-col style="height:  200px" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></el-col>
      <el-col :lg="14" style="text-align: left">
        <div>
          <p class="footer_p">版权所有: xxxxxxxxxxxxxxxx</p>
          <p class="footer_p">联系地址：xxxxxxxxxxxxxxxx</p>
          <p class="footer_p">技术支持：xxxxxxxxxxxxxxxx</p>
        </div>
      </el-col>
    </el-row>
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
  .footer_p{
    font-size: 17px;
  }
  .footer {
    padding: 0px 0px;
    background: #000000;
    /*background: #ffffff;*/
    height: 200px;
  }

  * {
    margin: 0px 0px;
    padding: 0px 0px;
  }

  p{
    color: white;
  }


</style>
