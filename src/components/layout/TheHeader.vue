<template>
  <header class="header flex justify-between items-center">
    <router-link to="/" class="header__logo">
      <img
        src="@/assets/images/nyx-technology-logo.png"
        alt="Nyx technology"
        class="w-24 md:w-32">
    </router-link>
    <nav>
      <ul class="flex">
        <li></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style lang="scss">
.header {
  &__logo {
    img {
      filter: invert(1);
    }
  }
}
</style>
