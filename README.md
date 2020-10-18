# conference

> A Vue.js project

## Build Setup

``` bash
# node安装与环境变量配置
参考 https://www.runoob.com/nodejs/nodejs-install-setup.html

# 安装淘宝镜像指令cnpm
sudo npm install -g cnpm --registry=https://registry.npm.taobao.org

# 安装webpack
cnpm install -g webpack
cnpm install -g webpack-cli
cnpm install -g webpack-dev-server

# 安装依赖包：命令行进入到工程目录中，执行下面的命令，安装依赖包，生成node_modules文件夹，拷贝源码时不需要拷贝该文件夹
cnpm install

# 本地开发： 命令行进入到工程目录中，执行下面的命令，进行本地开发，浏览器通过地址  http://localhost:8088 访问
cnpm run dev

# 打包：命令行进入到工程目录中，执行下面的打包命令, 输出目录为dist，每次打包的时候，都会自动删除之前的打包文件
cnpm run build


# 工程目录
	|——build 
	|——config
	|——src
	|	|——component
	|	|	|——index.vue		//页面主要内容
	|	|	|——person-panel.vue	//人员数据
	|	|	|——car-panel.vue	//营区车辆
	|	|	|——room-chart.vue	//智能查寝
	|	|	|——record-panel.vue	//机关楼进出记录
	|	|	|——person-detail-panel.vue	//最后一个进出人员
	|	|——assets  // 存放图片
	|	|——router		
	|	|	|——index.js 	//路由配置文件
	|	|——utils		//工具类
	|	|	|——resize.js		//监听dom标签的width和height
	|	|——main.js   // 入口文件
	|	|——mock.js   // mock假数据
	|——dist   // 打包输出目录


# jquery 
conference.vue 文件中已经引入jquery

# css样式
1) 在哪里写：在conference.vue文件中在<style lang="scss" scoped></style>中编写
2) 怎么写：这里用的是scss预编译，写法上与 css相同，但是可以用嵌套的方式写，有点类似于html标签的嵌套, '&'相当于衔接上一层的类名
    .list {
        &-item {

        }
    }
    相当于
    .list .list-item{

    }

# .vue文件
1) 定义的变量都在data()中，通过'this.xxx'来访问变量
2）方法都在methods中，通过'this.xxx()'来调用
3）初始化的方法可以在'mounted()'生命周期中执行，一般在里面调用异步方法获取数据
4）如何快速创建列表
    <div class="person-situation-item" v-for="item in personAnalysis" :key="item.name">
        <div class="ball" :class="'ball-'+item.name">{{item.value}}</div>
        <div class="label">{{item.label}}(人)</div>
    </div>
    ‘v-for’ 中相当于forEach方法，item为列表中每个元素的变量，也可以自己定义变量
5）在标签中，不需要添加'this.'就能直接访问data中的变量和方法
6）两个闭合标签内通过'{{}}'来加载变量
7）标签内部的属性如class等，可以通过在前面增加':'双引号的形式，表示一个变量，同时可以执行简单的计算，如三元运算符等

```

