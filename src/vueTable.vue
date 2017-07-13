<template>
    <div id="vueTable">
        <table class="table table-hover table-bordered">
            <caption>悬停表格布局</caption>
            <thead>
                <tr>
                    <th>名称</th>
                    <th>城市</th>
                    <th>邮编</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="data in tableDatae">
                    <td>{{data.name | filter }}</td>
                    <td>{{data.city}}</td>
                    <td>{{data.code}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: 'vueTable',
        data () {
            return {
            }
        },
        props: ['tableDatae'],
        filters : {
            filter (data){
                return data.toUpperCase()
            }
        },
        methods : {

        }
    }
</script>
<style lang="scss">
</style>
