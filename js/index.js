var page = 0;
var new_page = 0;
document.querySelector('.ctrl').children[page].classList.add('choice')

function ctrl(i) {
    page = new_page
    new_page = i
    document.querySelector(".ctrl").children[page].classList.remove('choice')
    document.querySelector('.ctrl').children[new_page].classList.add('choice')
    if (page < new_page) {
        bgph_add(new_page)
    } else if (page > new_page) {
        bgph_dec(new_page)
    }
}
wiDth = document.body.clientWidth || document.documentElement.clientWidth;
wid = -wiDth
// console.log(wid);

marLef = 0

function bgph_add(i) {
    if (marLef > i * wid) {
        marLef -= wiDth / 100
        document.querySelector('.photo').style.marginLeft = marLef + 'px'
        setTimeout("bgph_add(" + i + ")", 1)
    }
}

function bgph_dec(i) {
    if (marLef < i * wid) {
        document.querySelector('.photo').style.marginLeft = marLef + 'px'
        marLef += wiDth / 100
        setTimeout("bgph_dec(" + i + ")", 1)
    }
}
// function auto_add(){
//     new_page+=1
//     if(new_page==6){
//         new_page=0
//     }
//     ctrl(new_page)
//     setTimeout("auto_add()",3000)
// }
// setTimeout("auto_add()",3000)
var tit_1 = ['视野广阔，身临其境，一见钟情', '测体温、查口罩、查吸烟，公共场所必备', '3倍极速变焦，看清远近细节', '3目20倍变焦，360°全视野云台', '无光的极暗环境下也能呈现高清全彩画面', '日出而作，日落不息；简易轻便、稳固如山', '企业级Wi-Fi6路由器，办公组网，行家之选', '商用Wi-Fi6，高性能、低延时、云管理', '万兆到桌面、光电随心用，AP随便加，一键全联网', '大中型企业、园区、数据中心的高可靠性、高扩展性、高安全性汇聚层核心设备', '严苛工业环境下仍能提供稳定4G、Wi-Fi通讯', '专为轨道交通、车载船舶通信应用设计']
var tit_2 = ['600万双目超广角网络摄 像机 TL-IPC568VP-A4', '人体测温解决方案 热成像系列产品', '400万双目变焦室内云台摄像机 TL-IPC44GW 双目变焦版', '400万三目变焦红外网络高速球机  TL-IPC5420X三目变焦版', 'TP-LINK 400万暗夜全彩网络摄像机TL-IPC544T-WB', 'TP-LINK智能太阳能供电系统TL-SP620H系列', '企业级AX5400双频Wi-Fi 6 无线VPN路由器（2.5G网口）TL-XVR5400L易展版', 'AX6000双频Wi-Fi6无线吸顶式AP TL-XAP6009GC-PoE/DC', 'TP-LINK万兆PoE.AC光电一体VPN路由器 TL-R6812TP-AC', 'TP-LINK万兆上联多业务智能路由交换机 TL-S7603', 'TP-LINK工业级4G无线路由器TL-TR905工业级', 'TP-LINK三层网管工业级交换机 TL-SG5008-TN67工业级']

for (let i = 0; i <= 11; i++) {
    document.querySelector('.add_nav').children[i].firstChild.src = 'img/pro' + (i + 1) + '.jpg';
    document.querySelector(".add_nav").children[i].children[1].children[0].innerHTML = tit_1[i]
    document.querySelector(".add_nav").children[i].children[1].children[1].innerHTML = tit_2[i]
    document.querySelector(".add_nav").children[i].getElementsByTagName('span')[0].innerHTML = "了解详情"
}