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

//          this.$http.get(this.$store.state.BASE_URL + '/provincesYearGDPIndex')
          this.$http.get(this.$store.state.CHINA_MAP_JSON )
          .then(function (response) {

              //------------------
              myChart.hideLoading();

              //后续替换为 response

            var dataSource = {"ProvincePackAndEnterpriseNum":{"timeline":{"2016":[{"name":"福建","value":[1000,23]},{"name":"上海","value":[30000,36]},{"name":"浙江","value":[30000,49]}],"2015":[{"name":"福建","value":[12,12345]},{"name":"上海","value":[22,44432]},{"name":"浙江","value":[4,30000]}]}}};
//            var dataSource = response.data
              var timeLine = Object.keys(dataSource.ProvincePackAndEnterpriseNum.timeline).reverse();
              var lastYearDataArry = dataSource.ProvincePackAndEnterpriseNum.timeline[timeLine[0]];


               var sortedObjectArry = lastYearDataArry.sort(function (a, b) {
                  return a.value[1] - b.value[1];
              })


            var provinceNames = [];
            var provincePackNumValues = [];
            var provincePackEnterpriseNumValues = [];

              for (let obj  of sortedObjectArry) {
                provinceNames.push(obj.name)
                provincePackEnterpriseNumValues.push(obj.value[0])
                provincePackNumValues.push(obj.value[1]);

              }

 //          var max1 =  Math.max.apply(null, Object.values(lastYearData))
//          var max2 =  Math.max(...Object.values(lastYearData))
//          var min1 = Math.min.apply(null, Object.values(lastYearData) )
//          var min2 =Math.min(...Object.values(lastYearData))

            function getCurrentAreaPackEnterpriseNum(dataIndex) {
              return provincePackEnterpriseNumValues[dataIndex]
            }

            function getCurrentAreaPackNum(dataIndex) {
              return provincePackNumValues[dataIndex]
            }

              option = {
                backgroundColor: '#827b85',
                animation: true,
                animationDuration: 1000,
                animationEasing: 'cubicInOut',
                animationDurationUpdate: 1000,
                animationEasingUpdate: 'cubicInOut',
                title: [
                  {
                    text: '创业指数-'+timeLine[0] +'年各省园区数量及入驻企业数量',
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
                  min: Math.min.apply(null,provincePackNumValues) ,
                  max: Math.max.apply(null, provincePackNumValues ) ,
                  text:['高','低'],
//              splitNumber: 10,
                  calculable: true,
                  inRange: {
                     color: ['#61a5f8', '#eecb5f', '#e16759']
//                    color: ['#48adfe', '#268ddf', '#0e6fbc']
                   },
                  textStyle: {
                    color: '#fff'
                  }
                },
                tooltip: {

                  trigger: 'item',

                  formatter:function (params, ticket, callback) {
                      if(typeof(params.data)== "undefined" ){
                          return
                      }
                    var resultStr
                    if(typeof(params.data.value)!="undefined"&&params.data.value!=null) {
                      resultStr = params.data.name+':'+ params.data.value[1]+'个园区'
                    }
                    return resultStr
                  }

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
//                  name: '(亿元)',
                  scale: true,
                  splitNumber:3,
                  position: 'top',
                  boundaryGap: false,
                  splitLine: {show: false},
                  axisLine: {show: false},
                  axisTick: {show: false},
                  axisLabel: {margin: 2, textStyle: {color: '#aaa'}},
                },
                yAxis: {
                  type: 'category',
                  name: '各省园区数量排行',
                  nameGap: 16,
                  axisLine: {show: false, lineStyle: {color: '#ddd'}},
                  axisTick: {show: false, lineStyle: {color: '#ddd'}},
                  axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
                  data: provinceNames //
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
                        borderWidth: 1,
                        borderColor: '#22557d',
                      },
                      emphasis: { // 也是选中样式
                        borderWidth: 1,
                        color: '#fff',
                        backgroundColor:'#fffc00',
                        borderColor: '#fffc00',
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                        shadowBlur: 8,
                      }
                    },

                  },
                  {
                    id: 'Sabar',
                    zlevel: 2,
                    type: 'bar',
                    symbol: 'none',
                    label: {
                      normal: {
                        show: true,
                        position: 'right',
                      }
                    },
                    itemStyle: {
                      normal: {
                        color: '#ffa064'
                      }
                    },


                    tooltip: {
                      formatter:function (params, ticket, callback) {
                        if(typeof(params.data)== "undefined" ){
                          return
                        }
                        var resultStr
                           resultStr = params.name+'<br/>'+ params.data+'个园区<br/>'+getCurrentAreaPackEnterpriseNum(params.dataIndex)+'家入驻企业'
                        return resultStr
                      }
                      },

                     data: provincePackNumValues
                  },


                ]
              };
              myChart.setOption(option);
              //------------------------------
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
  #mapinner2 {
    height: 800px;
    width: 80%;
    margin: 0 auto;
  }

</style>

