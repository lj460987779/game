### 项目启动
***
如果没有安装过wepy需要全局安装或更新WePY命令行工具
```
npm install wepy-cli -g 
```
克隆项目
```
git clone http://192.168.1.90/git/timeline/sys-jpgame.git
```
安装依赖
```
npm install
```

开启实时编译
```
wepy build --watch
```

#### 关键目录结构
```
├── dist                   微信开发者工具指定的目录（该目录由WePY的build指令自动编译生成，请不要直接修改该目录下的文件
在项目根目录下输入wepy build --watch命令后，可使用微信开发者工具打开dist目录,此时在src下进行的修改保存后都会在微信开发者工具中进行热更新）
├── node_modules           
├── src                    代码编写的目录（该目录为使用WePY后的开发目录）
|   ├── api
|   |   └──index.js        ajax请求内容（接口详情）
|   ├── components         WePY组件目录（组件不属于完整页面，仅供完整页面或其他组件引用）
|   |   ├── com_a.wpy      可复用的WePY组件a
|   |   └── com_b.wpy      可复用的WePY组件b
|   ├── config              
|   |   └──index.js        配置项文件（rooturl等信息）
|   ├── pages              WePY页面目录（属于完整页面）
|   |   ├── index.wpy      index页面（经build后，会在dist目录下的pages目录生成index.js、index.json、index.wxml和index.wxss文件）
|   |   └── other.wpy      other页面（经build后，会在dist目录下的pages目录生成other.js、other.json、other.wxml和other.wxss文件）
|   └── app.wpy            小程序配置项（全局数据、样式、声明钩子等；经build后，会在dist目录下生成app.js、app.json和app.wxss文件）
└── package.json           项目的package配置
```

#### 提示

* 使用微信开发者工具-->添加项目，项目目录请选择dist目录。

* 微信开发者工具-->项目-->关闭ES6转ES5。 重要：漏掉此项会运行报错。

* 微信开发者工具-->项目-->关闭上传代码时样式自动补全。 重要：某些情况下漏掉此项也会运行报错。

* 微信开发者工具-->项目-->关闭代码压缩上传。 重要：开启后，会导致真机computed, props.sync * 等等属性失效。（注：压缩功能可使用WePY提供的build指令代替，详见后文相关介绍以及Demo项目根目录中的wepy.config.js和package.json文件。）

* 本地项目根目录运行wepy build --watch，开启实时编译。（注：如果同时在微信开发者工具-->设置-->编辑器中勾选了文件保存时自动编译小程序，将可以实时预览，非常方便。）

* 设置编辑器代码高亮的问题可以在官网的重要提醒中找到方法

* 常见的问题会再issues(工单管理)中提交,可进行查看


[Wepy文档](https://tencent.github.io/wepy/document.html#/)