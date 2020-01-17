<template>
  <section class="partners relative z-0 py-40">
    <span class="partners__circle primary-circle"></span>
    <div class="container nyx-container">
      <h2 class="font-bold text-center lg:text-left">Alguns de nossos clientes.</h2>
      <ul class="partners-list flex flex-wrap items-center content-center mt-24">
        <li v-for="partner in partners" :key="partner.name" class="partners-list__item w-1/2 text-center sm:w-1/3 lg:w-1/4">
          <a href="#" class="block p-6 lg:p-10">
            <img class="partners-list__image inline" :src="partner.image" :alt="`Logo ${partner.name}`">
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
      {
        name: 'fiesc',
        image: require('@/assets/images/partners/fiesc.png')
      },
      {
        name: 'panasonic',
        image: require('@/assets/images/partners/panasonic.png')
      },
      {
        name: 'isa',
        image: require('@/assets/images/partners/isa.png')
      },
      {
        name: 'kickante',
        image: require('@/assets/images/partners/kickante.png')
      },
      {
        name: 'sesi',
        image: require('@/assets/images/partners/sesi.png')
      },
      {
        name: 'pece',
        image: require('@/assets/images/partners/pece.png')
      },
      {
        name: 'quero_educacao',
        image: require('@/assets/images/partners/quero_educacao.png')
      },
      {
        name: 'peer2beer',
        image: require('@/assets/images/partners/peer2beer.png')
      },
      {
        name: 'senai',
        image: require('@/assets/images/partners/senai.png')
      },
      {
        name: 'dfs',
        image: require('@/assets/images/partners/dfs.png')
      },
      {
        name: 'stefanini',
        image: require('@/assets/images/partners/stefanini.png')
      },
      {
        name: 'taller',
        image: require('@/assets/images/partners/taller.png')
      }
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

  &-list {
    li {
      &:hover {
        @apply bg-gray-200;
        .partners-list__image {
          filter: none;
        }
      }
    }
    &__image {
      filter: grayscale(100%);
      width: 130px;
    }
  }
}
</style>
