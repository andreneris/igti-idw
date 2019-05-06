import Vue from 'vue/dist/vue.common.js';
import sayHello from './say_hello'


var app = new Vue({
    el: '#app',
    data:{
        message: sayHello('IDW')
    }
})