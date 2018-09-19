<template>
  <div>
    <!--轮播图-->
    <el-carousel :interval="5000" arrow="always" style="margin: 10px 0px;padding: 0px 0px;" height="500px">
      <el-carousel-item v-for="(item,index) in bannerList" :key="index">
        <div class="banner_container">
          <p>{{item.title}}</p>
          <img :src="item.src">
        </div>
      </el-carousel-item>
    </el-carousel>
    <!--热门相册-->
    <el-row :gutter="5">
      <el-col :span="6">
        <el-card class="card_classify" shadow="hover">
          <div class="classify_container">
            <p>碟中谍6</p>
            <img src="/static/die1.jpg">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card_classify" shadow="hover">
          <div class="classify_container">
            <p>风语咒</p>
            <img src="/static/feng.webp">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card_classify" shadow="hover">
          <div class="classify_container">
            <p>大话西游</p>
            <img src="/static/xiyou.webp" style="width: 340px">
          </div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card class="card_classify" shadow="hover">
          <div class="classify_container">
            <p>肖申克的救赎</p>
            <img src="/static/jiushu.webp">
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!--一个系列-->
    <h2 class="title_leabl">系列图片一</h2>
    <el-card class="classify_home" shadow="always">
      <el-row :gutter="3">
        <el-col :span="12" style="overflow: hidden">
          <img style="height: 408px" src="/static/die1.jpg">
        </el-col>
        <el-row :span="12">
          <el-col :span="6" style="padding: 0 0 ;margin: 0 0;text-align: center">
            <img class="pic_small" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1920469607,1432003411&fm=26&gp=0.jpg">
          </el-col>
          <el-col :span="6" style="padding: 0 0 ;margin: 0 0;text-align: center">
            <img class="pic_small" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=4202583354,2621315947&fm=26&gp=0.jpg">
          </el-col>
          <el-col :span="6" style="padding: 0 0 ;margin: 0 0;vertical-align: bottom">
            <img class="pic_small" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4155484523,1782845875&fm=26&gp=0.jpg">
          </el-col>
          <el-col :span="6" style="padding: 0 0 ;margin: 0 0;text-align: end">
            <img class="pic_small" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3682275666,1848192364&fm=26&gp=0.jpg">
          </el-col>
        </el-row>

      </el-row>
    </el-card>

    <!--一个系列-->
    <h2 class="title_leabl">系列图片二</h2>
    <el-card class="classify_home" shadow="always">
      <el-row :gutter="3">
        <el-col :span="12" style="overflow: hidden">
          <img style="height: 408px" src="data:image/jpeg;base64,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6KACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFHSigdKKAE70Ud6KACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFHSigdKKAE70Ud6KACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKAFHSigdKKAE70U6igBtFOooAbRTqKAG0U6igBtFOooAbRTqKAG0U6igBtFOooAbRTqKAG0U6igBtFOooAbRTqKAG0U6igBtFOooAbRTqKAG0U6igBtFOooAbRTqKAG0U6igBtFOooAbRTqKAG0U6igBtFOooAbRTqKAG0U6igBtFOooAbRTqKAG0U6igBtFOooAbRTqKAG0U6igBB0opRRQB/9k=">
        </el-col>
        <el-row :span="12">
          <el-col :span="6" style="padding: 0 0 ;margin: 0 0;text-align: center">
            <img class="pic_small" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=276125511,2387631893&fm=26&gp=0.jpg">
          </el-col>
          <el-col :span="6" style="padding: 0 0 ;margin: 0 0;text-align: center">
            <img class="pic_small" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1786069399,670971986&fm=26&gp=0.jpg">
          </el-col>
          <el-col :span="6" style="padding: 0 0 ;margin: 0 0;vertical-align: bottom">
            <img class="pic_small" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3221009108,3870305620&fm=26&gp=0.jpg">
          </el-col>
          <el-col :span="6" style="padding: 0 0 ;margin: 0 0;text-align: end">
            <img class="pic_small" src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3130391088,48026999&fm=26&gp=0.jpg">
          </el-col>
        </el-row>

      </el-row>
    </el-card>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        bannerList: [
          {
            title: '老鹰',
            src: '/static/maotouying.png',
            url: ''
          }, {
            title: '猫',
            src: '/static/mao.jpg',
            url: ''
          }, {
            title: '绿叶',
            src: '/static/yezi.jpg',
            url: ''
          }, {
            title: '插画',
            src: '/static/chahua.jpg',
            url: ''
          },
        ],
        trans: false,
        infoList: null,
        visible: false,
        info_detail: '',
        newsInfoList: null,
        ruleList: null,
        interVal: null
      }
    },
    created: function () {
      // 获取公告
      this.getInfoList();
      // 获取通知公告
      this.getNewsInfoList();
      // 获取政策法规
      this.getRulesList();
    },
    destroyed: function () {
      clearInterval(this.interVal);
    },

    methods: {
      // 跳转登录界面
      jumpLogin: function (type) {
        console.log(type);
        this.$router.push("/home/login/" + type);
      },
      // 跳转新闻详情
      jumpNews: function (type, id) {
        console.log(type + "---" + id);
        this.$router.push('/home/news_detail/' + type + "/" + id);
      },
      // 获取通知列表
      getInfoList: function () {
        this.$http.get('https://www.easy-mock.com/mock/5b9c5a0336fb55543715f828/review/infolist').then(response => {
          var body = response.body;
          if (body == null) {

            return;
          }
          if (!body.success) {
            return;
          }
          this.infoList = body.data;
        }, response => {
          // error callback
        });
      },
      // 获取通知公告
      getNewsInfoList: function () {
        this.$http.get('https://www.easy-mock.com/mock/5b9c5a0336fb55543715f828/review/news_info').then(response => {
          var body = response.body;
          if (body == null) {
            return;
          }
          if (!body.success) {
            return;
          }
          this.newsInfoList = body.data;
        }, response => {

        });
      },
      // 获取政策法规
      getRulesList: function () {
        this.$http.get('https://www.easy-mock.com/mock/5b9c5a0336fb55543715f828/review/news_rule').then(response => {
          var body = response.body;
          if (body == null) {
            return;
          }
          if (!body.success) {
            return;
          }
          this.ruleList = body.data;
        }, response => {

        });
      },
      // 切换公告
      changeInfo: function () {
        var that = this;
        this.interVal = setInterval(function () {
          var div = that.$refs.info_item.style.marginTop;
          div = '-70px';
          that.trans = true;
          // 在异步函数中会出现this的偏移问题，此处一定要先保存好this的指向
          setTimeout(function () {
            that.infoList.push(that.infoList[0]);
            that.infoList.shift();
            div = '0px';
            that.trans = false;  // 这个地方如果不把animate 取反会出现消息回滚的现象，此时把ul 元素的过渡属性取消掉就可以完美实现无缝滚动的效果了
          }, 1000)
        }, 4000);
      },
      // 显示详情
      showInfoDetail: function (title) {
        this.visible = true;
        this.info_detail = title;
      }
    }
  }
