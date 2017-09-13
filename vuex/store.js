/**
 * Created by Administrator on 2017/7/14.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state : {
        count: 1,
        message : 'this message from Store ',
        todoList: [
            {id : 1, todo : '学习VUE',done : true},
            {id : 2, todo : '学习laravel',done : false},
            {id : 3, todo : '学习webpack',done : false}
        ],
        leftList :[
            {name : 'laravel'},
            {name : 'vuejs'},
            {name : 'golang'},
            {name : 'php'},
        ],
        articleList : [
            {id : 1, title : 'learn laravel passport', describe : 'Can you describe what you saw to [ for] me?...',imgUrl : '/src/assets/logo.png'},
            {id : 2, title : 'learn laravel valet', describe : 'Can you describe what you saw to [ for] me?...', imgUrl :'/src/assets/logo.png'},
            {id : 3, title : 'learn laravel admin', describe : 'Can you describe what you saw to [ for] me?...', imgUrl :'/src/assets/logo.png'},
            {id : 1, title : 'learn laravel passport', describe : 'Can you describe what you saw to [ for] me?...',imgUrl : '/src/assets/logo.png'},
            {id : 2, title : 'learn laravel valet', describe : 'Can you describe what you saw to [ for] me?...', imgUrl :'/src/assets/logo.png'},
            {id : 3, title : 'learn laravel admin', describe : 'Can you describe what you saw to [ for] me?...', imgUrl :'/src/assets/logo.png'},
        ]
    },
    mutations: {
        increment (state) {
            state.count++
        },
        addTodoList (state, payload){
            console.log(state);
            state.todoList.push({id:state.todoList.length + 1,todo:payload,done:false})
        },
        deleteTodo(state,payload){
            state.todoList.splice(payload,1)
        }
    }

})

export default store;
