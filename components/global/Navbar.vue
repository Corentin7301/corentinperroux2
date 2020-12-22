
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
  a {
    text-decoration: inherit;
    color: inherit;
  }
  width: 1200px;
  margin: auto;
  display: flex;
  align-items: center;
  font-family: "HelveticaNeue";
  font-weight: bold;
  .button {
    color: #292724;
    font-size: 22px;
    text-transform: uppercase;
    padding: 0 21px;
    border-right: solid 1px grey;
  }
  .button:last-child {
    border-right: none;
  }
  .button:hover,
  .nuxt-link-exact-active {
    color: $yellow;
  }

  img {
    height: 128px;
  }
}
</style>