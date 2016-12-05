<template >
<div>
    <p> 一共5个维度。分别是 寿命,人均收入,国家,人口总数,以及时间 </p>
     <p> 时间轴自动切换的形式容易看出变化趋势 </p>

      <div id="mapinner2">
  </div>
</div>
</template>


<script>

import  echarts from 'echarts'
export default({

  name : "innovateIndustry",
  mounted:function (){

$.get('http://7xlgc1.com1.z0.glb.clouddn.com/life-expectancy.json', function (data) {

	var myChart = echarts.init(document.getElementById('mapinner2'));

    // myChart.resize({
    //     width:200,
    //     height:200
    // })
	var option = null;
    myChart.hideLoading();

    var itemStyle = {

    normal: {
            opacity: 0.8,
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
    };

    var sizeFunction = function (x) {
        var y = Math.sqrt(x / 5e8) + 0.1;
        return y * 80;
    };

    // Schema:   这是和鼠标 hover 散点图 展示内容的模板
    var schema = [
        {name: 'Income', index: 0, text: '人均收入', unit: '美元'},
        {name: 'LifeExpectancy', index: 1, text: '人均寿命', unit: '岁'},
        {name: 'Population', index: 2, text: '总人口', unit: ''},
        {name: 'Country', index: 3, text: '国家', unit: ''}
    ];

    option = {
        baseOption: {
          timeline: {
                axisType: 'category',
                orient: 'vertical',
                autoPlay: true,
                inverse: true,
                playInterval: 1000,
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
            backgroundColor: '#404a59',
            // 这些外部 没有明确指向的实际上 是在设置散点图的熟悉 后续可以看到
            //滚动年份大Logo
            title: [{
                'text': data.timeline[0],
                textAlign: 'center',
                left: '63%',
                top: '55%',
                textStyle: {
                    fontSize: 100,
                    color: 'rgba(255, 255, 255, 0.7)'
                }
            }],


            tooltip: {
                padding: 5,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1,

                // 这里的tip 是具体的散点图的 那，这个obj 的值需要考量
                formatter: function (obj) {
                    var value = obj.value;
                    return schema[3].text + '：' + value[3] + '<br>'
                            + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
                            + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
                            + schema[2].text + '：' + value[2] + '<br>';
                }
            },
            grid: {
                left: '12%',
                right: '110'
            },

            // 这里的 x y 轴的设定很奇怪 都没有指定 data , type 类型制定了有些可以通过Value直接获得值
            xAxis: {
                type: 'log',
                logBase:2,
                name: '人均收入',
                max: 100000,
                min: 300,
                nameGap: 25,
                nameLocation: 'middle',
                // inverse:true,
                boundaryGap: ['50%', '50%'],
                nameTextStyle: {
                    fontSize: 18
                },
                splitLine: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                axisLabel: {
                    formatter: '{value} $'
                }
            },
            yAxis: {
                type: 'value',
                name: '平均寿命',
                max: 100,
                nameTextStyle: {
                    color: '#ccc',
                    fontSize: 18
                },
                axisLine: {
                    lineStyle: {
                        color: '#ccc'
                    }
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    formatter: '{value} 岁'
                }
            },

            // 这部分是费解的
            visualMap: [
                {
                    show: false,
                    dimension: 3,
                    categories: data.counties,
                    calculable: true,
                    precision: 0.1,
                    textGap: 30,
                    textStyle: {
                        color: '#ccc'
                    },
                    inRange: {
                        color: (function () {
                            var colors = ['#bcd3bb', '#e88f70', '#edc1a5', '#9dc5c8', '#e1e8c8', '#7b7c68', '#e5b5b5', '#f0b489', '#928ea8', '#bda29a'];
                            return colors.concat(colors);
                        })()
                    }
                }
            ],

           // 这里应该不用赋值也是行的吧,奇怪这里至少需要预留一个  name 的值
            series: [
                {
                     type: 'scatter',
                     // name: 'abd'
                    // itemStyle: itemStyle,
                    // data: data.series[0]
                    // symbolSize: function(val) {
                    //     return sizeFunction(val[2]);
                    // }
                }
            ],
            animationDurationUpdate: 1000,
            animationEasingUpdate: 'quinticInOut'
        },

        //  这里放空 等待后续插入 options 上是单个时间切片的各个维度的
        options: []
    };

    for (var n = 0; n < data.timeline.length; n++) {

        option.baseOption.timeline.data.push(data.timeline[n]);
        option.options.push({
            title: {
                show: true,
                'text': data.timeline[n] + ''
            },

            series: {
                name: data.timeline[n],
                type: 'scatter',
                itemStyle: itemStyle,
                data: data.series[n],
                symbolSize: function(val) {
                    return sizeFunction(val[2]);
                }
            }
        });
    }

    myChart.setOption(option);

});



// mounted  end
    }
})






</script >



<style  scoped>

#mapinner2{
height: 400px;
width:  600px;
margin: 0 auto;
};

</style>

