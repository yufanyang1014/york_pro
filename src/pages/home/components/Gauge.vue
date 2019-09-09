<template>
  <div style="width: 100%; height: 100%" ref="myGaugeEchart"></div>
</template>

<script>
import echarts from "echarts";
import '../../../../node_modules/echarts/map/js/china';

export default {
  name: 'Gauge',
  props: {
    value: null,
    min: null,
    max: null,
  },
  data() {
    return {
      chart: null,
      myChart:'',
    };
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.myGaugeEchart);
    const option = {
      // tooltip : {
      //   formatter: "{a} <br/>{b} : {c}%"
      // },
      min: -40,
      series: [
        {
          name: '',
          type: 'gauge',
          data: [{value: this.value, name: this.max > 100 ? '℃' : '%'}],
          min: this.min,
          max: this.max,
          axisLine: {          
            lineStyle: {    
              color: [[0.2, 'green'],[0.8, 'blue'],[1, 'red']], 
              width: 2
            }
          },
          axisLabel: {
            fontSize: 10,
            color: '#fff'
          },
          detail : {
            formatter:'{value}',
            textStyle: { // 其余属性默认使用全局文本样式
                color: '#fff',
                fontWeight: 'bolder',
                fontSize: 14
            }
          },
          axisTick: { // 坐标轴小标记
              length: 8,        
              lineStyle: {    
                  color: 'auto'
              }
          },
          splitLine: { // 分隔线
            show: true,     
            length: 12,       
          },
          title : { // ℃
            show : true,
            textStyle: {       // 其余属性默认使用全局文本样式
                fontWeight: 'bolder',
                color: '#fff'
            }
          },
          itemStyle: {
            color: 'auto'
          }
        }
      ]
    }
    this.myChart.setOption(option);
    this.chartConfigure();
  },
  beforeDestroy() {
    if (!this.chart) {
        return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    chartConfigure() {
      window.onresize = this.myChart.resize;
    },
  },
}
</script>
<style scoped lang="less">

</style>
