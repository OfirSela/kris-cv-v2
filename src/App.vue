<template>
  <MainPage />
</template>

<script>
  import MainPage from './views/MainPage';

  export default {
    name: 'App',
    components: {
      MainPage,
    },
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 500;
  }

  #app {
    font-family: 'Heebo', sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: gray;
    color: #2c3e50;
    display: flex;
    justify-content: center;
    padding: 16px;
    font-weight: 500;
  }
</style>
