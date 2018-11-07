
//demo1
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});
app.message='I am changed';
//demo2
var app2 = new Vue({
    el: '#app-2',
    data: {
        message: '鼠标悬停几秒显示：!'+new Date().toLocaleString()
    }
});
//demo3
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen:true
    }
});
//demo4
var app4 = new Vue({
    el:"#app-4",
    data:{
        todos:[
            {"text":"text1"},
            {"text":"text2"},
            {"text":"text3"},
            {"text":"text1"}
        ]
    }
});
//demo5
var app5 = new Vue({
    el:"#app-5",
    data:{
        message:"Hello Vue！"
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('')
        }
    }
});

// 定义名为 todo-item 的新组件
Vue.component('todo-item', {
    template: '<li>这是个待办项</li>'
});
var app6 = new Vue({
    el:"#app-6",
    data: { }
});

// demo7
Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});
var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            { id: 0, text: '蔬菜' },
            { id: 1, text: '奶酪' },
            { id: 2, text: '随便其它什么人吃的东西' }
        ]
    }
})