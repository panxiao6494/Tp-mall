var robt = Vue.extend({
    template: `
        <div class='chat_item'>
            <div class="hd_pic">
                <img src="img/robot.png" />
            </div>
            <div class="rob_word">
                <p>对不起，我不理解你的意思！</p>
            </div>
        </div>
    `
})
var youSay = Vue.extend({
    template: `
    <div class="chat_item">
        <div class="your_pic">
            <img src="img/you.png">
        </div>
        <div class="your_word">
          <p></p>
        </div>
    </div>
    `
})
Vue.filter('format', function (value, arg) {
    if (arg == 'yyyy-MM-dd') {
        var ret = '';
        ret += value.getFullYear() + '-' + (value.getMonth() + 1) + '-' + value.getDate() + ' ' + value.getHours() + ":" + value.getMinutes()
        return ret
    }
    return value
})
var vm = new Vue({
    el: '#contain',
    data: {
        msg: '',
        item_num: 2,
        chat_top: 0,
        date: new Date()
    },
    methods: {
        resent: function () {
            let newdiv = document.createElement('div')
            document.querySelector('.chatItem').appendChild(newdiv)
            new robt().$mount(newdiv)
            this.item_num += 1
            if (this.item_num > 4) {
                this.$refs.chat_top.style.display = 'block'
                this.$refs.chat_bot.style.display = 'block'
            }
        },
        sent: function () {
            let newdiv = document.createElement('div')
            document.querySelector('.chatItem').appendChild(newdiv)
            new youSay().$mount(newdiv)
            document.querySelector('.chatItem').children[this.item_num].children[1].children[0].innerHTML = this.msg
            this.item_num += 1
            this.msg = ''
            return this.resent()
        },
        to_top: function () {
            this.chat_top += 100
            this.$refs.chatItem.style.marginTop = this.chat_top + "px"
        },
        to_bot: function () {
            this.chat_top -= 100
            this.$refs.chatItem.style.marginTop = this.chat_top + "px"
        }
    },

})