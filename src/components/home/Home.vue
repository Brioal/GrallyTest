<template>
  <Layout>
    <Header>
      <Header></Header>
    </Header>
    <Content style="min-height: 600px">
      <el-row>
        <el-col style="height:  100px" :xs="5" :sm="5" :md="5" :lg="5" :xl="5"></el-col>
        <el-col :xs="14" :sm="14" :md="14" :lg="14" :xl="14">
          <div style="position: relative">
            <div class="left_menu">
              <Menu @on-select="OnMenuSleect" :active-name="active_name" :open-names="['首页','1']" style="text-align: left;background: #CABB9C">
                <MenuItem name="首页">首页</MenuItem>
                <MenuGroup title="画册">
                  <MenuItem name="老鹰">老鹰</MenuItem>
                  <MenuItem name="插画">插画</MenuItem>
                  <MenuItem name="绿叶">绿叶</MenuItem>
                  <MenuItem name="猫">猫</MenuItem>
                  <MenuItem name="第一期">第一期</MenuItem>
                  <MenuItem name="第二期">第二期</MenuItem>
                </MenuGroup>
              </Menu>
            </div>
            <router-view class="right_content">
            </router-view>
          </div>
        </el-col>
        <el-col :xs="5" :sm="5" :md="5" :lg="5" :xl="5" style="height:  100px"></el-col>
      </el-row>
    </Content>
    <Footer style="padding: 0;margin-bottom: -20px !important;">
      <HomeFooter></HomeFooter>
    </Footer>
  </Layout>
</template>

<script>
  import Header from '../common/Header';
  import HomeFooter from '../common/Footer';

  export default {
    components: {Header, HomeFooter},
    data(){
      return {
        active_name: '首页'
      }
    },
    watch:{
      $route:function () {
        var name = this.$route.params.name;
        if (name == null || name == '') {
          name = '首页';
        }
        this.active_name = name;
      }
    },
    methods:{
      OnMenuSleect: function (name) {
        if (name == '首页') {
          this.$router.push("/home/main");
        } else {
          this.$router.push("/home/detail/"+name);
        }
      }
    }
  }
</script>

<style scoped>


  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu) {
    background: #8F7055 !important;
    color: white !important;
  }


  .ivu-menu-item {
    color: white;
  }

  .ivu-menu {
    color: white !important;
  }

  .left_menu {
    position: absolute;
    background: #CABB9C;
    width: 240px;
    top: 0px;
    left: 0px;
    bottom: 0px;
  }

  .right_content {
    margin-left: 240px;
    top: 0px;
    padding-left: 3px;
    right: 0px;
    bottom: 0px;
  }

  .el-header {
    padding: 0 0;
  }

  .main {
    background: url("/static/back.png") repeat;
  }

</style>
