<template >

  <div id="mapinner">
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




var option = null;

app.title = '嵌套环形图';

option = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data:['直达','营销广告','搜索引擎','邮件营销','联盟广告','视频广告','百度','谷歌','必应','其他']
    },
    series: [
        {
            name:'访问来源',
            type:'pie',
            selectedMode: 'single',
            radius: [0, '30%'],

            label: {
                normal: {
                    position: 'inner'
                }
            },
            labelLine: {
                normal: {
                    show: false
                }
            },
            data:[
                {value:335, name:'直达', selected:true},
                {value:679, name:'营销广告'},
                {value:1548, name:'搜索引擎'}
            ]
        },
        {
            name:'访问来源',
            type:'pie',
            radius: ['40%', '55%'],

            data:[
                {value:335, name:'直达'},
                {value:310, name:'邮件营销'},
                {value:234, name:'联盟广告'},
                {value:135, name:'视频广告'},
                {value:1048, name:'百度'},
                {value:251, name:'谷歌'},
                {value:147, name:'必应'},
                {value:102, name:'其他'}
            ]
        }
    ]
};

myChart.setOption(option, true);

/*

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

<style  scoped>
#mapinner{
height: 400px;
width:  600px;
margin: 0 auto;
}	

</style>

