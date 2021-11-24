var data =[
    [
    "TL-XTR5460易展Turbo版AX5400三频Wi-Fi6无线路由器（2.5G口）",
    939.00,
    "img/produce1.png",0
],
[
    "TL-XDR6070易展Turbo版AX6000双频Wi-Fi6无线路由器(2.5G口)",
    1299.00,
    "img/produce2.png",0
],
[
    "TL-XDR3250易展版AX3200双频千兆Wi-Fi6无线路由器",
    339.00,
    "img/produce3.png",0
],
[
    "TL-XTR11060易展Turbo版AX11000三频光纤Wi-Fi6无线路由器（2.5G网口）",
    2499.00,
    "img/produce4.png",0
],
[
    "TL-XDR1850易展版AX1800双频千兆Wi-Fi6无线路由器",
    199.00,
    "img/produce5.png",0
],
[
    "TL-XDR5430易展版AX5400双频千兆Wi-Fi6无线路由器全千兆有线端口",
    529.00,
    "img/produce6.png",0
],
[
    "TL-XDR1860易展版AX1800双频千兆Wi-Fi6无线路由器",
    289.00,
    "img/produce7.png",0
],
[
    "TL-XDR5480易展Turbo版AX5400双频SuperWi-Fi6无线路由器(2.5G口)",
    569.00,
    "img/produce8.png",0
],
[
    "TL-XTR7880易展Turbo版AX7800三频SuperWi-Fi6无线路由器（2.5G口）",
    1459.00,
    "img/produce9.png",0
],
[
    "TL-XDR6060易展Turbo版AX6000双频光纤Wi-Fi6无线路由器（2.5G网口）",
    1899.00,
    "img/produce10.png",0
],
[
    "TL-XDR6030易展版AX6000双频Wi-Fi6无线路由器全千兆有线端口",
    1039.00,
    "img/produce11.png",0
]
]
var ftBtn = document.querySelector(".persFoot_btn")
var tip = document.querySelector(".tip_qrc")
var close = document.querySelector(".close")
// console.log(typeof tip.offsetTop);
// tip.style.top="100px"
// console.log(tip.offsetTop);
function show(i){
            if(i>0){
                setTimeout(function(){           
                if(tip.offsetTop<=100){
                    tip.style.top=tip.offsetTop+i+"px"
                    show(i)
                }
            }, 1);
        }else{
            setTimeout(function(){           
                if(tip.offsetTop>=-250){
                    tip.style.top=tip.offsetTop+i+"px"
                    show(i)
                }
            }, 1);
        }
    }
ftBtn.onclick=function(){   
    show(5)  
}
close.onclick=function(){
    show(-5)
}
var sechIn=document.querySelector(".search_in")
sechIn.onfocus=function(){
    document.querySelector(".search").children[1].style.display='none'
}
sechIn.onblur=function(){
    document.querySelector(".search").children[1].style.display='block'
}
var lineIn = 0 //125px
var lineLft = document.querySelector(".floater").offsetLeft

