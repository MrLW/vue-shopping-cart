<template>
  <div>
    <h2>购物车</h2>
    <ul>
      <li
        v-for="product in products"
        :key="product.id"
      >{{product.title}} -- {{product.price}} x {{product.quantity}}</li>
    </ul>
    <p>total:{{total}}</p>
    <p>
      <button :disabled="!products.length" @click="checkout(products)">Checkout</button>
    </p>
    <p v-show="checkoutStatus">checkout {{checkoutStatus}}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters("cart", {
      products: "cartProducts",
      total: "cartTotalPrice"
    })
  },
  //  另一种方式
//   methods: {
//     checkout(products) {
//       this.$store.dispatch("cart/checkout", products);
//     },
//   }
  methods:mapActions('cart',[
      'checkout'
  ])
};
</script>

