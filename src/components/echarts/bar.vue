<template>
  <div class="echarts_bar-container" :ref="`bar_${random}`">234234</div>
</template>
<script>
// 引入 ECharts 主模块
const echarts = require("echarts/lib/echarts");
// 引入折线图/柱状图等组件
require("echarts/lib/chart/bar");
// 引入提示框和title组件，图例
require("echarts/lib/component/tooltip");
require("echarts/lib/component/title");
require("echarts/lib/component/legend");
require("echarts/lib/component/legendScroll"); //图例滚动
require("echarts/lib/component/toolbox");
require("echarts/lib/component/dataZoom");
require("echarts/lib/component/markPoint");
export default {
  name: "EchartsBar",
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    random() {
      return Math.random() * 1000;
    }
  },
  watch: {
    option: {
      deep: true,
      handler(n, o) {
        if (n !== o) {
          this.initData();
        }
      }
    }
  },
  mounted() {
    this.initData();
  },
  methods: {
    initData() {
      let myChart = echarts.init(this.$refs[`bar_${this.random}`]);
      myChart.setOption(this.option);
      window.addEventListener("resize", () => {
        myChart.resize(); //页面大小变化后myChart也更改大小
      });
      this.$once("hook:beforeDestroy", () => {
        window.removeEventListener("resize", myChart.resize);
      });
    }
  }
};
</script>
<style lang="scss">
.echarts_bar-container {
  width: 100%;
  height: 100%;
}
</style>