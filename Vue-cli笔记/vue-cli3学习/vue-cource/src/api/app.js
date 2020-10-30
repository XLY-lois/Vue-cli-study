import { reject } from "core-js/fn/promise"

export const getAppName = () => { //模拟接口请求
  return new Promise((resolve,reject) => {
    const err = null;
    setTimeout(() => {
      if(!err) resolve({code: 200,info: {appName: 'newAppNameHHHH'}});
      else reject(err)
    })
  })
}
