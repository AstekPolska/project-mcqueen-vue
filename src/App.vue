<template>
<div id="app">
    <router-view />
</div>
</template>

<style lang="scss">
@import './styles/colors';

body {
    margin: 0;
}

#app {
    width: 100vw;
    height: 100vh;
    background: $colorPrimaryExtraLight;
    font-family: cursive;
    font-weight: bolder;
    overflow: hidden;
    color: white;
}
</style>
