<template>
  <div>
    <h2 class="title_leabl">{{title}}</h2>
    <!--热门相册-->
    <el-row :gutter="5" style="margin: 20px">
      <el-col :span="6" v-for="(bean,index) in pics" :key="index">
        <el-card class="card_classify" shadow="hover">
          <div class="classify_container">
            <p>{{bean.title}}</p>
            <img :src="bean.url">
          </div>
        </el-card>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {
        title: this.$route.params.name,
        pics: [
          {
            title: '图片1',
            url: '/static/banner1.jpg'
          }, {
            title: '图片2',
            url: '/static/banner2.jpg'
          }, {
            title: '图片3',
            url: '/static/banner3.jpg'
          }, {
            title: '图片4',
            url: '/static/chahua.jpg'
          }, {
            title: '图片5',
            url: '/static/die1.jpg'
          }
        ]
      }
    },
    watch:{
      $route:function () {
        var name = this.$route.params.name;
        if (name == null || name == '') {
          name = '首页';
        }
        this.title = name;
      }
    }
  }
</script>

<style scoped>

  .title_leabl {
    margin-top: 20px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    padding-left: 20px;
    cursor: pointer;
    border-left: solid red 10px;
  }

  .card_classify {
    padding: 0 0 !important;
    margin: 1px;

  }

  .classify_container {
    width: 100%;
    margin: 0 0;
    height: 140px;
    position: relative;
    padding: 0 0;
  }

  .classify_container p {
    position: absolute;
    bottom: 10px;
    text-align: center;
    left: 0;
    background: rgba(0, 0, 0, 0.33);
    right: 0;
    font-size: 15px;
    color: white;
    visibility: hidden;
  }

  .classify_container:hover p {
    visibility: visible;
  }

  .classify_container img {
    width: 100%;
    margin: 0 0;
    height: 100%;
  }
</style>
