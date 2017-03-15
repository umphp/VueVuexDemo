import * as types from './typts.js'

export default {
    increment: ({ commit }) => {
        // alert(111)
        commit(types.INCREMENT)
    },
    decrement: ({ commit }) => {
        commit(types.DECREMENT)
    },
    clickodd: ({ commit, state }) => {
        console.log(state.mutations.count)
        if (state.mutations.count % 2 == 0) {
            commit('increment')
        } else {
            alert('偶数才能加')
        }
    },
    clickeven: ({ commit, state }) => {
        if (state.mutations.count % 2 == 1) {
            commit('decrement')
        } else {
            alert('奇数才能减')
        }
    },
    clickAsync: ({ commit }) => {
        new Promise((resolve, reject) => { //是异步编程的一种解决方案
            setTimeout(function() { //定时器 resolve成果 reject 失败  
                commit('increment')
            }, 1000);
        });
    }

}

//'clickodd', 'clickeven', 'clickAsync'