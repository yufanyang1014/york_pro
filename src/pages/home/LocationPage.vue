<template>
  <div class="page-second">
    <div class="page-second-con">
      <h2 class="page-second-con-name">金禾嘉园20</h2>
      <div class="page-second-con-table">
        <div class="page-second-con-table-th">
          <div class="th-item" style="width: 450px">地址</div>
          <div class="th-item" style="width: 122px">姓名</div>
          <div class="th-item" style="width: 450px">主机型号</div>
          <div class="th-item" style="width: 100px">主机状态</div>
        </div>
        <div class="page-second-con-table-tr" v-for="(item, idx) in mocData" :key="idx">
          <div class="tr-item more" style="width: 450px" @click="navigatePage">{{item.address}}</div>
          <div class="tr-item" style="width: 122px">{{item.name}}</div>
          <div class="tr-item" style="width: 450px">{{item.ip}}</div>
          <div class="tr-item" style="width: 100px"><img :src="item.status===1 ? imgOnline : imgOffline"/></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgOnline from '../../assets/images/icon_online.png';
import imgOffline from '../../assets/images/icon_offline.png';

export default {
  components: {

  },
  props: {
    
  },
  data() {
    return {
      imgOnline,
      imgOffline,
      mocData: [
        {
          address: '杭州市临安市锦城街道金禾嘉园5幢1单元506财务室100234',
          name: '徐颖',
          ip: 'x79783909877t8088',
          status: 1,
        },
        {
          address: '杭州市临安市锦城街道金禾嘉园5幢1单元506',
          name: '徐颖',
          ip: 'x79783909877t8088',
          status: 1,
        },
        {
          address: '杭州市临安市锦城街道金禾嘉园5幢1单元506',
          name: '徐颖',
          ip: 'x79783909877t8088jjjjjjk908760887882387wvewvwevwevwevw',
          status: 1,
        },
        {
          address: '杭州市临安市锦城街道金禾嘉园5幢1单元506',
          name: '徐颖',
          ip: 'x79783909877t8088',
          status: 2,
        },
        {
          address: '杭州市临安市锦城街道金禾嘉园5幢1单元506',
          name: '徐颖',
          ip: 'x79783909877t8088',
          status: 1,
        },
        {
          address: '杭州市临安市锦城街道金禾嘉园5幢1单元506',
          name: '徐颖',
          ip: 'x79783909877t8088',
          status: 1,
        },
        {
          address: '杭州市临安市锦城街道金禾嘉园5幢1单元506',
          name: '徐颖',
          ip: 'x79783909877t8088',
          status: 1,
        },
        {
          address: '杭州市临安市锦城街道金禾嘉园5幢1单元506',
          name: '徐颖',
          ip: 'x79783909877t8088',
          status: 1,
        },
        {
          address: '杭州市临安市锦城街道金禾嘉园5幢1单元506',
          name: '徐颖',
          ip: 'x79783909877t8088',
          status: 1,
        },
        {
          address: '杭州市临安市锦城街道金禾嘉园5幢1单元506',
          name: '徐颖',
          ip: 'x79783909877t8088',
          status: 2,
        },
      ]
    }
  },
  mounted() {
    
  },
  methods: {
    navigatePage() {
      this.$router.push({ name: 'detail' });
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .page-second {
    height: 100%;
    min-width: 1200px;
    background: url('../../assets/images/bg_2.png') no-repeat center;
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    &-con {
      width: 1200px;
      &-name {
        font-size: 24px;
        font-weight: 400;
        color: #ffffff;
        padding: 0 0 42px 60px;
      }
      &-table {
        padding: 0 18px 0 58px;
        background: rgba(29,38,105,0.5);
        border: 1px solid rgba(67, 154, 255, 0.15);
        box-shadow: 0px 0px 40px 0px rgba(12,21,48,0.3);
        border-radius: 8px;
        font-size: 18px;
        font-weight: 400;
        color: #ffffff;
        max-height: 580px;
        overflow: auto;
        &-th {
          height: 71px;
          border-bottom: 1px solid #3B4172;
          .th-item {
            text-align: center;
            line-height: 71px;
            float: left;
          }
        }
        &-tr {
          height: 63px;
          border-bottom: 1px solid #3B4172;
          .tr-item {
            text-align: center;
            line-height: 63px;
            float: left;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            img {
              width: 20px;
              height: 20px;
            }
          }
          .more {
            cursor: pointer;
          }
          .more:hover {
            color: #FFC038
          }
        }
      }
    }
  }
</style>
