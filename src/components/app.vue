<template>
  <div id="app">
    <h2>物品列表</h2>
    <ProductList/>
  </div>
</template>
<script>
import ProductList from "./productList.vue";
export default {
  components: { ProductList }
};
</script>