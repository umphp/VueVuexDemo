<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{msg}}</h1>
    <loading></loading>
    <hr>
    <input type="button" value="增加" @click="increment" />
    <input type="button" value="减少" @click="decrement" />
    <input type="button" value="偶数才能点击加" @click="clickodd" />
    <input type="button" value="奇数才能点击减" @click="clickeven" />
    <hr>
    <input type="button" value="异步请求" @click="clickAsync" />
    

    <div>现在的数字：{{count}}</div>
    <div>他是：{{getOdd}}</div>
  </div>
</template>

<script>
    import {
        mapActions,
        mapGetters
    } from 'vuex'

    export default {
        name: 'app',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        computed: mapGetters([
            'count', 'getOdd'  
        ]),
        methods: mapActions([
            'increment', 'decrement', 'clickodd', 'clickeven', 'clickAsync'
        ])

    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    
    h1,
    h2 {
        font-weight: normal;
    }
    
    ul {
        list-style-type: none;
        padding: 0;
    }
    
    li {
        display: inline-block;
        margin: 0 10px;
    }
    
    a {
        color: #42b983;
    }
</style>