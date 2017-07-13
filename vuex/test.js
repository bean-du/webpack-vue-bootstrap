/**
 * Created by Administrator on 2017/7/11.
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
const state = {
    Hello :{

    },
    message:{

    }
}
const mutations = {
    setHello(state,Hello){
        state.Hello = Hello;
    },
    setMessage(state,Message){
        state.message = Message;
    }
}

const getters = {

}

const  actions = {
    updateHello(context,Hello){
        context.commit('setHello',Hello)
    }
}
export default {
    state,getters,mutations,actions
}