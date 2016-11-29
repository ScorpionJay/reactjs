# one h5

## What

one h5 demo

## Use
-	react
-	react-redux
-	react-thunk
-	react-router
-	webpack
-	fetch
-	sass

## How

1. install
   
	npm install

	npm install webpack -g

2. run

	webpack-dev-server --progress --colors

	open browser http://localhost:8080/webpack-dev-server/dev

3. package
	
	webpack -p --config webpack.config.build.js

	这里的 -p 是 production 模式的意思，它会对 css, js 文件进行压缩。后面 --config 就是指定此次运行的配置文件。


##　TODO
1. fetch is no supported by Safari

	https://github.com/github/fetch



## 问题

不支持fetch，使用babel-polyfill

~~~js
entry: {
        app: [ 'babel-polyfill', './src/index.js' ]
},


调用的地引入这个
import 'whatwg-fetch'
~~~



需要翻页，滚动拉取 分页 一打痛点 解决了 先设计数据模型

{
	total:10,
	currentPage:1,
	data: [
		{id:1,title:'hello'},
		{id:2,title:'java'}
	]
}

webpack 介绍
http://mp.weixin.qq.com/s?__biz=MzI0ODA2ODU2NQ==&mid=2651130161&idx=1&sn=224f145f4c87d32b239cf8fcb591d197&mpshare=1&scene=23&srcid=1125ATqOrDOVsM7qFuV0vr4h#rd
webpack 优化
http://mp.weixin.qq.com/s?__biz=MzI0ODA2ODU2NQ==&mid=2651129590&idx=1&sn=59cddf60674781b357dab7f0995b7fc3&scene=19#wechat_redirect