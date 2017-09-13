<template>
    <div id="listRight">
        <div class="media" v-for="list in articleList">

                <div class="media-left">
                    <a href="#">
                        <img class="media-object" data-src="holder.js/64x64" alt="64x64" :src="list.imgUrl" data-holder-rendered="true" style="width: 64px; height: 64px;">
                    </a>
                </div>

                <div class="media-body">
                    <a href="">
                        <div class="list-title">
                            <h4 class="media-heading">{{ list.title }}<span class="list-title-time">发布时间 : 2017-6-12 12:15:18 </span></h4>
                        </div>
                    </a>
                    <p>{{ list.describe }}</p>
                    <span class="glyphicon glyphicon-heart-empty list-icon" aria-hidden="true"></span><span class="list-icon"> 2325</span>
                    <span class="glyphicon glyphicon-eye-open list-icon" aria-hidden="true"></span><span class="list-icon"> 2325</span>
                    <span class="glyphicon glyphicon-comment list-icon" aria-hidden="true"></span><span class="list-icon"> 2325</span>
                </div>

        </div>
    </div>
</template>
<script>
    export default({
        name : 'listRight',
        data () {
            return {

            }
        },
        computed : {
            articleList(){
                return this.$store.state.articleList
            }
        }
    })
</script>
<style type="text/css">
    #listRight {
        text-align: left;
    }
    .list-title-time{
        float: right;
        font-size: 12px;
        font-family: -webkit-body;
        color: darkgray;
    }
    .list-icon{
        color: darkgray;
        font-size: 12px;
    }
</style>