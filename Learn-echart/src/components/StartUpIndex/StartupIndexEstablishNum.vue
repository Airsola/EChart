<template>
  <div>
    <div id="mapinner2">
    </div>
  </div>
</template>

<script>
  import  echarts from 'echarts'

  export default({
    name: "mapArea",
    mounted: function () {

      var myChart = echarts.init(document.getElementById('mapinner2'));
      myChart.showLoading();

      this.$http.get(this.$store.state.CHINA_MAP_JSON)
        .then(function (chinaJson) {

          echarts.registerMap('china', chinaJson.data);
          var app = [];
          var option = null;

          this.$http.get(this.$store.state.BASE_URL + '/prosYearEntEtablishIndex')
            .then(function (response) {

              //------------------
              myChart.hideLoading();

              //后续替换为 response
          var dataSource = {
            "AreaValue": {
              "timeline": {
                "2016": {"黑龙江": "123", "浙江": "555", "广东省": "345", "北京": "599"},
                "2015": {"福建": "123", "浙江": "234", "广东": "345"},
                "2014": {"福建": "123", "浙江": "234", "广东": "345"}
              }
            }
          };

//              var dataSource = response.data
              var timeLine = Object.keys(dataSource.AreaValue.timeline).reverse();
              var lastYearData = dataSource.AreaValue.timeline[timeLine[0]];

              var bigObject2ObjectArry = [];
              for (var k in lastYearData) {
                var obj = new Object();
                obj.name = k;
                obj.value = lastYearData[k];
                bigObject2ObjectArry.push(obj);
              }

              //对对象进行降序排序
              var sortedObjectArry = bigObject2ObjectArry.sort(function (a, b) {
                return a.value - b.value;
              })

              var provinceNames = [];
              var provinceValues = [];
              for (let obj  of sortedObjectArry) {
                provinceNames.push(obj.name)
                provinceValues.push(obj.value)
                console.log("After Sorted " + obj.name + obj.value)
              }

              console.log(timeLine[0])


//          var max1 =  Math.max.apply(null, Object.values(lastYearData))
//          var max2 =  Math.max(...Object.values(lastYearData))
//          var min1 = Math.min.apply(null, Object.values(lastYearData) )
//          var min2 =Math.min(...Object.values(lastYearData))

              option = {
                backgroundColor: '#827b85',
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                title: [
                  {
                    text: '创业指数-各省成立企业数量分布',
                    subtext: '锐信视界',
                    sublink: 'http://zx.onlyou.com/zx/index',
                    left: 'center',
                    textStyle: {
                      color: '#fff'
                    }
                  },
                  // 这里预设了一个 title的样式 具体内容后续再复制
                  {
                    id: 'statistic',
                    right: 120,
                    top: 40,
                    width: 100,
                    textStyle: {
                      color: '#fff',
                      fontSize: 16
                    }
                  }
                ],

                visualMap: {
                  //这里的最大值 最小值需要提前获得
                  min: Math.min.apply(null, Object.values(lastYearData)),
                  max: Math.max.apply(null, Object.values(lastYearData)),
                  //将离散型的映射给分割了
//              splitNumber: 10,
                  calculable: true,
                  inRange: {
                    color: ['#61a5f8', '#eecb5f', '#e16759']
                  },
                  textStyle: {
                    color: '#fff'
                  }
                },
                tooltip: {
                  trigger: 'item',
                  formatter: "{b}:{c}"
                },
                //这里是地图负责的例图
                grid: {
                  right: 40,
                  top: 100,
                  bottom: 40,
                  width: '30%'
                },

                xAxis: {
                  type: 'value',
                  scale: true,
                  position: 'top',
                  boundaryGap: false,
                  splitLine: {show: false},
                  axisLine: {show: false},
                  axisTick: {show: false},
                  axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
                },
                yAxis: {
                  type: 'category',
                  name: '各地区生产总值排行',
                  nameGap: 16,
                  axisLine: {show: false, lineStyle: {color: '#ddd'}},
                  axisTick: {show: false, lineStyle: {color: '#ddd'}},
                  axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
                  data: provinceNames //这里需要使用倒序排列后的数据
                },

                series: [
                  {
                    type: 'map',
                    mapType: 'china',
                    left: '10',
                    right: '35%',
                    center: [117.98561551896913, 31.205000490896193],
                    zoom: 1.5,
                    data: sortedObjectArry,
                    roam: "move",
                    label: {
                      normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true
                      },
                      emphasis: {
                        show: true
                      }
                    },
                    itemStyle: {
                      normal: {
                        borderWidth: 0,
                        borderColor: 'rgb(150, 150, 150)',
                        shadowColor: 'rgba(0, 0, 0, 0.7)',
                        shadowBlur: 8
                      },
                      emphasis: { // 也是选中样式
                        borderWidth: 0,
                        color: '#32cd32',
                        shadowColor: 'rgba(0, 0, 0, 0.7)',
                        shadowBlur: 8
                      }
                    },
                  },
                  {
                    id: 'Sabar',
                    zlevel: 2,
                    type: 'bar',
                    symbol: 'none',
                    itemStyle: {
                      normal: {
                        color: '#ddb926'
                      }
                    },
                    data: provinceValues
                  }
                ]
              };
              myChart.setOption(option);
              //------------------------------
            }, function (response) {
              console.log('API请求发生异常 ' + response)
            })
            .catch(function (response) {
              console.log('error' + response)
            })

        }, function (response) {
          console.log('API请求发生异常 ' + response)
        })
        .catch(function (response) {
          console.log('error' + response)
        })
// mounted  end
    }
  })
</script>


<style scoped>
  #mapinner2 {
    height: 800px;
    width: 80%;
    margin: 0 auto;
  }

</style>

