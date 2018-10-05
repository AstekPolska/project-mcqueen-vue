<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Menu</router-link> |
      <router-link to="/alphabet">Alfabet</router-link> |
      <router-link to="/numbers">Cyfry</router-link> |
      <router-link to="/adding">Dodawanie</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

