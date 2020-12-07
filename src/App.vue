<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.container {
  box-sizing: border-box;
  padding-left: 10px;
  padding-right: 10px;
  width: 100%;
}
// Small
@media (min-width: 576px) {
  .container {
    margin-left: auto;
    margin-right: auto;
    max-width: 540px;
  }
}
// Medium
@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}
// Large
@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}
// X-Large
@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
