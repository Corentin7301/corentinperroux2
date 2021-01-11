<template>
  <div class="gallery">
    <div v-for="photo in photos" :key="photo.id" class="content">
      <a :href="'https://res.cloudinary.com/corentin7301/image/upload/f_auto,q_auto/v1/' + path + photo.url + jpg" data-lightbox="artistique"><cld-image :public-id="path + photo.url + jpg" width="100%" loading="lazy" fetchFormat="auto" quality="auto"
        :alt="photo.description" class="photo" /></a>
    </div>
  </div>
</template>

<script>
  import photos from '@/data/artistique.json';
  export default {
    data() {
      return {
        photos,
        jpg: '.jpg',
        path: 'corentinperroux.fr/artistique/'
      }
    },
  }

</script>

<style lang="scss">
</style>
