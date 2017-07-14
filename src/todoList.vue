<template>
    <div id="hello">
        <div>
            <div class="container">
                <div class="row">
                    <ul class="list-group">
                        <li class="list-group-item" v-for="(todo, index) in todoList"><span class="badge" v-if="todo.done == false">未完成</span>
                            <button class="btn tbn-success btn-xs" @click="deleteTodo(index)">X</button>
                            {{ todo.todo}}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hello',
        data () {
            return {
                newTodo : '',
            }
        },
        props: ['msMsg'],
        methods : {
            deleteTodo (index){
                console.log(index)
                this.$store.commit('deleteTodo',index)
            }
        },
        computed : {
            todoList(){
                return this.$store.state.todoList
            }
        }
    }
</script>

<style lang="scss">

</style>
