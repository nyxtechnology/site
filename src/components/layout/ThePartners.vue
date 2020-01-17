<template>
  <section class="partners relative z-0 py-40">
    <span class="partners__circle primary-circle"></span>
    <div class="container nyx-container">
      <h2 class="font-bold text-center lg:text-left">Alguns de nossos clientes.</h2>
      <ul class="flex flex-wrap items-center content-center mt-24">
        <li v-for="partner in partners" :key="partner" class="w-1/2 text-center sm:w-1/3 lg:w-1/4">
          <a href="#" class="block p-6 lg:p-10">
            <img class="partners__image inline" :src="`/images/partners/${partner}.png`" :alt="`Logo ${partner}`">
          </a>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ThePartners',
  setup () {
    const partners = [
      'fiesc',
      'panasonic',
      'isa',
      'kickante',
      'sesi',
      'pece',
      'quero_educacao',
      'peer2beer',
      'senai',
      'dfs',
      'stefanini'
    ]

    return {
      partners
    }
  }
}
</script>

<style lang="scss">
.partners {
  &__circle {
    @apply absolute;
    width: 200px;
    height: 190px;
    top: -130px;
    left: 50px;
  }

  &__image {
    filter: grayscale(100%);
    width: 130px;
  }
}
</style>
