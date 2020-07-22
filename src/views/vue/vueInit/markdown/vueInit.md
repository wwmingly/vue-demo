<slot name="title_1"></slot>

      vue init webpack project-name
      project-name：自定义项目名称，且不能有大些字母

<slot name="title_2"></slot>

    1、安装依赖
      npm install --save-dev sass-loader
      npm install --save-dev node-sass
      简写：npm install --save-dev sass-loader node-sass
    2、配置loader
      在webpack.base.conf.js中配置:
      rules:[
        ...
        {
          test: /\.sass$/,
          loaders: ['style', 'css', 'sass']
        }
        ....
      ]
    3、在.vue文件使用
        <style lang="scss"></style>
        注意：当完成以上3步，可能除出错，原因是sass-loader版本太高导致，网上说改成7.3.1版本，可能还是太高！
        所以我改成"sass-loader": "^6.0.7",手动删除node_modules文件安装npm install。
        或者在package.json文件删除sass-loader,npm install --save-dev sass-loader@6.x即可。

<slot name="images_2"></slot>
<slot name="title_3"></slot>

    1、npm i element-ui -S
    2、在main.js文件引入
      import ElementUI from 'element-ui';
      import 'element-ui/lib/theme-chalk/index.css';

      Vue.use(ElementUI);
      参考地址：https://element.eleme.cn/2.9/#/zh-CN/component/quickstart

<slot name="title_4"></slot>

    ...

<slot name="title_5"></slot>

      以本项目为例，采用以下布局
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-header>Header</el-header>
          <el-main>Main</el-main>
        </el-container>
      </el-container>
      那么，对于以上布局，一般会拆分组件，分别处理对应的业务或者功能，以下是我拆分的组件：
      参考地址：https://element.eleme.cn/2.9/#/zh-CN/component/container

<slot name="images_5"></slot>

<slot name="markdown_5"></slot>

<slot name="title_6"></slot>

    新建styles，如下：
      1、common.scss               // 公共样式
      2、elementReset.scss         // 重置elementUI样式
      3、reset.scss                // 标签默认样式重置
      4、utils.scss                // 工具类样式
      5、variable.scss             // 样式公共变量
      6、index.scss                // 出口文件
<slot name="markdown_6"></slot>
<slot name="title_7"></slot>
    安装路由模块，如果构建工程时已经安装，则跳过
    npm install vue-router --save
    说明：
      1、所有路由都基于new Router({
        mode:'hash',                // 两种模式hash/history，默认hash
        routes:[                    // 不要写错，是routes
          {
            path:'',                // 跳转路由名称
            name:'',                // 模块名称
            children:[]
          }
        ]
      })
      后续补充。。。
<slot name="markdown_7"></slot>
<slot name="title_8"></slot>
    安装：cnpm install vuex -S
    四个核心部分组成：store（仓库）、mutations（同步）、actions（异步）、getters（计算属性）
    模块：modules，作用：又可以分为无数个上面四个部分
    举例使用
    state:{
      isCollapse: false                                  // 举例变量
    },
    mutations:{
      isCollapse(state,data){                            // 通过commit同步修改state.isCollapse
        state.isCollapse = data
      }
    }
    actions:{
      isCollapseActions({commit}, data) {                // 通过dispatch异步修改state.isCollapse
        commit("isCollapseChange", data)
      }
    }
    getters:{
      isCollapseChange: state => {                       // 计算属性监听state.isCollapse变化
        return state.isCollapse
      }
    }
    <!-- 实战应用 -->
    computed:{
      isCollapse() {                                     // 取state的值，常用方式
        return this.$store.state.isCollapse;
      },
      isCollapseChange () {
          return this.$store.getters.isCollapseChange    // getters 使用方式
      }
    }
    通过mutations修改isCollapse值：
    this.$store.commit("isCollapse", !this.$store.state.isCollapse);
    通过actions修改isCollapse值：
    this.$store.dispatch("isCollapseActions",!this.$store.state.isCollapse)

    简单的文件结构，在mian.js引入
<slot name="images_8"></slot>
    基本文件内容，后续补充
<slot name="markdown_8"></slot>
<slot name="title_9"></slot>
    安装：npm install axios -S
    发现不错的封装：https://juejin.im/post/59a22e71518825242c422604
    优秀归优秀，以下也是我爬坑出来的：
<slot name="markdown_9"></slot>

<slot name="title_10"></slot>
    1、图片图标压缩：https://tinypng.com/
    2、图片懒加载，安装：npm install vue-lazyload --save-dev
       在main.js引入
       import VueLazyload from 'vue-lazyload'
       Vue.use(VueLazyload);
       或者 Vue.use(VueLazyload, {
          preLoad: 1.3,
          error: 'dist/error.png',
          loading: 'dist/loading.gif',
          attempt: 1
       })
       组件：<img v-lazy="imgUrl" />
       地址：https://github.com/hilongjw/vue-lazyload

       Webpack 对图片进行压缩：
          安装：npm install image-webpack-loader --save-dev
          在 webpack.base.conf.js 文件
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            use:[
              {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
              },
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true,
                }
              }
            ]
          }
    3、首页白屏情况
       可以在<div id="app"></div>内添加一些内容，让其加载不显得空白
       骨架引入，特别是移动端很有必要，比如你的项目刚好采用nut-UI，http://nutui.jd.com/#/skeleton
       按需加载，开启gzip压缩，服务端渲染（ssr）
       通过打包webpack打包是，首页加载文件较小等，参考https://juejin.im/post/5c1fa158f265da613c09cb36
    4、组件、路由懒加载
    5、一些代码层面优化
       v-if与v-show的使用场景区别：
          v-if 是 真正 的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建；也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
          v-show 就简单得多， 不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 的 display 属性进行切换。
          运用场景：
            v-if 适用于在运行时很少改变条件，不需要频繁切换条件的场景；v-show 则适用于需要非常频繁切换条件的场景。
       computed与watch使用场景区别：
          computed： 是计算属性，依赖其它属性值，并且 computed 的值有缓存，只有它依赖的属性值发生改变，下一次获取 computed 的值时才会重新计算 computed  的值；
          watch： 更多的是「观察」的作用，类似于某些数据的监听回调 ，每当监听的数据变化时都会执行回调进行后续操作。
          运用场景：
            当我们需要进行数值计算，并且依赖于其它数据时，应该使用 computed，因为可以利用 computed 的缓存特性，避免每次获取值时，都要重新计算；
            当我们需要在数据变化时执行异步或开销较大的操作时，应该使用 watch，使用 watch 选项允许我们执行异步操作 ( 访问一个 API )，
            限制我们执行该操作的频率，并在我们得到最终结果前，设置中间状态。这些都是计算属性无法做到的。
       v-for 遍历必须为 item 添加 key，且避免同时使用 v-if
       Object.freeze(users)
          Vue 会通过 Object.defineProperty 对数据进行劫持，来实现视图响应数据的变化，那么在展示数据，通过 Object.freeze 方法来冻结一个对象，一旦被冻结的对象就再也不能被修改了。
          this.users = Object.freeze(users);
       事件销毁removeEventListener
          beforeDestroy() {
            removeEventListener('click', this.click, false)
          }
<slot name="title_11"></slot>
    ...
<slot name="title_21"></slot>
    ...
<slot name="title_22"></slot>
    ...
<slot name="title_31"></slot>
    ...
<slot name="title_32"></slot>
    ...
<slot name="title_41"></slot>
    ...
<slot name="title_51"></slot>
  安装：npm install echarts -S