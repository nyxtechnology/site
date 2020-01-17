<template>
  <section class="plans mt-20 pb-24">
    <the-plans :withContainer="false" />
  </section>
</template>

<script>

export default {
  name: 'Plans',
  components: {
    ThePlans: () => import('@/components/layout/ThePlans')
  }
}
</script>

<style lang="scss"></style>
