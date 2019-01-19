import shop from '../../api/shop'

// 初始化state
const state = {
    all: []
}

// 初始化getter
const getter = {}

// 初始化actions
const actions = {
    getAllProducts({ commit }) {
        shop.getProducts(products => {
            commit('setProducts', products);
        })
    }
}

// 初始化mutations
const mutations = {
    setProducts(state, products) {
        state.all = products;
    },
    // 库存-1
    decrementProductInventory(state, { id }) {
        console.log('decrementProductInventory')
        const product = state.all.find(product => product.id === id);
        product.inventory--;
        console.log(`当前商品${id}库存,有${product.inventory}个`)
    }
}

export default {
    namespaced: true,
    state,
    getter,
    actions,
    mutations
}