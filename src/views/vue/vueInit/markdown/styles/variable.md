// 主题色
$themeColor: #5f9ea0; // 主题色
// header
$headerColor: #ffffff; // 头部的文字颜色
$headerBorder: #68b0b3; // 头部的分割线
$headerBackground: $themeColor; // 头部的背景色
// MenuLeft.vue
$menuBackgroundColor: #5a5a5a; // 背景颜色
$menuTextColor: #fff; // 文字颜色
$menuActiveTextColor: #ffd04b; // 文字选中颜色

// 为支持  import variable from "@/assets/styles/variable.scss";
:export {
  menuBackgroundColor: $menuBackgroundColor;
  menuTextColor: $menuTextColor;
  menuActiveTextColor: $menuActiveTextColor;
}
