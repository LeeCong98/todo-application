// 引包
import Vue from 'vue'

//引入 根级组件
import App from './App.vue' 


var root = document.createElement('div')
 document.body.appendChild(root)
// 新建一个Vue实例
//创建 root节点，注意root节点是必须的，之前是通过html页面来提供，这里直接这里创建
var vm = new Vue({
    data: {

    },
    methods: {

    },
    render: function (createElement) { 
        return createElement(App)
    }
}).$mount(root)