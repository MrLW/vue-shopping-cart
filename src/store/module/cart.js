const state = {
    items : [],
    checkoutStatus : null
}

const getters = {
    //根据购物车都id集合获取title、price
    cartProducts:(state,getters,rootState)=>{
        return state.items.map(({id,quantity})=>{
            const product = rootState.products.all.find(product=>product.id===id); 
            return {
                title:product.title,
                price:product.price,
                quantity
            }
        })
    },

    cartTotalPrice : (state,getters)=> {
        return getters.cartProducts.reduce((total,product)=>{
            return total + product.price * product.quantity;
        },0) ;
    }
}

const actions = {
    addProductToCart ({state,commit},product) {
        commit('setCheckoutStatus',null);
        if(product.inventory > 0 ){
            const cartItem = state.items.find(item=>item.id === product.id);
            if(!cartItem){
                commit('pushProductCart',{id:product.id});
            }else {
                commit('incrementItemQuantity',cartItem);
            }
            // 从商品库存-1,注意：这里需要试用root:true,表示从/products/decrementProductInventory匹配
            // 否则将会匹配/cart/products/decrementProductInventory
            commit('products/decrementProductInventory',{id:product.id},{ root: true });
        }
    },
}

const mutations = {

    setCheckoutStatus(state,status){
        state.checkoutStatus = status ;
    },

    // 购物车第一次添加该商品
    pushProductCart(state,{id}){
        state.items.push({
            id,
            quantity:1
        })
        console.log('第一次添加该商品,该商品'+id,'有1个');
    },
    // 购物车以后该商品,添加数量
    incrementItemQuantity(state,{id}){
        const cartItem = state.items.find(item=>item.id===id );
        cartItem.quantity++;
        console.log('第n次添加该商品,该商品'+id,'有'+cartItem.quantity+'个');
    }
}

export default {
    namespaced:true,
    state,
    getters,
    actions,
    mutations
}