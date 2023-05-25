<template>
  <div class="home">
    <h1>Home</h1>

  </div>
</template>

<script>



export default {
  name: 'HomePage',
  components: {
    // ProductList,
  },
  created() {
    this.$store.dispatch('setFireBase');
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style scoped>
.home {
  text-align: center;
}

h1 {
  font-size: 2em;
  margin: 20px 0;
}

p {
  font-size: 1.2em;
  margin-bottom: 20px;
}
</style>
