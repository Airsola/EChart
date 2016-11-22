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
var categoryData = [
        '北京','天津','河北','山西','内蒙古','辽宁','吉林','黑龙江',
        '上海','江苏','浙江','安徽','福建','江西','山东','河南',
        '湖北','湖南','广东','广西','海南','重庆','四川','贵州',
        '云南','西藏','陕西','甘肃','青海','宁夏','新疆'
    ];

var innovateOption  = null;
innovateOption = {
        baseOption: {
            timeline: {
                axisType: 'category',
                autoPlay: true,
                orient: 'vertical',
                playInterval: 1000,
                left: null,
                right: 0,
                top: 20,
                bottom: 20,
                width: 55,
                data: [
                    '2002-01-01', '2003-01-01', '2004-01-01',
                    '2005-01-01', '2006-01-01', '2007-01-01',
                    '2008-01-01', '2009-01-01', '2010-01-01',
                 {
                    value: '2017-01-01',
                    tooltip: {
                        formatter: function (params) {
                            return params.name + '特朗普当选了 世界要变了';
                        }
                    },
                    symbol: 'diamond',
                    symbolSize: 18
                },
                ],
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
                name: '家（亿)',
                max: 30000,
                data: null
            },
            yAxis: {
                type: 'category',
                data: categoryData,
                axisLabel: {interval: 0},
                splitLine: {show: false}
            },
            legend: {
                data: ['第一产业', '第二产业', '第三产业', 'GDP', '金融', '房地产'],
                selected: {
                    'GDP': false, '金融': false, '房地产': false
                }
            },
            calculable : true,
            series: [
                {name: 'GDP', type: 'bar'},
                {name: '金融', type: 'bar'},
                {name: '房地产', type: 'bar'},
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
        options: [
            {
                title: {text: '2002区域行业创新指标'},
                series: [
                    {data: dataMap.dataGDP['2002']},
                    {data: dataMap.dataFinancial['2002']},
                    {data: dataMap.dataEstate['2002']},
                    {data: dataMap.dataPI['2002']},
                    {data: dataMap.dataSI['2002']},
                    {data: dataMap.dataTI['2002']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2002sum']},
                        {name: '第二产业', value: dataMap.dataSI['2002sum']},
                        {name: '第三产业', value: dataMap.dataTI['2002sum']}
                    ]}
                ]
            },
            {
                title : {text: '2003区域行业创新指标'},
                series : [
                    {data: dataMap.dataGDP['2003']},
                    {data: dataMap.dataFinancial['2003']},
                    {data: dataMap.dataEstate['2003']},
                    {data: dataMap.dataPI['2003']},
                    {data: dataMap.dataSI['2003']},
                    {data: dataMap.dataTI['2003']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2003sum']},
                        {name: '第二产业', value: dataMap.dataSI['2003sum']},
                        {name: '第三产业', value: dataMap.dataTI['2003sum']}
                    ]}
                ]
            },
            {
                title : {text: '2004区域行业创新指标'},
                series : [
                    {data: dataMap.dataGDP['2004']},
                    {data: dataMap.dataFinancial['2004']},
                    {data: dataMap.dataEstate['2004']},
                    {data: dataMap.dataPI['2004']},
                    {data: dataMap.dataSI['2004']},
                    {data: dataMap.dataTI['2004']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2004sum']},
                        {name: '第二产业', value: dataMap.dataSI['2004sum']},
                        {name: '第三产业', value: dataMap.dataTI['2004sum']}
                    ]}
                ]
            },
            {
                title : {text: '2005区域行业创新指标'},
                series : [
                    {data: dataMap.dataGDP['2005']},
                    {data: dataMap.dataFinancial['2005']},
                    {data: dataMap.dataEstate['2005']},
                    {data: dataMap.dataPI['2005']},
                    {data: dataMap.dataSI['2005']},
                    {data: dataMap.dataTI['2005']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2005sum']},
                        {name: '第二产业', value: dataMap.dataSI['2005sum']},
                        {name: '第三产业', value: dataMap.dataTI['2005sum']}
                    ]}
                ]
            },
            {
                title : {text: '2006区域行业创新指标'},
                series : [
                    {data: dataMap.dataGDP['2006']},
                    {data: dataMap.dataFinancial['2006']},
                    {data: dataMap.dataEstate['2006']},
                    {data: dataMap.dataPI['2006']},
                    {data: dataMap.dataSI['2006']},
                    {data: dataMap.dataTI['2006']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2006sum']},
                        {name: '第二产业', value: dataMap.dataSI['2006sum']},
                        {name: '第三产业', value: dataMap.dataTI['2006sum']}
                    ]}
                ]
            },
            {
                title : {text: '2007区域行业创新指标'},
                series : [
                    {data: dataMap.dataGDP['2007']},
                    {data: dataMap.dataFinancial['2007']},
                    {data: dataMap.dataEstate['2007']},
                    {data: dataMap.dataPI['2007']},
                    {data: dataMap.dataSI['2007']},
                    {data: dataMap.dataTI['2007']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2007sum']},
                        {name: '第二产业', value: dataMap.dataSI['2007sum']},
                        {name: '第三产业', value: dataMap.dataTI['2007sum']}
                    ]}
                ]
            },
            {
                title : {text: '2008区域行业创新指标'},
                series : [
                    {data: dataMap.dataGDP['2008']},
                    {data: dataMap.dataFinancial['2008']},
                    {data: dataMap.dataEstate['2008']},
                    {data: dataMap.dataPI['2008']},
                    {data: dataMap.dataSI['2008']},
                    {data: dataMap.dataTI['2008']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2008sum']},
                        {name: '第二产业', value: dataMap.dataSI['2008sum']},
                        {name: '第三产业', value: dataMap.dataTI['2008sum']}
                    ]}
                ]
            },
            {
                title : {text: '2009区域行业创新指标'},
                series : [
                    {data: dataMap.dataGDP['2009']},
                    {data: dataMap.dataFinancial['2009']},
                    {data: dataMap.dataEstate['2009']},
                    {data: dataMap.dataPI['2009']},
                    {data: dataMap.dataSI['2009']},
                    {data: dataMap.dataTI['2009']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2009sum']},
                        {name: '第二产业', value: dataMap.dataSI['2009sum']},
                        {name: '第三产业', value: dataMap.dataTI['2009sum']}
                    ]}
                ]
            },
            {
                title : {text: '2010区域行业创新指标'},
                series : [
                    {data: dataMap.dataGDP['2010']},
                    {data: dataMap.dataFinancial['2010']},
                    {data: dataMap.dataEstate['2010']},
                    {data: dataMap.dataPI['2010']},
                    {data: dataMap.dataSI['2010']},
                    {data: dataMap.dataTI['2010']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2010sum']},
                        {name: '第二产业', value: dataMap.dataSI['2010sum']},
                        {name: '第三产业', value: dataMap.dataTI['2010sum']}
                    ]}
                ]
            },
            {
                title : {text: '2011区域行业创新指标'},
                series : [
                    {data: dataMap.dataGDP['2011']},
                    {data: dataMap.dataFinancial['2011']},
                    {data: dataMap.dataEstate['2011']},
                    {data: dataMap.dataPI['2011']},
                    {data: dataMap.dataSI['2011']},
                    {data: dataMap.dataTI['2011']},
                    {data: [
                        {name: '第一产业', value: dataMap.dataPI['2011sum']},
                        {name: '第二产业', value: dataMap.dataSI['2011sum']},
                        {name: '第三产业', value: dataMap.dataTI['2011sum']}
                    ]}
                ]
            }
        ]
    };


myChart.setOption(innovateOption);
myChart.on('click', function (params) {
	console.log(params);
 });

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

