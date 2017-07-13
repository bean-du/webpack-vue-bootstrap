<template>
    <div id="hello">
        <div class="from-group">
            <label>{{ counter }}</label>
            <input type="text" class="from-control" v-model="msMsg">
            <button class="btn btn-success btn-sm" @click="count">{{ counter }}</button>
            <button class="btn btn-success btn-sm" @click="pass">pass</button>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    var bus = new Vue();
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
            },
            pass(){
               bus.$emit('test-v','This from Hello')
            }

        }
    }
</script>

<style lang="scss">

</style>
