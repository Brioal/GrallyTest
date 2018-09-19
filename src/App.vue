<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  body{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  .el-card__body {
    padding: 0 0;
  }

  .ivu-menu-child-item-active .ivu-menu-submenu-title {
    background: #8F7055;
    color: white !important;
  }

  .ivu-menu-item-group-title {
    padding-left: 20px!important;
    font-size: 18px !important;
    color: white !important;
    background: rgba(143, 112, 85, 0.56);
  }


  .ivu-menu-submenu-title:hover {
    background: #8F7055;
    color: white !important;
  }

  .ivu-menu-item:hover {
    background: #8F7055;
    color: white !important;
  }
</style>
