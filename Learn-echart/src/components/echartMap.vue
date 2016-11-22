<template >

  <div id="mapinner">

aabb
  </div>

</template>


<script>

import  echarts from 'echarts'

export default({
	name : "mpaDeom",
    data () {
    return {
      msg: 'Welcome Map'
    }
    },
  mounted:function (){

//在这里外部虚拟dom已经被替换完成了  

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('mapinner'));
//var myChart = echarts.init(this.$el);

// 柱状图
myChart.setOption({
    title: { text: 'ECharts 入门示例' },
    tooltip: {},
    xAxis: {
        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});
    

/*
var option = null;

option = {
    backgroundColor: '#2c343c',
    
    // 数值的大小映射到明暗度
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    title: {
          text: 'ECharts 入门示例'
     },
    legend: {
          data:['销量']
     },

    series : [
        {
            name: '访问来源',
            type: 'pie',
            radius: '67%',
            data:[
                {value:235, name:'视频广告'},
                {value:274, name:'联盟广告'},
                {value:310, name:'邮件营销'},
                {value:335, name:'直接访问'},
                {value:400, name:'搜索引擎'}
            ],
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
}



// 异步加载

// var fetchDate = function(){
// myChart.setOption(option, true)
// myChart.hideLoading();	
// }
// myChart.showLoading();
// setTimeout( fetchDate,3000); 



// 数据源动态更新，差值比对

var base = +new Date(2014, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];

var data = [Math.random() * 150];
var now = new Date(base);

function addData(shift) {
    now = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/');
    date.push(now);
    data.push((Math.random() - 0.4) * 10 + data[data.length - 1]);

    if (shift) {
        date.shift();
        data.shift();
    }

    now = new Date(+new Date(now) + oneDay);
}

for (var i = 1; i < 100; i++) {
    addData();
}


option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date
    },
    yAxis: {
        boundaryGap: [0, '50%'],
        type: 'value'
    },
    series: [
        {
            name:'成交',
            type:'line',
            smooth:true,
            symbol: 'none',
            stack: 'a',
            areaStyle: {
                normal: {}
            },
            data: data
        }
    ]
};

app.timeTicket = setInterval(function () {
    addData(true);
    myChart.setOption({
        xAxis: {
            data: date
        },
        series: [{
            name:'成交',
            data: data
        }]
    }
    );
}, 500);
myChart.setOption(option, true);
*/
// 数据源动态更新，差值比对 end 

myChart.on('click', function (params) {

	console.log(params);

 });




//end
    }
})









</script >

<style >
#mapinner{
height: 400px;
width: 600px;
 }	

</style>

