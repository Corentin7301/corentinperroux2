<template>
  <div class="gallery">
    <div v-for="photo in photos" :key="photo.id" ref="" class="content">
      <a :href="'https://res.cloudinary.com/corentin7301/image/upload/f_auto,q_auto/v1/' + path + photo.url + jpg" data-lightbox="animaliere"><cld-image :public-id="path + photo.url + jpg" width="100%" loading="lazy" fetchFormat="auto" quality="auto"
        :alt="photo.description" class="photo" /></a>
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
