<template>
  <div class="cart-container">
    <h1>Корзина</h1>
    <div v-for="(item, index) in cart" :key="index" class="cart-item">
      <img :src="item.image" :alt="item.name" class="cart-item-image" />
      <p>{{ item.name }} - {{ item.price }} руб. x {{ item.quantity }} = {{ item.totalPrice }} руб.</p>
      <button @click="removeFromCart(index)">Удалить</button>
    </div>
    <p>Всего: {{ totalPrice }} руб.</p>
    <button @click="goToMenu">Меню</button>
    <button @click="showAddressField = true" v-if="!showAddressField">Оформить заказ</button>
    <div v-if="showAddressField">
      <label for="delivery-address">Введите адрес доставки:</label>
      <input 
        type="text" 
        id="delivery-address" 
        v-model="deliveryAddress" 
        placeholder="Адрес доставки" 
      />
      <button @click="handleCheckout" :disabled="!deliveryAddress">Подтвердить заказ</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showAddressField: false,  
      deliveryAddress: '',      
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    totalPrice() {
      return this.cart.reduce((total, item) => total + item.totalPrice, 0);
    }
  },
  methods: {
    removeFromCart(index) {
      this.$store.dispatch('removeFromCart', index);
    },
    handleCheckout() {
      if (this.deliveryAddress) {
        this.$store.dispatch('clearCart');
        this.$router.push('/order-confirmation');
      } else {
        alert('Пожалуйста, введите адрес доставки');
      }
    },
    goToMenu() {
      this.$router.push('/menu');
    }
  }
};
</script>

<style scoped>
.cart-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}
.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  margin-right: 10px;
}

input {
  margin-top: 10px;
  padding: 5px;
  width: 100%;
}

button {
  margin-top: 10px;
  padding: 10px 15px;
  cursor: pointer;
}
</style>