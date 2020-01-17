<template>
  <div id="app">
    <vue-extend-layouts />
  </div>
</template>

<script>
import VueExtendLayouts from 'vue-extend-layout'
export default {
  name: 'App',
  components: { VueExtendLayouts }
}
</script>

<style lang="scss" src="@/assets/styles/base.scss"></style>
<style src="@/assets/styles/tailwind.css"></style>
