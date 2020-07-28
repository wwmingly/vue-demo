<template>
  <div class="small_layout_index-container">
    <div class="small-left max_height no_scroll_box">
      <slot name="left"></slot>
    </div>
    <div class="small-right max_height no_scroll_box">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "SmallLayout"
};
</script>
<style lang="scss">
@import "../../assets/styles/variable";
.small_layout_index-container {
  display: flex;
  .small-left {
    width: 250px;
    box-sizing: border-box;
    padding: 20px;
  }
  .small-right {
    flex: 1;
    background: #f5f5f5;
    border-left: 1px solid #e4e7ed;
  }
  .max_height {
    height: calc(100vh - 101px);
    overflow: auto;
  }
}
@media screen and (max-width: $mediaWidthHide) {
  .small_layout_index-container {
    display: block;
    .small-left {
      width: 100%;
      box-sizing: border-box;
      padding: 20px;
    }
    .small-right {
      background: #f5f5f5;
    }
    .max_height {
      height: auto;
    }
  }
}
</style>