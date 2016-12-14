<template>
    <div>
      <ul>
        <p>
        <li><router-link to="/StartUp/StartupIndexPackNum">创业指数-各省园区数量-园区入驻企业 </router-link></li>
        <li><router-link to="/StartUp/StartupKeyCityPackNum">创业指数-重点城市园区数量-园区入驻企业及省内排行 </router-link></li>
        </p>
        <p>
        <li><router-link to="/StartUp/StartupIndexEstablishNum">创业指数-各省成立企业数量分布</router-link></li>
        <li><router-link to="/StartUp/StartupKeyCityEstablishNum">创业指数-重点城市成立企业数量分布</router-link></li>
        <li><router-link to="/StartUp/StartupIndexAreaIndustry">创业指数-地区成立企业数量行业分布</router-link></li>
        </p>
      </ul>
      <router-view></router-view>

    </div>

</template>
<style scoped>

</style>
<script>

</script>
