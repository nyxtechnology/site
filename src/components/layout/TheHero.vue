<template>
  <div class="hero bg-white pt-12 z-10 relative">
    <div class="container nyx-container" :class="{ 'hero__container--full': isFullHero }">
      <the-header />
      <section class="mt-16 pb-16 lg:mt-32 w-full lg:pb-32 lg:w-4/5 xl:w-3/5">
        <h1 class="hero-title font-bold text-center text-4xl lg:text-left lg:text-5xl">
          <span>Ajudamos seu negócio a se conectar com clientes através das melhores tecnologias.</span>
        </h1>
        <div class="hero-subtitle flex items-center mt-8 font-bold text-accent justify-center lg:justify-start">
          <svg-icon
            class="fill-current"
            name="rightArrowThinLine" />
          <span class="ml-4 text-sm">VAMOS CONVERSAR SOBRE SEU PROJETO?</span>
        </div>
        <div class="mt-8 text-center md:ml-10 lg:mt-4 lg:text-left">
          <router-link :to="{ name: `contact__${$i18n.locale}` }" class="text-xs rounded-full text-white bg-accent py-3 px-5">
            ENTRAR EM CONTATO
          </router-link>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from '@vue/composition-api'

import TheHeader from '@/components/layout/TheHeader'
import useWindowSize from '@/composables/useWindowSize'

export default {
  name: 'TheHero',
  components: {
    TheHeader
  },
  setup () {
    const isFullHero = ref(true)

    const { width } = useWindowSize()

    onBeforeMount(() => {
      if (width.value < 1280) {
        isFullHero.value = false
      }
    })

    return {
      isFullHero
    }
  }
}
</script>

<style lang="scss">
.hero {
  &:before {
    @apply absolute w-full h-full left-0 top-0 hidden;
    content: ' ';
    background-image: url('~@/assets/images/hero-illustration.svg');
    background-repeat: no-repeat;
    background-size: contain;
    background-position-x: 110%;
    background-position-y: -50px;

    @screen lg {
      @apply block;
    }
  }
  &__illustration {
    top: -7%;
  }
  &__container {
    @apply relative bg-white z-10;
    &--full {
      height: calc(100vh - 100px);
    }
  }
  &-title, &-subtitle {
    @screen lg {
      span {
        @apply leading-tight;
        background-color: rgba(255, 255, 255, .6);
      }
    }
  }
}
</style>
