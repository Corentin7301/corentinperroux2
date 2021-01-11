<template>
  <div class="gallery">
    <div v-for="photo in photos" :key="photo.id" class="content">
      
        <a :href="'https://res.cloudinary.com/corentin7301/image/upload/f_auto,q_auto/v1/' + path + photo.url + jpg" data-lightbox="accueil"><cld-image :public-id="path + photo.url + jpg" width="100%" loading="lazy" fetchFormat="auto" quality="auto"
        :alt="photo.description" class="photo" /></a>
    </div>
  </div>
</template>

<script>
  import photos from '@/data/accueil.json';
  export default {
    data() {
      return {
        photos,
        jpg: '.jpg',
        path: 'corentinperroux.fr/accueil/'
      }
    },
  }
</script>

<style lang="scss">
  .gallery {
    margin-top: 50px;
    display: grid;
    // grid-template-columns: repeat(1, 100%);
    grid-template-columns: repeat(2, 48%);
    justify-content: center;
    grid-gap: 5px 5px;
  }
  
    .col1 {
      grid-template-columns: repeat(1, 100%);
    }

    .col2 {
      grid-template-columns: repeat(2, 48%);
    }

  // DESKTOP
  @media screen and (min-width: 1216px) {

    .gallery {
      grid-template-columns: repeat(3, 32%);
      grid-gap: 30px 15px;
    }
  }

</style>
