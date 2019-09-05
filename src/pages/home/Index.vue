<template>
  <div class="page-index">
    <div class="page-index-con">
      <img class="page-index-con-map" :src="imgMap"/>

      <div class="page-index-con-location" @click="navigatePage">
        <img :src="imgLocation"/>
        <h4>金禾嘉园20</h4>
      </div>

    </div>
  </div>
</template>

<script>
import { exchangeApi } from '../../service/home';
import imgLocation from '../../assets/images/icon_location.png';
import imgMap from '../../assets/images/map.png';

export default {
  components: {

  },
  props: {
    
  },
  data() {
    return {
      imgMap,
      imgLocation,
      list: [],
    }
  },
  mounted() {
    this.getExchangeInfo();
  },
  methods: {
    async getExchangeInfo() {
      const params = {
        request: 1,
      };
      const resData = await exchangeApi({ params });
      if (resData.ErrorNo) { return }
      this.list = resData.District;
    },
    navigatePage() {
      this.$router.push({ name: 'location' });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .page-index {
    height: 100%;
    min-width: 1200px;
    background: url('../../assets/images/bg_1.png') no-repeat center;
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @keyframes scaleDraw {  
      0%{
        transform: scale(1);  
      }
      25%{
        transform: scale(1.15); 
      }
      50%{
        transform: scale(1);
      }
      75%{
        transform: scale(1.15);
      }
    }
    &-con {
      position: relative;
      &-map {
        width: 1128px;
        height: 656px;
      }
      &-location {
        position: absolute;
        top: 200px;
        right: 300px;
        cursor: pointer;
        text-align: center;
        img {
          width: 16px;
          height: 16px;
          -webkit-animation-name: scaleDraw; 
          -webkit-animation-timing-function: ease-in-out; 
          -webkit-animation-iteration-count: infinite;  
          -webkit-animation-duration: 5s;
        }
        h4 {
          font-size: 12px;
          color: rgb(88, 173, 182);
        }
        h4:hover {
          color: #FFC038;
        }
      }
    }
  }
</style>
