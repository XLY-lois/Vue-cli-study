//与业务有关的工具方法
export const setTitle = (title) => {
  window.document.title = title || 'admin'; //如果meta中没有设置title就用默认值admin
}
