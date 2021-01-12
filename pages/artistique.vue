<template>
  <artistique-gallery />
</template>

<script>
import ArtistiqueGallery from '~/components/global/gallery/ArtistiqueGallery.vue'
export default {
  components: { ArtistiqueGallery },
data() {
    return {
        
    }
},
    head() {
      return {
        //  string or this.XXXX
        titre: "Artistique",
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Page photo artistique Corentin PERROUX photographie'
        }]
      }
    }
}
</script>

<style lang="scss">
</style>