<template>
  <section class="about mt-20 pb-24">
    <the-about :withContainer="false" />
  </section>
</template>

<script>

export default {
  name: 'About',
  components: {
    TheAbout: () => import('@/components/layout/TheAbout')
  }
}
</script>

<style lang="scss"></style>
