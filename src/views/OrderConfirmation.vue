<template>
    <div class="order-container">
      <h1>Подтверждение заказа</h1>
      <p>Ваш заказ успешно оформлен. Ожидайте доставку в течение часа.</p>
      <button @click="goToMenu">Вернуться в меню</button>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      goToMenu() {
        this.$store.dispatch('clearCart');
        this.$router.push('/menu');
      },
    },
  };
  </script>

  <style scoped>
  .order-container {
  max-width: 700px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  }
</style>
  