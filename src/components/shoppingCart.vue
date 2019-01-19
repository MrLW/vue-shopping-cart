<template>
    <div>
        <h2>购物车</h2>
        <ul>
            <li v-for="product in products"
                :key="product.id">
                {{product.title}} -- {{product.price}} x {{product.quantity}}
            </li>
        </ul>
        <p>total:{{total}}</p>
    </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
    computed: {
        ...mapState({
            checkoutStatus:state=>state.cart.checkoutStatus
        }),
        ...mapGetters('cart',{
            products:'cartProducts',
            total:'cartTotalPrice'
        }),
        methods:{
            checkout(products){
                this.$store.dispatch('cart/checkout',products);
            }
        }
    },
}
</script>

