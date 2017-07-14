<template>
    <div id="world">
        <div class="from-group">
            <label>{{ counter }}</label>
            <input type="text" class="from-control" v-model="count">
            <button class="btn btn-success btn-sm" @click="world">{{ counter }}</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'world',
        data () {
            return {
                msg: 'This is World component',
                counter : 'World'
            }
        },
        props: ['msMsg'],
        methods : {

            world () {

            }
        },
        computed : {
            count (){
                return this.$store.state.count
            }
        }
    }
</script>

<style lang="scss">
</style>
