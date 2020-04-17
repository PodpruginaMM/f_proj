<template>
  <div id="app">
    <div id="nav">
      <header class="header center">
        <div class="header__left">
          <a class="header__logo" href="/">
            <img class="header__logo_img" src="~@/assets/logo.png" alt="logo">BRAN
            <span class="header__logo_red">D</span></a>
          <form class="header__form" action="#">
            <details class="header__browse">
              <summary class="header__browse_summary">Browse</summary>
              <div class="header__drop">
                <ul class="header__menu">Women
                  <li class="header__menu_list"><a href="product.html"
                                                   class="header__menu_link_">Dresses</a></li>
                  <li class="header__menu_list"><a href="product.html"
                                                   class="header__menu_link_">Tops</a></li>
                  <li class="header__menu_list"><a href="product.html"
                                                   class="header__menu_link_">
                    Sweaters/Knits</a></li>
                  <li class="header__menu_list"><a href="product.html"
                                                   class="header__menu_link_">
                    Jackets/Coats</a></li>
                  <li class="header__menu_list"><a href="product.html"
                                                   class="header__menu_link_">Blazers</a></li>
                  <li class="header__menu_list"><a href="product.html"
                                                   class="header__menu_link_">Denim</a></li>
                  <li class="header__menu_list"><a href="product.html"
                                                   class="header__menu_link_">
                    Leggings/Pants</a></li>
                  <li class="header__menu_list"><a href="product.html"
                                                   class="header__menu_link_">
                    Skirts/Shorts</a></li>
                  <li class="header__menu_list"><a href="product.html"
                                                   class="header__menu_link_">Accessories</a></li>
                </ul>
              </div>
            </details>
            <input class="header__search" placeholder="Search for Item..." type="text">
            <button class="header__search_button" type="submit"><img src="~@/assets/search.png"
                                                                     alt="search"></button>
          </form>
        </div>
        <div class="header__right" >
          <img class="header__right_cart" src="~@/assets/cart.svg" alt="cart">
          <a href="#" class="header__right_button">My Account</a>
        </div>
      </header>
      <nav class="nav center">
        <ul class="nav__menu">
          <li class="nav__menu_list"><a href="/" class="nav__menu_link">Home</a>
            <div class="nav__drop">
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                  <li><a href="#" class="nav__flex_link">Blazers</a></li>
                  <li><a href="#" class="nav__flex_link">Denim</a></li>
                  <li><a href="#" class="nav__flex_link">Leggings/Pants</a></li>
                  <li><a href="#" class="nav__flex_link">Scirts/Shorts</a></li>
                  <li><a href="#" class="nav__flex_link">Accessories</a></li>
                </ul>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <div class="nav__flex">
                  <h3 class="nav__flex_h3">Women</h3>
                  <ul class="nav__flex_ul">
                    <li><a href="#" class="nav__flex_link">Dresses</a></li>
                    <li><a href="#" class="nav__flex_link">Tops</a></li>
                    <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  </ul>
                </div>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <img class="nav__flex_img" src="~@/assets/Layer_42.jpg" alt="super sale">
                <h1 class="nav__flex_h1">super<br>sale!</h1>
              </div>
            </div>
          </li>
          <li class="nav__menu_list"><a href="product.html" class="nav__menu_link">Man</a>
            <div class="nav__drop">
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                  <li><a href="#" class="nav__flex_link">Blazers</a></li>
                  <li><a href="#" class="nav__flex_link">Denim</a></li>
                  <li><a href="#" class="nav__flex_link">Leggings/Pants</a></li>
                  <li><a href="#" class="nav__flex_link">Scirts/Shorts</a></li>
                  <li><a href="#" class="nav__flex_link">Accessories</a></li>
                </ul>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <div class="nav__flex">
                  <h3 class="nav__flex_h3">Women</h3>
                  <ul class="nav__flex_ul">
                    <li><a href="#" class="nav__flex_link">Dresses</a></li>
                    <li><a href="#" class="nav__flex_link">Tops</a></li>
                    <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  </ul>
                </div>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <img class="nav__flex_img" src="~@/assets/Layer_42.jpg" alt="super sale">
                <h1 class="nav__flex_h1">super<br>sale!</h1>

              </div>
            </div>
          </li>
          <li class="nav__menu_list"><a href="#" class="nav__menu_link">Women</a>
            <div class="nav__drop">
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                  <li><a href="#" class="nav__flex_link">Blazers</a></li>
                  <li><a href="#" class="nav__flex_link">Denim</a></li>
                  <li><a href="#" class="nav__flex_link">Leggings/Pants</a></li>
                  <li><a href="#" class="nav__flex_link">Scirts/Shorts</a></li>
                  <li><a href="#" class="nav__flex_link">Accessories</a></li>
                </ul>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <div class="nav__flex">
                  <h3 class="nav__flex_h3">Women</h3>
                  <ul class="nav__flex_ul">
                    <li><a href="#" class="nav__flex_link">Dresses</a></li>
                    <li><a href="#" class="nav__flex_link">Tops</a></li>
                    <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  </ul>
                </div>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <img class="nav__flex_img" src="~@/assets/Layer_42.jpg" alt="super sale">
                <h1 class="nav__flex_h1">super<br>sale!</h1>
              </div>
            </div>
          </li>
          <li class="nav__menu_list"><a href="#" class="nav__menu_link">Kids</a>
            <div class="nav__drop">
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                  <li><a href="#" class="nav__flex_link">Blazers</a></li>
                  <li><a href="#" class="nav__flex_link">Denim</a></li>
                  <li><a href="#" class="nav__flex_link">Leggings/Pants</a></li>
                  <li><a href="#" class="nav__flex_link">Scirts/Shorts</a></li>
                  <li><a href="#" class="nav__flex_link">Accessories</a></li>
                </ul>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <div class="nav__flex">
                  <h3 class="nav__flex_h3">Women</h3>
                  <ul class="nav__flex_ul">
                    <li><a href="#" class="nav__flex_link">Dresses</a></li>
                    <li><a href="#" class="nav__flex_link">Tops</a></li>
                    <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  </ul>
                </div>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <img class="nav__flex_img" src="~@/assets/Layer_42.jpg" alt="super sale">
                <h1 class="nav__flex_h1">super<br>sale!</h1>
              </div>
            </div>
          </li>
          <li class="nav__menu_list"><a href="#" class="nav__menu_link">Accoseriese</a>
            <div class="nav__drop">
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                  <li><a href="#" class="nav__flex_link">Blazers</a></li>
                  <li><a href="#" class="nav__flex_link">Denim</a></li>
                  <li><a href="#" class="nav__flex_link">Leggings/Pants</a></li>
                  <li><a href="#" class="nav__flex_link">Scirts/Shorts</a></li>
                  <li><a href="#" class="nav__flex_link">Accessories</a></li>
                </ul>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <div class="nav__flex">
                  <h3 class="nav__flex_h3">Women</h3>
                  <ul class="nav__flex_ul">
                    <li><a href="#" class="nav__flex_link">Dresses</a></li>
                    <li><a href="#" class="nav__flex_link">Tops</a></li>
                    <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  </ul>
                </div>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <img class="nav__flex_img" src="~@/assets/Layer_42.jpg" alt="super sale">
                <h1 class="nav__flex_h1">super<br>sale!</h1>
              </div>
            </div>
          </li>
          <li class="nav__menu_list"><a href="#" class="nav__menu_link">Featured</a>
            <div class="nav__drop">
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                  <li><a href="#" class="nav__flex_link">Blazers</a></li>
                  <li><a href="#" class="nav__flex_link">Denim</a></li>
                  <li><a href="#" class="nav__flex_link">Leggings/Pants</a></li>
                  <li><a href="#" class="nav__flex_link">Scirts/Shorts</a></li>
                  <li><a href="#" class="nav__flex_link">Accessories</a></li>
                </ul>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <div class="nav__flex">
                  <h3 class="nav__flex_h3">Women</h3>
                  <ul class="nav__flex_ul">
                    <li><a href="#" class="nav__flex_link">Dresses</a></li>
                    <li><a href="#" class="nav__flex_link">Tops</a></li>
                    <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  </ul>
                </div>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <img class="nav__flex_img" src="~@/assets/Layer_42.jpg" alt="super sale">
                <h1 class="nav__flex_h1">super<br>sale!</h1>
              </div>
            </div>
          </li>
          <li class="nav__menu_list"><a href="#" class="nav__menu_link">Hot Deals</a>
            <div class="nav__drop nav__drop_last">
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                  <li><a href="#" class="nav__flex_link">Blazers</a></li>
                  <li><a href="#" class="nav__flex_link">Denim</a></li>
                  <li><a href="#" class="nav__flex_link">Leggings/Pants</a></li>
                  <li><a href="#" class="nav__flex_link">Scirts/Shorts</a></li>
                  <li><a href="#" class="nav__flex_link">Accessories</a></li>
                </ul>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <div class="nav__flex">
                  <h3 class="nav__flex_h3">Women</h3>
                  <ul class="nav__flex_ul">
                    <li><a href="#" class="nav__flex_link">Dresses</a></li>
                    <li><a href="#" class="nav__flex_link">Tops</a></li>
                    <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  </ul>
                </div>
              </div>
              <div class="nav__flex">
                <h3 class="nav__flex_h3">Women</h3>
                <ul class="nav__flex_ul">
                  <li><a href="#" class="nav__flex_link">Dresses</a></li>
                  <li><a href="#" class="nav__flex_link">Tops</a></li>
                  <li><a href="#" class="nav__flex_link">Sweaters/Knits</a></li>
                  <li><a href="#" class="nav__flex_link">Jackets/Coats</a></li>
                </ul>
                <img class="nav__flex_img" src="~@/assets/Layer_42.jpg" alt="super sale">
                <h1 class="nav__flex_h1">super<br>sale!</h1>
              </div>
            </div>
          </li>
        </ul>
      </nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/cart">Cart</router-link> |
      <router-link to="/product">Product</router-link>
    </div>
    <router-view/>
    <footer class="footer center">
      <div class="footer__content">
        <div class="footer__logo">
          <a class="footer__logo_a" href=""><img class="footer__logo_img"
                                                 src="~@/assets/logo.png" alt="logo">
            BRAN<span class="footer__logo_red">D</span></a>
          <p class="footer__logo_p">Objectively transition extensive data rather
            than cross functional solutions. Monotonectally syndicate multidisciplinary
            materials before go forward benefits. Intrinsicly syndicate an expanded
            array of processes and cross-unit partnerships.<br>Efficiently plagiarize
            24/365 action items and focused infomediaries.Distinctively seize superior
            initiatives for wireless technologies. Dynamically optimize.</p>
        </div>
        <div class="footer__nav">
          <div class="footer__nav_main">
            <ul class="footer__nav_menu">company
              <li><a href="index.html" class="footer__nav_link">Home </a></li>
              <li><a href="product.html" class="footer__nav_link">Shop</a></li>
              <li><a href="chekout.html" class="footer__nav_link">About</a></li>
              <li><a href="chekout.html" class="footer__nav_link">How It Works</a></li>
              <li><a href="chekout.html" class="footer__nav_link">Contact</a></li>
            </ul>
            <ul class="footer__nav_menu">information
              <li><a href="chekout.html" class="footer__nav_link">Tearms & Condition</a></li>
              <li><a href="chekout.html" class="footer__nav_link">Privacy Policy</a></li>
              <li><a href="chekout.html" class="footer__nav_link">How to Buy</a></li>
              <li><a href="chekout.html" class="footer__nav_link">How to Sell</a></li>
              <li><a href="chekout.html" class="footer__nav_link">Promotion</a></li>
            </ul>
            <ul class="footer__nav_menu">SHOP CATEGORY
              <li><a href="product.html" class="footer__nav_link">Men</a></li>
              <li><a href="product.html" class="footer__nav_link">Women</a></li>
              <li><a href="product.html" class="footer__nav_link">Child</a></li>
              <li><a href="product.html" class="footer__nav_link">Apparel</a></li>
              <li><a href="product.html" class="footer__nav_link">Brows All</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__text">
        <p class="footer__text_p">© 2017 Brand All Rights Reserved.</p>
        <div class="footer__icons">
          <a href="#" class="icons"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="icons"><i class="fab fa-twitter"></i></a>
          <a href="#" class="icons"><i class="fab fa-linkedin-in"></i></a>
          <a href="#" class="icons"><i class="fab fa-pinterest-p"></i></a>
          <a href="#" class="icons"><i class="fab fa-google-plus-g"></i></a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style lang="sass">
