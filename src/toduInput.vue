<template>
    <div id="input">
        <div class="form-group">
            <div class="row">
                <input type="text" class="form-control " @keyup.enter="addTodo" v-model="newTodo">
                <button class="tbn btn-success  form-control" @click.enter="addTodo" >添加</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default({
        name :'input',
        data(){
            return {
                newTodo : '',
            }
        },
        methods : {
            addTodo(){
                this.$store.commit('addTodoList',this.newTodo)
            }
        }
    })
</script>