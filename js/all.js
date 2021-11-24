function change() {
    document.querySelector(".search").style.display = 'inline-block';
}
var footTit = ['关于TP-LINK', '购买及服务支持', '资源', '快速链接']
var tit = [
    ['公司简介', '新总部大楼', '联系我们'],
    ['项目咨询', '在线客服', '售后服务'],
    ['文档中心', '下载中心', '视频中心', '解决方案', '成功案例'],
    ['培训认证', '官方商城', '公司招聘']
]

footTit.forEach(function (item, index) {
    document.getElementsByClassName('foot_nav')[index].children[0].children[0].innerHTML = item
    // console.log(item,index);
});
tit.forEach(function (item, index) {
    tit[index].forEach(function (tip, i) {
        let ele = document.createElement('li')
        ele.innerHTML = tip
        document.getElementsByClassName('foot_nav')[index].children[1].appendChild(ele)
    })
})