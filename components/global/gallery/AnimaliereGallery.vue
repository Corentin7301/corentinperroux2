<template>
  <div class="gallery">
    <div v-for="photo in photos" :key="photo.id" class="content">
      <cld-image :public-id="path + photo.url + jpg" width="100%" loading="lazy" fetchFormat="auto" quality="auto"
        :alt="photo.description" class="photo" />
    </div>
  </div>
</template>

<script>
  import photos from '@/data/animaliere.json';
  export default {
    data() {
      return {
        photos,
        jpg: '.jpg',
        path: 'corentinperroux.fr/animaliere/'
      }
    },
  }

</script>

<style lang="scss">

</style>
