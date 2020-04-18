<template>
  <div class="about">
    <h1>I am a Good with ID {{ goodId }}!!</h1>
    <section class="single_slide center"></section>
    <div class="devider center">
      <div>
        <h3 class="devider_h3">WOMEN COLLECTION</h3>
        <h1 class="devider_h1">Moschino Cheap And Chic</h1>
        <div class="icons_star devider_stars"><i class="fas fa-star"></i>
          <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
          <i class="fas fa-star"></i></div>
        <p class="devider_p">Compellingly actualize fully researched processes
          before proactive outsourcing. Progressively syndicate collaborative
          architectures before cutting-edge services. Completely visualize parallel
          core competencies rather than exceptional portals. </p>
        <div class="h3_description">
          <h3 class="devider_description">MATERIAL: <span class="desc_black">COTTON</span></h3>
          <h3 class="devider_description">DESIGNER: <span class="desc_black">
            BINBURHAN COTTON</span></h3>
        </div>
        <p class="devider_price">$561</p>
        <div class="devider_hr"></div>
        <div class="devider_add_to_cart">
          <a href="#" class="devider_add"><img class="devider_img_cart"
                                               src="~@/assets/red_cart.png" alt="add to cart">
            Add to cart</a>
        </div>
      </div>
    </div>
    <h1 class="single_h1 center">you may like also</h1>
    <section class="single_product center">
      <div class="block">
        <a href="#"><img class="block_img woman" src="~@/assets/2-layers44.jpg" alt="t-shirt"></a>
        <div class="block_content">
          <a href="#" class="mango">mango people t-shirt</a>
          <p class="price">$52.00</p>
          <div class="icons_star"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        </div>
        <a href="#" class="block_add">Add to cart</a>
        <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                     src="~@/assets/Forma_1.png" alt=""></a>
        <a href="#" class="block_add_heart"><img class="img_heart"
                                                 src="~@/assets/heart_add.png" alt=""></a>
      </div>
      <div class="block">
        <a href="#"><img class="block_img woman" src="~@/assets/2-layers45.jpg" alt="t-shirt"></a>
        <div class="block_content">
          <a href="#" class="mango">mango people t-shirt</a>
          <p class="price">$52.00</p>
          <div class="icons_star"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        </div>
        <a href="#" class="block_add">Add to cart</a>
        <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                     src="~@/assets/Forma_1.png" alt=""></a>
        <a href="#" class="block_add_heart"><img class="img_heart"
                                                 src="~@/assets/heart_add.png" alt=""></a>
      </div>
      <div class="block">
        <a href="#"><img class="block_img woman" src="~@/assets/2-layers46.jpg" alt="t-shirt"></a>
        <div class="block_content">
          <a href="#" class="mango">mango people t-shirt</a>
          <p class="price">$52.00</p>
          <div class="icons_star"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        </div>
        <a href="#" class="block_add">Add to cart</a>
        <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                     src="~@/assets/Forma_1.png" alt=""></a>
        <a href="#" class="block_add_heart"><img class="img_heart"
                                                 src="~@/assets/heart_add.png" alt=""></a>
      </div>
      <div class="block">
        <a href="#"><img class="block_img woman" src="~@/assets/Layer_47w.jpg" alt="t-shirt"></a>
        <div class="block_content">
          <a href="#" class="mango">mango people t-shirt</a>
          <p class="price">$52.00</p>
          <div class="icons_star"><i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i></div>
        </div>
        <a href="#" class="block_add">Add to cart</a>
        <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                     src="~@/assets/Forma_1.png" alt=""></a>
        <a href="#" class="block_add_heart"><img class="img_heart"
                                                 src="~@/assets/heart_add.png" alt=""></a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Good',
  data() {
    return {
      goodId: null,
    };
  },
  mounted() {
    console.log(this.$route);
    this.goodId = +this.$route.params.id;
  },
};
</script>
