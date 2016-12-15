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

                 var topRankDate =  {"ProvincePackInvisibleAssetsTop":{"timeline":{"2016":{"福建":{"(厦门)湖里高新技术开发区":{"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":3423},"(福州)闽侯大学城软件园":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333},"(厦门)软件园二期":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333}},"浙江":{"(杭州)西湖一区":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333},"(温州)温岭一区":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333},"(乌镇)乌镇一区":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333}}},"2015":{"福建":{"(厦门)湖里高新技术开发区":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333},"(福州)闽侯大学城软件园":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333},"(厦门)软件园二期":{"InventPatent":123,"NewTypePatent":12,"AppearanceDesignPatent":123,"Copyright":12,"Trademark":331,"Software":234,"Total":333333}},"浙江":{"(杭州)西湖一区":{"InventPatent":"123","NewTypePatent":"12","AppearanceDesignPatent":"123","Copyright":"12","Trademark":"331","Software":"234","Total":"44444"},"(温州)温岭一区":{"InventPatent":"123","NewTypePatent":"12","AppearanceDesignPatent":"123","Copyright":"12","Trademark":"331","Software":"234","Total":"44444"},"(乌镇)乌镇一区":{"InventPatent":"123","NewTypePatent":"12","AppearanceDesignPatent":"123","Copyright":"12","Trademark":"331","Software":"234","Total":"44444"}}}}}};

                var topRankTimeLine = Object.keys(topRankDate.ProvincePackInvisibleAssetsTop.timeline).reverse();
                var topRankLastYearData =  topRankDate.ProvincePackInvisibleAssetsTop.timeline[topRankTimeLine[0]];
                let provinceNamesArry = Object.keys(topRankLastYearData)
                var invisibleAssetsTypeArry = this.$store.state.AssetsTypeArry
                var invisibleAssetsTypeDispalyArry = this.$store.state.AssetsTypeDisplayNameArry



//                        id:'abc2',
//
//                  name:'实用新型专利有效量',
//                    type:'bar',
//                  stack: '专利',
////                        data:patentTypeEachProvinceValue("NewTypePatent")
//                  data:[13,110]
//
//                },

                function getStackSeriesByProvinceName(provinceName){
                  var  stackSeries = []

                  for ( let i= 0;i <invisibleAssetsTypeArry.length;i++ ){

                    let obj = new Object()
                    obj.name = invisibleAssetsTypeDispalyArry[i]
                    obj.type = 'bar'
                    obj.stack = '无形资产'
                    obj.data = getDataByProvinceNameAndAssetsType(provinceName,invisibleAssetsTypeArry[i])
                    stackSeries.push(obj)
                  }

                  return stackSeries
                }

                getStackSeriesByProvinceName('福建')
                debugger



               function getCurrentProvincePackData(provinceName) {
                 return topRankLastYearData[provinceName]
               }

               function getCurrentProvincePackNames(provinceName) {
                   let names
                   let provinceDate = getCurrentProvincePackData(provinceName)
                    names = Object.keys(provinceDate);
                    return names
               }

                function getCurrentProvincePackValues(provinceName) {
                  let packValues
                  let provinceDate = getCurrentProvincePackData(provinceName)
                  packValues = Object.values(provinceDate);
                  return packValues
                }

               function getDataByProvinceNameAndAssetsType(provinceName,assetsType) {
                 let packValues =  getCurrentProvincePackValues(provinceName)
                 let currentProvinceAssesTypeValue = []
                  for ( let pack  of packValues ){
                      let currentvalue
                     if(typeof(pack[assetsType])!="undefined"&&pack[assetsType]!=null) {
                       currentvalue = pack[assetsType]
                        }else{
                       currentvalue = 0
                     }
                   currentProvinceAssesTypeValue.push(currentvalue)
                 }
                return currentProvinceAssesTypeValue
               }

//                var abc =  getDataByProvinceNameAndAssetsType('福建','InventPatent')


              /*

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

              */

