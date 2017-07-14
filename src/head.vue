<template>
    <div id="head">
        <nav class="navbar navbar-default navbar-fixed-top navbar-collapse collapse">
            <div class="container">
                <ul class="nav navbar-nav">
                    <li class="active"><a href="#">Acorns</a></li>
                    <li><a href="#">Link</a></li>
                    <li><a href="#">Link</a></li>
                </ul>
                <form class="navbar-form navbar-left">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                    </div>
                    <button type="submit" class="btn btn-default">Submit</button>
                </form>
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">login</a></li>
                    <li><a href="#">register</a></li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: 'head',
        data () {
            return {
                tableData : []
            }
        },
        components : {},
        computed : {

        },
        filters : {

        },
        methods : {

        }
    }
</script>
<style lang="scss">
</style>
