<template >
  <div id="containt">
    <mianindustry></mianindustry>
    <div id="mapinner2">
  </div>
  </div>
</template>

<script>
  import  echarts from 'echarts'
  import  mianindustry from  './RecruitMainIndustry.vue'

  export default{
    name: "autoPaly",
    components:{
      mianindustry
    },
    mounted: function () {
      var app = [];
      var myChart = echarts.init(document.getElementById('mapinner2'));
      var option = null;
      myChart.hideLoading();


      var N_POINT = 3;
      var grids = [];
      var xAxes = [];
      var yAxes = [];
      var series = [];
      var titles = [];
      var count = 0;

      var SubdivideIndustry = {
        "信息业": {
          "细分行sssssssssssdafadfadsf业1": "100",
          "细分行业2": "133",
          "细分行业3": "123",
          "细分行业4": "100",
          "细分行业5": "133",
          "细分行业6": "123",
          "细分行业7": "100",
          "细分行业8": "133",
          "细分行业9": "123"
        },
        "通信业": {
          "细分行业1": "100",
          "细分行业2": "133",
          "细分行业3": "123",
          "细分行业4": "100",
          "细分行业5": "133",
          "细分行业6": "123",
          "细分行业7": "100",
          "细分行业8": "133",
          "细分行业9": "123"
        },
        "金融业": {
          "细分行业1": "100",
          "细分行业2": "133",
          "细分行业3": "123",
          "细分行业4": "100",
          "细分行业5": "133",
          "细分行业6": "123",
          "细分行业7": "100",
          "细分行业8": "133",
          "细分行业9": "123"
        }};
      var SubdivideIndustryNames = Object.keys(SubdivideIndustry);
      var SubdivideIndustryValues = Object.values(SubdivideIndustry);

      //批量处理各个行业大类的 数据结构
      for (var i = 0; i < SubdivideIndustryNames.length; i++) {
        grids.push({
          show: true,
          borderWidth: 0,
          backgroundColor: '#fff',
          shadowColor: 'rgba(0, 0, 0, 0.3)',
          shadowBlur: 2
        });

        xAxes.push({
//          type: 'value',
//          show: false,
//          min: 0,
//          max: 1,
          gridIndex: count
        });

         yAxes.push({
//           data:["abc","bbc"],
          data: Object.keys(SubdivideIndustryValues[count]),
          gridIndex: count
        });

        series.push({
          name: name,
          type: 'bar',
          xAxisIndex: count,
          yAxisIndex: count,
          data: Object.values(SubdivideIndustryValues[count]),

          showSymbol: false,
          animationEasing: name,
          animationDuration: 1000
        });

        titles.push({
          textAlign: 'center',
          text: SubdivideIndustryNames[count],
          textStyle: {
            fontSize: 20,
            fontWeight: 'normal'
          }
        });
        //数据
        count++;
      }

      var rowNumber = Math.ceil(Math.sqrt(count));

      echarts.util.each(grids, function (grid, idx) {
        grid.left = ((idx % rowNumber) / rowNumber * 100 + 20) + '%';
        grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 0.5) + 3 + '%';
        grid.width = (1 / rowNumber * 100 - 20) + '%';
        grid.height = (1 / rowNumber * 100 - 10) + '%';
        //控制单个模块子标题
        titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
        titles[idx].top = parseFloat(grid.top) - 3 + '%';
      });



      option = {
        title: titles.concat([{
          text: '招聘-行业-指标',
//          top: 'top',
//          left: 'center'
        }]),
        grid: grids,
        xAxis: xAxes,
        yAxis: yAxes,
        series: series
      };

      myChart.setOption(option);

// mounted  end
    }
    }

</script >



<style  scoped>

  #mapinner2{
    height: 1000px;
    width:  900px;
    margin: 0 auto;
  };

</style>

