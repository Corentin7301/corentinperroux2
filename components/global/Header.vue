<template>
  <div class="header" id="top">
    <img src="~/assets/img/corentin-perroux.jpg" alt="Corentin-PERROUX">
    <h1>
      <nuxt-link to="/">Corentin perroux</nuxt-link>
    </h1>
    <h2>photography</h2>
    <Navbar />
    <!-- <div class="columns">
            <button id="column1" type="button"><img src="../images/icons/columns1-solid_blanc2.png"
                    alt="columns"></button>
            <button id="column2" type="button"><img src="../images/icons/columns2-solid_blanc2.png"
                    alt="columns"></button>
        </div> -->
    <a href="#top" :class="displayShow"><svg class="w-6 h-6 top" fill="none" stroke="currentColor" viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7">
        </path>
      </svg></a>
  </div>
</template>

<script>
  export default {
    props: ['display'],
    data() {
      return {
        scrollY: 0,
        // will be hide after 350 px scroll down
        hideFrom: 350
      }
    },
    methods: {
      setScrollY() {
        this.scrollY = window.scrollY;
      }
    },
    computed: {
      // fixed || none
      displayShow() {
          if (this.scrollY < this.hideFrom) {
            return "none"
          } else {
            return "fixed"
          }

      }
    },
    mounted() {
      window.addEventListener('scroll', (event) => {
        this.setScrollY()
      })
    }
  }

</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {

      width: 100%;
      height: auto;
      border: solid 1px rgba(255, 255, 255, .8);
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    h1 {
      margin: 20px 0 15px 0px;
      font-size: 30px;
      letter-spacing: 0.25em;
    }

    h2 {
      margin: 0 0 60px 0px;
      color: $orange;
      font-size: 11px;
      font-weight: 400;
      letter-spacing: 0.45em;
    }

    .fixed {
      position: fixed;
      width: 25px;
      height: 25px;
      bottom: 50px;
      right: 30px;
      z-index: 99;
    }

    .none {
      display: none;
    }
  }

</style>
