<template>
  <div>
    <h2>目前测试环境只有北京、天津有数据,可以点击查看</h2>
    <div id="startup-area-industry">
    </div>
  </div>
</template>

<script>
  import  echarts from 'echarts'

  export default({
    name: "mapArea",
    mounted: function () {


      var myChart = echarts.init(document.getElementById('startup-area-industry'));
      myChart.showLoading();

      this.$http.get(this.$store.state.CHINA_MAP_JSON)
        .then(function (chinaJson) {
          echarts.registerMap('china', chinaJson.data);
          var app = [];
          var option = null;

//          this.$http.get(this.$store.state.CHINA_MAP_JSON)
          this.$http.get(this.$store.state.BASE_URL + '/prosIndusYearEntEtabIndex')
            .then(function (response){

              myChart.hideLoading();

//              var dataSourceTree = {
//                "timeLine": {
//                  "2016": {
//                    "北京": {"制造业": "123", "文化体育业": "233", "金融业": "132"},
//                    "上海": {"制造业": "321", "文化体育业": "444", "金融业": "513"},
//                    "浙江": {"制造业": "233", "文化体育业": "111", "金融业": "555"},
//                    "福建": {"制造业": "432", "文化体育业": "223", "金融业": "521"}
//                  },
//                  "2015": {
//                    "北京": {"制造业": "123", "文化体育业": "233", "金融业": "132"},
//                    "上海": {"制造业": "123", "文化体育业": "233", "金融业": "132"},
//                    "浙江": {"制造业": "123", "文化体育业": "233", "金融业": "132"}
//                  },
//                  "2014": {
//                    "北京": {"制造业": "123", "文化体育业": "233", "金融业": "132"},
//                    "上海": {"制造业": "123", "文化体育业": "233", "金融业": "132"},
//                    "浙江": {"制造业": "123", "文化体育业": "233", "金融业": "132"}
//                  }
//                }
//              };

              var dataSourceTree = response.data

              var timeLine = Object.keys(dataSourceTree.timeLine).reverse();
              var lastYearData = dataSourceTree.timeLine[timeLine[3]];
              var provinceNames = Object.keys(lastYearData);

              //根据地域名称获得对应的行业数值
              function getDataByAreaName(areaName) {
                let lastYearCurrentAreaDate = eval("lastYearData." + areaName);
                let industryKeys = Object.keys(lastYearCurrentAreaDate);
                let industryValues = Object.values(lastYearCurrentAreaDate);
                let dataArry = [];
                for (let i = 0; i < industryKeys.length; i++) {
                  let pieObj = new Object();
                  pieObj.name = industryKeys[i];
                  pieObj.value = industryValues[i];
                  dataArry.push(pieObj)
                }
                 let sortedArry = dataArry.sort(function (a,b) {
                    return a.value - b.value
                })
                 return sortedArry
              }

              function getMaxValueByAreaName(areaName) {
                let dataArry = getDataByAreaName(areaName)
                let industryValues =[]
                for (let obj of dataArry){
                  industryValues.push(obj.value)
                }
                return  Math.max.apply(null, industryValues)
              }

              function getMinValueByAreaName(areaName) {
                let dataArry = getDataByAreaName(areaName)
                let industryValues =[]
                for (let obj of dataArry){
                  industryValues.push(obj.value)
                }
                return  Math.min.apply(null, industryValues)
              }


//              function getLegendTypeByAreaName(areaName) {
//                let lastYearCurrentAreaDate = eval("lastYearData." + areaName);
//                let industryKeys = Object.keys(lastYearCurrentAreaDate);
//                return industryKeys;
//              }

              option = {
                backgroundColor: '#827b85',

                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                title: [
                  {
                    text: '经济指数'+timeLine[0] +'年-'+provinceNames[0]+'-成立企业数量行业分布',
                    subtext: '锐信视界',
                    sublink: 'http://zx.onlyou.com/zx/index',
//                    left: '70%',
                    right:'1%',
                    top:'10%',
                    textStyle: {
                      color: '#fff'
                    }
                  }
                ],

//                visualMap: {
//                  //这里的最大值 最小值需要提前获得
//                  min:getMinValueByAreaName(provinceNames[0]) - 100,
//                  max:getMaxValueByAreaName(provinceNames[0]) + 100,
//                  //将离散型的映射给分割了
////                  splitNumber: 100,
//                  show: false,
//                  inRange: {
//                    color: ['#e3935d','#9570e5','#7ecf51','#61a5f8', '#eecb5f', '#e16759'],
//                  },
//                  textStyle: {
//                    color: '#fff'
//                  }
//                },
//          tooltip: {
//            trigger: 'item'
//          },
                //这里是地图负责的例图
                grid: {
                  right: 40,
                  top: 100,
                  bottom: 40,
                  width: '30%'
                },
                series: [
                  {
                    type: 'map',
                    mapType: 'china',
                    left: '5%',
                    right: '20%',
                    center: [117.98561551896913, 31.205000490896193],
                    zoom: 1.5,
                    roam:"move",
                    selectedMode: 'single',
                    data: [],

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
                    type: 'pie',
                    center: ['75%', '40%'],
                    radius: '30%',
                    symbol: 'none',
                  roseType: 'angle',
                    itemStyle: {
                      normal: {
                        // 不显示设置颜色那么默认自动随机颜色
                        // color: '#c23531',
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                      },
                      emphasis: {
                        shadowBlur: 200,
                        shadowColor: 'rgba(0, 0, 0, 0.8)'
                      }
                    },

                    data: getDataByAreaName(provinceNames[0]),
                  }
                ]
              };

              myChart.on("mapselectchanged",
                function  (param) {

                  //根据不同的区域名称来绘制不同区域的饼图
                  myChart.setOption({
                    title: {text: '创业指数-'+timeLine[0] +'年-'+param.name+'-成立企业行业分布'
                    },

                    series: [{
                      // saber 很重要
                      id: 'Sabar',
                      type: 'pie',
                      center: ['75%', '40%'],
                      radius: '35%',
                      data: getDataByAreaName(param.name),
                      roseType: 'angle',
                      label: {
                        normal: {
                          formatter: '{b}: {d}%',
                          textStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                          }
                        },
                        emphasis:{
                          formatter: '{b}: {d}%',

                        }
                      },
                      labelLine: {
                        normal: {
                          lineStyle: {
                            color: 'rgba(255, 255, 255, 0.3)'
                          }
                        }
                      },
                      itemStyle: {
                        normal: {
                          // 不显示设置颜色那么默认自动随机颜色
                          // color: '#c23531',
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                        },
                        emphasis: {
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.8)'
                        }
                      }
                    }
                    ]
                  });
                });

              myChart.setOption(option);

//        设置好之后模拟点击福建一下
//              myChart.dispatchAction({
//                type: 'mapSelect',
//                seriesIndex: 0,
//                name: "福建"
//              });

            }, function (response) {
              console.log('API请求发生异常 ' + response)
            })
//            .catch(function (response) {
//              console.log('error' + response)
//            })

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

  #startup-area-industry{
    height: 800px;
    width: 100%;
    margin: 0 auto;
  }

</style>

