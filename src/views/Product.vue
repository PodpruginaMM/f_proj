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
    <section class="products center">
      <div class="products__sidebar">
        <details class="products__slidebar_list">
          <summary class="products__summary">category</summary>
          <a class="products__summary_link" href="#">Accessories</a>
          <a class="products__summary_link" href="#">Bags</a>
          <a class="products__summary_link" href="#">Denim</a>
          <a class="products__summary_link" href="#">Hoodies & Sweatshirts</a>
          <a class="products__summary_link" href="#">Jackets & Coats</a>
          <a class="products__summary_link" href="#">Pants</a>
          <a class="products__summary_link" href="#">Polos</a>
          <a class="products__summary_link" href="#">Shirts</a>
          <a class="products__summary_link" href="#">Shoes</a>
          <a class="products__summary_link" href="#">Shorts</a>
          <a class="products__summary_link" href="#">Sweaters & Knits</a>
          <a class="products__summary_link" href="#">T-Shirts</a>
          <a class="products__summary_link" href="#">Tanks</a>
        </details>
        <details class="products__slidebar_list">
          <summary class="products__summary">category</summary>
          <a class="products__summary_link" href="#">Accessories</a>
          <a class="products__summary_link" href="#">Bags</a>
          <a class="products__summary_link" href="#">Denim</a>
          <a class="products__summary_link" href="#">Hoodies & Sweatshirts</a>
          <a class="products__summary_link" href="#">Jackets & Coats</a>
          <a class="products__summary_link" href="#">Pants</a>
          <a class="products__summary_link" href="#">Polos</a>
          <a class="products__summary_link" href="#">Shirts</a>
          <a class="products__summary_link" href="#">Shoes</a>
          <a class="products__summary_link" href="#">Shorts</a>
          <a class="products__summary_link" href="#">Sweaters & Knits</a>
          <a class="products__summary_link" href="#">T-Shirts</a>
          <a class="products__summary_link" href="#">Tanks</a>
        </details>
        <details class="products__slidebar_list">
          <summary class="products__summary">category</summary>
          <a class="products__summary_link" href="#">Accessories</a>
          <a class="products__summary_link" href="#">Bags</a>
          <a class="products__summary_link" href="#">Denim</a>
          <a class="products__summary_link" href="#">Hoodies & Sweatshirts</a>
          <a class="products__summary_link" href="#">Jackets & Coats</a>
          <a class="products__summary_link" href="#">Pants</a>
          <a class="products__summary_link" href="#">Polos</a>
          <a class="products__summary_link" href="#">Shirts</a>
          <a class="products__summary_link" href="#">Shoes</a>
          <a class="products__summary_link" href="#">Shorts</a>
          <a class="products__summary_link" href="#">Sweaters & Knits</a>
          <a class="products__summary_link" href="#">T-Shirts</a>
          <a class="products__summary_link" href="#">Tanks</a>
        </details>
      </div>
      <div class="products__filter">
        <div class="products__filter_row">
          <div class="products__trending">
            <h5 class="products__h5">Trending now</h5>
            <a href="#" class="products__trending_link">Bohemian |</a>
            <a href="#" class="products__trending_link">Floral |</a>
            <a href="#" class="products__trending_link">Lace</a>
            <a href="#" class="products__trending_link">Floral |</a>
            <a href="#" class="products__trending_link">Lace |</a>
            <a href="#" class="products__trending_link">Bohemian |</a>
          </div>
          <div class="products__size">
            <h5 class="products__h5">Size</h5>
            <div class="products__radio">
              <label class="products__radio_label">
                <input type="radio" />
                <div class="products__radio_text">XXS</div>
              </label>
              <label class="products__radio_label">
                <input type="radio" />
                <div class="products__radio_text">XS</div>
              </label>
              <label class="products__radio_label">
                <input type="radio" />
                <div class="products__radio_text">S</div>
              </label>
              <label class="products__radio_label">
                <input type="radio" />
                <div class="products__radio_text">M</div>
              </label><br>
              <label class="products__radio_label">
                <input type="radio" />
                <div class="products__radio_text">L</div>
              </label>
              <label class="products__radio_label">
                <input type="radio" />
                <div class="products__radio_text">XL</div>
              </label>
              <label class="products__radio_label">
                <input type="radio" />
                <div class="products__radio_text">XXL</div>
              </label>
            </div>
          </div>
          <div class="products__price">
            <h5 class="products__h5">Price</h5>
            <form oninput="result.value=(range.value)" action="#">
              <input class="products__price_input" id="range"
                     type="range" min="1" max="700" value=90 step=1 maxlength="200px">
              <br>
              <output class="products__price_out" name="result" for="range">52$</output>
            </form>
          </div>
        </div>
        <div class="products__filter_menu">
          <div class="products__filter_title">Sort by</div>
          <div class="dropdown_sort">
            <a class="products__drop btn-secondary dropdown-toggle" href="#"
               role="button" id="dropdownMenuLink" data-toggle="dropdown"
               aria-haspopup="true" aria-expanded="false">Name</a>
            <div class="products__drop_menu" aria-labelledby="dropdownMenuLink">
              <a class="products__drop_link" href="#">Men</a>
              <a class="products__drop_link" href="#">Woman</a>
              <a class="products__drop_link" href="#">Kid</a>
            </div>
          </div>
        </div>
        <div class="products__items center">
          <div class="block">
            <a href="singlepage.html"><img class="block_img"
                                           src="img/Layer_43.jpg" alt="t-shirt"></a>
            <div class="block__content">
              <a href="singlepage.html" class="block__content_a">mango people t-shirt</a>
              <p class="block__content_p">$52.00</p>
              <div class="icons_star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <a href="#" class="block__add">Add to cart</a>
            <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                         src="img/Forma_1.png" alt=""></a>
            <a href="#" class="block_add_heart"><img class="img_heart"
                                                     src="img/heart_add.png" alt=""></a>
          </div>
          <div class="block">
            <a href="#"><img class="block_img" src="img/Layer_44.jpg" alt="t-shirt"></a>
            <div class="block__content">
              <a href="singlepage.html" class="block__content_a">mango people t-shirt</a>
              <p class="block__content_p">$52.00</p>
              <div class="icons_star"><i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i><i class="fas fa-star">
                </i><i class="fas fa-star"></i></div>
            </div>
            <a href="#" class="block__add">Add to cart</a>
            <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                         src="img/Forma_1.png" alt=""></a>
            <a href="#" class="block_add_heart"><img class="img_heart"
                                                     src="img/heart_add.png" alt=""></a>
          </div>
          <div class="block">
            <a href="#"><img class="block_img" src="img/Layer_4.jpg" alt="t-shirt"></a>
            <div class="block__content">
              <a href="singlepage.html" class="block__content_a">mango people t-shirt</a>
              <p class="block__content_p">$52.00</p>
              <div class="icons_star"><i class="fas fa-star"></i><i class="fas fa-star"></i>
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
            </div>
            <a href="#" class="block__add">Add to cart</a>
            <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                         src="img/Forma_1.png" alt=""></a>
            <a href="#" class="block_add_heart"><img class="img_heart"
                                                     src="img/heart_add.png" alt=""></a>
          </div>
          <div class="block">
            <a href="#"><img class="block_img"
                             src="img/Layer_45.jpg" alt="t-shirt" style="padding-left: 50px"></a>
            <div class="block__content">
              <a href="singlepage.html"
                 class="block__content_a">mango people t-shirt</a>
              <p class="block__content_p">$52.00</p>
              <div class="icons_star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
            </div>

            <a href="#" class="block__add">Add to cart</a>
            <a href="#" class="block_add_rectangle">
              <img class="img_rectangle" src="img/Forma_1.png" alt=""></a>
            <a href="#" class="block_add_heart"><img class="img_heart"
                                                     src="img/heart_add.png" alt=""></a>
          </div>
          <div class="block">
            <a href="#"><img class="block_img" src="img/Layer_46.jpg" alt="t-shirt"></a>
            <div class="block__content">
              <a href="singlepage.html" class="block__content_a">mango people t-shirt</a>
              <p class="block__content_p">$52.00</p>
              <div class="icons_star"><i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i><i class="fas fa-star"></i>
                <i class="fas fa-star"></i></div>
            </div>
            <a href="#" class="block__add">Add to cart</a>
            <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                         src="img/Forma_1.png" alt=""></a>
            <a href="#" class="block_add_heart"><img class="img_heart"
                                                     src="img/heart_add.png" alt=""></a>
          </div>
          <div class="block">
            <a href="#"><img class="block_img img_content"
                             src="img/Layer_47.jpg" alt="t-shirt" style="padding-left: 50px"></a>
            <div class="block__content">
              <a href="singlepage.html" class="block__content_a">mango people t-shirt</a>
              <p class="block__content_p">$52.00</p>
              <div class="icons_star">
                <i class="fas fa-star"></i><i class="fas fa-star"></i>
                <i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i>
              </div>
            </div>
            <a href="#" class="block__add">Add to cart</a>
            <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                         src="img/Forma_1.png" alt=""></a>
            <a href="#" class="block_add_heart"><img class="img_heart"
                                                     src="img/heart_add.png" alt=""></a>
          </div>
          <div class="block">
            <a href="#"><img class="block_img" src="img/Layer_48.jpg" alt="t-shirt"></a>
            <div class="block__content">
              <a href="singlepage.html" class="block__content_a">mango people t-shirt</a>
              <p class="block__content_p">$52.00</p>
              <div class="icons_star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
            <a href="#" class="block__add">Add to cart</a>
            <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                         src="img/Forma_1.png" alt=""></a>
            <a href="#" class="block_add_heart"><img class="img_heart"
                                                     src="img/heart_add.png" alt=""></a>
          </div>
          <div class="block">
            <a href="#"><img class="block_img" src="img/Layer_49.jpg" alt="t-shirt"></a>
            <div class="block__content">
              <a href="singlepage.html" class="block__content_a">mango people t-shirt</a>
              <p class="block__content_p">$52.00</p>
              <div class="icons_star"><i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i><i class="fas fa-star"></i>
                <i class="fas fa-star"></i></div>
            </div>
            <a href="#" class="block__add">Add to cart</a>
            <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                         src="img/Forma_1.png" alt=""></a>
            <a href="#" class="block_add_heart"><img class="img_heart"
                                                     src="img/heart_add.png" alt=""></a>
          </div>
          <div class="block">
            <a href="#"><img class="block_img" src="img/Layer_50.jpg"
                             alt="t-shirt" style="padding-left: 50px"></a>
            <div class="block__content">
              <a href="singlepage.html" class="block__content_a">mango people t-shirt</a>
              <p class="block__content_p">$52.00</p>
              <div class="icons_star"><i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i><i class="fas fa-star"></i>
                <i class="fas fa-star"></i></div>
            </div>
            <a href="#" class="block__add">Add to cart</a>
            <a href="#" class="block_add_rectangle"><img class="img_rectangle"
                                                         src="img/Forma_1.png" alt=""></a>
            <a href="#" class="block_add_heart"><img class="img_heart"
                                                     src="img/heart_add.png" alt=""></a>
          </div>
        </div>
        <div class="products__pagination">
          <nav aria-label="Page navigation example" class="products__pagination_label">
            <ul class="products__pagination_ul">
              <li class="page-item"><a class="products__pagination_link"
                                       href="#" aria-label="Previous"><span aria-hidden="true">
              </span></a></li>
              <li class="page-item"><a class="products__pagination_link"
                                       href="product.html">1</a></li>
              <li class="page-item"><a class="products__pagination_link"
                                       href="product.html">2</a></li>
              <li class="page-item"><a class="products__pagination_link"
                                       href="product.html">3</a></li>
              <li class="page-item"><a class="products__pagination_link"
                                       href="product.html">4</a></li>
              <li class="page-item"><a class="products__pagination_link"
                                       href="product.html">5</a></li>
              <li class="page-item"><a class="products__pagination_link"
                                       href="product.html">6</a></li>
              <li class="page-item"><a class="products__pagination_link"
                                       href="product.html">...</a></li>
              <li class="page-item"><a class="products__pagination_link"
                                       href="product.html">20</a></li>
              <li class="page-item"><a class="products__pagination_link"
                                       href="#" aria-label="Next"><span aria-hidden="true"> >
              </span></a></li>
            </ul>
          </nav>
          <a href="#" class="products__pagination_button">View All</a>
        </div>
      </div>
    </section>
    <div class="provision center">
      <div class="col-md-4">
        <img class="img_row" src="img/Forma_3.svg" alt="">
        <h2 class="provision__h2">Free Delivery</h2>
        <p class="provision__p">Worldwide delivery on all.
          Authorit tively morph next-generation innov tion with extensive models.</p>
      </div>
      <div class="col-md-4">
        <img class="img_row" src="img/Forma_2.svg" alt="">
        <h2 class="provision__h2">Sales & discounts</h2>
        <p class="provision__p">Worldwide delivery on all.
          Authorit tively morph next-generation innov tion with extensive models.</p>
      </div>
      <div class="col-md-4">
        <img class="img_row" src="img/Forma_1.svg" alt="">
        <h2 class="provision__h2">Quality assurance</h2>
        <p class="provision__p">Worldwide delivery on all.
          Authorit tively morph next-generation innov tion with extensive models.</p>
      </div>
    </div>
    <section class="subscribe center">
      <div class="subscribe__content">
        <div class="subscribe__content_img"><img src="img/Layer_40.png" alt="face"></div>
        <div class="subscribe__content_text">
          “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
          a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
        </div>
        <div class="subscribe__bin">
          <h5 class="subscribe__bin_h5">Bin Burhan</h5>
          <h6 class="subscribe__bin_h6">Dhaka, Bd</h6>
        </div>
        <div class="subscribe__text">
          <h4 class="subscribe__text_h4">SUBSCRIBE</h4>
          <p class="subscribe__text_p"> FOR OUR NEWLETTER AND PROMOTION</p>
        </div>
        <div class="subscribe__input mb-3">
          <input type="text" class="subscribe__input_placeholder"
                 placeholder=" Enter Your Email" aria-label="Recipient's username"
                 aria-describedby="button-addon2">
          <div class="input-group-append">
            <button class="subscribe__input_button" type="button"
                    id="button-addon2">Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
