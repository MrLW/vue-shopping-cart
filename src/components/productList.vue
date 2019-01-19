<template>
    <ul>
        <li v-for="product in products"
        :key="product.id"
        >
        {{product.title}} - {{product.price}} -- {{product.inventory}}
            <button @click="addProductToCart(product)">添加购物车</button>
        </li>
    </ul>
</template>
<script>
    import {mapState,mapActions} from 'vuex'
    export default {
        computed : mapState({
            products: state => state.products.all
        }),
        methods:mapActions('cart',[
            'addProductToCart' 
        ]),
        created() {
            this.$store.dispatch('products/getAllProducts');
        },
    }
</script>
