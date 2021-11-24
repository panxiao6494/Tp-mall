var bgph = document.querySelector('.bgph');


var i = 1;
function rota() {
    if (i == 6) {
        i = 0
    }
    i++;
    bgph.src = 'img/bgph' + i + '.jpg';
    setTimeout('rota()', 3000)
}
rota();
var eyeTime = 0
function eye_ch() {
    if (eyeTime % 2 == 0) {
        eyeTime++
        document.querySelector('.eye').src = 'img/eyesee.png'
        document.querySelector('.pawd').type = 'text'
    } else {
        eyeTime--
        document.querySelector('.eye').src = 'img/eyenone.png'
        document.querySelector('.pawd').type = 'password'
    }
}
var pro = document.querySelector('#pro_code');
var phoNum = document.querySelector('.pho_num');
var phoJud = document.querySelector('.pho_jud')
var pasJud = document.querySelector('.pas_jud')
var pasJudLi = document.querySelector('.pas_judLi')
var passwd = document.querySelector('.pawd');
var passSu = document.querySelector('.pawd_su');



var count_down = 60;
function get_pro() {
    pro.setAttribute('disabled', true);
    cha_pro();
}
function cha_pro() {
    if (count_down > 0) {
        pro.innerHTML = count_down;
        count_down = count_down - 1;
        setTimeout('cha_pro()', 1000)
    } else {
        pro.innerHTML = '获取验证码';
        count_down = 60;
        pro.removeAttribute('disabled')
    }
}
function pho_num() {
    if (phoNum.value.length != 11) {
        phoNum.style.border = 'solid 0.5px red';
        phoJud.src = 'img/no.png';
    } else {
        phoNum.style.border = 'solid 0.5px green';
        phoJud.src = 'img/yes.png';
    }
}
function pas_wd() {
    if (passwd.value.length < 6 || passwd.value.length > 16) {
        passwd.style.border = 'solid 0.5px red';
        pasJud.src = 'img/no.png';
    } else {
        passwd.style.border = 'solid 0.5px green';
        pasJud.src = 'img/yes.png';
    }
}
function pas_su() {
    if (passSu.value != passwd.value) {
        passSu.style.border = 'solid 0.5px red';
        pasJudLi.src = 'img/no.png';
    } else {
        passSu.style.border = 'solid 0.5px green';
        pasJudLi.src = 'img/yes.png';
    }
}
function toPage(page){
    window.location.href=page;
}
function sign(){
    alert('您输入的验证码不正确！')
}