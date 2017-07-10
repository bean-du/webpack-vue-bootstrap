<template>
    <div id="hello">
        <div class="from-group">
            <label>{{ counter }}</label>
            <input type="text" class="from-control" v-model="msMsg">
            <button class="btn btn-success btn-sm" @click="count">{{ counter }}</button>
        </div>
    </div>
</template>

<script>
    import  bus  from 'vue-bus'
    export default {
        name: 'hello',
        data () {
            return {
                msg: 'This is Hello component',
                counter : 'Hello'
            }
        },
        props: ['msMsg'],
        methods : {
            count () {
                this.$emit('countData',this.msg)
            }
        }
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

    h1, h2 {
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
