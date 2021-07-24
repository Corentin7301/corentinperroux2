<template>
  <div class="container" id="home">
    <index-gallery />
  </div>
</template>

<script>
import IndexGallery from '~/components/global/gallery/IndexGallery.vue'
  export default {
  components: { IndexGallery },
    name: "accueil",
    layout: "indexLayout",
    data() {
      return {
        
      }
    },
    head() {
      return {
        //  string or this.XXXX
        titre: "Corentin PERROUX",
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Page d\'accueil Corentin PERROUX photographie'
        }]
      }
    }
  }

</script>


<style lang="scss" scoped>
  #home {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
