<template>
    <div id="industry">
      <p>
      <li><router-link  to="/Industry/IndustryIndexMacroscopic">产业指数-三大产业综合</router-link></li>
      <li><router-link  to="/Industry/IndustryIndexPrimaryIndustry">产业指数-各省第一产业增加值</router-link></li>
      <li><router-link  to="/Industry/IndustryIndexSecondaryIndustry">产业指数-各省第二产业增加值</router-link></li>
      <li><router-link  to="/Industry/IndustryIndexTertiaryIndustry">产业指数-各省第三产业增加值</router-link></li>
      </p>

      <p>
      <li><router-link  to="/Industry/IndustryIndexKeyCityPrimaryIndustry">产业指数-全国重点城市-第一产业</router-link></li>
      <li><router-link  to="/Industry/IndustryIndexKeyCitySecondaryIndustry">产业指数-全国重点城市-第二产业</router-link></li>
      <li><router-link  to="/Industry/IndustryIndexKeyCityTertiaryIndustry">产业指数-全国重点城市-第三产业</router-link></li>
      </p>

      <router-view></router-view>


    </div>
</template>
<style scoped>

</style>
<script>
  export default({
    name: "industry",
    mounted: function () {
     }})
</script>
