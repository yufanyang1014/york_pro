<template>
  <div class="page-third">
    <div>
      <div class="page-third-title">
          <span class="page-third-title-name">约克空调智慧数据中心</span>
          <span class="page-third-title-time">当前日期：{{timeNow}}</span>
      </div>
      <div class="page-third-con">
        <div class="page-body">
          <div class="page-body-desc">
            <div class="page-body-desc-con">
              <img class="page-body-desc-con-qian" :src="imgQian"/>
              <div class="page-body-desc-con-zq">
                <span>中乾暖通</span>
                <label>ZhongQian H.V.A.C</label>
              </div>
            </div>
            <div class="page-body-desc-info">“临安中乾暖通是一家致力于暖通技术为核心，专业为中高端客户提供舒适生活整体解决方案的产品服务商，是临安唯一约克指定专卖店！”</div>
            <div class="page-body-desc-params">成立时间：2012年</div>
            <div class="page-body-desc-params">主        营：约克空调地暖二合一</div>
            <div class="page-body-desc-params">公司地址：浙江省临安区锦城街道钱王街1057-1059号</div>
          </div>
          <div class="page-body-show">
            <div class="online-total-con">
              <div class="data-container">
                <span>在线总量</span>
                <label>3 0, 0 0 0, 0 0 0</label>
                <em>运行在线</em>
              </div>
            </div>
            <div class="hour-consume-con">
              <label>小时耗电量</label>
              <span>21,334,300</span>
            </div>
            <div class="day-consume-con">
              <label>天耗电量</label>
              <span>21,334,300</span>
            </div>
          </div>
          <div class="page-body-york">
            <york-title title="主机参数"/>
            <div class="page-body-york-con">
              <img class="page-third-logo" :src="imgLogo"/>
              <div class="page-body-york-con-key marTop">主机型号：YVAG014RSE20</div>
              <div class="page-body-york-con-key">开机时间：2019年7月14日</div>
              <div class="page-body-york-con-key">运行模式：制冷/制热</div>
              <div class="page-body-york-con-key flexable">
                <span>出水温度：5℃</span>
                <span>回水温度：10℃</span>
                <span>环境温度：10℃</span>
              </div>
            </div>
          </div>
        </div>
        <div class="page-footer">
          <div class="page-footer-desc">
            <york-title title="客户信息"/>
            <div class="page-footer-desc-con">
              <img class="page-third-logo" :src="imgLogo"/>
              <div class="page-footer-desc-con-item">用户姓名：王先生</div>
              <div class="page-footer-desc-con-item">设备型号：YVAG014RSE20</div>
              <div class="page-footer-desc-con-item">开机时间：2019年7月14号</div>
              <div class="page-footer-desc-con-item">供暖面积：150平方</div>
              <div class="page-footer-desc-con-item">用户地址：春天华府XX幢XXX单元X室春天华府XX幢XXX单元X室春天华府XX幢XXX单元X室</div>
            </div>
          </div>
          <div class="page-footer-show">
            <york-title title="主机设备性能"/>
            <div class="page-footer-show-con">
              <div class="top-chart"></div>
              <york-title title="设备运行状态"/>
              <div class="bottom-chart">
                <div class="bottom-chart-table">
                  <div class="table-th">
                    <span>运行模式</span>
                    <span>运行状态</span>
                    <span>环境温度</span>
                    <span>PM2.5浓度</span>
                  </div>
                  <div class="table-td">
                    <span>制冷/制热</span>
                    <span>开机</span>
                    <span>27</span>
                    <span>6</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="page-footer-chart">
            <york-title title="天耗电量"/>
            <div class="page-footer-chart-con">
              <div class="top-chart"></div>
              <york-title title="小时耗电量"/>
              <div class="bottom-chart">
                <charts/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import YorkTitle from './components/YorkTitle';
import imgQian from '../../assets/images/qian.png';
import imgLogo from '../../assets/images/logo.png';
import Charts from './components/Charts.vue'

export default {
  components: {
    Charts,
    YorkTitle,
  },
  props: {
    
  },
  data() {
    return {
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
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let hour = date.getHours();
      let minute = date.getMinutes();
      let second = date.getSeconds();

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
      this.timer = setInterval(() => { this.getTime() },1000);
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  @import url('./DetailPage.less');
</style>
