<template>
  <div>
    <div class="img_head">

      <cld-image public-id="corentinperroux.fr/corentinperroux_sighg8.jpg" width="100%" loading="lazy"
        fetchFormat="auto" quality="auto" alt="Corentin-PERROUX" id="img_head" />
    </div>
    <Header />
    <Nuxt />
    <footer-comp />
  </div>
</template>

<script>
import '@/assets/js/lightbox-plus-jquery.js';
import FooterComp from '~/components/global/FooterComp.vue';
  export default {
  components: { FooterComp },
    data() {
      return {

      }
    },
  }

</script>



<style lang="scss" scoped>
  .img_head {
    margin-bottom: 20px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;

    #img_head {
      width: 100%;
    }
  }

  @media screen and (min-width: 1216px) {
    .img_head {
      height: 615px;
      margin: 0;
    }
  }

</style>
