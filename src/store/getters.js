export default {
    count: (state) => {
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