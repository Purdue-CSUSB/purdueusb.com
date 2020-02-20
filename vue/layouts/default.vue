<template lang="pug">
  div
    TopBar#navbar
    div#container
      transition(name="fade" mode="out-in")
        nuxt#view(class="pt-4")
    BottomBar
</template>

<script>
import TopBar from '~/components/navigation/TopBar.vue'
import BottomBar from '~/components/navigation/BottomBar.vue'
export default {
  components: {
    TopBar,
    BottomBar
  }
}
</script>

<style lang="scss">
// This helps align the navbar to 4% padding but fillwidth navbar
#container {
  padding-left: 4%;
  padding-right: 4%;
  min-height: calc(100vh - 60px - 80px);
}
#navbar {
  height: 78px;
}

#view {
  min-height: calc(100vh - 78px - 60px - 60px);
}
</style>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
