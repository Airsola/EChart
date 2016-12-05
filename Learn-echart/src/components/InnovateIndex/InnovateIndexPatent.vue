<template>

  <div id="mapinner">
  </div>

</template>


<script>

  import  echarts from 'echarts'

  export default({
    name: "mpaDeom",
    data () {
      return {
        msg: 'Welcome Map'
      }
    },
    mounted: function () {




      var waterMarkText = '锐信视界';
      var canvas = document.createElement('canvas');
      var ctx = canvas.getContext('2d');
      canvas.width = canvas.height = 200;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.globalAlpha = 0.2;
      ctx.font = "30px Arial";
      ctx.translate(50, 50);
      ctx.rotate(-Math.PI / 4);
      ctx.fillText(waterMarkText, 0, 0);

//在这里外部虚拟dom已经被替换完成了
// 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('mapinner'));

      var dataSource = {"AreaValue":{"timeline":{"2016":{"InventPatent":{"福建":"333","浙江":"234","广东":"345"},"NewTypePatent":{"福建":"123","浙江":"234","广东":"345"},"AppearanceDesignPatent":{"福建":"123","浙江":"234","广东":"345"}},"2015":{"InventPatent":{"福建":"123","浙江":"234","广东":"345"},"NewTypePatent":{"福建":"123","浙江":"234","广东":"345"},"AppearanceDesignPatent":{"福建":"123","浙江":"234","广东":"345"}},"2014":{"InventPatent":{"福建":"123","浙江":"234","广东":"345"},"NewTypePatent":{"福建":"123","浙江":"234","广东":"345"},"AppearanceDesignPatent":{"福建":"123","浙江":"234","广东":"345"}}}}};
      debugger;

      var timeLine  = Object.keys(dataSource.AreaValue.timeline).reverse();

      var firstItemDate =  dataSource.AreaValue.timeline[timeLine[0]];

      var provinceNameArry = Object.keys(firstItemDate.InventPatent)  ;

      //获得各个专利细项各省数据
      function patentTypeEachProvinceValue(patentType) {
        let  timeLine  = Object.keys(dataSource.AreaValue.timeline).reverse();
        let firstItemDate =  dataSource.AreaValue.timeline[timeLine[0]];
        let patentObj =  eval("firstItemDate."+patentType)
        var patentProvinceValueArry = Object.values(patentObj);

      return patentProvinceValueArry
      }

      //根据省份名称获得对应数据
//      function getProvinceDate(dataSourceOUT,provinceName) {
////       函数直接依赖外部变量不太好那,这里冗余一下
//        let xAxisTimeInner  = Object.keys(dataSourceOUT.AreaValue.timeline).reverse();
//        var someProviceValue = [];
//        for (let i= 0; i < xAxisTime.length ;i++ ){
//          var quarterData = dataSourceOUT.AreaValue.timeline[xAxisTimeInner[i]];
//          var currentValue = eval("quarterData."+provinceName)
//          someProviceValue.push(currentValue) ;
//        }
//
//        return someProviceValue
//      }


      //图标展现的数据格式要求
//      var  seriesValue = [];
//      for (let i = 0 ; i < provinceNameArry.length; i++){
//        let objSere = new  Object();
//        objSere.name =  provinceNameArry[i];
//        objSere.type = 'line'
//        objSere.stack =   '总量'
//        objSere.areaStyle =  {normal: {}}
//        objSere.label = {normal:{show:true,position:'top'}}
//        objSere.data = getProvinceDate(dataSource,provinceNameArry[i]);
//        seriesValue.push(objSere)
//      }


      //-----------
      var option = {
        backgroundColor: {
          type: 'pattern',
          image: canvas,
          repeat: 'repeat'
        },
        title: {text: '创新指数-各省专利数量构成'},

        tooltip : {
          trigger: 'axis',
          axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          top: 'bottom' ,
          data:['发明专利有效量','实用新型专利有效量','外观设计专利有效量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '7%',
          top:'7%',
          containLabel: true
        },
        yAxis : [
          {
            type : 'category',
//            data : ['福建','浙江','广东']
            data : provinceNameArry
          }
        ],
        xAxis : [
          {
            position: 'top',

            type : 'value'
          }
        ],
        series : [
          {
            name:'发明专利有效量',
            type:'bar',
            stack: '专利',

            data:patentTypeEachProvinceValue("InventPatent")
          },
          {
            name:'实用新型专利有效量',
            type:'bar',
            stack: '专利',
            data:patentTypeEachProvinceValue("NewTypePatent")
          },
          {
            name:'外观设计专利有效量',
            type:'bar',
            stack: '专利',
            data:patentTypeEachProvinceValue("AppearanceDesignPatent")
          }
        ]
      };


      myChart.setOption(option);



//end
    }
  })


</script>

<style>
  #mapinner {
    height: 400px;
    width: 600px;
    margin: 0 auto;
  }

</style>

