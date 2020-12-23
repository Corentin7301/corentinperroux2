<template>
  <div id="footer">
    <a href="#top">Corentin perroux</a>
    <div class="footer-component">
      <div class="footer-col">
        <nuxt-link v-for="item in menu" :key="item.name" :to="item.page" class="menu_footer">{{item.name}}</nuxt-link>
      </div>
      <div class="footer-col">
        <social-share />
      </div>
    </div>
        <Copyright />

  </div>
</template>

<script>
  export default {
    name: "footer",
    data() {
      return {
        menu: [{
            name: 'accueil',
            page: '/'
          },
          {
            name: 'photographie animaliere',
            page: '/animaliere'
          },
          {
            name: 'photographie de portrait',
            page: '/portrait'
          },
          {
            name: 'photographie artistique',
            page: '/artistique'
          }
        ]
      };
    },
  };

</script>

<style lang="scss" scoped>
  #footer {
    height: 320px;
    background: #242424;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.20em;
    margin-top: 100px;
    padding-top: 20px;

    a {
      letter-spacing: 0.35em;
      margin: 0 0 40px 0;
    }

    .footer-component {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .footer-col {
      flex: 0 1 50%;
      display: flex;
      flex-direction: column;
      text-align: center;

      a {
        color: white;
        font-size: 20px;
        font-weight: 400;
        margin-bottom: 20px;
        letter-spacing: 0.20em;


        &:last-child {
          margin-bottom: 0;
        }
      }

      .menu:hover,
      .nuxt-link-exact-active {
        color: $orange;
      }
    }
  }

</style>
