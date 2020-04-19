<template>
  <div>
    <div class="products__items center">
      <div :key="product.id"
           class="block"
           v-for="product in products">
        <a href="/Good/345"><img class="block_img"
                                 v-bind:src="product.img_name" alt="Product image unavailable"></a>
        <div class="block__content">
          <a href="/Good/345" class="block__content_a">{{ product.title }}</a>
          <p class="block__content_p">${{ product.price | currency }}</p>
          <div class="icons_star">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
        </div>
        <button class="block__add" @click="addProductToCart(product)">Add to cart</button>
        <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                     src="~@/assets/Forma_1.png" alt=""></a>
        <a href="#" class="block_add_heart"><img class="img_heart"
                                                 src="~@/assets/heart_add.png" alt=""></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  computed: mapState({
    products: (state) => state.products.all,
  }),
  methods: mapActions('cart', [
    'addProductToCart',
  ]),
  created() {
    this.$store.dispatch('products/getAllProducts');
  },
};
</script>
