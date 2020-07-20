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