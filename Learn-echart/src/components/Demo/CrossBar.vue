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

  var labelRight = {
    normal: {
        position: 'right'
    }
};
option = {
    title: {
        text: '交错正负轴标签',
        subtext: 'From ExcelHome',
        sublink: 'http://e.weibo.com/1341556070/AjwF2AgQm'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    grid: {
        top: 80,
        bottom: 30
    },
    xAxis: {
        type : 'value',
        position: 'top',
        // 隐藏坐标轴
        axisLine: {show: false},

        splitLine: {lineStyle:{type:'dashed'}},
    },
    yAxis: {
        type : 'category',
        axisLine: {show: false},
        axisLabel: {show: false},
        axisTick: {show: false},
        splitLine: {show: false},


        // 这里的数据量加在Y轴上
        data : ['ten', 'nine', 'eight', 'seven', 'six', 'five', 'four', 'three', 'two', 'one']
    },
    series : [
        {
            name:'生活费',
            type:'bar',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    formatter: ' {b} '
                }
            },

            // 直接设置负值就出现反向了
            data:[
                {value: -0.07, label: labelRight},
                {value: -0.09, label: labelRight},
                0.2, 0.44,
                {value: -0.23, label: labelRight},
                0.08,
                {value: -0.17, label: labelRight},
                0.47,
                {value: -0.36, label: labelRight},
                0.18
            ]
        }
    ]
};

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

