<template>
  <div id="app">
    <Navbar class="navbar"></Navbar>
    <main>
      <router-view></router-view>
    </main>

    <footer>
      <p>&copy; 2023 My E-commerce Website. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
    }
  },
  computed: {
  },
  created() {
    this.$store.dispatch('setFireBase');
  },

}
</script>

<style lang="scss">
#app {
  background-color: $primary-color;
  height: 100%;
  display: flex;
  flex-direction: column;
}


main {
  flex: 1;
}

footer {
  flex-shrink: 0;
}

.navbar {
  // background-color: red;

  ul {
    // padding: 50px;
  }
}
</style>
