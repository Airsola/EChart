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
      myChart.hideLoading();


      //数据源准备
      var dataSource = {"AreaValue":{"timeline":{"2016Q4":{"福建":"234","浙江":"234","广东":"123"},"2016Q3":{"福建":"33","浙江":"234","广东":"345"},"2016Q2":{"福建":"123","浙江":"234","广东":"345"},"2016Q1":{"福建":"314","浙江":"111","广东":"111"},"2015Q4":{"福建":"123","浙江":"234","广东":"345"},}}};
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

      // 这个得控制一下默认展现
      option = {
        title: {
          text: '地区生产总值季度增长趋势'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend: {
          data:provinceNameArry
        },
//        toolbox: {
//          feature: {
//            saveAsImage: {}
//          }
//        },
        grid: {
          left: '3%',
          right: '4%',
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
// [
//          {
//            name:'邮件营销',
//            type:'line',
//            stack: '总量',
//            areaStyle: {normal: {}},
//            data:getProvinceDate(dataSource,"福建")
//          },
//          {
//            name:'联盟广告',
//            type:'line',
//            stack: '总量',
//            areaStyle: {normal: {}},
//            data:getProvinceDate(dataSource,"浙江")
//          },
//          {
//            name:'视频广告',
//            type:'line',
//            stack: '总量',
//            areaStyle: {normal: {}},
//            data:getProvinceDate(dataSource,"广东")
//          },
//          {
//            name:'直接访问',
//            type:'line',
//            stack: '总量',
//            areaStyle: {normal: {}},
//            data:[320, 332, 301, 334, 390, 330, 320]
//          },
//          {
//            name:'搜索引擎',
//            type:'line',
//            stack: '总量',
//            label: {
//              normal: {
//                show: true,
//                position: 'top'
//              }
//            },
//            areaStyle: {normal: {}},
//            data:[820, 932, 901, 934, 1290, 1330, 1320]
//          }
//        ]
      };

      myChart.setOption(option);

// mounted  end
    }
  })


</script >



<style  scoped>

  #mapinner2{
    height: 600px;
    width:  80%;
    margin: 0 auto;
  };

</style>

