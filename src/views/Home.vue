<template>
    <div>
      <h1>Добро пожаловать в "Укусно и Тачка"</h1>
      <AuthForm />
    </div>
  </template>
  
  <script>
  import AuthForm from '../components/AuthForm.vue';
  
  export default {
    components: {
      AuthForm,
    },
  };
  </script>
  