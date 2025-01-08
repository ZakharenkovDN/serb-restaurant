import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      user: null,  
      cart: [],    
    };
  },
  mutations: {
    ADD_TO_CART(state, dish) {
      const existingDish = state.cart.find(item => item.name === dish.name);
      if (existingDish) {
        existingDish.quantity += dish.quantity;
        existingDish.totalPrice = existingDish.price * existingDish.quantity;
      } else {
        state.cart.push(dish);
      }
    },
    REMOVE_FROM_CART(state, index) {
      state.cart.splice(index, 1); 
    },
    CLEAR_CART(state) {
      state.cart = []; 
    },
    SET_USER(state, user) {
      state.user = user;  
    },
    CLEAR_USER(state) {
      state.user = null; 
    }
  },
  actions: {
    addToCart({ commit }, dish) {
      commit('ADD_TO_CART', dish); 
    },
    removeFromCart({ commit }, index) {
      commit('REMOVE_FROM_CART', index); 
    },
    clearCart({ commit }) {
      commit('CLEAR_CART'); 
    },
    login({ commit }, user) {
      commit('SET_USER', user);  
    },
    logout({ commit }) {
      commit('CLEAR_USER');
    }
  }
});

export default store;