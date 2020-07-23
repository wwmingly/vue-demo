// 线图
export let lineOption = {
  backgroundColor: "#fff",
  color: ["#5f9ea0", "#efcf73", "#8ec9eb"],
  title: {},
  tooltip: {
    trigger: "axis"
  },
  toolbox: {
    right: '4%',
    feature: {
      dataView: {},
      saveAsImage: {},
      restore: {},
      magicType: {
        type: ['line', 'bar', 'stack', 'tiled']
      }
    }
  },
  legend: {
    data: [{
      name: "访问量",
      icon: "circle"
    }, {
      name: "增长量",
      icon: "circle"
    }, {
      name: "在线人数",
      icon: "circle"
    }],
    left: "5%",
    top: '3%'
  },
  grid: {
    left: "6%",
    right: "5%",
    bottom: '10%',
    top: "12%"
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: [],
    axisLine: {
      lineStyle: {
        color: "#999"
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dotted",
        color: "#eee"
      }
    }
  },
  yAxis: [
    {
      type: "value",
      axisLabel: {
        formatter: "{value}/人数"
      },
      axisLine: {
        lineStyle: {
          color: "#909090"
        }
      },
      splitLine: {
        show: true,
        lineStyle: {
          type: "dotted",
          color: "#eee"
        }
      }
    },
    {
      type: "value",
      axisLabel: {
        formatter: "{value} %"
      },
      axisLine: {
        lineStyle: {
          color: "#909090"
        }
      }
    }
  ],
  series: [
    {
      name: "访问量",
      type: "line",
      smooth: true,
      data: [

      ],
      markPoint: {
        data: [
          { type: "max", name: "最大值" },
          { type: "min", name: "最小值" }
        ]
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }]
      }
    },
    {
      name: "增长量",
      type: "line",
      smooth: true,
      yAxisIndex: 1,
      data: [

      ],
      markPoint: {
        data: [{ name: "周最低", value: -2, xAxis: 1, yAxis: -1.5 }]
      },
      markLine: {
        data: [
          { type: "average", name: "平均值" },
          [
            {
              symbol: "none",
              x: "90%",
              yAxis: "max"
            },
            {
              symbol: "circle",
              label: {
                position: "start",
                formatter: "最大值"
              },
              type: "max",
              name: "最高点"
            }
          ]
        ]
      }
    }, {
      name: "在线人数",
      type: "line",
      smooth: true,
      data: [

      ],
      markPoint: {
        data: [
          { type: "max", name: "最大值" },
          { type: "min", name: "最小值" }
        ]
      },
      markLine: {
        data: [{ type: "average", name: "平均值" }]
      }
    },
  ]
};
// 柱状图
export let barOpiton = {
  backgroundColor: "#fff",
  color: ["#5f9ea0", "#efcf73", "#8ec9eb"],
  legend: {
    data: [{
      name: "访问量",
      icon: "diamond"
    }, {
      name: "增长量",
      icon: "diamond"
    }, {
      name: "在线人数",
      icon: "diamond"
    }],
    left: "5%",
    top: '3%'
  },
  tooltip: {
    trigger: "axis"
  },
  grid: {
    left: "6%",
    right: "5%",
    bottom: '10%',
    top: "12%"
  },
  toolbox: {
    right: '4%',
    feature: {
      dataView: {},
      saveAsImage: {},
      restore: {},
      magicType: {
        type: ['line', 'bar', 'stack', 'tiled']
      }
    }
  },
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    axisLine: {
      lineStyle: {
        color: "#999"
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dotted",
        color: "#eee"
      }
    }
  },
  yAxis: [{
    type: 'value',
    axisLine: {
      lineStyle: {
        color: "#909090"
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dotted",
        color: "#eee"
      }
    }
  }, {
    type: 'value',
    axisLine: {
      lineStyle: {
        color: "#909090"
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        type: "dotted",
        color: "#eee"
      }
    }
  }],
  series: [{
    data: [],
    type: 'bar',
    name: "访问量",
  }, {
    data: [],
    type: 'bar',
    yAxisIndex: 1,
    name: "增长量",
  }, {
    data: [],
    type: 'bar',
    name: "在线人数",
  }]
};

export let pieOption = {
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)"
  },
  legend: {
    left: "center",
    top: "bottom",
    data: [
      "访问量",
      "增长量",
      "在线人数"
    ]
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: {
        show: true,
        type: ["pie", "funnel"]
      },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: "综合统计",
      type: "pie",
      radius: [30, 110],
      roseType: "area",
      data: [
        { value: 10, name: "rose1" },
        { value: 5, name: "rose2" },
        { value: 15, name: "rose3" },
        { value: 25, name: "rose4" },
        { value: 20, name: "rose5" },
        { value: 35, name: "rose6" },
        { value: 30, name: "rose7" },
        { value: 40, name: "rose8" }
      ]
    }
  ]
};
