import { Module } from "vuex";

interface StoreMenu {
    isCollapse: boolean
}

const store: Module<StoreMenu, unknown> = {
    namespaced: true,
    state() {
        return {
            isCollapse: false
        }
    },
    mutations: {
        setCollapse(state: StoreMenu, payload: AnyObject) {
            console.log('进来了。。。。')
            state.isCollapse = !state.isCollapse
        }
    },
    actions: {
        setCollapse(context, payload: AnyObject) {
            context.commit("setCollapse", payload);
        }
    },
    // getters: {
    //     getText(state: StoreMenu) {
    //         return state.isCollapse
    //     }
    // }
}

export default store