<template>
  <div>
  <div class="arrival center">
    <div class="arrival__content">
      <h1 class="arrival__content_h1">New Arrivals </h1>
      <div class="arrival__breadcrumbs">
        <a class="arrival__breadcrumbs_link" href="index.html">Home/</a>
        <a class="arrival__breadcrumbs_link" href="product.html">Men/</a>
        <a class="arrival__breadcrumbs_red" href="product.html">New Arrivals</a>
      </div>
    </div>
  </div>
  <section class="product_details center">
    <ProductList/>
    <br>
    <ShoppingCart/>
    <br>
  </section>
  <div class="buttons center">
    <a href="#" class="button__a">cLEAR SHOPPING CART</a>
    <a href="/" class="button__a">cONTINUE sHOPPING</a>
  </div>
  <div class="cart__items center">
    <div class="item__total">
      <h1 class="item__adres_h1">Shipping Adress</h1>
      <input id="country" list="dl_country" class="item__adres_country">
      <datalist id="dl_country">
        <option value="Bangladesh"></option>
        <option value="Russia"></option>
        <option value="China"></option>
      </datalist>
      <input type="adress" placeholder=" State " class="item__adres_state">
      <input type="adress" placeholder=" Postcode / Zip " class="item__adres_state">
    </div>
    <div class="item__total">
      <h1 class="item__adres_h1">coupon  discount</h1>
      <p class="item__coupon_p">Enter your coupon code if you have one</p>
      <input type="adress" placeholder=" State " class="item__adres_state">
      <a href="#" class="button__coupon">Apply coupon</a>
    </div>
    <div class="item__total_red">
      <p class="sub_price">Sub total         $900</p>
      <h1 class="total_price">GRAND TOTAL      <span class="red_price">$900</span></h1>
      <div class="button_chekout">proceed to checkout</div>
    </div>
  </div>
  </div>
</template>

<script>
import ProductList from './ProductList.vue';
import ShoppingCart from './ShoppingCart.vue';

export default {
  components: { ProductList, ShoppingCart },
};
</script>
