import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var state = {
    count: 10
};

const actions = {
    increment: ({ commit }) => {
        commit('increment')
            // alert(11)
    },
    decrement: ({ commit }) => {
        commit('decrement')
            // alert(11)
    },
    clickodd: ({ commit, state }) => {
        // console.log(state.count)
        if (state.count % 2 == 0) {
            commit('increment')
        } else {
            alert('偶数才能加')
        }
    },
    clickeven: ({ commit, state }) => {
        if (state.count % 2 == 1) {
            commit('decrement')
        } else {
            alert('偶数才能减')
        }
    },
    clickAsync: ({ commit }) => {
        new Promise((resolve, reject) => { //是异步编程的一种解决方案
            setTimeout(function() { //定时器 resolve成果 reject 失败  
                commit('increment')
            }, 1000);
        });
    }

};

const mutations = {
    increment(state) { //处理数据的变化
        state.count++;
        // alert(222)
    },
    decrement(state) { //处理数据的变化
        state.count--;
        // alert(222)
    }
};

const getters = {
    count(state) {
        // alert(333)
        return state.count;
    },
    getOdd(state) {
        if (state.count % 2 == 0) {
            return '偶数'
        } else {
            return '奇数'
        }
    }
}

//导出Store对象
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
});