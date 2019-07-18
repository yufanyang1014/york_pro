<template>
  <div class="page-third">
    <div class="page-third-title">
      <span class="page-third-title-name">约克空调智慧数据中心</span>
      <span class="page-third-title-time">当前日期：{{timeNow}}</span>
    </div>
  </div>
</template>

<script>
import imgLeft from '../../assets/images/left.png';
import imgRight from '../../assets/images/right.png';
import imgQian from '../../assets/images/qian.png';
import imgLogo from '../../assets/images/logo.png';
import { clearInterval } from 'timers';

export default {
  components: {

  },
  props: {
    
  },
  data() {
    return {
      imgLeft,
      imgRight,
      imgQian,
      imgLogo,
      timeNow: '',
      timer: null,
    }
  },
  created() {
    this.getNowTime();
  },
  mounted() {

  },
  destroyed() {
    clearInterval(this.timer);
  },
  methods: {
    getTime(){     	//获取时间
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();
      var hour = date.getHours();
      var minute = date.getMinutes();
      var second = date.getSeconds();

      //这样写显示时间在1~9会挤占空间；所以要在1~9的数字前补零;
      if (hour<10) {
        hour='0'+hour;
      }
      if (minute < 10) {
        minute='0'+minute;
      }
      if (second < 10) {
        second='0'+second;
      }
      const times = `${year}年${month}月${day}日 ${hour}:${minute}:${second}`;
      this.timeNow = times;
    },
    getNowTime() {
      this.getTime();
      // this.timer = setInterval(() => { this.getTime() },1000);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .page-third {
    height: 100%;
    min-width: 1200px;
    background: url('../../assets/images/bg_3.png') no-repeat center;
    background-size: 100% 100%;
    &-title {
      height: 104px;
      background: url('../../assets/images/title.png') no-repeat center;
      background-size: cover;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      &-name {
        font-size: 40px;
        font-weight: 400;
        color: #ffffff;
      }
      &-time {
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        position: absolute;
        left: 30px;
        top: 67px;
      }
    }
  } 
</style>
