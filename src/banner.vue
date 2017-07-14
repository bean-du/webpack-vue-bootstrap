<template>
    <div id="banner">
        <div class="jumbotron">
            <h1>{{title}}</h1>
            <p>{{message}}</p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a></p>
        </div>
    </div>
</template>
<script>
    export default({
        name : 'banner',
        data (){
            return {
                title : 'Acorns blog',
                message : 'Welcome to Acorns blog!'
            }
        },
    })
</script>