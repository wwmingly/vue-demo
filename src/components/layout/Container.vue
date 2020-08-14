// 空标签，用于多级菜单的父级
<template>
  <fragment>
    <keep-alive>
      <router-view v-if="$route.meta.keep"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keep"></router-view>
  </fragment>
</template>
<script>
import { Fragment } from "vue-fragment";
export default {
  name: "LayoutContainer",
  components: { Fragment }
};
</script>