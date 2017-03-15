<template>
    <div>
        <p>我是{{msg}}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: 'loading...'
            }
        },
        install: function(Vue) {
            Vue.component('loading', this)
        }
    }
</script>