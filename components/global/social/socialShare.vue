<template>
  <div class="social_footer">
    <div class="links">
      <a href="mailto:corentin7301@gmail.com" id="mail">contact</a>
      <a href="https://portfolio.corentinperroux.fr" id="portfolio" target="_blank">portfolio</a>
      <a href="https://blog.corentinperroux.fr" id="blog" target="_blank">blog</a>
    </div>
    <div id="instagram">
      <h4>Instagram :</h4>
      <a href="https://www.instagram.com/corentin7301_photos/" target="_blank">
        <i class="fas fa-camera"></i>
      </a>
      <a href="https://www.instagram.com/corentin7301_photos_nature/" target="_blank">
        <i class="fas fa-paw"></i>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "socialShare",

    data() {
      return {

      }
    },
    methods: {},
    computed: {

    },
  }

</script>

<style lang="scss" scoped>
  .social_footer {
    width: 90vw;

    .links {
      display: flex;
      justify-content: space-around;

      #mail,
      #portfolio,
      #blog {
        margin-top: 60px;
        color: $orange;
      }
    }

    #instagram {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
      padding: 0;

      h4 {
        font-weight: 300;
        margin-right: 35px;
      }

      i {
        margin: 0 20px;
        font-size: 25px;
        color: $orange;
      }
    }
  }

  // DESKTOP
  @media screen and (min-width: 1216px) {
    .social_footer {
      width: 100%;

      .links {
        display: block;
        margin: 0;

        #mail,
        #portfolio {
          margin: 40px;
        }
      }

      #instagram {
        margin-top: 80px;
      }
    }
  }

</style>
