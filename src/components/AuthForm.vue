<template>
    <div>
      <h2>{{ isLogin ? '' : '' }}</h2>
      <form @submit.prevent="submitForm">
        <input v-model="email" type="email" placeholder="Email" required />
        <input v-model="password" type="Пароль" placeholder="Пароль" required />
        <button type="submit">{{ isLogin ? 'Войти' : 'Регистрация' }}</button>
        <p @click="toggleForm">{{ isLogin ? 'Зарегистрироваться' : 'Уже есть аккаунт?' }}</p>
      </form>
    </div>
    <div class = "background-container">
    <img :src="background_1" alt="background-1" class="background-image-1">
    <img :src="background_2" alt="background-2" class="background-image-2">
    <img :src="background_3" alt="background-3" class="background-image-3">
    </div>
  </template>
  
  <script>
  import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '../firebase';
  
  export default {
    data() {
      return {
        background_1: require('@/assets/Auth/background-image-1.jpg'),
        background_2: require('@/assets/Auth/background-image-2.jpg'),
        background_3: require('@/assets/Auth/background-image-3.jpg'),
        email: '',
        password: '',
        isLogin: true,
      };
    },
    
    methods: {
      toggleForm() {
        this.isLogin = !this.isLogin;
      },
      async submitForm() {
        try {
          if (this.isLogin) {
            await signInWithEmailAndPassword(auth, this.email, this.password);
        } else {
          await createUserWithEmailAndPassword(auth,this.email, this.password);
        }
        this.$router.push('/menu');
      } catch (error) {
        alert(error.message);
      }
    },
  },
};
</script>
<style>
.background-container img {
  width: 300px; 
  height: 200px;
  margin: 10px; 
}
</style>
  