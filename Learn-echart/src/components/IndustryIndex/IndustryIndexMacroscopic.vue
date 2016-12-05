<template >
  <div id="mapinner">
  </div>
</template>


<script>

  import  echarts from 'echarts'


  export default({
    name : "innovateIndustry",
    mounted:function (){

//使用JQuery 加载外部JS
      $.when(
        $.getScript('http://7xlgc1.com1.z0.glb.clouddn.com/timelineGDP.js'),
      ).done(function () {
        console.log('timelineGDP done');

//在这里外部虚拟dom已经被替换完成了
// 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('mapinner'));
        myChart.hideLoading();

        var dataSource = {"AreaValue":{"timeline":{"2016":{"第一产业":{"福建":"321","浙江":"333","广东":"444"},"第二产业":{"福建":"222","浙江":"234","广东":"222"},"第三产业":{"福建":"333","浙江":"234","广东":"333"}},"2015":{"第一产业":{"福建":"151","浙江":"234","广东":"345"},"第二产业":{"福建":"123","浙江":"234","广东":"345"},"第三产业":{"福建":"123","浙江":"234","广东":"345"}},"2014":{"第一产业":{"福建":"123","浙江":"234","广东":"345"},"第二产业":{"福建":"123","浙江":"234","广东":"345"},"第三产业":{"福建":"123","浙江":"234","广东":"345"}}}}};
         var timeLine = Object.keys(dataSource.AreaValue.timeline)
        var firstItemDate =  dataSource.AreaValue.timeline[timeLine[0]];

        var  provinceNameArry= Object.keys(firstItemDate.第一产业)

        var categoryData = [
          '北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江',
          '上海','江苏','浙江','安徽','福建','江西','山东','河南',
          '湖北','湖南','广东','广西','海南','重庆','四川','贵州',
          '云南','西藏','陕西','甘肃','青海','宁夏','新疆'
        ];

//        根据日期和类型获得相关数据
        function getDataBYDateAndIndustryType(datetime,industryType) {
          let dataArry = []
          var currentDateAllData = dataSource.AreaValue.timeline[datetime]

          let CurrentDateAndTypeObj =  eval("currentDateAllData."+industryType)
          dataArry = Object.values(CurrentDateAndTypeObj)
          return dataArry;
        }

        // 单类产业的SUM值
        function getSumValueBYDateAndIndustryType (datetime,industryType) {
          let dataArry = getDataBYDateAndIndustryType (datetime,industryType)
          let sum = 0;
          for(let i = 0;i<dataArry.length;i++ ){
              sum = sum + parseInt(dataArry[i]);
          }
          return sum
        }

//        var abc = getDataBYDateAndIndustryType("2016","第一产业");
//        var abc1 = getDataBYDateAndIndustryType("2016","第二产业");
//        var abc2 = getDataBYDateAndIndustryType("2016","第三产业");
//        var abc3 = getDataBYDateAndIndustryType("2015","第一产业");

//        var bbc = getSumValueBYDateAndIndustryType("2016","第一产业")

         //构造时间切片个数的optionsValueArry
        var  optionsValueArry = []
        /**
         *
         *
         *   {
              title: {text: '2002区域行业创新指标'},
              series: [
                {data: dataMap.dataPI['2002']},
                {data: dataMap.dataSI['2002']},
                {data: dataMap.dataTI['2002']},
                {data: [
                  {name: '第一产业', value: dataMap.dataPI['2002sum']},
                  {name: '第二产业', value: dataMap.dataSI['2002sum']},
                  {name: '第三产业', value: dataMap.dataTI['2002sum']}
                ]}
              ]
            }
         *
         *
         * */
        for (let i = 0; i < timeLine.length; i++) {
          var optionObj = new Object()
          optionObj.title = {text: timeLine[i] + '区域行业创新指标'}

          optionObj.series = [
            {data: getDataBYDateAndIndustryType(timeLine[i],"第一产业") },
            {data: getDataBYDateAndIndustryType(timeLine[i],"第二产业") },
            {data: getDataBYDateAndIndustryType(timeLine[i],"第三产业") }, {
            data: [{
              name: '第一产业',
              value: getSumValueBYDateAndIndustryType(timeLine[i],"第一产业")
            }, {name: '第二产业', value: getSumValueBYDateAndIndustryType(timeLine[i],"第二产业")},
              {name: '第三产业', value: getSumValueBYDateAndIndustryType(timeLine[i],"第三产业")  }]
          }];

          optionsValueArry.push(optionObj)
        }




        var innovateOption  = null;
        innovateOption = {
          baseOption: {
            timeline: {
              axisType: 'category',
              autoPlay: true,
              orient: 'vertical',
              playInterval: 1500,
              left: null,
              right: 0,
              top: 20,
              bottom: 20,
              width: 55,
              data: timeLine,
              symbol: 'circle',
              label: {
                formatter : function(s) {
                  return (new Date(s)).getFullYear();
                },
                normal: {
                  textStyle: {
                    color: '#999'
                  }
                },
                emphasis: {
                  textStyle: {
                    color: '#333'
                  }
                }
              }
            },
            title: {
              subtext: '数据来自:锐信视界'
            },
            tooltip: {
              trigger:'axis',
              axisPointer: {
                type: 'shadow'
              }
            },
            xAxis: {
              type: 'value',
              name: '（百亿)',
//              max: 30000,
              data: null
            },
            yAxis: {
              type: 'category',
//              data: categoryData,
              data:provinceNameArry,
              axisLabel: {interval: 0},
              splitLine: {show: false}
            },
            legend: {
              data: ['第一产业', '第二产业', '第三产业'],
              selected: {
                '第一产业': false
              }
            },
            calculable : true,
            series: [
              {name: '第一产业', type: 'bar'},
              {name: '第二产业', type: 'bar'},
              {name: '第三产业', type: 'bar'},
              {name: 'GDP占比', type: 'pie'}
            ]
          },
          media: [
            {
              option: {
                legend: {
                  orient: 'horizontal',
                  left: 'right',
                  itemGap: 10
                },
                grid: {
                  left: '10%',
                  top: 80,
                  right: 90,
                  bottom: 100
                },
                xAxis: {
                  nameLocation: 'end',
                  nameGap: 10,
                  splitNumber: 5,
                  splitLine: {
                    show: true
                  }
                },
                timeline: {
                  orient: 'horizontal',
                  inverse: false,
                  left: '20%',
                  right: '20%',
                  bottom: 10,
                  height: 40
                },
                series: [
                  {name: 'GDP占比', center: ['75%', '30%'], radius: '28%'}
                ]
              }
            },
            {
              query: {maxWidth: 670, minWidth: 550},
              option: {
                legend: {
                  orient: 'horizontal',
                  left: 200,
                  itemGap: 5
                },
                grid: {
                  left: '10%',
                  top: 80,
                  right: 90,
                  bottom: 100
                },
                xAxis: {
                  nameLocation: 'end',
                  nameGap: 10,
                  splitNumber: 5,
                  splitLine: {
                    show: true
                  }
                },
                timeline: {
                  orient: 'horizontal',
                  inverse: false,
                  left: '20%',
                  right: '20%',
                  bottom: 10,
                  height: 40
                },
                series: [
                  {name: 'GDP占比', center: ['75%', '30%'], radius: '28%'}
                ]
              }
            },
            {
              query: {maxWidth: 550},
              option: {
                legend: {
                  orient: 'vertical',
                  left: 'right',
                  itemGap: 5
                },
                grid: {
                  left: 55,
                  top: '32%',
                  right: 100,
                  bottom: 50
                },
                xAxis: {
                  nameLocation: 'middle',
                  nameGap: 25,
                  splitNumber: 3
                },
                timeline: {
                  orient: 'vertical',
                  inverse: true,
                  right: 10,
                  top: 150,
                  bottom: 10,
                  width: 55
                },
                series: [
                  {name: 'GDP占比', center: ['45%', '20%'], radius: '28%'}
                ]
              }
            }
          ],

          // 这里 options 需要写一个循环给替换掉
          options: optionsValueArry
//          options: [
//            {
//              title: {text: '2002区域行业创新指标'},
//              series: [
//                {data: dataMap.dataPI['2002']},
//                {data: dataMap.dataSI['2002']},
//                {data: dataMap.dataTI['2002']},
//                {data: [
//                  {name: '第一产业', value: dataMap.dataPI['2002sum']},
//                  {name: '第二产业', value: dataMap.dataSI['2002sum']},
//                  {name: '第三产业', value: dataMap.dataTI['2002sum']}
//                ]}
//              ]
//            },
//            {
//              title : {text: '2003区域行业创新指标'},
//              series : [
//                {data: dataMap.dataPI['2003']},
//                {data: dataMap.dataSI['2003']},
//                {data: dataMap.dataTI['2003']},
//                {data: [
//                  {name: '第一产业', value: dataMap.dataPI['2003sum']},
//                  {name: '第二产业', value: dataMap.dataSI['2003sum']},
//                  {name: '第三产业', value: dataMap.dataTI['2003sum']}
//                ]}
//              ]
//            },
//            {
//              title : {text: '2004区域行业创新指标'},
//              series : [
//                {data: dataMap.dataPI['2004']},
//                {data: dataMap.dataSI['2004']},
//                {data: dataMap.dataTI['2004']},
//                {data: [
//                  {name: '第一产业', value: dataMap.dataPI['2004sum']},
//                  {name: '第二产业', value: dataMap.dataSI['2004sum']},
//                  {name: '第三产业', value: dataMap.dataTI['2004sum']}
//                ]}
//              ]
//            }
//          ]// end options

        };

        myChart.setOption(innovateOption);
// jquery   done
      })
//end
    }
  })
</script >



<style  scoped>

  #mapinner{
    height: 700px;
    width:  600px;
    margin: 0 auto;
  }

</style>

