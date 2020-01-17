<template>
  <section class="about">
    <div :class="classContainer">
      <h2 class="font-bold text-4xl">O que fazemos</h2>
      <div class="flex flex-wrap sm:flex-no-wrap xl:justify-between">
        <div class="mt-12 w-full sm:w-1/2 xl:w-3/12">
          <h3 class="font-bold">Outsorcing</h3>
          <span>Gestão e desenvolvimento</span>
          <ul class="mt-12">
            <li v-for="item in items" :key="item.icon" class="flex items-center mb-6">
              <span class="rounded-full bg-accent p-3">
                <svg-icon :name="item.icon" height="25px" class="text-white fill-current" />
              </span>
              <span class="ml-4">
                {{ item.label }}
              </span>
            </li>
          </ul>
        </div>
        <div class="about__content mt-12 w-full sm:pl-12 sm:w-1/2 self-start xl:w-5/12">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </p>
          <p>
            n unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
          </p>
        </div>
        <div class="mt-12 pl-12 relative hidden xl:block xl:w-4/12">
          <div class="absolute w-full h-full">
            <span class="absolute z-20 block w-24 h-24 border border-solid border-gray-900" style="left:110px;"></span>
            <span class="absolute z-10 block w-20 h-20 bg-primary" style="left: 90px; top: 30px;"></span>
            <span class="absolute z-0 block w-16 h-16 bg-gray-200" style="left: 80px; top: 60px;"></span>

            <span class="absolute z-20 block w-10 h-10 border border-solid border-gray-900" style="left: 280px; top: 140px;"></span>
            <span class="absolute z-10 block w-8 h-8 bg-primary" style="left: 270px; top: 160px;"></span>
            <span class="absolute z-0 block w-6 h-6 bg-gray-200" style="left: 260px; top: 180px;"></span>

            <span class="absolute z-20 block rounded-full w-56 h-56 border border-solid border-gray-900" style="left: 220px; bottom: 20px;"></span>
            <span class="absolute z-10 block rounded-full w-48 h-48 bg-primary" style="left: 80px; bottom: 100px;"></span>
            <span class="absolute z-0 block rounded-full w-48 h-48 bg-gray-200" style="left: 60px; bottom: 80px;"></span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheAbout',
  props: {
    withContainer: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const classContainer = {
      'container': props.withContainer,
      'nyx-container': props.withContainer
    }
    const items = [
      {
        label: 'Redução de custos',
        icon: 'custos'
      },
      {
        label: 'Assistência especializada',
        icon: 'assistencia'
      },
      {
        label: 'Tecnologia de ponta',
        icon: 'tecnologia'
      },
      {
        label: 'Ganho em produtividade',
        icon: 'produtividade'
      },
      {
        label: 'Agilidade e flexibilidade',
        icon: 'flexibilidade'
      },
      {
        label: 'Satisfação dos clientes',
        icon: 'satisfacao'
      }
    ]

    return {
      items,
      classContainer
    }
  }
}
</script>

<style lang="scss">
.about {
  &__content {
    p {
      @apply mb-12;
    }

    @media (min-width: 1920px) {
      @apply pr-40;
    }
  }
}
</style>
