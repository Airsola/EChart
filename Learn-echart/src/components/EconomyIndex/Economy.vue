<template>
  <div id="economy">
      <ul>
        <p>
        <li><router-link to="/Economy/EconomyAreaGDPIndex" >经济指数-地区生产总值</router-link></li>
        <li><router-link to="/Economy/EconomyLegalPersonIndex">经济指数-法人单位数量</router-link></li>
        <li><router-link to="/Economy/EconomyEnterpriseLegalPersonIndex">经济指数-企业法人单位数量</router-link></li>

        <li><router-link to="/Economy/economyIndexKeyCityYearEndTotalPopulation">经济指数-重点城市年末总人口</router-link></li>
        <li><router-link to="/Economy/economyIndexKeyCityAvgSalary">经济指数-重点城市在职岗位平均工资</router-link></li>
        </p>

        <p>
        <li><router-link to="/Economy/ProvinceGDPTendency">经济指数-地区生产总值季度增长趋势</router-link></li>
        <li><router-link to="/Economy/LegalPersonTendency">经济指数-各省法人单位数增长趋势</router-link></li>
        <li><router-link to="/Economy/EnterpriseLegalPersonTendency">经济指数-各省企业法人数增长趋势</router-link></li>
        </p>
        <router-view></router-view>

      </ul>
    </div>
</template>
<style scoped>


</style>
<script>
  export default({
    name: "economy",
    mounted: function () {

    }})

</script>
