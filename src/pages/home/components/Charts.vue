<template>
  <div :style="{height:'140px',width:'100%'}" ref="myEchart"></div>
</template>

<script>
import echarts from "echarts";
import '../../../../node_modules/echarts/map/js/china';

export default {
  name: 'Charts',
  props: {
    
  },
  data() {
    return {
      chart: null,
      myChart:'',
      option: {
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
        }]
      },
    };
  },
  mounted() {
    this.myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置
    this.myChart.setOption(this.option);
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
