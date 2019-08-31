import React, { Component } from 'react'
import styles from './header.less'
import classNames from 'classnames'
import { connect } from 'react-redux'
import  * as actionCreators  from './store/actionCreator.js'

const Header = (props)=>{
    const { isFocus, handleInputFocus, handleInputBlur } = props
    return (
      <div className={styles.headerWrapper}>
        <div className={styles.header}>
          <a className={styles.logo} href='/'></a>
          <nav>
            <div className={classNames(styles.left, styles.active, styles.navItem)}>首页</div>
            <div className={classNames(styles.left, styles.navItem)}>下载App</div>
            <div className={classNames(styles.right, styles.navItem)}>
              <i className={styles.iconfont}>&#xe636;</i>
            </div>
            <div className={classNames(styles.right, styles.navItem)}>登录</div>
            <div className={styles.searchWrapper}>
           
              <input className={!isFocus?styles.navSearch: classNames(styles.navSearch, styles.focus)} placeholder='搜索' 
              onFocus={handleInputFocus}
              onBlur = {handleInputBlur}
              />
         
              <i className={!isFocus?styles.iconfont: classNames(styles.iconfont, styles.iconActive)}>&#xe617;</i>
            </div>
          </nav>
          <div className={styles.addition}>
            <div className={classNames(styles.write, styles.button)}>写文章<i className={styles.iconfont}>&#xe674;
</i></div>
            <div className={classNames(styles.reg, styles.button)}>注册</div>
          </div>
        </div>

      </div>
    )
  }


const mapStateToProps = (state) =>{
  return {isFocus:state.header.isFocus}
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus:()=>{
      dispatch(actionCreators.searchFocus)
    },
    handleInputBlur:()=>{
     
      dispatch(actionCreators.searchBlur)
    }

    }
  }



export default connect(mapStateToProps,mapDispatchToProps)(Header)