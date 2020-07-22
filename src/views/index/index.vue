<template>
  <div class="index_index-container">
    <el-row :gutter="0">
      <el-col :span="18">
        <div class="echarts-container">
          <div class="echarts-title">系统访问人数统计</div>
          <line-echart :option="lineOption" :style="{width: '100%', height: '350px'}"></line-echart>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="echarts-container">
          <div class="echarts-title">系统访问人数统计</div>
          <pie-echart :option="pieOption" :style="{width: '100%', height: '350px'}"></pie-echart>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="echarts-container">
          <div class="echarts-title">系统访问人数统计</div>
          <bar-echart :option="barOpiton" :style="{width: '100%', height: '350px'}"></bar-echart>
        </div>
      </el-col>
      <el-col :span="6">
        <div class="echarts-container">
          <div class="echarts-title">系统访问人数统计</div>
          <pie-echart :option="pieOption" :style="{width: '100%', height: '350px'}"></pie-echart>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import lineEchart from "@/components/echarts/line";
import barEchart from "@/components/echarts/bar";
import pieEchart from "../../components/echarts/pie";
import { lineOption, barOpiton, pieOption } from "./echarts/options";
export default {
  name: "Index",
  components: { lineEchart, barEchart, pieEchart },
  computed: {
    formatdate() {
      return this.$options.filters.formatdate;
    },
    lineOption() {
      let len = 48;
      lineOption.xAxis.data = this.createHour(len);
      lineOption.series[0].data = this.createRandom(0, 1000, len);
      lineOption.series[1].data = this.createRandom(0, 100, len, 2);
      lineOption.series[2].data = this.createRandom(0, 200, len);
      return lineOption;
    },
    barOpiton() {
      let len = 48;
      barOpiton.xAxis.data = this.createHour(len);
      barOpiton.series[0].data = this.createRandom(0, 1000, len);
      barOpiton.series[1].data = this.createRandom(0, 100, len, 2);
      barOpiton.series[2].data = this.createRandom(0, 1000, len);
      return barOpiton;
    },
    pieOption() {
      let len = 10;

      let arr = this.createRandom(0, 100, len);
      let legend = (barOpiton.xAxis.data = this.createHour(len));
      pieOption.legend.data = legend;
      let _arr = [];
      arr.forEach((item, index) => {
        _arr.push({ value: item, name: legend[index] });
      });
      pieOption.series[0].data = _arr;
      return pieOption;
    }
  },
  mounted() {
    this.createHour();
  },
  methods: {
    // 生成随机数
    createRandom(min = 0, max = 100, len = 24, fix = 0) {
      let arr = [];
      for (let i = 0; i < len; i++) {
        arr.push((Math.random() * (max - min + 1) + min).toFixed(fix));
      }
      return arr;
    },
    // 长度，间隔(分钟)，截至时间
    createHour(len = 24, interval = 30, end = new Date()) {
      let minutes = new Date().getMinutes() > 30 ? 30 : 0;
      let hour = new Date().getHours();
      let time = this.formatdate(end, "yyyy-MM-dd");
      let date = new Date(`${time} ${hour}:${minutes}`);

      let arr = [];
      for (let i = 0; i < len; i++) {
        arr.push(
          this.formatdate(
            date - i * interval * 60 * 1000,
            "yyyy-MM-dd HH:mm"
          ).substr(-5)
        );
      }
      return arr.reverse();
    }
  }
};
</script>
<style lang="scss">
@import "../../assets/styles/variable.scss";
.index_index-container {
  .echarts-container {
    margin: 10px;
    border: 1px solid #f5f5f5;
    box-shadow: 0px 0px 10px #eee;
    .echarts-title {
      height: 40px;
      line-height: 40px;
      padding: 0 20px;
      font-size: 14px;
      font-weight: bold;
      color: $themeColor;
      border-bottom: 1px solid #f5f5f5;
    }
  }
}
</style>
