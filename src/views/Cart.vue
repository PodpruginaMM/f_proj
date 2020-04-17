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
    <div class="product_details1">
      <h3 class="details1_h3">Product Details</h3>
      <h3 class="details_h3">unite Price</h3>
      <h3 class="details_h3">Quantity</h3>
      <h3 class="details_h3">shipping</h3>
      <h3 class="details_h3">Subtotal</h3>
      <h3 class="details_h3">ACTION</h3>
    </div>
    <div class="product_details2">
      <div class="details2_img">
        <img src="img/2-layers44.jpg" alt="mango">
      </div>
      <div class="content_details">
        <h2 class="detais_h2">Mango  People  T-shirt</h2>
        <div class="icons_star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p class="details_p">Color:   <span class="details_p_grey">Red</span><br>Size:
          <span class="details_p_grey">Xll</span></p>
      </div>
      <div class="details_item">
        <div class="details_item_text">$150</div>
        <div class="details_item_numbers">2</div>
        <div class="details_item_text">free</div>
        <div class="details_item_text">$300</div>
        <label class="radio">
          <input type="radio" class="radio__item"/>
        </label>
      </div>
    </div>
    <div class="product_details2">
      <div class="details2_img">
        <img src="img/2-layers44.jpg" alt="mango">
      </div>
      <div class="content_details">
        <h2 class="detais_h2">Mango  People  T-shirt</h2>
        <div class="icons_star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p class="details_p">Color:   <span class="details_p_grey">Red</span><br>Size:
          <span class="details_p_grey">Xll</span></p>
      </div>
      <div class="details_item">
        <div class="details_item_text">$150</div>
        <div class="details_item_numbers">2</div>
        <div class="details_item_text">free</div>
        <div class="details_item_text">$300</div>
        <label class="radio">
          <input type="radio" class="radio__item"/>
        </label>
      </div>
    </div>
    <div class="product_details2">
      <div class="details2_img">
        <img src="img/2-layers44.jpg" alt="mango">
      </div>
      <div class="content_details">
        <h2 class="detais_h2">Mango  People  T-shirt</h2>
        <div class="icons_star">
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
          <i class="fas fa-star"></i>
        </div>
        <p class="details_p">Color:   <span class="details_p_grey">Red</span><br>Size:
          <span class="details_p_grey">Xll</span></p>
      </div>
      <div class="details_item">
        <div class="details_item_text">$150</div>
        <div class="details_item_numbers">2</div>
        <div class="details_item_text">free</div>
        <div class="details_item_text">$300</div>
        <label class="radio">
          <input type="radio" class="radio__item"/>
        </label>
      </div>
    </div>
  </section>
  <div class="buttons center">
    <a href="#" class="button__a">cLEAR SHOPPING CARTt</a>
    <a href="product.html" class="button__a">cONTINUE sHOPPING</a>
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
