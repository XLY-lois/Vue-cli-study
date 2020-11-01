import axios from 'axios'
import { baseUrl } from '../config/index'

class HttpRequest {
  constructor ( Url = baseUrl) { //如果没有传入参数默认使用import进来的url 有的话用调用函数时传参
    this.Url = Url;
    this.queue = {};
  }
  getInsideConfig() { //全局配置
    const config = {
      baseUrl: this.Url,
      headers: {
        //
      }
    }
    return config
  }
  interceptors(instance) { //拦截器 传入当前创建的axios实例

  }
  request(options) { //创建实例后创建请求时的方法
    const instance = axios.create();
    options = Object.assign(this.getInsideConfig(),options); //将两个对象合并成一个对象
    return instance(options); //将新对象传入 并返回
  }
}

export default HttpRequest
