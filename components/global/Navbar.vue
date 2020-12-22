
<template>
  <nav>
    <nuxt-link
      v-for="item in menu" 
      :key="item.name"
      :to="item.page"
      class="menu"
    >{{item.name}}</nuxt-link>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
    data() {
      return {
        menu: [
          {name: 'accueil', page: '/'},
          {name: 'photographie animaliere', page: '/animaliere'},
          {name: 'photographie de portrait', page: '/portrait'},
          {name: 'photographie artistique', page: '/artistique'}
        ]
      }
    }
}
</script>

<style lang="scss" scoped>
nav {
  margin: auto;
  display: flex;
  align-items: center;
  text-align: center;
  font-weight: 500;
  font-size: 15px;
  a {
    text-decoration: inherit;
    color: inherit;
  }
  .menu {
    font-size: 15px;
    margin: 40px;
  }
  .menu:hover,
  // .nuxt-link-exact-active {
  .nuxt-link-exact-active {
    color: $orange;
  }
}
</style>