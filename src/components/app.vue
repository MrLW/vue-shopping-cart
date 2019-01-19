<template>
  <div id="app">
    <h2>物品列表</h2>
    <ProductList/>
    <ShoppingCart/>
  </div>
</template>
<script>
import ProductList from "./productList.vue";
import ShoppingCart from './shoppingCart.vue'
export default {
  components: { ProductList ,ShoppingCart}
};
</script>