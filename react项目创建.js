react 建项目
npm i create-react-app -g

create-react-app -V   //现查是否安装完成


create-react-app 项目名称（例如：my-react)

完成后cd进项目  npm start 启动项目 ------->start追溯根源

------> 没有抽离webpack配置时  在node_modules文件夹下

/react-scripts---->进入bin文件夹  查找到script--->发现进到/react-scripts/scripts/start.js

发现创建服务器  123行 const devServer= new WebpackDevServer(compiler,serverConfig)
				发现106行  const compiler = createCompiler({
														  appName,
														  config,
														  devSocket,
														  urls,
														  useYarn,
														  useTypeScript,
														  webpack,
														});
				const config = configFactory('development');
				const configFactory = require('../config/webpack.config');
	找到/react-scripts/config/webpack.config.js
	这里面添加一个alias(别名)  @ 
	alias: {
        'react-native': 'react-native-web',
        '@': path.join(__dirname, '../../..', 'src')
      },
	这里的  @是根据webpack.config.js这个文件路径为基准定义src的位置
	
	这里能找到entry[paths.appIndexJs,]   const paths = require('./paths');--->找到paths文件---> appIndexJs: resolveModule(resolveApp, 'src/index'),  说明是从src/index  这个文件进入的
	
	这时候就可以开始在src/index里开始编写
	import App from "@/App";
	ReactDOM.render(<Provider> store={store}
		<App/>
	</Provider>,document.getElementById('root'))
	
	Provider--->react-redux依赖包  import {Provider} from "react-redux"
	store---> import store from "@/store/index"
	
	scr下建store文件夹 ，里面放index.js
	
	//src/store/index.js
	import {combineReducers,applyMiddleware} from 'redux'
	import thunk from 'redux-thunk'
	import rootReducer from '@/reducers/index
	const store=createStore(rootReducers,applyMiddleware(thunk))

	src下建reducers/index

	import home from './home'
	export const rootReducer=combineReducers({
		home
	})

	src下建reducers/home
	import {GET_MERCHANTS_INFO} from '@/actionType/index'
	import { BOARDTABTYPES } from '@/utils/const';

	const initState={}

	export default function leaderboardReducer (state=initState,action) {
		switch(action.type){
			case GET_MERCHANTS_INFO://获取商户内容
			{
				return null
			}
			default:return state
		}
	}

	src下建actionType/index
	export const GET_MERCHANTS_INFO='GET_MERCHANTS_INFO' 获取商户内容

	
	接下去建路由  去APP.js