$selectedColor: #f16d7f
$selectedColorBlack: #222222
$selectedColorHiWhite: #ececec
$selectedColorWhite: #ffffff
$selectedColorGreyText: #636363

a
  text-decoration: none
.center
  padding: 0 calc(50% - 570px)
.header
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.17)
  border: 1px solid $selectedColorHiWhite
  background-color: $selectedColorWhite
  height: 100px
  display: flex
  justify-content: space-between
  align-items: center
  &__left
    display: flex
    align-items: center
  &__form
    display: flex
    align-items: center
    margin-left: 37px
  &__logo
    display: flex
    align-items: center
    font-family: 'Lato', sans-serif
    font-weight: 300
    letter-spacing: 0.68px
    color: $selectedColorBlack
    font-size: 27px
    &_img
      margin-right: 13px
    &_red
      color: $selectedColor
      font-family: 'Lato', sans-serif
      font-weight: 400
      letter-spacing: 0.68px
      font-size: 27px
  &__browse
    width: 87px
    border-radius: 3px 0 0 3px
    border: 1px solid #e6e6e6
    background-color: #cdcdcc
    background-image: linear-gradient(to bottom, #f9f9f9 0%, #f5f5f5 100%)
    &_summary
      height: 30px
      padding-top: 8px
      padding-left: 10px
      background-color: #cdcdcc
      background-image: linear-gradient(to bottom, #f9f9f9 0%, #f5f5f5 100%)
      color: $selectedColorBlack
      font-family: 'Lato', sans-serif
      font-size: 14px
      font-weight: 300
      letter-spacing: 0.35px
      text-transform: none
      line-height: 20px
      &::-webkit-details-marker
        display: none
        color: #838383
        padding-left: 10px
      &::after
        content: '\25B6'
        padding-left: 10px
        color: #838383

  &__drop
    position: absolute
    border: 1px solid $selectedColorWhite
    border-radius: 1%
    background-color: $selectedColorWhite
    z-index: 1
  &__menu
    margin: 8px 20px
    padding-top: 8px
    padding-bottom: 8px
    text-transform: none
    color: grey
    font-size: 30px
    font-weight: 900
    font-family: "Lato", sans-serif
    &_list
      list-style-type: none
      font-family: 'Lato', sans-serif
      font-size: 14px
      font-weight: 400
      line-height: 28px
      letter-spacing: 0.35px
      padding-top: 5px
      &:hover
        font-weight: 600
    &_link
      color: $selectedColorGreyText !important
  &__search
    padding-left: 10px
    width: 317px
    height: 36px
    border-radius: 0 3px 3px 0
    border: 1px solid #e6e6e6
    background-color: $selectedColorWhite
    &_button
      width: 35px
      height: 40px
      border-radius: 0 3px 3px 0
      border: 1px solid #e6e6e6
      background-color: $selectedColorWhite
  &__right
    display: flex
    align-items: center
    position: relative
    &_cart
      margin-right: 26px
    &_button
      width: 130px
      height: 40px
      background-color: $selectedColor
      text-align: center
      color: white
      line-height: 40px
      font-size: 22px
      border-radius: 5%
      font-weight: 900
      &:hover
        color: $selectedColorWhite
        text-decoration: none
        transform: scale(1.2)
.nav
  margin-top: 20px
  margin-bottom: 20px
  position: relative
  &__drop
    position: absolute
    border-radius: 5px
    background-color: $selectedColorWhite
    padding-left: 20px
    padding-right: 20px
    display: none
    top: 46px
    border: 1px solid #e8e8e8
    z-index: 1
    &_last
      right: 0
  &__menu
    list-style-type: none
    display: flex
    background-color: $selectedColorWhite
    &_list
      position: relative
    &_link
      color: $selectedColorBlack
      font-size: 14px
      font-weight: 700
      text-transform: uppercase
      padding: 20px
      display: flex
      text-decoration: none
      position: relative
      font-family: 'Lato', sans-serif
      &:hover
        font-weight: 900
      &:hover .drop
        display: flex !important
  &__flex
    width: 235px
    margin-right: 46px
    z-index: 1
    &_h3
      border-bottom: 1px solid #e8e8e8
      color: #232323
      font-size: 14px
      font-weight: 400
      text-transform: uppercase
      letter-spacing: 0.35px
      padding-bottom: 8px
      margin-bottom: 8px
      padding-top: 20px
    &_ul
      list-style-type: none
    &_link
      color: #646464
      font-size: 14px
      font-weight: 400
      letter-spacing: 0.35px
      line-height: 28px
      text-decoration: none
      &:hover
        color: $selectedColor
    &_h1
      font-size: 15px
    &_img
      background: url(~@/assets/Layer_42.jpg) no-repeat
      width: 255px
      height: 118px
    &:last-of-type
      margin-right: 0
      margin-left: auto

.promo
  background-color: #e8e8e8
  height: 613px
  margin-top: auto
  margin-bottom: 98px
  &__content
    background-image: url(~@/assets/Layer_24.jpg)
    height: 100%
    background-repeat: no-repeat
    background-position: 0 -50px
    display: flex
    align-items: center
  &__text
    border-left: 12px solid $selectedColor
    padding-left: 12px
    &_p
    text-transform: uppercase
    color: $selectedColorBlack
    font-family: "Lato", sans-serif
    font-weight: 400
    font-size: 60px
    letter-spacing: 1.5px
    line-height: 4px
    padding-bottom: 10px
    &_red
      color: $selectedColor
      letter-spacing: 1px
      line-height: 30px

.blocks
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  &__man
    width: 560px
    background-image: url(~@/assets/Layer_30.png)
    margin-bottom: 20px
    background-repeat: no-repeat
    position: relative
    &_text
      height: 82px
      width: 175px
      background-color: white
      margin-top: 26px
      margin-bottom: 434px
      margin-right: 385px
      text-align: center
      padding: 16px
  &__woman
    width: 560px
    height: 100%
    background-image: url(~@/assets/Layer_32.png)
    margin-left: 20px
    background-repeat: no-repeat
    position: relative
    &_text
      width: 162px
      height: 82px
      background-color: $selectedColorWhite
      margin-top: 26px
      margin-bottom: 159px
      margin-right: 398px
      text-align: center
      padding: 16px
  &__accessories
    background-image: url(~@/assets/Layer_37.png)
    width: 556px
    height: 240px
    background-repeat: no-repeat
    background-position: 150px center
    background-color: #dadad2
    position: relative
    &_text
      width: 225px
      height: 82px
      background-color: $selectedColorWhite
      margin: 25px 335px 154px 0
      text-align: center
      padding: 12px
  &__kid
    background-image: url(~@/assets/Layer_31.png)
    width: 560px
    height: 542px
    margin-top: -300px
    margin-left: 20px
    display: flex
    &_text
      width: 180px
      height: 82px
      background-color: $selectedColorWhite
      margin: 27px 380px 433px 0
      text-align: center
      padding: 16px
  &__text
    &_black
      color: $selectedColorBlack
      font-family: 'Lato', sans-serif
      font-size: 20px
      font-weight: 400
      text-transform: uppercase
      letter-spacing: 0.45px
      margin-top: auto
    &_red
      color: #f16d7f
      font-size: 20px
      letter-spacing: 0.75px
      font-family: "Lato", sans-serif
      text-transform: uppercase
      font-weight: 700
.heading
  text-align: center
  &__h1
    margin-top: 100px
    height: 23px
    color: $selectedColorBlack
    font-family: 'Lato', sans-serif
    font-size: 30px
    font-weight: 700
    line-height: 54px
    letter-spacing: 0.75px
  &__p
    height: 12px
    margin-top: 16px
    margin-bottom: 56px
    color: #9f9f9f
    font-family: 'Lato', sans-serif
    font-size: 14px
    font-weight: 400
    line-height: 54px
    letter-spacing: 0.35px
    text-align: center

.items
  display: flex
  flex-wrap: wrap
  padding-top: 60px
  padding-bottom: 20px
  justify-content: space-between
.block
  display: flex
  flex-wrap: wrap
  width: 263px
  height: 364px
  float: left
  justify-content: space-between
  position: relative
  margin-bottom: 39px
  &:hover
    box-shadow: 0 5px 8px rgba(0, 0, 0, 0.16)
    transform: scale(1.05)
  &:hover .block__a_img
    filter: brightness(50%)
  &:hover .block__add
    display: flex
  &__content
    display: contents
    width: 261px
    padding: 20px 15px
    &_a
      height: 11px
      color: $selectedColorBlack
      font-family: 'Lato', sans-serif
      font-size: 13px
      font-weight: 400
      padding: 20px 13px
      text-transform: uppercase
      &:hover
        color: $selectedColorBlack
        text-decoration: none
    &_p
      height: 15px
      color: $selectedColor
      font-family: 'Lato', sans-serif
      font-size: 12px
      font-weight: 700
      margin: 15px 108px 60px 13px
  &__add
    display: none
    width: 123px
    height: 39px
    border: 1px solid $selectedColorWhite
    color: $selectedColorWhite
    font-family: 'Lato', sans-serif
    font-size: 13px
    font-weight: 700
    position: absolute
    top: 98px
    left: 70px
    justify-content: center
    align-items: center
    &:hover
      display: flex
      box-shadow: 0 0 5px $selectedColorWhite
      text-decoration: none
      color: $selectedColorWhite

.all__products
  display: flex
  justify-content: center
  margin-bottom: 113px
  &_button
    color: white
    background-color: $selectedColor
    width: 212px
    height: 48px
    font-size: 16px
    font-weight: 700
    text-align: center
    line-height: 45px

.banner
  height: 529px
  display: flex
  justify-content: center
  position: relative
  margin-bottom: 97px
  &__offer
    display: flex
    position: relative
    background-color: #222224
    width: 1140px
  &__text
    position: absolute
    top: 145px
    left: 40px
    &_h1
      color: $selectedColorWhite
      font-family: 'Lato', sans-serif
      font-size: 54px
      font-weight: 700
      text-transform: uppercase
      letter-spacing: 1.5px
    &_span
      font-family: 'Lato', sans-serif
      font-size: 54px
      font-weight: 700
      text-transform: uppercase
      letter-spacing: 1.5px
      color: $selectedColor
    &_h3
      color: $selectedColorWhite
      font-family: 'Lato', sans-serif
      font-weight: 700
      text-transform: uppercase
      font-size: 32px
      letter-spacing: 0.9px
  &__content
    width: 1534px
    height: 529px
    background: url(~@/assets/3-layers.jpg)
  &__box
    flex-wrap: wrap
    &_table
      color: white
      margin-right: 50px
      margin-top: -15px
      margin-left: 50px
      letter-spacing: 0.5px
      border-spacing: 10px

.subscribe
  background: url(~@/assets/Layer_41.jpg) no-repeat center
  height: 438px
  width: 1609px
  &__content
    position: relative
    &_img
      display: flex
      width: 83px
      height: 83px
      position: absolute
      top: 110px
      left: 240px
      border-radius: 50%
    &_text
      width: 386px
      height: 68px
      color: $selectedColorBlack
      font-family: 'Lato',sans-serif
      font-size: 16px
      font-style: italic
      line-height: 26px
      letter-spacing: 0.4px
      position: absolute
      top: 120px
      left: 350px
  &__bin
    position: absolute
    top: 210px
    left: 350px
    &_h5
      color: $selectedColor
      font-family: 'Lato', sans-serif
      font-weight: 700
      letter-spacing: 0.4px
      line-height: 26px
    &_h6
      color: $selectedColorBlack
      font-family: 'Lato', sans-serif
      font-size: 12px
      font-weight: 300
      letter-spacing: 0.3px
      line-height: 14px
  &__text
    position: absolute
    top: 140px
    left: 955px
    min-width: 277px
    &_h4
      font-size: 24px
      letter-spacing: 0.6px
      text-transform: uppercase
      text-align: center
      font-family: 'Lato', sans-serif
      margin-bottom: -10px
    &_p
      color: $selectedColorBlack
      font-family: 'Lato', sans-serif
      font-size: 14px
      font-weight: 400
      text-align: center
      min-width: 277px
  &__input
    position: absolute !important
    top: 225px !important
    left: 900px !important
    width: 334px !important
    flex-wrap: nowrap !important
    display: flex !important
    &_placeholder
      border-bottom-left-radius: 23px !important
      border-top-left-radius: 23px !important
      height: 46px !important
      background-color: #e1e1e1 !important
      width: 334px !important
    &_button
      border: 0 !important
      color: $selectedColorWhite !important
      font-family: 'Lato', sans-serif !important
      font-size: 14px !important
      font-weight: 400 !important
      letter-spacing: 0.35px !important
      line-height: 18px !important
      width: 104px !important
      height: 46px !important
      border-radius: 0 23px 23px 0 !important
      background-color: $selectedColor !important
      padding-left: 20px
      display: flex

.footer
  margin-top: 123px
  position: relative
  &__content
    display: flex
    justify-content: space-around
  &__logo
    display: flex
    align-content: center
    font-family: 'Lato', sans-serif
    font-weight: 300
    letter-spacing: 0.68px
    color: $selectedColorBlack
    font-size: 27px
    &_img
      margin-right: 13px
      line-height: 32px
    &_red
      color: $selectedColor
      font-family: 'Lato', sans-serif
      font-weight: 400
      letter-spacing: 0.68px
      font-size: 27px
    &_p
      margin-top: 40px
      margin-right: 64px
      width: 427px
      color: #898989
      font-family: 'Lato', sans-serif
      font-size: 14px
      font-weight: 300
      line-height: 24px
      letter-spacing: 0.35px
      text-transform: capitalize
  &__nav
    display: block
    flex-wrap: wrap
    &_main
      display: flex
      justify-content: space-between
    &_menu
      margin-right: 80px
      color: $selectedColor
      font-family: 'Lato', sans-serif
      font-size: 18px
      font-weight: 700
      line-height: 26px
      text-transform: uppercase
      letter-spacing: 0.45px
      list-style-type: none
    &_link
      text-decoration: none
      color: #898989
      font-family: 'Lato', sans-serif
      font-size: 16px
      font-weight: 400
      letter-spacing: 0.4px
      line-height: 59px
  &__text
    background-color: #e6e6e6
    display: flex
    justify-content: space-between
    &_P
      text-transform: capitalize
      padding-top: 33px
  &__icons
    padding-top: 24px
    display: flex

.icons
  width: 32px
  height: 32px
  background-color: $selectedColorWhite
  color: #b2b2b2
  font-size: 16px
  font-weight: 400
  line-height: 37px
  letter-spacing: 0.4px
  text-align: center
  margin-right: 8px
  &:hover
    background-color: $selectedColor
    color: $selectedColorWhite

.arrival
  display: flex
  margin-top: 22px
  margin-bottom: 50px
  height: 160px
  background-color: #efd5f1
  &__content
    display: flex
    position: relative
    &_h1
      color: $selectedColor
      font-family: 'Lato', sans-serif
      font-size: 24px
      font-weight: 700
      margin-top: 60px
      text-transform: uppercase
      display: flex
  &__breadcrumbs
    display: flex
    position: absolute
    top: 70px
    left: 770px
    &_link
      font-size: 14px
      line-height: 20px
      text-transform: uppercase
      color: $selectedColorGreyText
      font-family: 'Lato', sans-serif
      font-weight: 300
      &:hover
        text-decoration: none
        color: $selectedColorGreyText
        font-weight: 900
    &_red
      color: $selectedColor
      font-family: 'Lato', sans-serif
      font-size: 14px
      line-height: 20px
      text-transform: uppercase
      font-weight: 300
      &:hover
        text-decoration: none
        color: $selectedColor

.block_add_rectangle
  display: none
  position: absolute
  top: 145px
  left: 70px
  width: 57px
  height: 38px
  border-radius: 3px
  border: 1px solid $selectedColorWhite

.block_add_rectangle:hover
  display: flex
  box-shadow: 0 0 5px $selectedColorWhite
  text-decoration: none
  color: #fff

.block:hover .block_add_rectangle
  display: flex
.block_add_heart
  display: none
  position: absolute
  top: 145px
  left: 136px
  width: 57px
  height: 38px
  border-radius: 3px
  border: 1px solid $selectedColorWhite

.block_add_heart:hover
  display: flex
  box-shadow: 0 0 5px $selectedColorWhite

.block:hover .block_add_heart
  display: flex
.img_rectangle
  width: 22px
  height: 12px
  margin-top: 13px
  margin-left: 17px

.img_heart
  width: 16px
  height: 15px
  margin-top: 12px
  margin-left: 20px

.icons_star
  display: flex
  line-height: 10px
  color: #6f6e6e

.fa-star
  color: #6f6e6e
.fa-star:hover
  color: #e4af48
.products
  display: flex
  &__slidebar
    margin-right: 200px
    &_list
      padding-top: 20px
      text-transform: uppercase
  &__summary
    display: block
    color: $selectedColor
    font-family: 'Lato', sans-serif
    font-size: 14px
    font-weight: 700
    line-height: 20px
    border-left: 5px solid $selectedColor
    border-bottom: 1px solid #ebebeb
    padding: 10px 10px 10px 10px
    &::-webkit-details-marker
      display: none
      color: #838383
      padding-left: 10px
    &::after
      content: '\25B6'
      padding-left: 10px
      color: #838383
    details[open] > summary::after
      content: '\25BC'
      color: #838383
      padding-left: 10px
    &_link
      display: flex
      color: #6f6e6e
      font-family: 'Lato', sans-serif
      font-size: 14px
      font-weight: 400
      line-height: 33px
      &:hover
        text-decoration: none
        color: #6f6e6e
        font-weight: 800
  &__filter
    display: flex
    flex-wrap: wrap
    padding-left: 100px
    justify-content: space-around
    &_row
      display: flex
      padding-bottom: 30px
    &_menu
      display: flex
      width: 846px
      height: 50px
      background-color: #f3f3f3
      line-height: 30px
      margin-bottom: 80px
    &_title
      width: 54px
      height: 28px
      border: 1px solid #ebebeb
      background-color: $selectedColorWhite
  &__trending
    min-width: 177px
    &_h5
      color: #6f6e6e
      font-family: 'Lato', sans-serif
      font-size: 14px
      font-weight: 700
      line-height: 20px
      text-transform: uppercase
    &_link
      text-decoration: none
      color: #6f6e6e
      font-family: 'Lato', sans-serif
      font-size: 14px
      font-weight: 400
      line-height: 26px
  &__size
    display: inline-block
    &_h5
      color: #6f6e6e
      font-family: 'Lato', sans-serif
      font-size: 14px
      font-weight: 700
      line-height: 20px
      text-transform: uppercase
  &__radio
    display: flex
    &_input
      position: absolute
      z-index: -1
      opacity: 0
      margin: 10px 0 0 7px
      &:checked + .radio__text:after
        opacity: 1
      &:focus + .radio__text:before
        box-shadow: 0 0 0 3px rgba(255, 255, 0, .7)
    &_text
      font-family: 'Lato', sans-serif
      color: #4d4d4d
      font-size: 15px
      &:before
        content: ''
        position: absolute
        top: -3px
        left: 0
        width: 22px
        height: 22px
        border: 1px solid #CDD1DA
        border-radius: 0
        background: #FFF
      &:after
        content: ''
        position: absolute
        top: 1px
        left: 4px
        width: 16px
        height: 16px
        border-radius: 50%
        background: #9FD468
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, .5)
        opacity: 0
        transition: .2s
    &_label
      padding-right: 35px
      display: flex
      flex-wrap: wrap
  &__price
    min-width: 263px
    &_input
      width: 262px
      height: 6px
      border-radius: 3px
      background-color: #f0f0f0
    &_out
      width: 24px
      height: 12px
      color: #6f6e6e
      font-size: 14px
      font-weight: 400
      line-height: 26px
  &__h5
    text-transform: none
  &__drop
    &_menu
      font-family: "Lato", sans-serif
      font-size: 20px
      display: none
      &:hover.products__drop_menu
        display: flex
    &_link
      text-decoration: none
      color: $selectedColorGreyText
      display: flex
  &__items
    display: flex
    padding-top: 60px
    padding-bottom: 20px
    flex-wrap: wrap
    justify-content: space-between
  &__pagination
    display: flex
    justify-content: space-between
    &_label
      height: 44px
      display: flex
      width: 261px
      background-color: $selectedColorWhite
    &_ul
      display: flex
      list-style-type: none
    &_link
      color: #c4c4c4 !important
      font-family: 'Lato', sans-serif !important
      font-size: 16px !important
      font-weight: bold !important
      line-height: 26px !important
      padding-right: 5px
      &:hover
        color: $selectedColor !important
    &_button
      color: $selectedColor
      border-radius: 3px
      border: 1px solid $selectedColor
      font-family: 'Lato', sans-serif
      font-weight: bold
      text-align: center
      line-height: 15px
      padding: 15px 45px
      margin-left: 435px
      &:hover
        text-decoration: none
        color: $selectedColor
        transform: scale(1.05)

.provision
  display: flex
  background-color: $selectedColorBlack
  text-align: center
  margin-top: 113px
  padding-top: 35px
  padding-bottom: 35px
  &__h2
    color: #fbfbfb
    font-family: 'Lato', sans-serif
    font-size: 20px
    font-weight: 700
    letter-spacing: 0.5px
  &__p
    color: #fbfbfb
    font-family: 'Lato', sans-serif
    font-size: 14px
    font-weight: 300
    line-height: 23.95px
    letter-spacing: 0.35px
    text-transform: none

.checkout
  margin-top: 90px
  &__details
    margin-bottom: 25px
  &__summary
    justify-content: flex-start
    color: $selectedColorBlack
    font-family: 'Lato', sans-serif
    font-size: 16px
    font-weight: 700
    text-transform: uppercase
  &__cart
    display: flex
  &__left
    &_h2
      color: $selectedColorBlack
      font-family: 'Lato', sans-serif
      font-size: 13px
      font-weight: 400
      text-transform: uppercase
    &_p
      color: grey
      font-size: 15px
      margin-bottom: 25px
    &_radio
      margin-left: 30px
    &_label
      text-transform: uppercase
      font-family: "Lato", sans-serif
      font-size: 12px
    &_button
      color: grey
      font-size: 15px
      margin-top: 25px
      padding-bottom: 10px
    &_a
      margin-left: 90px
      margin-bottom: 25px
      width: 180px
      height: 50px
      color: $selectedColorBlack
      text-transform: uppercase
      font-size: 15px
      font-weight: 600
      font-family: "Lato", sans-serif

.sort_filter
  margin-left: 150px
  display: flex
  flex-wrap: wrap

.sort_bar
  display: flex
  width: 100%
  height: 50px
  background-color: #f3f3f3

.filter_menu
  display: flex
  justify-content: space-around

.shop_for
  text-transform: none

.h1_drop
  color: $selectedColorWhite
  font-family: 'Lato', sans-serif
  font-size: 22px
  font-weight: 900
  line-height: 28px
  text-transform: uppercase
  letter-spacing: 0.55px
  padding-top: 60px
  margin-left: 175px

.browse_btn
  position: relative

.sort_big
  justify-content: space-around
  display: flex

.filter_trend
  color: #6f6e6e
  font-family: 'Lato', sans-serif
  font-size: 14px
  font-weight: 700
  line-height: 20px
  text-transform: uppercase

.filter_menu
  display: flex

.show_product
  display: flex
  flex-wrap: wrap
  width: 846px
  height: 50px
  background-color: #f3f3f3
  margin-top: 43px
  margin-left: 530px

.card-title
  width: 120px
  height: 30px
  border: 1px solid #ebebeb
  background-color: $selectedColorWhite
  color: #6f6e6e
  font-family: 'Lato', sans-serif
  font-size: 20px
  font-weight: 400
  line-height: 30px
  text-align: center
  text-transform: capitalize

.sort_col
  display: flex

.dropdown_sort
  border: 1px solid #ebebeb
  background-color: $selectedColorWhite
  height: 30px

.dropdown-toggle
  font-family: 'Lato', sans-serif
  font-size: 14px
  font-weight: 400
  line-height: 26px
  background-color: #fff !important

.btn_sort
  background-color: #fff !important

.banner_product
  height: 341px
  background-color: #222224
  margin-top: 125px

.for_women
  font-size: 32px
  letter-spacing: 0.9px
  color: $selectedColorWhite

.percent_offer
  color: $selectedColorWhite
  font-family: 'Lato', sans-serif
  font-size: 54px
  font-weight: 700
  text-transform: uppercase

.offer_text
  display: block
  top: 145px
  left: 40px
  position: relative

.box
  display: flex
  justify-content: space-between
  width: 294px
  height: 102px
  padding: 40px

.text1
  color: #fbfbfb
  font-family: 'Lato', sans-serif
  font-size: 15px
  font-weight: 700
  letter-spacing: 0.5px
  padding-bottom: 18px

.text2
  color: #fbfbfb
  font-family: 'Lato', sans-serif
  font-size: 10px
  font-weight: 300
  line-height: 24px
  letter-spacing: 0.35px
  margin-bottom: 42px

.Feature_box
  position: relative

.box_img
  display: flex
  width: 100%
  height: 529px

.btn2
  width: 46px
  color: #f9f9f9
  font-family: 'Lato', sans-serif
  font-size: 14px
  font-weight: 300
  line-height: 32px
  letter-spacing: 0.35px

.dropdown
  width: 87px
  height: 38px
  border-radius: 3px 0 0 3px
  border: 1px solid #e6e6e6
  background-color: $selectedColorBlack
  background-image: linear-gradient(to bottom, #f9f9f9 0%, #f5f5f5 100%)

.elipse
  position: absolute
  border-radius: 20px
  border: 15px solid $selectedColor
  display: flex
  bottom: 18px
  left: 22px

.dropdown-item
  display: flex

.btn-secondary
  font-family: 'Lato', sans-serif
  size: 14px
  font-weight: 300
  line-height: 32px
  letter-spacing: 0.35px

.dropdown-toggle
  color: #838383

.center_product
  width: 100%
  height: auto

.menu_product
  height: 10px
  color: $selectedColorBlack
  font-family: 'Lato', sans-serif
  font-size: 14px
  font-weight: 700
  line-height: 26px
  text-transform: uppercase
  list-style-type: none
  display: flex
  justify-content: center
  text-decoration: none

.menu_product_list
  text-decoration: none

.btn-group:hover .drop_browse_ul
  display: flex

.btn-group
  display: flex

.single_product
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  margin-bottom: 40px

.woman
  width: 261px
  height: 280px
  background: #e9e9e9

.single_h1
  color: #4d4d4d
  font-family: 'Lato', sans-serif
  font-size: 24px
  font-weight: 700
  line-height: 20px
  text-transform: uppercase
  text-align: center
  margin-bottom: 40px
  margin-top: 40px

.devider
  display: flex
  flex-wrap: wrap
  border: 1px solid #eaeaea
  background-color: $selectedColorWhite
  margin-bottom: 8px
  margin-left: 230px
  z-index: 1
  margin-top: -90px
  padding-left: 500px
  width: 1600px

.devider_h3
  color: $selectedColor
  font-family: 'Lato', sans-serif
  font-size: 14px
  font-weight: 700
  line-height: 24px
  text-transform: uppercase
  text-align: center
  margin-top: 73px

.devider_h1
  color: #4d4d4d
  font-family: 'Lato', sans-serif
  font-size: 18px
  font-weight: 900
  line-height: 24px
  text-align: center
  margin-top: 54px
  text-transform: uppercase

.devider_stars
  justify-content: center
  margin-top: 24px

.devider_p
  color: #5e5e5e
  font-family: 'Lato', sans-serif
  font-size: 14px
  font-weight: 300
  line-height: 24px
  text-align: center
  text-transform: none
  margin-top: 26px

.devider_description
  color: #b9b9b9
  font-family: 'Lato', sans-serif
  font-size: 14px
  font-weight: 700
  line-height: 24px
  text-transform: uppercase
  margin-top: 28px

.desc_black
  font-family: 'Lato', sans-serif
  font-size: 14px
  font-weight: 700
  line-height: 24px
  text-transform: uppercase
  color: #2f2f2f
  margin-right: 44px

.h3_description
  display: flex
  flex-wrap: wrap
  justify-content: space-around

.devider_price
  color: $selectedColor
  font-family: 'Lato', sans-serif
  font-size: 24px
  font-weight: 700
  line-height: 24px
  text-align: center
  margin-top: 48px

.devider_hr
  border-top: 1px solid #eaeaea
  margin-top: 43px
  margin-bottom: 63px
  width: 642px

.devider_add
  text-decoration: none
  color: $selectedColor
  font-family: 'Lato', sans-serif
  font-size: 16px
  font-weight: 700

.devider_img_cart
  width: 26px
  height: 24px
  margin-right: 15px

.devider_add_to_cart
  width: 537px
  height: 55px
  outline: 1px solid $selectedColor
  line-height: 50px
  text-align: center
  margin-bottom: 122px

.single_slide
  height: 777px
  border: 1px solid #eaeaea
  background-color: #f7f7f7
  margin-top: 0
  background: url(~@/assets/Layer_42w.jpg)  no-repeat center

.product_details
  margin-bottom: 70px

.product_details1
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  color: $selectedColorBlack
  font-family: 'Lato', sans-serif
  font-size: 13px
  font-weight: 700
  line-height: 20px
  text-transform: uppercase
  border-bottom: 2px solid #eaeaea
  padding-bottom: 20px

.details1_h3
  padding-right: 315px

.details_h3
  padding-left: 45px

.product_details2
  display: flex
  flex-wrap: wrap
  margin-top: 22px
  border-bottom: 2px solid #eaeaea
  padding-bottom: 25px

.detais_h2
  color: $selectedColorBlack
  font-family: 'Lato', sans-serif
  font-size: 13px
  font-weight: 400
  text-transform: uppercase

.details_p
  color: #6f6e6e
  font-family: 'Lato', sans-serif
  font-size: 13px
  font-weight: 300
  line-height: 20px

.details_p_grey
  color: #575757
  font-family: 'Lato', sans-serif
  font-weight: 400

.content_details
  margin-left: 21px
  margin-top: 13px

.details_item
  display: flex
  flex-wrap: wrap
  color: #656565
  font-family: 'Lato', sans-serif
  font-size: 13px
  font-weight: 400
  line-height: 20px

.details_item_numbers
  width: 54px
  height: 30px
  border: 1px solid $selectedColorHiWhite
  background-color: $selectedColorWhite
  text-align: center
  line-height: 34px
  margin-left: 100px

.details_item_text
  color: #656565
  font-family: 'Lato', sans-serif
  font-size: 13px
  font-weight: 400
  line-height: 20px
  margin-left: 100px
  justify-content: center

.buttons
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  margin-top: 70px
  margin-bottom: 63px

.button__a
  font-family: 'Lato', sans-serif
  font-size: 14px
  font-weight: 700
  color: $selectedColorBlack !important
  text-transform: uppercase
  outline: 1px solid $selectedColorHiWhite
  line-height: 50px
  text-decoration: none
  padding: 20px 40px
  background-color: white !important
  transition: all .5s

.button__a:hover
  background-color: $selectedColor !important
  color: $selectedColorWhite !important

.cart__items
  display: flex
  flex-wrap: wrap
  justify-content: space-around
  margin-top: 63px
  margin-bottom: 23px

.item__total
  display: grid

.item__adres_h1
  color: $selectedColorBlack
  font-family: 'Lato', sans-serif
  font-size: 16px
  font-weight: 700
  text-transform: uppercase

.item__adres_country
  margin-bottom: 20px
  width: 355px
  height: 45px

.item__adres_state
  padding-top: 15px
  padding-left: 16px
  padding-bottom: 15px
  width: 340px
  height: 45px
  color: #b1b1b1
  font-family: 'Lato', sans-serif
  font-size: 13px
  font-weight: 300
  margin-bottom: 20px

.item__coupon_p
  font-family: 'Lato', sans-serif
  font-size: 14px
  font-weight: 300
  justify-items: flex-start
  line-height: 14px
  text-transform: none

.button__coupon
  width: 118px
  height: 35px
  border: 1px solid #eaeaea
  background-color: $selectedColorWhite
  color: #4a4a4a
  font-family: 'Lato', sans-serif
  font-size: 11px
  font-weight: 700
  text-transform: uppercase
  padding: 12px 18px
  text-align: center
  line-height: 35px
  transition: all .5s

.button__coupon:hover
  background-color: $selectedColor
  color: $selectedColorWhite

.item__total_red
  background-color: #f5f3f3
  width: 360px
  height: 295px

.sub_price
  color: #4a4a4a
  font-family: 'Lato', sans-serif
  font-size: 11px
  font-weight: 400
  text-transform: uppercase
  text-align: right
  padding-right: 40px
  padding-top: 40px

.total_price
  color: $selectedColorBlack
  font-family: 'Lato', sans-serif
  font-size: 16px
  font-weight: 700
  text-transform: uppercase
  text-align: right
  padding-right: 40px
  padding-bottom: 40px

.red_price
  color: $selectedColor
  font-family: 'Lato', sans-serif
  font-size: 16px
  font-weight: 700
  text-transform: uppercase

.button_chekout
  width: 273px
  height: 50px
  background-color: $selectedColorGreyText
  color: $selectedColorWhite
  font-family: 'Lato', sans-serif
  font-size: 16px
  font-weight: 700
  text-transform: uppercase
  text-align: center
  padding-top: 30px
  margin-left: 44px
  transition-property: color
.button_chekout:ohver
  background-color: $selectedColor
</style>
