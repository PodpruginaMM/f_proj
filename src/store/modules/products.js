import shop from '../../api/shop';

// initial state
const state = {
  all: [],
};

// getters
const getters = {};

// actions
const actions = {
  getAllProducts({ commit }) {
    shop.getProducts((products) => {
      commit('setProducts', products);
    });
  },
};

// mutations
const mutations = {
  // eslint-disable-next-line no-shadow
  setProducts(state, products) {
    state.all = products;
  },
  // eslint-disable-next-line no-shadow
  decrementProductInventory(state, { id }) {
    // eslint-disable-next-line no-shadow
    const product = state.all.find((product) => product.id === id);
    // eslint-disable-next-line no-plusplus
    product.inventory--;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
