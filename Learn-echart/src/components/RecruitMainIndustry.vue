<template >
  <div id="recruitMainIndustry">
  </div>
</template>

<script>
  import  echarts from 'echarts'

  export default{
    name: "autoPaly",
    mounted: function () {
      var app = [];
      var myChart = echarts.init(document.getElementById('recruitMainIndustry'));
      myChart.hideLoading();

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


      myChart.setOption({
        backgroundColor: {
          type: 'pattern',
          image: canvas,
          repeat: 'repeat'
        },
        title: {text: '区域招聘热度指数'},
         yAxis: {
          data: ["思明区", "湖里区", "51区", "11区", "49区", "7区"]
        },
        xAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });




// mounted  end
    }
  }

</script >



<style  scoped>
  #recruitMainIndustry{
    height: 400px;
    width:  600px;
    margin: 0 auto;
  };

</style>

