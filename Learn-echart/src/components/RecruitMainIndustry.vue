<template>
  <div id="recruitMainIndustry">
  </div>
</template>

<script>
  import  echarts from 'echarts'

  function abc(x) {
    debugger;
    console.log("out methods ");
  }
  ;


  // 测试 Jsonp 获取数据
  export default{
    name: "autoPaly",

    methods: {
      abc: function (data) {
        debugger;
        console.log("inner methods ");

      }
    },
    mounted: function () {
      debugger;
      abc('1223');
      this.abc('bcd');

//      this.$http.jsonp('http://172.16.130.208:8080/spider-web/user/sso/pwdSalt').then(function (response) {
//
//        this.$set('gridData', response.data)
//      })

//      this.$http.jsonp('/someUrl', [data], [options]).then(successCallback, errorCallback);
//      http://api.money.126.net/data/feed/0000001,1399001?callback=abc


      this.$http.get('http://211.149.193.19:8080/api/customers')
        .then(function (response) {
          debugger;
          console.log(response.data)
        }, function (response) {
          debugger;
          // error callback
        });


//      $.ajax({
//        url:'http://172.16.130.208:8080/spider-web/user/sso/pwdSalt',
//        dataType:"jsonp",
//        jsonp:this.abc,
//        success:function(data){
//          debugger;
//          abc(data);
//
//        },
//        error:function (data) {
//          debugger;
//          abc(data);
//          console.log(data);
//        }
//      });


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
            data: fixIndustry
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
            'text': timelineValues[n] + ''
          },
          series: {
            name: timelineValues[n],
            type: 'bar',
//            itemStyle: itemStyle,
            data: Object.values(Object.values(datas.timeline)[n].MainIndustry)
//            symbolSize: function(val) {
//              return sizeFunction(val[2]);
//            }
          }
        });
      }

      myChart.setOption(option);

// mounted  end
    }
  }

</script>


<style scoped>
  #recruitMainIndustry {
    height: 400px;
    width: 600px;
    margin: 0 auto;
  }

  ;

</style>

