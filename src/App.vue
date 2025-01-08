<template>
  <div id="app">
    <header>
      <h1>
        <img :src="leftSmallImage" alt="Left Image" class="header-image left">
        Ресторан сербской кухни "Укусно и Тачка"
        <img :src="rightSmallImage" alt="Right Image" class="header-image right">
      </h1>
      <div v-if="user">
        <button @click="logout">Выйти</button>
      </div>
    </header>
    <main>
      <router-view></router-view>
    </main>
    <div class="left-side" :style="{ backgroundImage: 'url(' + leftImageUrl + ')' }"></div>
    <div class="right-side" :style="{ backgroundImage: 'url(' + rightImageUrl + ')' }"></div>
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-section">
          <h3>Контакты</h3>
          <p>Телефон: +7 (499) 123-45-67</p>
          <p>Email: support@delicious.ru</p>
        </div>
        <div class="footer-section">
          <h3>Адрес</h3>
          <p>г. Москва, ул. Пушкина, д. 10</p>
        </div>
        <div class="footer-section">
          <h3>Социальные сети</h3>
          <ul>
            <li><a href="">Instagram</a></li>
            <li><a href="">Facebook</a></li>
            <li><a href="">VK</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Serbian Delivery. Все права защищены.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import { auth } from './firebase'; 
import { mapState } from 'vuex'; 

export default {
  computed: {
    ...mapState(['user']),
  },
  data() {
    return {
      leftImageUrl: require('@/assets/Ornament.jpg'),
      rightImageUrl: require('@/assets/Ornament.jpg'),
      leftSmallImage: require('@/assets/header-img-1.jpg'), 
      rightSmallImage: require('@/assets/header-img-2.jpg') 
    };
  },
  created() {
    auth.onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('login', user);
      } else {
        this.$store.dispatch('logout');
      }
    });
  },
  methods: {
    logout() {
      auth.signOut()
        .then(() => {
          this.$store.dispatch('logout');
          this.$router.push('/');
        })
        .catch((error) => {
          console.error('Logout error:', error.message);
        });
    },
  },
};
</script>

<style>
header {
  background-color: #ffffff;
  padding: 10px;
  text-align: center;
}

header h1 {
  font-size: 32px;
  margin: 20px;
  display: inline-flex;
  align-items: center; 
}

.header-image {
  width: 90px; 
  height: 80px;
  margin: 0 200px; 
}

button {
  padding: 10px 20px;
  margin: 10px;
  background-color: #c95440;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #b45949;
}

main {
  padding: 20px;
  text-align: center;
}

body {
  margin: 0;
  height: 100%;
}

.left-side,
.right-side {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 200px;
  background-size: contain;
  background-repeat: repeat-y;
  z-index: -1;
}

.left-side {
  left: 0;
  background-position: center;
}

.right-side {
  right: 0;
  background-position: center;
}

.footer {
  background-color: #5b5959;
  color: rgb(255, 255, 255);
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  position: relative;
}

.footer-container {
  display: flex;
  justify-content: center;
  gap: 50px;
  margin-bottom: 20px;
}

.footer-section {
  flex: 1;
  padding: 10px;
}

.footer-section h3 {
  font-size: 18px;
  margin-bottom: 10px;
}

.footer-section p {
  margin: 5px 0;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin: 5px 0;
}

.footer-section ul li a {
  color:rgb(255, 255, 255);;
  text-decoration: none;
}

.footer-bottom {
  background-color: #b45949;
  padding: 10px;
}

.footer-bottom p {
  margin: 0;
}
</style>