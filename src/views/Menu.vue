<template>
  <div class="menu-container">
    <h1>Меню</h1>
    <div v-for="(dish, index) in dishes" :key="index" class="dish-item">
      <img :src="getDishImage(dish.image)" :alt="dish.name" class="dish-image" />
      <div class="dish-info">
        <h2>{{ dish.name }}</h2>
        <p>{{ dish.description }}</p>
        <p class="price">{{ dish.price }} руб.</p>
        <div class="quantity-container">
          <button @click="decreaseQuantity(dish)" class="quantity-btn">-</button>
          <input 
            type="number" 
            v-model="dish.quantity" 
            class="quantity-input" 
            :min="1" 
            readonly
          />
          <button @click="increaseQuantity(dish)" class="quantity-btn">+</button>
        </div>
        <button @click="addToCart(dish)" class="add-to-cart-btn">Добавить в корзину</button>
      </div>
    </div>
    <button @click="goToCart" class="go-to-cart-btn">Перейти в корзину</button>
  </div>
</template>

<script>
import kebabImage from '@/assets/Menu/Kebab.jpg';
import sarmaImage from '@/assets/Menu/Sarma.jpg';
import burgerImage from '@/assets/Menu/Burger.jpg';
import chorbaImage from '@/assets/Menu/Chorba.jpg';
import salatImage from '@/assets/Menu/Salat.jpg'

export default {
  data() {
    return {
      dishImages: {
        kebab: kebabImage,
        sarma: sarmaImage,
        burger: burgerImage,
        chorba: chorbaImage,
        salat: salatImage
      },
      dishes: [
        { name: 'Ćevapi', description: 'Жареные колбаски из говяжего фарша. Подаются с хрустящей лепешкой, рубленым луком и томатным соусом.', price: 400, image: 'kebab', quantity: 1 },
        { name: 'Sarma', description: 'Голубцы с листьями квашеной капусты и свиным фаршем', price: 300, image: 'sarma', quantity: 1 },
        { name: 'Pljeskavica', description: 'Бургер с плескавицей, брынзой, свежими овощами и чесночным соусом. Подается с печеным картофелем.', price: 450, image: 'burger', quantity: 1 },
        { name: 'Ćorba', description: 'Наваристый суп на квасе с добавлением говядины и чечевицы.', price: 350, image: 'chorba', quantity: 1 },
        { name: 'Šopska salata', description: 'Салат из свежих овощей и брынзы.', price: 250, image: 'salat', quantity: 1 },
      ]
    };
  },
  methods: {
    getDishImage(imageName) {
      return this.dishImages[imageName] || '';
    },
    addToCart(dish) {
      const cartDish = { ...dish }; 
      cartDish.totalPrice = cartDish.price * cartDish.quantity; 
      cartDish.image = this.getDishImage(dish.image);
      this.$store.dispatch('addToCart', cartDish); 
    },
    goToCart() {
      this.$router.push('/cart');
    },
    increaseQuantity(dish) {
      dish.quantity++;
    },
    decreaseQuantity(dish) {
      if (dish.quantity > 1) {
        dish.quantity--;
      }
    }
  }
};
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Russo+One&family=Roboto:wght@400;700&display=swap');

body {
  font-family: 'Roboto', sans-serif;
  background-color: #47c1f6;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.menu-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
}

h1 {
  text-align: center;
  font-family: 'Russo One', sans-serif;
  font-size: 36px;
  margin-bottom: 20px;
}

.dish-item {
  display: flex;
  margin-bottom: 30px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
}

.dish-image {
  width: 250px;
  height: 250px;
  object-fit: cover;
  margin-right: 20px;
}

.dish-info {
  flex: 1;
}

.dish-info h2 {
  font-family: 'Russo One', sans-serif;
  font-size: 24px;
  margin: 0;
}

.dish-info p {
  font-size: 16px;
  margin: 10px 0;
}

.price {
  font-weight: bold;
}

.add-to-cart-btn {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 10px;
}

.add-to-cart-btn:hover {
  background-color: #0056b3;
}

.go-to-cart-btn {
  background-color: #c95440;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.go-to-cart-btn:hover {
  background-color: #b45949;
}

.quantity-container {
  display: flex;
  align-items: center;
  margin-top: 10px;
  justify-content: center;
}

.quantity-btn {
  background-color: #c95440;
  border: 1px solid #ddd;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 18px;
}

.quantity-btn:hover {
  background-color: #b45949;
}

.quantity-input {
  width: 40px;
  text-align: center;
  margin: 0 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  padding: 5px;
  background-color: #fff;
  border-radius: 5px;
}
</style>