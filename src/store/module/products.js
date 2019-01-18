import shop from '../../api/shop'

// 初始化state
const state = {
    all : [] 
}

// 初始化getter
const getter = {}

// 初始化actions
const actions = {
    getAllProducts({commit}){
        shop.getProducts(products=>{
            commit('setProducts',products);
        })
    }
}

// 初始化mutations
const mutations = {
    setProducts(state,products){
        state.all = products ;
        console.log('all==>',state.all)
    },
    decrementProductInventory(state,{id}){
        const product = state.all.find(product=>product.id===id);
        product.inventory--;
    }
}

export default {
    namespaced:true,
    state,
    getter,
    actions,
    mutations
}