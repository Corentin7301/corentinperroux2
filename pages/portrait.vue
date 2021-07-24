<template>
  <portrait-gallery />
</template>

<script>
import PortraitGallery from '~/components/global/gallery/PortraitGallery.vue'
export default {
  components: { PortraitGallery },
data() {
    return {
        
    }
},
    head() {
      return {
        //  string or this.XXXX
        titre: "Portrait",
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Page photo portrait Corentin PERROUX photographie'
        }]
      }
    }
}
</script>

<style lang="scss">
</style>