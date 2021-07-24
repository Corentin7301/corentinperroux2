<template>
  <div>
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

<style lang="scss">


</style>
