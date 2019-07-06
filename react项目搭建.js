1.npm i create-react-app -g
create-react-app -V 查看是否安装完成
完成后  create-react-app 项目名称（例如：my-app）
安装完成后  装点插件  npm i react-router-dom redux react-redux redux-thunk 
node-modules/react-scripts/config/webpack.config.js下添加
alias{
'@': path.join(__dirname, '../../..', 'src')
}

只要有render(return(<div></div>))  说明用了JSX  就一定要引入import React form 'react'

创建文件夹  store reducer actionType action 