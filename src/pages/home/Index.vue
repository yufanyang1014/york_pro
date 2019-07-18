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
    }
  },
  mounted() {

  },
  methods: {
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
