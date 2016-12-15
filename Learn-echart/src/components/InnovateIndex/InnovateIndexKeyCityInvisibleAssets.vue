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

      myChart.showLoading()

      this.$http.get(this.$store.state.CHINA_MAP_JSON)
        .then(function (chinaJson) {

          echarts.registerMap('china', chinaJson.data);
          var app = [];
          var option = null;

//          this.$http.get(this.$store.state.BASE_URL + '/yearEndTolPopulateIndex')
          this.$http.get(this.$store.state.CHINA_MAP_JSON)

            .then(function (response) {
                myChart.hideLoading();

                var topRankDate = {"ProvincePackTopRank":{"timeline":{"2016":{"福建":{"(厦门)-湖里高新技术开发区":"123","福州-闽侯大学城软件园":"1234","厦门-软件园二期":"125"},"浙江":{"杭州-西湖一区":"123","温州-温岭一区":"2345","乌镇-乌镇一区":"321"}},"2015":{"福建":{"(厦门)湖里高新技术开发区":"1234","(福州)闽侯大学城软件园":"234","(厦门)软件园二期":"34124"},"浙江":{"(杭州)西湖一区":"123","(温州)温岭一区":"2345"}}}}};
//                var topRankDate =  {"ProvincePackInvisibleAssetsTop":{"timeline":{"2016":{"福建":{"(厦门)湖里高新技术开发区":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":3423},"(福州)闽侯大学城软件园":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333},"(厦门)软件园二期":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333}},"浙江":{"(杭州)西湖一区":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333},"(温州)温岭一区":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333},"(乌镇)乌镇一区":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333}}},"2015":{"福建":{"(厦门)湖里高新技术开发区":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333},"(福州)闽侯大学城软件园":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333},"(厦门)软件园二期":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333}},"浙江":{"(杭州)西湖一区":{"InventPatent":"123","NewTypePatent":"12","AppearanceDesignPatent":"123","Copyright":"12","Trademark":"331","Software":"234","Total":"44444"},"(温州)温岭一区":{"InventPatent":"123","NewTypePatent":"12","AppearanceDesignPatent":"123","Copyright":"12","Trademark":"331","Software":"234","Total":"44444"},"(乌镇)乌镇一区":{"InventPatent":"123","NewTypePatent":"12","AppearanceDesignPatent":"123","Copyright":"12","Trademark":"331","Software":"234","Total":"44444"}}}}}};

                var topRankTimeLine = Object.keys(topRankDate.ProvincePackTopRank.timeline).reverse();
                var topRankLastYearData =  topRankDate.ProvincePackTopRank.timeline[topRankTimeLine[0]];

                function getTopRankSortDate(provinceName) {

                  let currentProvinceDate = topRankLastYearData[provinceName]
                  let packNames = Object.keys(currentProvinceDate)
                  let enterpriseNum = Object.values(currentProvinceDate)
                  let currentProvinceDataArry = []

                  for ( let packName  of packNames  ){
                    let obj = new Object()
                    obj.name = packName
                    obj.value = currentProvinceDate[packName]
                    currentProvinceDataArry.push(obj)
                  }

                  let sortedDate = currentProvinceDataArry.sort(function (a, b) {
                    return a.value - b.value;
                  });

                  return  sortedDate
                }

                function getTopRankNameByProvinceName(provinceName) {
                  let packNames = []
                  var currentProvinceDateSortedArry =  getTopRankSortDate(provinceName)
                  for (  var obj of currentProvinceDateSortedArry ) {
                    packNames.push(obj.name)
                  }
                  return packNames
                }


                function getTopRankValuesByProvinceName(provinceName) {
                  let  packValues = []
                  var currentProvinceDateSortedArry =  getTopRankSortDate(provinceName)
                  for (  var obj of currentProvinceDateSortedArry ) {
                    packValues.push(obj.value)
                  }

                  return packValues
                }


                var dataSource = {"KeyCityPackInvisibleAssetsNum":{"timeline":{"2016":[{"name":"厦门","value":[111.88,31,800]},{"name":"上海","value":[111.82,30.11,37]},{"name":"杭州","value":[111.83,32.32,20]}],"2015":[{"name":"厦门","value":[111.88,31,8]},{"name":"上海","value":[111.82,30.11,37]},{"name":"杭州","value":[111.83,32.32,20]}]}}};
                //var  dataSource = response.data
                var timeLine = Object.keys(dataSource.KeyCityPackInvisibleAssetsNum.timeline).reverse();
                var lastYearData = dataSource.KeyCityPackInvisibleAssetsNum.timeline[timeLine[0]];
debugger

                function getCurrentYearPackInvisibleAsset(currentYear) {
                  let currentYearData =  dataSource.KeyCityPackInvisibleAssetsNum.timeline[currentYear]
                  let values = []
                  for ( let obj of  currentYearData){
                    let  currentValue = obj.value[2]
                    values.push(currentValue)
                  }
                  return values
                }

//                function getCurrentYearPackEnterpriseNumData(currentYear) {
//                  let currentYearData =  dataSource.KeyCityPackInvisibleAssetsNum.timeline[currentYear]
//                  let values = []
//                  for ( let obj of  currentYearData){
//                    let  currentValue = obj.value[2]
//                    values.push(currentValue)
//                  }
//                  return values
//                }

                function getCurrentYearMaxValue(currentYear) {
                  let   values = getCurrentYearPackInvisibleAsset(currentYear)
                  return Math.max.apply(null, values)
                }

                function getCurrentYearMinValue(currentYear) {
                  let   values = getCurrentYearPackInvisibleAsset(currentYear)
                  return Math.min.apply(null, values)
                }

                function getCurrentAreaPackInvisibleAsset(currentYear,dataIndex) {
                  let  values =  getCurrentYearPackInvisibleAsset(currentYear)
                  return values[dataIndex]

                }

//              var abc=   getCurrentYearData(timeLine[0]);
//              var max1 =  getCurrentYearMaxValue(timeLine[0])
//              var min1 =  getCurrentYearMinValue(timeLine[0])
//              var  min2 = ~~getCurrentYearMinValue(timeLine[0]) -10

                option = {
                  backgroundColor: '#404a59',
                  animation: true,
                  animationDuration: 1000,
                  animationEasing: 'cubicInOut',
                  animationDurationUpdate: 1000,
                  animationEasingUpdate: 'cubicInOut',
                  title: [
                    {
                      text: '创业指数-'+timeLine[0]+'年区域无形资产分布',
                      subtext: '锐信视界',
                      sublink: 'http://zx.onlyou.com/zx/index',
                      left: 'center',
                      textStyle: {
                        color: '#fff'
                      }
                    },
                    // 这部分独立设置的目的是啥？
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

                  visualMap: [
                    {

                      min:   0,
                      max:   (~~getCurrentYearMaxValue(timeLine[0]) +10),
                      //将离散型的映射给分割了
                      splitNumber: 5,
                      // calculable: true,
                      inRange: {
                        // color: ['#50a3ba', '#eac736', '#d94e5d']
                        color: ['#61a5f8', '#eecb5f', '#e16759']
                      },
                      textStyle: {
                        color: '#fff'
                      }
                    },

                  ],


                  toolbox: {
                    iconStyle: {
                      normal: {
                        borderColor: '#fff'
                      },
                      emphasis: {
                        borderColor: '#b1e4ff'
                      }
                    }
                  },
                  brush: {
                    outOfBrush: {
                      color: '#abc'
                    },
                    brushStyle: {
                      borderWidth: 2,
                      color: 'rgba(0,0,0,0.2)',
                      borderColor: 'rgba(0,0,0,0.5)',
                    },
                    seriesIndex: [0, 1],
                    throttleType: 'debounce',
                    throttleDelay: 300,
                    geoIndex: 0
                  },
                  geo: {
                    selectedMode: 'single',
                    map: 'china',
                    left: '10',
                    right: '35%',
                    center: [117.98561551896913, 31.205000490896193],
                    zoom: 2.5,
                    label: {
                      emphasis: {
                        show: false
                      }
                    },
                    roam: 'move',
                    itemStyle: {
                      normal: {
                        areaColor: '#323c48',
                        borderColor: '#111'
                      },
                      emphasis: {
                        areaColor: '#2a333d'
                      }
                    }
                  },
                  tooltip: {
                    trigger: 'item',
                    formatter: '{b}: {c} '
                  },
                  grid: {
                    right: 40,
                    top: 100,
                    bottom: 40,
                    width: '30%'
                  },
                  xAxis: {
                    min:0,
                    type: 'value',
                    name:'(万人)',
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
                    name: '当前选中区域 园区数量排行',
                    nameGap: 16,
                    axisLine: {show: false, lineStyle: {color: '#ddd'}},
                    axisTick: {show: false, lineStyle: {color: '#ddd'}},
                    axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
                    data: []
                  },
                  series: [
                    {
                      name: '年末总人口',
                      type: 'scatter',
                      coordinateSystem: 'geo',
                      data:lastYearData,
                      symbolSize: function (val) {
                        return Math.max(val[3] / 20, 15);
                      },
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
                          color: '#ddb926'
                        }
                      }
                    },
//                  {
//                    name: 'Top 5',
//                    type: 'effectScatter',
//                    coordinateSystem: 'geo',
//                    data:lastYearData,
//                    symbolSize: function (val) {
//                      return Math.max(val[2] / 10, 8);
//                    },
//                    showEffectOn: 'emphasis',
//                    rippleEffect: {
//                      brushType: 'stroke'
//                    },
//                    hoverAnimation: true,
//                    label: {
//                      normal: {
//                        formatter: '{b}',
//                        position: 'right',
//                        show: true
//                      }
//                    },
//                    itemStyle: {
//                      normal: {
//                        color: '#f4e925',
//                        shadowBlur: 10,
//                        shadowColor: '#333'
//                      }
//                    },
//                    zlevel: 1
//                  },
                    {
                      id: 'bar',
                      zlevel: 2,
                      type: 'bar',
                      symbol: 'none',
                      itemStyle: {
                        normal: {
                          color: '#ddb926'
                        }
                      },
                      data: []
                    }
                  ]
                };


                // 模拟的画出了几个区域事件
                setTimeout(function () {
                  myChart.dispatchAction({
                    type: 'brush',
                    areas: [
                      {
                        geoIndex: 0,
                        brushType: 'polygon',
                        coordRange: [[119.72, 34.85], [119.68, 34.85], [119.5, 34.84], [119.19, 34.77], [118.76, 34.63], [118.6, 34.6], [118.46, 34.6], [118.33, 34.57], [118.05, 34.56], [117.6, 34.56], [117.41, 34.56], [117.25, 34.56], [117.11, 34.56], [117.02, 34.56], [117, 34.56], [116.94, 34.56], [116.94, 34.55], [116.9, 34.5], [116.88, 34.44], [116.88, 34.37], [116.88, 34.33], [116.88, 34.24], [116.92, 34.15], [116.98, 34.09], [117.05, 34.06], [117.19, 33.96], [117.29, 33.9], [117.43, 33.8], [117.49, 33.75], [117.54, 33.68], [117.6, 33.65], [117.62, 33.61], [117.64, 33.59], [117.68, 33.58], [117.7, 33.52], [117.74, 33.5], [117.74, 33.46], [117.8, 33.44], [117.82, 33.41], [117.86, 33.37], [117.9, 33.3], [117.9, 33.28], [117.9, 33.27], [118.09, 32.97], [118.21, 32.7], [118.29, 32.56], [118.31, 32.5], [118.35, 32.46], [118.35, 32.42], [118.35, 32.36], [118.35, 32.34], [118.37, 32.24], [118.37, 32.14], [118.37, 32.09], [118.44, 32.05], [118.46, 32.01], [118.54, 31.98], [118.6, 31.93], [118.68, 31.86], [118.72, 31.8], [118.74, 31.78], [118.76, 31.74], [118.78, 31.7], [118.82, 31.64], [118.82, 31.62], [118.86, 31.58], [118.86, 31.55], [118.88, 31.54], [118.88, 31.52], [118.9, 31.51], [118.91, 31.48], [118.93, 31.43], [118.95, 31.4], [118.97, 31.39], [118.97, 31.37], [118.97, 31.34], [118.97, 31.27], [118.97, 31.21], [118.97, 31.17], [118.97, 31.12], [118.97, 31.02], [118.97, 30.93], [118.97, 30.87], [118.97, 30.85], [118.95, 30.8], [118.95, 30.77], [118.95, 30.76], [118.93, 30.7], [118.91, 30.63], [118.91, 30.61], [118.91, 30.6], [118.9, 30.6], [118.88, 30.54], [118.88, 30.51], [118.86, 30.51], [118.86, 30.46], [118.72, 30.18], [118.68, 30.1], [118.66, 30.07], [118.62, 29.91], [118.56, 29.73], [118.52, 29.63], [118.48, 29.51], [118.44, 29.42], [118.44, 29.32], [118.43, 29.19], [118.43, 29.14], [118.43, 29.08], [118.44, 29.05], [118.46, 29.05], [118.6, 28.95], [118.64, 28.94], [119.07, 28.51], [119.25, 28.41], [119.36, 28.28], [119.46, 28.19], [119.54, 28.13], [119.66, 28.03], [119.78, 28], [119.87, 27.94], [120.03, 27.86], [120.17, 27.79], [120.23, 27.76], [120.3, 27.72], [120.42, 27.66], [120.52, 27.64], [120.58, 27.63], [120.64, 27.63], [120.77, 27.63], [120.89, 27.61], [120.97, 27.6], [121.07, 27.59], [121.15, 27.59], [121.28, 27.59], [121.38, 27.61], [121.56, 27.73], [121.73, 27.89], [122.03, 28.2], [122.3, 28.5], [122.46, 28.72], [122.5, 28.77], [122.54, 28.82], [122.56, 28.82], [122.58, 28.85], [122.6, 28.86], [122.61, 28.91], [122.71, 29.02], [122.73, 29.08], [122.93, 29.44], [122.99, 29.54], [123.03, 29.66], [123.05, 29.73], [123.16, 29.92], [123.24, 30.02], [123.28, 30.13], [123.32, 30.29], [123.36, 30.36], [123.36, 30.55], [123.36, 30.74], [123.36, 31.05], [123.36, 31.14], [123.36, 31.26], [123.38, 31.42], [123.46, 31.74], [123.48, 31.83], [123.48, 31.95], [123.46, 32.09], [123.34, 32.25], [123.22, 32.39], [123.12, 32.46], [123.07, 32.48], [123.05, 32.49], [122.97, 32.53], [122.91, 32.59], [122.83, 32.81], [122.77, 32.87], [122.71, 32.9], [122.56, 32.97], [122.38, 33.05], [122.3, 33.12], [122.26, 33.15], [122.22, 33.21], [122.22, 33.3], [122.22, 33.39], [122.18, 33.44], [122.07, 33.56], [121.99, 33.69], [121.89, 33.78], [121.69, 34.02], [121.66, 34.05], [121.64, 34.08]]
                      }
                    ]
                  });
                }, 0);

                myChart.on('brushselected', renderBrushed);
                myChart.on("geoselectchanged",mapProvinceClick);

                function mapProvinceClick (parameter) {
                  let  packNames = getTopRankNameByProvinceName(parameter.name)
                  let  packValues = getTopRankValuesByProvinceName(parameter.name)

                  let provinceOption = {
                    yAxis: {
                      data: packNames,
                      name: parameter.name+'-园区无形资产数分部',
                    },
                    xAxis: {
//                      axisLabel: {show: !!count}
                    },
                    label: {
                      normal: {
                        formatter: '{c}',
                        position: 'right',
                        show: true
                      },
                      emphasis: {
                        formatter: '{c}',
                        position: 'right',
                        show: true                      }
                    },

                    tooltip: {
                      formatter:function (params, ticket, callback) {

                        if(typeof(params.data)== "undefined" ){
                          return
                        }
                        var resultStr
                        if(typeof(params.data.value)!="undefined"&&params.data.value!=null) {
                          resultStr = params.name+'<br/>'+ params.data.value[3]+'个园区<br/>'+getCurrentAreaPackInvisibleAsset(timeLine[0],params.dataIndex)+'家入驻企业'
                        }else{
                          resultStr = params.name+'有'+params.value+'家企业入驻'
                        }
                        return resultStr
                      }
                    },

//                    tooltip: {
//                      formatter:function (params, ticket, callback) {
//                        return params.name+'有'+params.value+'家企业入驻'
//                      }
//                    },

                    series: {
                      id: 'pie',
                      data: packValues
                    }

                  };


                  myChart.setOption(provinceOption);

                }




                function renderBrushed(params) {

//                 没有选中城市则改变 辅助图形绘制
                  if(params.batch[0].selected[0].dataIndex.length === 0) {
                    return
                  }


                  var mainSeries = params.batch[0].selected[0];


                  var selectedItems = [];
                  var categoryData = [];
                  var barData = [];
                  var maxBar = 30;
                  var sum = 0;
                  var count = 0;

                  for (var i = 0; i < mainSeries.dataIndex.length; i++) {
                    var rawIndex = mainSeries.dataIndex[i];
                    var dataItem = lastYearData[rawIndex];
                    var pmValue = dataItem.value[2];

                    sum += pmValue;
                    count++;
                    selectedItems.push(dataItem);
                  }

                  // 升序
                  selectedItems.sort(function (a, b) {
                    return a.value[2] - b.value[2];
                  });

                  // 升序取出前30会有问题
                  for (var i = 0; i < Math.min(selectedItems.length, maxBar); i++) {
                    if (selectedItems.length <= maxBar) {
                      categoryData.push(selectedItems[i].name);
                      barData.push(selectedItems[i].value[2]);
                    } else {
                      categoryData.push(selectedItems[i + (selectedItems.length - maxBar)].name);
                      barData.push(selectedItems[i + (selectedItems.length - maxBar)].value[2]);
                    }
                  }

                  myChart.setOption({
                    yAxis: {
                      name: '当前选中区域 园区数量排行',
                      data: categoryData
                    },
                    xAxis: {
                      axisLabel: {show: !!count}
                    },
                    title: {
                      id: 'statistic',
                    },
                    label: {
                      normal: {
                        formatter: '{c}',
                        position: 'right',
                        show: true
                      },
                      emphasis: {
                        formatter: '{c}',
                        position: 'right',
                        show: true                      }
                    },
                    tooltip: {
                      formatter:function (params, ticket, callback) {
                        if(typeof(params.data)== "undefined" ){
                          return
                        }
                        var resultStr
                        if(typeof(params.data.value)!="undefined"&&params.data.value!=null) {
                          resultStr = params.name+'<br/>'+ params.data.value[3]+'个园区<br/>'+getCurrentAreaPackInvisibleAsset(timeLine[0],params.dataIndex)+'家入驻企业'
                        }else{
                          resultStr = params.name+'<br/>'+ params.data+'个园区<br/>'+getCurrentAreaPackInvisibleAsset(timeLine[0],params.dataIndex)+'家入驻企业'
                        }
                        return resultStr
                      }
                    },

                    series: {
                      id: 'bar',
                      data: barData
                    }

                  });
                }

//------------------------------
                myChart.setOption(option);

              },
              function (response) {
                // error callback
                console.log(response)
              })
//            .catch(function (response) {
//            console.log('error' + response)
//          })

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
    height: 750px;
    width: 100%;
    margin: 0 auto;
  }

</style>

