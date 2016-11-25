<template >
  <div id="mapinner2">
  </div>
</template>


<script>

import  echarts from 'echarts'

export default({

  name : "autoPaly",
  mounted:function (){

  var app = [];
	var myChart = echarts.init(document.getElementById('mapinner2'));

	var option = null;
    myChart.hideLoading();

app.title = '柱状图框选';

var xAxisData = [];
var data1 = [];
var data2 = [];
var data3 = [];
var data4 = [];

//生成随机数据
for (var i = 0; i < 10; i++) {
    xAxisData.push('Class' + i);
    data1.push((Math.random() * 2).toFixed(2));
    data2.push(-Math.random().toFixed(2));
    data3.push((Math.random() * 5).toFixed(2));
    data4.push((Math.random() + 0.3).toFixed(2));
}

// 选中item的效果
var itemStyle = {
    normal: {
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    backgroundColor: '#eee',
    legend: {
        data: ['bar', 'bar2', 'bar3', 'bar4'],
        align: 'left',
        left: 10
    },
    // 区域选择工具
    // brush: {
    //     toolbox: ['rect', 'polygon', 'lineX', 'lineY', 'keep', 'clear'],
    //     xAxisIndex: 0
    // },
    // bar  平铺还是堆叠   动态类型切换  非常赞
    toolbox: {
        feature: {
            magicType: {
                type: ['line','bar','stack', 'tiled']
            },
            dataView: {}
        }
    },
    tooltip: {},
    xAxis: {
    	// 动态生成了10个Class
        data: xAxisData,
        name: 'X Axis',
        silent: false,
        axisLine: {onZero: true},
        splitLine: {show: false},
        splitArea: {show: false}
    },
    yAxis: {
        inverse: true,
        splitArea: {show: false}
    },
    grid: {
        left: 100
    },
    visualMap: {
        // type: 'continuous',
        calculable: true,
        // splitNumber: 5,

        dimension: 1,// 这个映射维度的指定好像有问题
        text: ['High', 'Low'],
        inverse: false,

        // itemHeight: 200,
        min: -2,
        max: 12,
        top: 60,
        left: 10,
        inRange: {
            colorLightness: [0.7, 0.8]
        },
        outOfRange: {
            color: '#fff'
        },
        controller: {
            inRange: {
            color: ['#61a5f8', '#eecb5f', '#e16759']
            }
        }
    },


    // 奇怪 这里的 Stack 设置也并没有什么效果
    series: [
        {
            name: 'bar',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: data1
        },
        {
            name: 'bar2',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: data2
        },
        {
            name: 'bar3',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: data3
        },
        {
            name: 'bar4',
            type: 'bar',
            // stack: 'two',
            itemStyle: itemStyle,
            data: data4
        }
    ]
};


//监控了 区域选择组件
myChart.on('brushSelected', renderBrushed);

// 以后可以区域选择配合多表联动
function renderBrushed(params) {
    var brushed = [];
    var brushComponent = params.batch[0];

    for (var sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
        var rawIndices = brushComponent.selected[sIdx].dataIndex;
        brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
    }

    myChart.setOption({
        title: {
            backgroundColor: '#333',

            //这里使用换行做拼接，神了
            text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
            bottom: 0,
            right: 0,
            width: 100,

            textStyle: {
                fontSize: 12,
                color: '#fff'
            }
        }
    });
}


myChart.setOption(option);

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