function moveLine(pls){
    if(lineLft<lineIn*125&lineIn!=0){
        lineLft+=5
        document.querySelector(".floater").style.left=lineLft+"px"
        setTimeout(function(){moveLine(lineIn)},1)
    }else if(lineLft>lineIn*125&lineIn!=0) {
        lineLft-=5
        document.querySelector(".floater").style.left=lineLft+"px"
        setTimeout(function(){moveLine(lineIn)},1)
    }
}
function mv_line(i){
    lineIn = i
    moveLine(lineIn)
}
function res(){
    lineIn =0
    mv_re()
}
function mv_re(){
    if(lineLft>lineIn*125&lineIn==0){
        lineLft-=5
        document.querySelector(".floater").style.left=lineLft+"px"
        setTimeout(function(){mv_re(lineIn)},1)
    }
}
var apdDom =document.querySelector('#apdDom')
class Son{
    constructor(tage){
        this.tage=tage
    }
    push(chid,place,clsname,inner,route,typ,val,href,checked){
        let ele =document.createElement(this.tage)
        ele.className=clsname
        ele.innerHTML=inner
        ele.src=route
        ele.type=typ
        ele.value=val
        ele.href = href
        if(checked>0){
        ele.checked=checked
        }
        apdDom.children[chid].querySelector(place).appendChild(ele)
    }
    apend(){
        let ele = document.createElement(this.tage)
        let div1 =document.createElement('div')
        div1.className='list_lft'
        let div2 =document.createElement('div')
        div2.className="list_rig"
        ele.append(div1)
        ele.append(div2) 
        apdDom.appendChild(ele)
    }
}
var div= new Son('div')
var img= new Son('img')
var inp= new Son('input')
var p = new Son('p')
var a = new Son('a')
var ul = new Son('ul')
var li = new Son('li')
var fstChk=document.querySelector('#fstChk')
var chNum = document.querySelector('#chNum')
var rmb = document.querySelector('#rmb')
var toprmb= document.querySelector('#topTotal')
var lastrmb =0
function getData(){   
    apdDom.innerHTML=''
    data.forEach(function (item,index){    
    li.apend()   
    div.push(index,'.list_lft','chbox','')
    inp.push(index,'.chbox','','','','checkbox','','',item[3])
    apdDom.children[index].querySelector('.chbox').children[0].setAttribute("onclick",'chbox('+index+')')
    img.push(index,'.list_lft','','',item[2])
    div.push(index,".list_lft",'detl','')
    p.push(index,'.detl','',item[0])
    ul.push(index,'.list_rig','rig_ul','')
    li.push(index,'.rig_ul','','￥'+item[1]+".00")
    li.push(index,'.rig_ul','num','')
    li.push(index,'.rig_ul','','￥'+item[1]*item[3]+".00")
    li.push(index,'.rig_ul','del','')
    div.push(index,'.num','item_amount','')
    a.push(index,'.item_amount','dec','-','','','','javascript:void(0)')
    inp.push(index,'.item_amount','Amount','','','text',item[3])
    a.push(index,'.item_amount','add','+','','','','javascript:void(0)',)
    a.push(index,'.del','delbtn','删除','','',"",'javascript:void(0)')
    apdDom.children[index].querySelector('.dec').setAttribute("onclick",'dec('+index+')')
    apdDom.children[index].querySelector('.add').setAttribute("onclick",'add('+index+')')
    apdDom.children[index].querySelector('.delbtn').setAttribute("onclick",'del('+index+')')
    })
    total()
}
setTimeout(function(){
    getData()
    },1500
)
function chbox(i){
    if(data[i][3]==0){
        data[i][3]=1
    }else if(data[i][3]>=1){
        data[i][3]=0
    }
    if(data.every(function(item){
        return item[3]>=1
    })){
        fstChk.checked="checked"
    }else{
        fstChk.checked=''
    }
    getData()
}
fstChk.onclick=function(){
    if(fstChk.checked){  
        let aa=[]    
        data.forEach(function(item,index){
            if(item[3]<=0){
                aa.push(index)
            }
        })
        aa.forEach(function(num){
            data[num][3]=1
        })
    }
    getData()
}
function dec(i){
    if(data[i][3]>=1){
        data[i][3]--
    }
    getData()
}
function add(i){
    if(data[i][3]<10){
        data[i][3]++
    }
    getData()
}
function del(i){
    data.splice(i,1)
    getData()
}
function total (){
    lastrmb =0
    let newdata=data.filter(item=>{return item[3]>=1})
    chNum.innerHTML=newdata.length
    newdata.map(item=>{   
        lastrmb+=item[1]*item[3]
        return lastrmb
    })
    rmb.innerHTML = "￥"+lastrmb+'.00'
    toprmb.innerHTML ="￥"+lastrmb+'.00'
}