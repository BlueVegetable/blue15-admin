options1 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['订单总金额'],
        textStyle: {
            color: '#000'
        },
        top: '8%',
        left: '12%',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                color: '#4ac1ed',
                interval: 0
            },
            data: ['白云局', '从化局', '番禺局', '海珠局', '花都局', '黄埔局', '荔湾局', '南沙局', '天河局', '越秀局', '增城局']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                color: '#4ac1ed',
                show: true,
                color: '#4ac1ed',
                // formatter: "{value} %"
            },
            splitNumber: '4'
        }
    ],
    series: [
        {
            name: '订单总金额',
            type: 'bar',
            itemStyle: {
                color: 'rgb(0,229,238)'
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            barWidth: '18%',
            data: [38.85, 14.21, 35.99, 25.30, 51.27, 31.49, 20.97, 55.04, 33.72, 36.57, 11.06]
        }
    ]
}

options2 = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['订单总金额'],
        textStyle: {
            color: '#000'
        },
        top: '8%',
        left: '12%',
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            axisLabel: {
                color: '#4ac1ed',
                interval: 0
            },
            data: ['白云局', '从化局', '番禺局', '海珠局', '花都局', '黄埔局', '荔湾局', '南沙局', '天河局', '越秀局', '增城局']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel: {
                color: '#4ac1ed',
                // formatter: "{value} %"
            },
            splitNumber: '4'
        }
    ],
    series: [
        {
            name: '订单总金额',
            type: 'bar',
            itemStyle: {
                color: 'rgb(0,229,238)'
            },
            label: {
                normal: {
                    show: true,
                    textStyle: {
                        color: '#000'
                    }
                }
            },
            barWidth: '18%',
            data: [38.85, 14.21, 35.99, 25.30, 51.27, 31.49, 20.97, 55.04, 33.72, 36.57, 11.06]
        }
    ]
}

