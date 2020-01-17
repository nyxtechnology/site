<template>
  <div class="home">
    <the-partners />
    <the-about class="bg-white py-40" />
    <the-plans class="pt-40 pb-12" />
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
    ThePartners: () => import('@/components/layout/ThePartners'),
    TheAbout: () => import('@/components/layout/TheAbout'),
    ThePlans: () => import('@/components/layout/ThePlans')
  }
}
</script>

<style lang="scss"></style>
