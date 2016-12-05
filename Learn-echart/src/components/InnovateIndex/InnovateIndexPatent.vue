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

     var dataSource = {"AreaValue":{"timeline":{"2016":{"InventPatent":{"福建":"123","浙江":"234","广东":"345"},"NewTypePatent":{"福建":"123","浙江":"234","广东":"345"},"AppearanceDesignPatent":{"福建":"123","浙江":"234","广东":"345"}},"2015":{"InventPatent":{"福建":"123","浙江":"234","广东":"345"},"NewTypePatent":{"福建":"123","浙江":"234","广东":"345"},"AppearanceDesignPatent":{"福建":"123","浙江":"234","广东":"345"}},"2014":{"InventPatent":{"福建":"123","浙江":"234","广东":"345"},"NewTypePatent":{"福建":"123","浙江":"234","广东":"345"},"AppearanceDesignPatent":{"福建":"123","浙江":"234","广东":"345"}}}}};



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
          data:['直接访问','邮件营销','联盟广告']
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
            data : ['福建','浙江','广东']
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
            name:'直接访问',
            type:'bar',
            stack: '广告',

            data:[320, 332, 301 ]
          },
          {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101 ]
          },
          {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191 ]
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

