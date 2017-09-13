<template>
    <div id="leftPage">
        <div class="list-group">
            <a href="#" class="list-group-item active list-left">
                {{title}}
            </a>
            <a href="#" class="list-group-item" v-for="list in leftList">{{list.name }}</a>
        </div>
    </div>
</template>
<script>
    export default({
        name : 'leftPage',
        data () {
            return {
                title : 'This is left port'
            }
        },
        computed : {
            leftList(){
                return this.$store.state.leftList
            }
        }
    })
</script>
<style type="text/css">
    .list-group-item.active, .list-group-item.active:hover, .list-group-item.active:focus {
        z-index: 2;
        color: #fff;
        background-color:  #41B883;
        border-color:  #41B883;
    }
    #leftPage {
        text-align: left;
    }
</style>