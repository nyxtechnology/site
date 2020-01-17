<template>
  <div class="layout-home flex">
    <the-left-side class="layout__left-side hidden sm:block" />
    <div class="layout__content">
      <the-hero />
      <router-view :key="$route.fullPath" />
      <the-footer />
    </div>
  </div>
</template>

<script>
import TheHero from '@/components/layout/TheHero'
import TheLeftSide from '@/components/layout/TheLeftSide'

export default {
  name: 'HomeLayout',
  components: {
    TheHero,
    TheLeftSide,
    TheFooter: () => import('@/components/layout/TheFooter')
  }
}
</script>

<style lang="scss"></style>
