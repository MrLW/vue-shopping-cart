
const state = {
    items : [],
    checkoutStatus : null
}

const getters = {

}

const actions = {
    addProductToCart ({state,commit}) {
        console.log('add product');
    }
}

const mutations = {

}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}