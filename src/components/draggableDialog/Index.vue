// 拖动组件
<template>
  <div
    ref="draggableWrap"
    :style="`width:${width}px`"
    :class="`draggable-wrap ${isDrag?'cursor-scroll':''}`"
  >
    <slot name="header"></slot>
    <slot name="body"></slot>
  </div>
</template>
<script>
export default {
  name: "draggable",
  props: {
    // 只支持以下组合：top/left、top/right、bottom/left、bottom/right。注意top/bottom、left/right不可同时传递
    top: {
      type: Number,
      default: null
    },
    bottom: {
      type: Number,
      default: null
    },
    left: {
      type: Number,
      default: null
    },
    right: {
      type: Number,
      default: null
    },
    center: {
      // 显示在中心
      type: Boolean,
      default: false
    },
    width: {
      type: Number,
      default: 500
    },
    isDrag: {
      // 是否开启拖动
      type: Boolean,
      default: true
    },
    overflow: {
      // 是否超出屏幕，默认否，配合offset使用
      type: Boolean,
      default: false
    },
    offset: {
      type: Array,
      default: () => {
        // 距离屏幕边距，分别代表：top/right/bottom/left(px)
        return [0, 0, 0, 0];
      }
    }
  },
  data() {
    return {
      option: {
        drapDom: null, // 拖动元素
        drapHeader: null, // 拖动元素插槽的元素
        dragHeight: null, // 拖动元素的高度
        dragWidth: null,
        winWidth: null, // 浏览器窗口宽度
        winHeight: null,
        mouseX: 0, // 鼠标按下时相对拖动元素的left坐标
        mouseY: 0 // 鼠标按下时相对拖动元素的top坐标
      }
    };
  },
  mounted() {
    this.option.drapHeader = this.$slots.header[0].elm;
    this.option.drapHeader.style.cursor = this.isDrag ? "all-scroll" : "";
    this.initData();
    window.addEventListener("resize", this.initData);
  },
  destroyed() {
    // window.removeEventListener('resize', this.initData)
    this.removeEvent(window, "resize", this.initData);
    this.removeEvent(this.option.drapHeader, "mousedown", this.mouseDown);
  },
  methods: {
    // 初始化信息
    initData() {
      let drapDom = this.$refs.draggableWrap;
      if (!drapDom) return;
      this.option.drapDom = drapDom;
      this.option.dragHeight = drapDom.offsetHeight || 0;
      this.option.dragWidth = drapDom.offsetWidth || 0;
      this.option.winHeight = window.innerHeight || 0;
      this.option.winWidth = window.innerWidth || 0;
      this.initPosition();
    },
    // 初始化定位
    initPosition() {
      this.$refs.draggableWrap.style.bottom = "initial";
      this.$refs.draggableWrap.style.right = "initial";
      if (!this.center) {
        if (this.bottom !== null) {
          this.option.drapDom.style.top =
            this.option.winHeight - this.option.dragHeight - this.bottom + "px";
        }
        if (this.right !== null) {
          this.option.drapDom.style.left =
            this.option.winWidth - this.option.dragWidth - this.right + "px";
        }
        if (this.top !== null) {
          this.option.drapDom.style.top = this.top + "px";
        }
        if (this.left !== null) {
          this.option.drapDom.style.left = this.left + "px";
        }
      } else {
        this.option.drapDom.style.top =
          this.option.winHeight / 2 - this.option.dragHeight / 2 + "px";
        this.option.drapDom.style.left =
          this.option.winWidth / 2 - this.option.dragWidth / 2 + "px";
      }

      if (this.isDrag) {
        this.addEvent(this.option.drapHeader, "mousedown", this.mouseDown);
      }
    },
    // 鼠标按下
    mouseDown(e) {
      this.option.mouseX = e.offsetX;
      this.option.mouseY = e.offsetY;
      this.addEvent(document, "mousemove", this.mouseMove);
      this.addEvent(document, "mouseup", this.mouseUp);
    },
    // 鼠标松开，移除事件
    mouseUp(e) {
      this.removeEvent(document, "mousemove", this.mouseMove);
    },
    // 鼠标移动
    mouseMove(e) {
      let ny = e.pageY - this.option.mouseY;
      let nx = e.pageX - this.option.mouseX;
      if (this.overflow) {
        this.option.drapDom.style.top = ny + "px";
        this.option.drapDom.style.left = nx + "px";
      } else {
        let maxY =
          ny >= this.option.winHeight - this.option.dragHeight - this.offset[2]
            ? this.option.winHeight - this.option.dragHeight - this.offset[2]
            : ny;
        let maxX =
          nx >= this.option.winWidth - this.option.dragWidth - this.offset[1]
            ? this.option.winWidth - this.option.dragWidth - this.offset[1]
            : nx;
        this.option.drapDom.style.top =
          ny <= this.offset[0] ? this.offset[0] : maxY + "px";
        this.option.drapDom.style.left =
          nx <= this.offset[3] ? this.offset[3] : maxX + "px";
      }
    },
    // 绑定事件
    addEvent(el, event, handler) {
      if (!el) {
        return;
      }
      if (el.attachEvent) {
        el.attachEvent("on" + event, handler);
      } else if (el.addEventListener) {
        el.addEventListener(event, handler, true);
      } else {
        el["on" + event] = handler;
      }
    },
    // 移除事件
    removeEvent(el, event, handler) {
      if (!el) {
        return;
      }
      if (el.detachEvent) {
        el.detachEvent("on" + event, handler);
      } else if (el.removeEventListener) {
        el.removeEventListener(event, handler, true);
      } else {
        el["on" + event] = null;
      }
    }
  }
};
</script>
<style>
.draggable-wrap {
  position: fixed;
  /* top: 20px; */
  /* left: 20px; */
}
</style>
