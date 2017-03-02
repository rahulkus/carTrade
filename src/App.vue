<template>
  <div>
    <nav-component></nav-component>
    <div id="app">
        <router-view></router-view>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
