<template>
  <div class="hello">
    <div class="row">
      <div class="col-sm-4">
          <section class="filtersSection">
            <div class="filterDiv">
                <span class="filterLabel">Keywords</span>
            </div>
            <div class="vehicleReport">
                <span class="title">Get Vehicle Report</span><br/>
                <span class="text">Powered by Carjam</span>
            </div>
          </section>
      </div>
      <div class="col-sm-8">
          <swipe class="my-swipe">
            <swipe-item class="slide1">slide1</swipe-item>
            <swipe-item class="slide2">slide1</swipe-item>
            <swipe-item class="slide3">slide1</swipe-item>
          </swipe>
        <h2>Essential Links</h2>
        <ul>
          <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
          <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
          <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
          <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
          <br>
          <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>
        <h2>Ecosystem</h2>
        <ul>
          <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
          <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
          <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
          <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