</script>

<style scoped>
  img{
    cursor: pointer !important;
  }
  .title_leabl {
    margin-top: 10px;
    text-align: left;
    font-size: 18px;
    font-weight: bold;
    padding-left: 10px;
    border-left: solid red 10px;
  }
  .small_td {
    width: 556px;
    height: 199px;
    padding: 0 0;
    margin: 0 0;
    border-spacing: 0
  }

  .big_td {
    width: 1112px;
    height: 398px;
    padding: 0 0;
    margin: 0 0;
  }

  .pic_small {
    width: 100%;
    height: 201px;
    padding: 0 0;
    margin: 0 0;
  }

  .classify_home {
    margin-top: 20px;
    overflow: hidden;
    border-spacing: 0;
    background: black;
    height: 408px;
    margin-bottom: 20px;
    border-radius: 10px !important;
  }

  .card_classify {
    padding: 0 0 !important;

  }

  .el-card__body {
    padding: 0 0;
  }

  .classify_container {
    width: 275px;
    margin: 0 0;
    height: 140px;
    position: relative;
    padding: 0 0;
  }

  .classify_container p {
    position: absolute;
    top: 10px;
    text-align: center;
    left: 0;
    right: 0;
    font-size: 15px;
    color: white;
  }

  .classify_container img {
    width: 275px;
    margin: 0 0;
    height: 180px;
  }

  .login_container {
    display: flex;
    height: 90px;
    margin: 0px 0px;
    padding: 0px 0px;
    cursor: pointer;
  }

  .login_container .p_label {
    width: 40px;
    background-color: orangered;
    height: 90px;
    color: white;
    text-align: center;
    display: block;
    font-size: 12px;
    line-height: 90px;
  }

  .login_container .p_label#single {
    background-color: #0072ff;
  }

  .login_container .p_title {
    width: 100%;
    height: 90px;
    text-align: center;
    display: block;
    font-size: 18px;
    line-height: 90px;
  }

  * {
    margin: 0px 0px;
    padding: 0px 0px;
  }

  .info_container {
    width: 100%;
    height: 60px;
    position: relative;
    background-color: #ff493c;
    overflow: hidden;
  }

  .info_container .info_item {
    width: 100%;
    height: 60px;
    line-height: 50px;
    left: 0px;
    top: 0px;
    text-align: left;
    padding: 5px 5px;
    color: white;
    margin: 0px 0px;
    font-size: 14px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-decoration: white;
  }

  .banner_container {
    width: 100%;
    height: 500px;
    position: relative;
    cursor: pointer;
  }

  .banner_container img {
    width: 100%;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
  }

  .banner_container p {
    z-index: 2;
    color: white;
    font-size: 22px;
    position: absolute;
    bottom: 15px;
    left: 10px;
  }

  .new_head {
    display: flex;
    height: 30px;
  }

  .new_head .p1 {
    height: 30px;
    line-height: 30px;
    background-color: black;
    width: 8px;
    margin: 0px 0px;
  }

  .new_head .p3 {
    color: white;
    margin-left: 10px;
    height: 30px;
    line-height: 30px;
    margin-top: 0px;
    padding-left: 5px;
    padding-right: 5px;
    font-weight: bold;
    background-color: #00a7ff;
  }

  .new_head .p3#info {
    background-color: #ff2b27;
  }

  .new_head a {
    color: #00a7ff;
    float: right;
    text-align: center;
    height: 30px;
    line-height: 30px;
    margin-left: 10px;
  }

  .new_container {
    padding: 5px 5px;
    margin: 0px 0px;
  }

  .new_container .new_line {
    display: flex;
    height: 28px;
    list-style-type: circle;
    cursor: pointer;
  }

  .new_line .new_title {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 28px;
    font-size: 13px;
    margin-top: 0px;
    text-align: left;
    line-height: 28px;
    margin-bottom: 0px;

  }

  .new_line .new_title:hover {
    text-decoration: underline

  }

  .new_line img {
    width: 28px;
    height: 13px;
    line-height: 13px;
    margin-top: 6.5px;
  }


</style>
