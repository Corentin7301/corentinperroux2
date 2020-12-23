<template>
  <div class="container" id="home">
    <index-gallery />

  </div>
</template>

<script>
  export default {
    name: "",
    data() {
      return {
        
      }
    },
    head() {
      return {
        //  string or this.XXXX
        titre: "my home",
        meta: [{
          hid: 'description',
          name: 'description',
          content: 'My home description '
        }]
      }
    }
  }

</script>


<style lang="scss">
  #home {
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
