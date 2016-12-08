<template >
  <div id="mapinner2">
  </div>
</template>


<script>

  import  echarts from 'echarts'

  export default({

    name : "autoPaly",
    mounted:function (){

      var app = [];
      var myChart = echarts.init(document.getElementById('mapinner2'));
      var option = null;
      myChart.showLoading();


      this.$http.get(this.$store.state.BASE_URL + '/provincesQuarterGDPIndex')
        .then(function (response) {
          myChart.hideLoading();

          var dataSource = response.data;
          //数据源准备
//          var dataSource = {"AreaValue":{"timeline":{"2016Q4":{"福建":"234","浙江":"234","广东":"123"},"2016Q3":{"福建":"33","浙江":"234","广东":"345"},"2016Q2":{"福建":"123","浙江":"234","广东":"345"},"2016Q1":{"福建":"314","浙江":"111","广东":"111"},"2015Q4":{"福建":"123","浙江":"234","广东":"345"},}}};
          //倒序排列一下
          var xAxisTime  = Object.keys(dataSource.AreaValue.timeline).reverse();
          var provinceNameArry = Object.keys(dataSource.AreaValue.timeline[xAxisTime[0]])  ;


          //根据省份名称获得对应数据
          function getProvinceDate(dataSourceOUT,provinceName) {
//       函数直接依赖外部变量不太好那,这里冗余一下
            let xAxisTimeInner  = Object.keys(dataSourceOUT.AreaValue.timeline).reverse();
            var someProviceValue = [];
            for (let i= 0; i < xAxisTime.length ;i++ ){
              var quarterData = dataSourceOUT.AreaValue.timeline[xAxisTimeInner[i]];
              var currentValue = eval("quarterData."+provinceName)
              someProviceValue.push(currentValue) ;
            }
            return someProviceValue
          }


          //图标展现的数据格式要求
          var  seriesValue = [];
          for (let i = 0 ; i < provinceNameArry.length; i++){
            let objSere = new  Object();
            objSere.name =  provinceNameArry[i];
            objSere.type = 'line'
            objSere.stack =   '总量'
            objSere.areaStyle =  {normal: {}}
            objSere.label = {normal:{show:true,position:'top'}}
            objSere.data = getProvinceDate(dataSource,provinceNameArry[i]);
            seriesValue.push(objSere)
          }
          //控制一下默认选中的图例
          var legendSelectObj =  new Object()
          for( let i = 5;i<provinceNameArry.length;i++ ){
            legendSelectObj[provinceNameArry[i]] = false
          }

           debugger;

          // 这个得控制一下默认展现
          option = {
            title: {
              text: '各地区生产总值季度增长趋势（亿元）'
            },
            tooltip : {
              trigger: 'axis'
            },
            legend: {
              data:provinceNameArry,
              top:'5%',
              selected: legendSelectObj
            },
            grid: {
              left: '3%',
              right: '4%',
              top:'12%',
              bottom: '3%',
              containLabel: true
            },
            xAxis : [
              {
                type : 'category',
                boundaryGap : false,
                data :  xAxisTime
              }
            ],
            yAxis : [
              {
                type : 'value'
              }
            ],
            series :seriesValue
          };
          myChart.setOption(option);


        }, function (response) {
          console.log('API请求发生异常 ' + response)
        })





// mounted  end
    }
  })


</script >



<style  scoped>

  #mapinner2{
    height: 800px;
    width:  80%;
    margin: 0 auto;
  };

</style>

