<template>
<div>
  <p>© Copyright <a href="https://portfolio.corentinperroux.fr" target="_blank">Corentin PERROUX </a>{{ new Date().getFullYear() }} || Photos non libres de droit</p>
</div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
  }

</script>

<style lang="scss" scoped>
div {
      background: #242424;
      width: 100%;
p {
    text-align: center;
    font-size: 10px;
    margin-top: 50px;
    letter-spacing: 0.15em;
    text-transform: initial;
}
}
</style>
