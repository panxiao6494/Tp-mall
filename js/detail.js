var vm = new Vue({
    el: "#product-info",
    data: {
        produces: [
            [0,
                "TL-XTR5460易展Turbo版AX5400三频Wi-Fi6无线路由器（2.5G口）",
                939,
                "img/produce1.png"
            ],
            [1,
                "TL-XDR6070易展Turbo版AX6000双频Wi-Fi6无线路由器(2.5G口)",
                1299,
                "img/produce2.png"
            ],
            [2,
                "TL-XDR3250易展版AX3200双频千兆Wi-Fi6无线路由器",
                339,
                "img/produce3.png"
            ],
            [3,
                "TL-XTR11060易展Turbo版AX11000三频光纤Wi-Fi6无线路由器（2.5G网口）",
                2499,
                "img/produce4.png"
            ],
            [4,
                "TL-XDR1850易展版AX1800双频千兆Wi-Fi6无线路由器",
                199,
                "img/produce5.png"
            ],
            [5,
                "TL-XDR5430易展版AX5400双频千兆Wi-Fi6无线路由器全千兆有线端口",
                529,
                "img/produce6.png"
            ],
            [6,
                "TL-XDR1860易展版AX1800双频千兆Wi-Fi6无线路由器",
                289,
                "img/produce7.png"
            ],
            [7,
                "TL-XDR5480易展Turbo版AX5400双频SuperWi-Fi6无线路由器(2.5G口)",
                569,
                "img/produce8.png"
            ],
            [8,
                "TL-XTR7880易展Turbo版AX7800三频SuperWi-Fi6无线路由器（2.5G口）",
                1459,
                "img/produce9.png"
            ],
            [9,
                "TL-XDR6060易展Turbo版AX6000双频光纤Wi-Fi6无线路由器（2.5G网口）",
                1899,
                "img/produce10.png"
            ],
            [10,
                "TL-XDR6030易展版AX6000双频Wi-Fi6无线路由器全千兆有线端口",
                1039,
                "img/produce11.png"
            ],

            [
                11,
                "TL-SF1005工业级 工业交换机",
                199,
                "img/produce12.png"
            ],
            [
                12,
                "TL-SG1005M 5口千兆交换机",
                82,
                "img/produce13.png"
            ],
            [
                13,
                "TL-SG1008D 8口全千兆非网管交换机",
                129,
                "img/produce14.png"
            ],
            [
                14,
                "TL-SF1009P 9口百兆非网管PoE交换机",
                309,
                "img/produce15.png"
            ],
            [
                15,
                "TL-SG2008D 全千兆云管理交换机",
                159,
                "img/produce16.png"
            ],
            [
                16,
                "TL-SG2005 全千兆云管理交换机",
                219,
                "img/produce17.png"
            ],
            [
                17,
                "TL-SG1005工业级 工业交换机",
                359,
                "img/produce18.png"
            ],
            [
                18,
                "TL-SG2016D  全千兆云管理交换机",
                409,
                "img/produce19.png"
            ],
            [
                19,
                "TL-SF1005P 5口百兆非网管PoE交换机",
                159,
                "img/produce20.png"
            ],
            [
                20,
                "TL-SG1024T T系列24口全千兆非网管交换机",
                469,
                "img/produce21.png"
            ],
            [
                21,
                "TL-SG5428 全千兆三层网管交换机 24GE+4SFP",
                1369,
                "img/produce22.png"
            ],
            [
                22,
                "TL-SF1010D 以太网交换机10FE",
                109,
                "img/produce23.png"
            ]

        ],
        pro_num: 1
    },
    methods: {
        add: function () {
            this.pro_num += 1
        },
        new_num: function () {
            if (this.pro_num < 1) {
                alert('至少得买一个吧')
            }
        },
        reduce: function () {
            if (this.pro_num <= 1) {
                alert('产品不能少于一个')
            } else {
                this.pro_num -= 1
            }

        },
        cole: function () {
            if (this.$refs.cimg.style.background == 'url("../img/collected.png")') {
                alert('您已经收藏过了')
            } else {
                this.$refs.cimg.style.background = "url(../img/collected.png)"
                // console.log(this.$refs.cimg.style.background);
            }
        }
    }
})

function re_sort(data) {
    // var del_ul = document.querySelector('.produces').children[0]
    // document.querySelector('.produces').removeChild(del_ul)
    // document.querySelector(".produces").appendChild(document.createElement('ul'))
    data.forEach(function (item, index) {
        let ele = document.createElement('li')
        let images = document.createElement('img')
        let tips = document.createElement('h3')
        let pri = document.createElement('p')
        images.src = item[3]
        tips.innerHTML = item[1]
        pri.innerHTML = '￥' + item[2]
        document.querySelector('.produces').children[1].appendChild(ele)
        document.querySelector('.produces').children[1].children[index].appendChild(images)
        document.querySelector('.produces').children[1].children[index].appendChild(tips)
        document.querySelector('.produces').children[1].children[index].children[1].appendChild(pri)
    });
}
re_sort(vm.produces)
document.getElementsByTagName('title')[0].innerHTML = vm.produces[0][1]
// var detail = new Vue({
//     el: '.detail',
//     data: {
//         ul_li: 0,
//         img_src: ["img/produce1.png", "img/prds1_1.png", "img/prds1_2.png", "img/prds1_3.png", "img/prds1_4.png"]
//     },
//     methods: {
//         change_pic: function (item) {
//             this.$refs.img_active.children[this.ul_li].children[0].classList.remove('img_active')
//             this.$refs.img_active.children[item].children[0].classList.add('img_active')
//             this.ul_li = item
//             this.$refs.big_img.src = this.img_src[item]
//         }
//     }
// })
var img_src = ["img/produce1.png", "img/prds1_1.png", "img/prds1_2.png", "img/prds1_3.png", "img/prds1_4.png"]
act_fa = document.querySelector('.act_fa')
act_num = 0

function change_pic(item) {
    act_fa.children[act_num].children[0].classList.remove('img_active')
    act_fa.children[item].children[0].classList.add('img_active')
    act_num = item
    document.querySelector('.big_img').src = img_src[act_num]
}