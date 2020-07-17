<template>
  <div class="markdown_index-container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "Markdown"
};
</script>
<style lang="scss">
.markdown_index-container {
  width: 50%;
  background: #f5f5f5;
  overflow: auto;
  box-sizing: border-box;
  padding: 20px;
}
</style>