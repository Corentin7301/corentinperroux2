<template>
  <animaliere-gallery />
</template>

<script>
export default {
data() {
    return {
        
    }
},
    head() {
      return {
        //  string or this.XXXX
        titre: "Animalier",
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'Page photo animalière Corentin PERROUX photographie'
        }]
      }
    }
}
</script>

<style lang="scss" scoped>
</style>