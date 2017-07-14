<template>
    <div id="hello">
        <div class="from-group">
            <label>{{ counter }}</label>
            <input type="text" class="from-control" v-model="MSg">
            <button class="btn btn-success btn-sm" @click="count">{{ counter }}</button>
            <!--<button class="btn btn-success btn-sm" @click="pass">pass</button>-->
        </div>
    </div>
</template>

<script>
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

            }
        },
        computed : {
            MSg(){
                return this.$store.state.message
            }
        }
    }
</script>

<style lang="scss">

</style>
