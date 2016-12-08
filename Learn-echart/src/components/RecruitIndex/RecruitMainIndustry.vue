<template>
  <div id="recruitMainIndustry">
  </div>
</template>

<script>
  import  echarts from 'echarts'
  import  Config  from '../../Config.js'


   export default{
    name: "economy",
    mounted: function () {


      var myChart = echarts.init(document.getElementById('recruitMainIndustry'));
      myChart.showLoading();
      this.$http.get(this.$store.state.BASE_URL + '/recruitIndex')
        .then(function (response) {
          myChart.hideLoading();

          //这里目前是静态数据后续有历史数据之后需要切换接口进行替换
          var datas = {"timeline":{"11月":{"MainIndustry":{"信息传输、软件和信息技术服务业":"279729","制造业":"152057","卫生和社会工作":"38587","建筑业":"207765","批发和零售业":"147544","文化、体育和娱乐业":"251387","金融业":"247210"}},"10月":{"MainIndustry":{"信息传输、软件和信息技术服务业":"279729","制造业":"152057","卫生和社会工作":"38587","建筑业":"207765","批发和零售业":"147544","文化、体育和娱乐业":"251387","金融业":"247210"}}}};
          var timelineValues = Object.keys(datas.timeline)

          var data = null
          var fixIndustry = ["软件和信息技术服务业", "制造业","卫生和社会工作","建筑业","批发和零售业","文化、体育和娱乐业","金融业"];
          var option = null;

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

          option = {
            baseOption: {
              timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 2000,
                left: null,
                right: 0,
                top: 20,
                bottom: 20,
                width: 55,
                height: null,
                label: {
                  normal: {
                    textStyle: {
                      color: '#999'
                    }
                  },
                  emphasis: {
                    textStyle: {
                      color: '#fff'
                    }
                  }
                },

                symbol: 'none',
                //这是时间轴的颜色
                lineStyle: {
                  color: '#555'
                },
                checkpointStyle: {
                  color: '#bbb',
                  borderColor: '#777',
                  borderWidth: 2
                },
                controlStyle: {
                  showNextBtn: false,
                  showPrevBtn: false,
                  normal: {
                    color: '#666',
                    borderColor: '#666'
                  },
                  emphasis: {
                    color: '#aaa',
                    borderColor: '#aaa'
                  }
                },
                // 这个时间轴的 baseOption 放空也很有意思
                data: []
              },
              backgroundColor: {
                type: 'pattern',
                image: canvas,
                repeat: 'repeat'
              },
              title: {text: '招聘指数-主要行业'},
              yAxis: {
//            这里的行业为固定的七大类行业
                data: fixIndustry,
                axisLine:{
                  show:true
                },
              },
              xAxis: {},
              // 这里的值是会动态变化的
              series: [{
                type: 'bar'
               }],
              animationDurationUpdate: 1000,
              animationEasingUpdate: 'quinticInOut'
            },
            grid:{
              left :150
            },

            options: []
          }

          for (var n = 0; n < timelineValues.length; n++) {
            option.baseOption.timeline.data.push(timelineValues[n]);
            option.options.push({
              title: {
                show: true,
                'text': '招聘指数'+timelineValues[n] + '主要行业需求人数',
                'subtext': '数据来源：智联招聘',
                'sublink': 'http://zx.onlyou.com/zx/index',
//            left: 'center',
//            textStyle: {
//              color: '#fff'
//            }
              },
              grid:{
                left :150
              },
              series: {
                name: timelineValues[n],
                type: 'bar',

                label: {
                  normal: {
                    show: true,
                    position: 'right'
                  },
                  emphasis:{
                    show: true,
                    position: 'right'
                  }
                },
                data: Object.values(Object.values(datas.timeline)[n].MainIndustry)
              }
            });
          }
          myChart.setOption(option);

        },
          function (response) {
           // error callback
          console.log(response)

        });

// mounted  end
    }
  }

</script>


<style scoped>

  #recruitMainIndustry {
    height: 500px;
    width: 70%;
    margin: 0 auto;
  }

</style>

