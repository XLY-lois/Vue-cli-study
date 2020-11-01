export const baseUrl = process.env.NODE_ENV === 'production' //判断环境决定baseUrl
? 'http://production' : '' //设置了代理可以直接写一个空字符串
