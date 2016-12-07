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

      console.log(this.$store.state.BASE_URL)
      console.log('abbb')

      var myChart = echarts.init(document.getElementById('recruitMainIndustry'));
      myChart.showLoading();
      this.$http.get( Config.BASE_URL + '/recruitIndex')
        .then(function (response) {
          myChart.hideLoading();
          debugger;
          var datas = {
            "timeline": {
              "11月": {"MainIndustry": {"制造业": "123", "金融业": "321"}},
              "10月": {"MainIndustry": {"制造业": "234", "金融业": "123"}}
            }
          };
          var timelineValues = Object.keys(datas.timeline)

          var data = null
          var fixIndustry = ["信息传输、软件和信息技术服务业", "湖里区"];
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
                }

              },

              xAxis: {},
              // 这里的值是会动态变化的
              series: [{
                type: 'bar'
//        data: [5, 20, 36, 10, 10, 20]
              }],
              animationDurationUpdate: 1000,
              animationEasingUpdate: 'quinticInOut'
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
              series: {
                name: timelineValues[n],
                type: 'bar',
                label: {
                  normal: {
                    show: true,
                    position: 'inside'
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
    height: 400px;
    width: 80%;
    margin: 0 auto;
  }

</style>

