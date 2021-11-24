function ban() {
    document.querySelector(".searTxt").disabled = true
    document.querySelector(".wran").style.display="block";
    setTimeout(function () {
        document.querySelector(".wran").style.display = "none"
        document.querySelector(".searTxt").disabled = false
        document.querySelector("#searTxt").focus()
    }, 3000)
}
var vdo_tip=["TP-LINK无线路由器上网配置方法","TP-LINK易展路由器上网配置方法","TP-LINK易展套装路由器上网配置方法"]
var vdo_dtl=["本视频介绍TP-LINK无线路由器的硬件接口、线路连接和手机配置上网方法。","本视频介绍TP-LINK易展路由器的硬件接口、线路连接、手机配置上网和易展组网方法。","本视频介绍TP-LINK易展套装路由器的硬件接口、线路连接、手机配置上网和易展组网方法"]
var cam=["家用无线云台摄像机配网及安装指导视频","室外小型云台摄像机配网及安装指导视频","4G版摄像机配网及安装指导视频"]
var cam_dtl=["本视频介绍了家用无线云台摄像机（以TL-IPC43AN-4为例）的产品介绍、安装前准备、无线配网、安装过程和功能调试。","本视频介绍了室外小型云台摄像机（以TL-IPC633-D4为例）的产品介绍、安装前准备、无线配网、安装过程、淋水测试和功能调试","本视频介绍了4G版摄像机（以TL-IPC633-D4G为例）的产品介绍、安装前准备、4G配网、安装过程、淋水测试和功能调试。"]

class tagPush{
    constructor(CName,tagName){
        this.CName=CName
        this.tagName=tagName
    }
    push(place,inner,ind,src){
        let ele= document.createElement(this.tagName)
        ele.className=this.CName
        ele.src=src
        ele.innerHTML=inner
        document.querySelector(place).children[ind].appendChild(ele)
    }

}
var img1= new tagPush("vdo_bg",'img')
var img2 =new tagPush("vdo_play","img")
var tagP1=new tagPush("vdo_tip",'p')
var tagP2=new tagPush('vdo_dtl',"p")

vdo_tip.forEach(function(item,index) {  
    img1.push("#router",'',index,"img/vdo"+(index+1)+".png")
    img2.push("#router",'',index,"img/play.png")
    tagP1.push("#router",item,index)
    tagP2.push("#router",vdo_dtl[index],index)
});
cam.forEach(function(item,index){
    img1.push("#cameras",'',index,"img/camera"+(index+1)+".png")
    img2.push("#cameras",'',index,"img/play.png")
    tagP1.push("#cameras",item,index)
    tagP2.push("#cameras",cam_dtl[index],index)
})