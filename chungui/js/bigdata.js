window.onload = function(){
    var myChart = echarts.init(document.querySelector('.con-left'));
    var option = {
        title: {
            text: '接入机型占比',
            textStyle:{
                color:'#fff',
                fontSize:16
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            y:'10%',
            x: '5%',
            data:[
                {name:'A机型',icon:"circle"},
                {name:'B机型',icon:"circle"},
                {name:'C机型',icon:"circle"},
                {name:'D机型',icon:"circle"},
                {name:'E机型',icon:"circle"},
                {name:'F机型',icon:"circle"},
                {name:'G机型',icon:"circle"}
            ],
            textStyle:{
                fontSize:10,
                color:'#fff'
            }
        },
        color:['#0373f0','#d79348','#373693','#24ae4f','#06b5c8','#009e9a','#ac2571'],
        series: [
            {
                name:'访问来源',
                type:'pie',
                radius: ['30%', '55%'],
                center:["50%","60%"],
                data:[
                    {value:4600, name:'A机型'},
                    {value:4600, name:'B机型'},
                    {value:15600, name:'C机型'},
                    {value:6600, name:'D机型'},
                    {value:5700, name:'E机型'},
                    {value:7600, name:'F机型'},
                    {value:3500, name:'G机型'}
                ]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);

    var e=66;
    var myChart1 = echarts.init(document.querySelector('.ss1'));
    var option1 = {
        title:{
            show:true,
            text:e+'%',
            x:'center',
            y:'center',
            textStyle:{
                color:'#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{d}%"
        },
        color:['#00751c','#002437'],
        series: [
            {
                name:'',
                type:'pie',
                radius: ['80%', '95%'],
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[{value:e,name:''},{value:100-e,name:''}]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart1.setOption(option1);

    var d=52;
    var myChart2 = echarts.init(document.querySelector('.ss2'));
    var option2 = {
        title:{
            show:true,
            text:d+'%',
            x:'center',
            y:'center',
            textStyle:{
                color:'#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{d}%"
        },
        color:['#0f74e0','#002437'],
        series: [
            {
                name:'',
                type:'pie',
                radius: ['80%', '95%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[{value:d,name:''},{value:100-d,name:''}]
            }
        ]
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart2.setOption(option2);

    var c=34;
    var myChart3 = echarts.init(document.querySelector('.ss3'));
    var option3 = {
        title:{
            show:true,
            text:c+'%',
            x:'center',
            y:'center',
            textStyle:{
                color:'#fff'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: "{d}%"
        },
        color:['#1b988a','#002437'],
        series: [
            {
                name:'',
                type:'pie',
                radius: ['80%', '95%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: false
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[{value:c,name:''},{value:100-c,name:''}]
            }
        ]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChart3.setOption(option3);
    
    var myChart4 = echarts.init(document.querySelector('.foot-left'));
    var option4 = {
        title: {
            text: '30天日均线流量趋势',
            y:10,
            textStyle: {       
                fontSize: 16,
                color:"#fff"
            }
        },
        xAxis: {
            type: 'category',
            data: ['1/1', '12/29', '12/26', '12/23', '12/20', '12/17', '12/14','12/11','12/8','12/5','12/2'],
            boundaryGap: false,
            splitLine: {
                 show: false                         
            },
            axisLabel:{
                interval:0,
                rotate:40,  
                textStyle: {
                     color: '#fff',
                     fontSize:'10'
                }  
            }   
        },
        yAxis: {
            type: 'value',
            splitLine: {
                 show: false                         
            },
            axisLabel: {
                 textStyle: {
                     color: '#fff',
                     fontSize:'12'
                 },
            } 
        },
        series: [{
            data: [50,49,100,92,49,100,49,138,95,92,100],
            type: 'line',
            smooth: true,
            lineStyle:{color:'#3a9897'},
            areaStyle:{color:'#0a1b2d'}
        }]
    };
    myChart4.setOption(option4);

    var myChart5 = echarts.init(document.querySelector('.foot-right'));
    var option5 = {
        title: {
            text: '集群性能/近一个小时',
            y:10,
            textStyle: {       
                fontSize: 16,
                color:"#fff"
            }
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            orient:'vertical',
            left:'right',
            top:'20%',
            data:['网络','内存','CPU'],
            icon:'circle',
            textStyle:{color:'#fff'}
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['20:50','20:40','20:30','20:20','20:10','20:00','19:50'],
            splitLine: {
                 show: false                         
            },
            axisLabel: {
                 textStyle: {
                     color: '#fff',
                     fontSize:'12'
                 },
            } 
        },
        yAxis: {
            type: 'value',
            splitLine: {
                 show: false                         
            },
            axisLabel: {
                 textStyle: {
                     color: '#fff',
                     fontSize:'12'
                 },
            } 
        },
        color:['#ff8600','#026be1','#009f97'],
        series: [
            {
                name:'网络',
                type:'line',
                data:[120, 132, 101, 134, 90, 230, 210]
            },
            {
                name:'内存',
                type:'line',
                data:[220, 182, 191, 234, 290, 330, 310]
            },
            {
                name:'CPU',
                type:'line',
                data:[150, 232, 201, 154, 190, 330, 410]
            }
        ]
    };
    myChart5.setOption(option5);

    window.onresize = function () {  //适应页面
        myChart.resize();
        myChart1.resize();
        myChart2.resize();
        myChart3.resize(); 
        myChart4.resize();
        myChart5.resize();
    }

}