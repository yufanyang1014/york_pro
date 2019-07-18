<template>
    <div class="echarts">
        <div :style="{height:'800px',width:'100%'}" ref="myEchart"></div>
    </div>
</template>

<script>
import echarts from "echarts";
// import '../../../../../node_modules/echarts/map/js/china.js'
import '../../../../node_modules/echarts/map/js/china';
// import dataLinan from '../../../constants/linan.json';

// import axios from 'axios';
export default {
  name: 'Charts',
  props: {
    
  },
  data() {
    return {
      chart: null,
      myChart:'',
      option:{
        backgroundColor: "#fff",
        tooltip: {
            show:false,
        }, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 10,
          max: 60,
          text:['High','Low'],
          realtime: false,
          calculable: false,
          color: [
              '#cc3304',
              '#5ca4e4',
              '#f97a06',
              '#80C21D',
              '#8C3C99',
              '#1962be'
          ]
        },
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: false,
          label: {
              normal: {
                  show: true, // 是否显示对应地名
                  textStyle: {
                      color: 'rgba(0,0,0,0.7)'
                  }
              }
          },
          itemStyle: {
            normal: {
                borderColor: 'red'
            },
            emphasis: {
                areaColor: 'red',
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 20,
                borderWidth: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [
          {
            type: 'scatter',
            coordinateSystem: 'geo', // 对应上方配置
            itemStyle:{
                emphasis:{label:{show:true}}   //鼠标移入城市名称是否展示
            },
          },
          {
            name: '查看详情', // 浮动框的标题
            type: 'map',
            geoIndex: 0,
          }
        ]
      }
    };
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
    this.myChart.setOption(this.option);
    this.chinaConfigure();
  },
  beforeDestroy() {
    if (!this.chart) {
        return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    chinaConfigure() {
        var _this = this;
        window.onresize = _this.myChart.resize;
        this.myChart.on('click', function(params){
            // eslint-disable-next-line no-console
            console.log(params);
        });
    },
    // async test() {
    //   const response = await axios.get('/user?ID=12345');
    // },
  },
}
</script>
<style scoped lang="less">
  .echarts {
    width: 100%;
    height: 900px;
  }
</style>
