import { INCREMENT, DECREMENT } from './typts.js'
import getters from './getters.js'


const state = { count: 50 }


const mutations = {
    [INCREMENT]() {
        // alert(222)
        state.count++
    },
    [DECREMENT]() {
        state.count--
    }
}

export default {
    getters,
    state,
    mutations
}