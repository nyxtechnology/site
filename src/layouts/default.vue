<template>
  <div class="layout flex flex-wrap">
    <the-left-side class="layout__left-side hidden sm:block" />
    <div class="layout__content bg-white pt-12 z-10">
      <div class="container nyx-container">
        <the-header />
        <main>
          <vue-page-transition name="overlay-right-full">
            <router-view :key="$route.fullPath" />
          </vue-page-transition>
        </main>
      </div>
    </div>
    <the-footer class="w-full mt-40" />
  </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader'
import TheLeftSide from '@/components/layout/TheLeftSide'

export default {
  name: 'DefaultLayout',
  components: {
    TheLeftSide,
    TheHeader,
    TheFooter: () => import('@/components/layout/TheFooter')
  }
}
</script>

<style lang="scss"></style>
