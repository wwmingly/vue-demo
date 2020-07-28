<template>
  <div id="app">
    <keep-alive :include="include">
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      include: []
    };
  },
  watch: {
    $route(to, from) {
      if (to.meta.keep) {
        !this.include.includes(to.name) && this.include.push(to.name);
      }
    }
  }
};
</script>

<style lang="scss">
</style>
