<template>
    <div>
      <ul>
        <p>
        <li><router-link to="/Innovate/InnovateIndexPatent">创新指数-各省专利数量构成</router-link></li>
        <li><router-link to="/Innovate/InnovateIndexCopyright">创新指数-各省作品著作权</router-link></li>
        <li><router-link to="/Innovate/InnovateIndexKeyCityInvisibleAssets">创新指数-重点城市无形资产数量</router-link></li>
        <li><router-link to="/Innovate/InnovateIndexProvinceAreaInvisibleAssets">创新指数-各省园区无形资产分布</router-link></li>
        </p>
      </ul>

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
