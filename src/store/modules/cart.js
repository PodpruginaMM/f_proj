import shop from '../../api/shop';

// initial state
// shape: [{ id, quantity }]
const state = {
  items: [],
  checkoutStatus: null,
};

// getters
const getters = {
  // eslint-disable-next-line no-shadow
  cartProducts: (state, getters, rootState) => state.items.map(({ id, quantity }) => {
    // eslint-disable-next-line no-shadow
    const product = rootState.products.all.find((product) => product.id === id);
    return {
      title: product.title,
      price: product.price,
      quantity,
    };
  }),
  // eslint-disable-next-line no-shadow
  cartTotalPrice: (state, getters) =>
    // eslint-disable-next-line no-shadow,implicit-arrow-linebreak
    getters.cartProducts.reduce((total, product) => total + product.price * product.quantity, 0),
};

// actions
const actions = {
  // eslint-disable-next-line no-shadow
  checkout({ commit, state }, products) {
    const savedCartItems = [...state.items];
    commit('setCheckoutStatus', null);
    // empty cart
    commit('setCartItems', { items: [] });
    shop.buyProducts(
      products,
      () => commit('setCheckoutStatus', 'successful'),
      () => {
        commit('setCheckoutStatus', 'failed');
        // rollback to the cart saved before sending the request
        commit('setCartItems', { items: savedCartItems });
      },
    );
  },
  // eslint-disable-next-line no-shadow
  addProductToCart({ state, commit }, product) {
    commit('setCheckoutStatus', null);
    if (product.inventory > 0) {
      const cartItem = state.items.find((item) => item.id === product.id);
      if (!cartItem) {
        commit('pushProductToCart', { id: product.id });
      } else {
        commit('incrementItemQuantity', cartItem);
      }
      // remove 1 item from stock
      commit('products/decrementProductInventory', { id: product.id }, { root: true });
    }
  },
};

// mutations
const mutations = {
  // eslint-disable-next-line no-shadow
  pushProductToCart(state, { id }) {
    state.items.push({
      id,
      quantity: 1,
    });
  },
  // eslint-disable-next-line no-shadow
  incrementItemQuantity(state, { id }) {
    const cartItem = state.items.find((item) => item.id === id);
    // eslint-disable-next-line no-plusplus
    cartItem.quantity++;
  },
  // eslint-disable-next-line no-shadow
  setCartItems(state, { items }) {
    state.items = items;
  },
  // eslint-disable-next-line no-shadow
  setCheckoutStatus(state, status) {
    state.checkoutStatus = status;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
