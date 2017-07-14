<template>
    <div id="listRight">
        <div class="media" v-for="list in articleList">
            <div class="media-left">
                <a href="#">
                    <img class="media-object" data-src="holder.js/64x64" alt="64x64" :src="list.imgUrl" data-holder-rendered="true" style="width: 64px; height: 64px;">
                </a>
            </div>
            <div class="media-body">
                <h4 class="media-heading">{{ list.title }}</h4>
                <p>{{ list.describe }}</p>
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