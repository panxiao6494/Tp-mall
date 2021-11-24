var back_blue = 0

function pro_sort(i) {
    document.querySelector('.sort').children[0].children[back_blue].classList.remove('back_blue')
    document.querySelector('.sort').children[0].children[i].classList.add('back_blue')
    back_blue = i
    new_sort(i)
}
// var arr = ['TL-XTR5460易展Turbo版AX5400三频Wi-Fi6无线路由器（2.5G口', 'TL-XDR6070易展Turbo版AX6000双频Wi-Fi6无线路由器(2.5G口)', 'TL-XDR3250易展版AX3200双频千兆Wi-Fi6无线路由器', 'TL-XTR11060易展Turbo版AX11000三频光纤Wi-Fi6无线路由器（2.5G网口）', 'TL-XDR1850易展版AX1800双频千兆Wi-Fi6无线路由器', 'TL-XDR5430易展版AX5400双频千兆Wi-Fi6无线路由器全千兆有线端口', 'TL-XDR1860易展版AX1800双频千兆Wi-Fi6无线路由器', 'TL-XDR5480易展Turbo版AX5400双频SuperWi-Fi6无线路由器(2.5G口)', 'TL-XTR7880易展Turbo版AX7800三频SuperWi-Fi6无线路由器（2.5G口）', 'TL-XDR6060易展Turbo版AX6000双频光纤Wi-Fi6无线路由器（2.5G网口）', 'TL-XDR6030易展版AX6000双频Wi-Fi6无线路由器全千兆有线端口']
// var price = [939.00, 1299.00, 339.00, 2499.00, 199.00, 529.00, 289.00, 569.00, 1459.00, 1899.00, 1039.00]
var produces = [
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

]
var new_data = produces
// i = 0
// produces.forEach((item) => {
//     i++
//     item.push('img/produce' + i + '.png')
// })

// console.log(produces)


function re_sort(data) {
    var del_ul = document.querySelector('.produces').children[0]
    document.querySelector('.produces').removeChild(del_ul)
    document.querySelector(".produces").appendChild(document.createElement('ul'))
    data.forEach(function (item, index) {
        let ele = document.createElement('li')
        let images = document.createElement('img')
        let tips = document.createElement('h3')
        let pri = document.createElement('p')
        images.src = item[3]
        tips.innerHTML = item[1]
        pri.innerHTML = '￥' + item[2]
        document.querySelector('.produces').children[0].appendChild(ele)
        document.querySelector('.produces').children[0].children[index].appendChild(images)
        document.querySelector('.produces').children[0].children[index].appendChild(tips)
        document.querySelector('.produces').children[0].children[index].children[1].appendChild(pri)
    });
}
re_sort(produces)
// price.forEach(function (item, index) {
//     let pri = document.createElement('p')
//     pri.innerHTML = item
//     document.querySelector('.produces').children[0].children[index].children[1].appendChild(pri)
// })
function new_sort(i) {
    if (i == 0) {
        start_sort()
    } else if (i == 1) {
        expen_ch()
    } else {
        cheap_ex()
    }
    re_sort(new_data)
}
// console.log(produces[5][0] > produces[4][0]);

function start_sort() {
    new_data.forEach(function (item, i) {
        for (let j = 0; j < new_data.length - i - 1; j++) {
            if (new_data[j][0] < new_data[j + 1][0]) {
                let emp = new_data[j]
                new_data[j] = new_data[j + 1]
                new_data[j + 1] = emp
            }
        }
    })
}

function expen_ch() {
    new_data.forEach(function (item, i) {
        for (let j = 0; j < new_data.length - i - 1; j++) {
            if (new_data[j][2] < new_data[j + 1][2]) {
                let emp = new_data[j]
                new_data[j] = new_data[j + 1]
                new_data[j + 1] = emp
            }
        }
    })
}

function cheap_ex() {
    new_data.forEach(function (item, i) {
        for (let j = 0; j < new_data.length - i - 1; j++) {
            if (new_data[j][2] > new_data[j + 1][2]) {
                let emp = new_data[j]
                new_data[j] = new_data[j + 1]
                new_data[j + 1] = emp
            }
        }
    })
}

function search_produce() {
    val = document.querySelector('#search_inp').value || document.querySelector('#search_inp').placeholder
    // console.log(val);
    new_data = produces.filter(function (item) {
        return item[1].search(val) != -1
    })
    re_sort(new_data)
}