//                var dataSource = {"KeyCityPackInvisibleAssetsNum":{"timeline":{"2016":[{"name":"厦门","value":[111.88,31,800]},{"name":"上海","value":[111.82,30.11,37]},{"name":"杭州","value":[111.83,32.32,20]}],"2015":[{"name":"厦门","value":[111.88,31,8]},{"name":"上海","value":[111.82,30.11,37]},{"name":"杭州","value":[111.83,32.32,20]}]}}};
//                //var  dataSource = response.data
//                var timeLine = Object.keys(dataSource.KeyCityPackInvisibleAssetsNum.timeline).reverse();
//                var lastYearData = dataSource.KeyCityPackInvisibleAssetsNum.timeline[timeLine[0]];

//                function getCurrentYearPackInvisibleAsset(currentYear) {
//                  let currentYearData =  dataSource.KeyCityPackInvisibleAssetsNum.timeline[currentYear]
//                  let values = []
//                  for ( let obj of  currentYearData){
//                    let  currentValue = obj.value[2]
//                    values.push(currentValue)
//                  }
//                  return values
//                }
//
//
//                function getCurrentYearMaxValue(currentYear) {
//                  let   values = getCurrentYearPackInvisibleAsset(currentYear)
//                  return Math.max.apply(null, values)
//                }
//
//                function getCurrentYearMinValue(currentYear) {
//                  let   values = getCurrentYearPackInvisibleAsset(currentYear)
//                  return Math.min.apply(null, values)
//                }
//
//                function getCurrentAreaPackInvisibleAsset(currentYear,dataIndex) {
//                  let  values =  getCurrentYearPackInvisibleAsset(currentYear)
//                  return values[dataIndex]
//
//                }



                option = {

                  backgroundColor: '#d0c4c4',
                  animation: true,
                  animationDuration: 1000,
                  animationEasing: 'cubicInOut',
                  animationDurationUpdate: 1000,
                  animationEasingUpdate: 'cubicInOut',
                  title: [
                    {
                      text: '创业指数-'+topRankTimeLine[0]+'年省份无形资产分部',
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
                    zoom: 1.5,
                    label: {
                      normal:{
                        show:true,
                        textStyle:{
                          color:'#fff'
                        }

                      }  ,
                      emphasis: {
                        show: true,
                        textStyle:{
                          color:'#fff'
                        }

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
//                    name:'(万人)',
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
                    name: '当前选中区域 园区无形资产分部',
                    nameGap: 16,
                    axisLine: {show: false, lineStyle: {color: '#ddd'}},
                    axisTick: {show: false, lineStyle: {color: '#ddd'}},
                    axisLabel: {interval: 0, textStyle: {color: '#ddd'}},
                    data: []
                  },
                  series: [
                    {
                      id:'map',
                      name: '年末总人口',
                      type: 'scatter',
                      coordinateSystem: 'geo',
                      data:null,
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

                  ]
                };



                 myChart.on("geoselectchanged",mapProvinceClick);

                function mapProvinceClick (parameter) {

                  let provinceOption = {
                    title: {text: '创新指数-'+topRankTimeLine[0]+'年'+ parameter.name+'范围内园区专利数量构成'},

                    tooltip : {
                      formatter:function (params, ticket, callback) {
                        if(typeof(params.data)== "undefined" ){
                          return
                        }
                        var resultStr
                        debugger
                        if(typeof(params.data.value)!="undefined"&&params.data.value!=null) {
                          resultStr = params.name+'<br/>'+ params.data.value[3]+'个园区<br/>'+getCurrentAreaPackInvisibleAsset(topRankTimeLine[0],params.dataIndex)+'家入驻企业'
                        }else{
                          resultStr = params.name+'<br/>'+params.seriesName+':'+params.value+'件<br/>'
                        }
                        return resultStr
                      }
                    },
                    legend: {
                      top: 'bottom' ,
                      left: 'right',
                      data:invisibleAssetsTypeDispalyArry
                    },

                    yAxis : [
                      {
                        type : 'category',
                        data: getCurrentProvincePackNames(parameter.name)
                      }
                    ],
                    xAxis : [
                      {
                        position: 'top',
                        type : 'value'
                      }
                    ],
                    // 改写成为动态的
                   series : getStackSeriesByProvinceName(parameter.name)

                  };



                  myChart.setOption(provinceOption);

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

