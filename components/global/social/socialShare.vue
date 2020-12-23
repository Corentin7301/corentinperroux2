<template>
  <div class="social_footer">
    <a href="mailto:corentin7301@gmail.com" id="mail">contact</a>
    <a href="https://corentinperroux.fr/portfolio" id="portfolio">portfolio</a>
      <ul id="instagram">
      <h4>Instagram :</h4>
        <a href="https://www.instagram.com/corentin7301_photos/" target="_blank">
          <i class="fas fa-camera"></i>
        </a>
        <a href="https://www.instagram.com/corentin7301_photos_nature/" target="_blank">
          <i class="fas fa-paw"></i>
        </a>
      </ul>
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

    #mail,
    #portfolio {
      margin: 40px;
    }
   
      #instagram {
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 80px;
        padding: 0;
        h4 {
          font-weight: 300;
          margin-right: 35px;
        }
        i {
          margin: 0 20px;
          font-size: 25px;
        }
    }
  }

</style>
