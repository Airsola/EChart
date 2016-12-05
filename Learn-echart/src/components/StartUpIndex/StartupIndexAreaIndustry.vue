<template>
  <div>
    <p>地图 结合 省份区域的点击</p>
    <div id="mapinner2">
    </div>
  </div>
</template>

<script>
  import  echarts from 'echarts'

  export default({
    name: "mapArea",
    mounted: function () {

      $.when(
        // 外部接入的map  D3.js 那边搞来的
        // $.get('http://7xlgc1.com1.z0.glb.clouddn.com/chinageo.json'),
        //百度提供的json
        $.get('http://7xlgc1.com1.z0.glb.clouddn.com/china.json'),
      ).done(function (chinaJson) {
        console.log('chinaMap.js');

        var myChart = echarts.init(document.getElementById('mapinner2'));
        echarts.registerMap('china', chinaJson);
        var app = [];
        var option = null;
        myChart.hideLoading();


//------------------

        /**
         * 排序数组或者对象
         * by Jinko
         * date --
         * @param object 数组或对象
         * @param subkey 需要排序的子键, 该参数可以是字符串, 也可以是一个数组
         * @param desc 排序方式, true:降序, false|undefined:升序
         * @returns {*} 返回排序后的数组或者对象
         *
         * 注意: 对于对象的排序, 如果使用console.log打印对象的显示可能和排序结果不一致,
         *  其键会被浏览器以字母顺序排序显示,但在for循环中则为正确的排序顺序
         */
        function sort_object(object, subkey, desc)
        {
          var is_array = false;
          if(Object.prototype.toString.call(object) === '[object Array]') {
            is_array = true;
          }
          if(is_array) {
            var keys = {length:object.length};
          } else {
            if(typeof(Object.keys) == 'function') {
              var keys = Object.keys(object);
            } else{
              var keys = [];
              for(var key in keys) {
                keys.push(key);
              }
            }
          }
          for(var i= 0; i<keys.length; i++) {
            for(var j=i+ 0; j<keys.length; j++) {
              if(is_array) {
                //数组排序
                if(Object.prototype.toString.call(subkey) === '[object Array]') {
                  var vali = object[i];
                  var valj = object[j];
                  for(var si= 0; si<subkey.length; si++) {
                    vali = vali[ subkey[si] ];
                    valj = valj[ subkey[si] ];
                  }
                } else {
                  if((!subkey && subkey !== 0 ) || subkey == '' && object.sort) {
                    var vali = object[i];
                    var valj = object[j];
                  } else {
                    var vali = object[i][subkey];
                    var valj = object[j][subkey];
                  }
                }
                if(desc) {
                  if(valj > vali) {
                    var tmp = object[i];
                    object[i] = object[j];
                    object[j] = tmp;
                  }
                } else {
                  if(valj < vali) {
                    var tmp = object[i];
                    object[i] = object[j];
                    object[j] = tmp;
                  }
                }
              } else {
                //对象排序
                var obi = object[ keys[i] ];
                var obj = object[ keys[j] ];
                if(Object.prototype.toString.call(subkey) === '[object Array]') {
                  var vali = obi;
                  var valj = obj;
                  for(var si= 0; si<subkey.length; si++) {
                    vali = vali[ subkey[si] ];
                    valj = valj[ subkey[si] ];
                  }
                } else {
                  if((!subkey && subkey !== 0) || subkey == '' && object.sort) {
                    var vali = obi;
                    var valj = obj;
                  } else {
                    var vali = obi[subkey];
                    var valj = obj[subkey];
                  }
                }
                if(desc) {
                  if(valj > vali) {
                    var tmp = keys[i];
                    keys[i] = keys[j];
                    keys[j] = tmp;
                  }
                } else {
                  if(valj < vali) {
                    var tmp = keys[i];
                    keys[i] = keys[j];
                    keys[j] = tmp;
                  }
                }
              }//is!array
            }
          }
          if(is_array) {
            return object;
          } else {
            var sorted = {};
            for(var i= 0; i<keys.length; i++) {
              sorted[ keys[i] ] = object[ keys[i] ];
            }
            return sorted;
          }
        } //sort_object


        var dataSourceTree = {"timeline":{"2016":{"北京":{"制造业":"123","文化体育业":"233","金融业":"132"},"上海":{"制造业":"321","文化体育业":"444","金融业":"513"},"浙江":{"制造业":"233","文化体育业":"111","金融业":"555"}},"2015":{"北京":{"制造业":"123","文化体育业":"233","金融业":"132"},"上海":{"制造业":"123","文化体育业":"233","金融业":"132"},"浙江":{"制造业":"123","文化体育业":"233","金融业":"132"}},"2014":{"北京":{"制造业":"123","文化体育业":"233","金融业":"132"},"上海":{"制造业":"123","文化体育业":"233","金融业":"132"},"浙江":{"制造业":"123","文化体育业":"233","金融业":"132"}}}};

       var timeLine = Object.keys(dataSourceTree.timeline).reverse();
       console.log(timeLine[0]);
       var lastYearData = dataSourceTree.timeline[timeLine[0]];


       var industryType = Object.keys(lastYearData);

//       根据地域名称获得对应的行业数值
      function getDataByAreaName(areaName) {
        let lastYearCurrentAreaDate =  eval("lastYearData."+areaName);
        let industryKeys = Object.keys(lastYearCurrentAreaDate);
        let industryValues = Object.values(lastYearCurrentAreaDate);

        let dataArry = [];
        for(let i = 0;i<industryKeys.length;i++ ){
          let pieObj = new Object();
          pieObj.name = industryKeys[i];
          pieObj.value = industryValues[i];
          dataArry.push(pieObj)
        }
        return dataArry
      }

         //对对象进行降序排序
//        lastYearData = sort_object(lastYearData, '', true);
//        var object2SortArry = [];
//
//        for(var k in lastYearData) {
//          var obj = new Object();
//          obj.name = k;
//          obj.value = lastYearData[k];
//          object2SortArry.push(obj);
//          console.log(k, ':', lastYearData[k]);
//        }




        option = {
          backgroundColor: '#827b85',

          animation: true,
          animationDuration: 1000,
          animationEasing: 'cubicInOut',
          animationDurationUpdate: 1000,
          animationEasingUpdate: 'cubicInOut',
          title: [
            {
              text: '经济指数-地区生产总值',
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
               min: 0,
               max: 600,
            //将离散型的映射给分割了
            splitNumber: 8,
            show:false,
//            calculable: true,
            inRange: {
              // color: ['#50a3ba', '#eac736', '#d94e5d']
              color: ['#61a5f8', '#eecb5f', '#e16759'],
//              colorLightness: [0, 1]

            },
            textStyle: {
              color: '#fff'
            }
          },
          tooltip: {
            trigger: 'item'
          },
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
              mapType:'china',
              left: '10',
              right: '35%',
              center: [117.98561551896913, 31.205000490896193],
              zoom: 1.5,
              selectedMode: 'single',
               data: [],
//              data:[{"name": "安徽", "value": "5211"}],

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
              center: ['80%', '40%'],
              radius:'40%',
              symbol: 'none',
              roseType: 'angle',

              itemStyle: {
                normal: {
                  color: '#ddb926'
                }
              },
              data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
              ],
            }
          ]
        };

//        myChart.on('brushselected', renderBrushed);

        function renderBrushed(params) {
          var mainSeries = params.batch[0].selected[0];

          var selectedItems = [];
          var categoryData = [];
          var barData = [];
          var maxBar = 30;
          var sum = 0;
          var count = 0;

          for (var i = 0; i < mainSeries.dataIndex.length; i++) {
            var rawIndex = mainSeries.dataIndex[i];
            var dataItem = convertedData[0][rawIndex];
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

          console.log(categoryData.length + categoryData);

          myChart.setOption({
            yAxis: {
              data: categoryData
            },
            xAxis: {
              axisLabel: {show: !!count}
            },
            title: {
              id: 'statistic',
              text: count ? '平均: ' + (sum / count).toFixed(4) : ''
            },
            series: {
              id: 'bar',
              data: barData
            }
          });
        }

//      点击省区域
        myChart.on("mapselectchanged", function (param) {
          console.log(param);
          let abd = getDataByAreaName(param.name)
          debugger
          //根据不同的区域名称来绘制不同区域的饼图
          myChart.setOption({
            title: {text: param.name + '区域招聘热度指数'},
            tooltip: {},
//            legend: {
//              data:['销量']
//            },

            series: [{
              // saber 很重要
              id: 'Sabar',
              type: 'pie',
              center: ['80%', '40%'],
              radius:'35%',
              data:getDataByAreaName(param.name),
              roseType: 'angle',
              label: {
                normal: {
                  textStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                  }
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
                emphasis:{
                  color: '#c23531',
                  shadowBlur: 200,
                  shadowColor: 'rgba(0, 0, 0, 0.8)'

                }

              }
            }


            ]



          });


        });

//------------------------------

        myChart.setOption(option);


      }) //AJAX get done


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

  ;

</style>

