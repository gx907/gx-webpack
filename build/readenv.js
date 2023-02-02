// 读取环境变量的文件把它转化成对象
const fs = require('fs');
const path = require('path');
module.exports = (file) => { // flie为文件路径
  let fileName = path.join(__dirname, file);
  let data = fs.readFileSync(fileName, { encoding: 'utf8' })
  let d = data.replace(/\r/g, ',').replace(/\n/g, '') // 把换行和回车替换
  let arr = d.split(',').map(item => {
    return item.split('=')
  })
  let obj = {}
  arr.forEach(item => {
    obj[item[0]] = item[1]
  })
  return obj //VUE_APP_BASE_URL = 'http://localhost:9528' VUE_APP_SSO_BASEURL = 'http://10.0.7.12:18080/passport/'
  // 可以接着处理
  /* 像vue-cli3 新版create-react-app 一样规定环境变量的Key必须以(VUE_APP_)  (REACT_APP_) 开头 */
}
