import Mock from 'mockjs' //引进mockjs包
import { getUserInfo } from './makeInfo.js' //将自己生成的数据方法引进来

Mock.mock(/\/getUserInfo/,'get', getUserInfo) //正则表达式 截取请求 调用方法

export default Mock