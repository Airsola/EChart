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
    name: "SubdivideIndustry",
    components:{
      mianindustry
    },

    mounted: function () {
      var myChart = echarts.init(document.getElementById('mapinner2'));
      myChart.showLoading();

      this.$http.get(this.$store.state.BASE_URL + '/subdivideIndustryIndex')
        .then( function(response){

          myChart.hideLoading();
          var option = null;
          var app = [];
          var N_POINT = 3;
          var grids = [];
          var xAxes = [];
          var yAxes = [];
          var series = [];
          var titles = [];
          var count = 0;


          var SubdivideIndustry = response.data.SubdivideIndustry
          var SubdivideIndustryNames = Object.keys(SubdivideIndustry);
          var SubdivideIndustryValues = Object.values(SubdivideIndustry);
          debugger

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

//              interval:3,
              splitNumber:3,
              name: '（人)',
              gridIndex: count
            });

            yAxes.push({
               data: Object.keys(SubdivideIndustryValues[count]),

              gridIndex: count
            });

            series.push({
              name: name,
              type: 'bar',
              label: {
                normal: {
                  show: true,
                  position: 'right'
                }
              },
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
            grid.left = ((idx % rowNumber) / rowNumber * 90 + 15) + '%';
            grid.top = (Math.floor(idx / rowNumber) / rowNumber * 100 + 0.5) + 6 + '%';
            grid.width = (1 / rowNumber * 100 - 15) + '%';
            grid.height = (1 / rowNumber * 100 - 10) + '%';
            //控制单个模块子标题
            titles[idx].left = parseFloat(grid.left) + parseFloat(grid.width) / 2 + '%';
            titles[idx].top = parseFloat(grid.top) - 3 + '%';
          });



          option = {
            title: titles.concat([{
              text: '招聘指数-行业-职位需求(人数)',
//          top: 'top',
//          left: 'center'
            }]),
            grid: grids,
            xAxis: xAxes,
            yAxis: yAxes,
            series: series
          };

          myChart.setOption(option);



        },function (response) {
          console.log('API请求发生异常'+response)
        }).catch(function (response) {
        console.log('error' + response)
      })

// mounted  end
    }
    }

</script >



<style  scoped>

  #mapinner2{
    height: 1000px;
    width:  95%;
    margin: 0 auto;
  }

</style>

