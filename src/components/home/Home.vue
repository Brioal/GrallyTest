<template>
  <div>
    <el-carousel :interval="5000" arrow="always" type="card" >
      <el-carousel-item v-for="(item,index) in banners" :key="index">
        <div class="banner_container" @click="jumpNews(0,0)">
          <p>{{item.title}}</p>
          <img :src="item.src">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  export default {
    name: "Home",
    data() {
      return {
        banners: [
          {
            title: '测试标题一',
            src: '/static/banner1.jpg'
          }, {
            title: '测试标题二',
            src: '/static/banner2.jpg'
          }, {
            title: '测试标题三',
            src: '/static/banner3.jpg'
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .banner_container {
    width: 811px;
    height: 300px;
    position: relative;
    cursor: pointer;
  }

  .banner_container img {
    width: 811px;
    height: 300px;
  }

  .banner_container p {
    z-index: 2;
    color: white;
    font-size: 20px;
    position: absolute;
    bottom: 45px;
    left: 10px;
  }
</style>
