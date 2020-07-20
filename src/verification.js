// 路由验证
import router from './router'
import { getUserInfo } from "@/api/login/index"

router.beforeEach((to, from, next) => {
  // 修改标题
  document.title = to.meta.title;
  const token = localStorage.getItem("vvmily-user-token");
  // 1、获取本地token
  if (!token) {
    //    1.1、如果获取不到，且路由不是登录页面，则让其跳转至登录
    if (to.path !== '/login') {
      next({ path: '/login' })
    } else {
      //    1.2、请求登录页面
      next()
    }
  } else {
    // 1.3、获取到token
    // 1.3.1、目标路由login页面，则跳转至login登录页面
    if (to.path === '/login') {
      next()
    } else {
      // 2、获取用户信息
      const userInfo = localStorage.getItem("vvmily-user-info");
      if (userInfo) {
        // 2.1获取成功，直接进入，否则进入2.2通过token获取用户信息
        next()
      } else {
        // 2.2 获取失败，重新请求
        let res = getUserInfo(token);
        let { code, message, result } = res;
        if (code === 200) {
          localStorage.setItem("vvmily-user-info", JSON.stringify(result))
          next()
        } else {
          // 并未获取用户信息，可能是请求失败，或者token
          next({ path: "/login" })
        }
      }
    }
  }
})