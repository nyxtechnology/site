<template>
  <footer class="footer">
    <div class="container nyx-container">
      <div class="flex flex-wrap justify-center">
        <div class="w-full text-center">
          <img
            src="@/assets/images/nyx-technology-logo.png"
            alt="Nyx technology"
            class="footer__logo w-24 md:w-32 inline">
        </div>
        <div class="w-full my-24">
          <h2 class="sr-only">Navegação do rodapé</h2>
          <ul class="footer__nav flex flex-wrap justify-center uppercase text-sm">
            <li v-for="(item, index) in menu" :key="`menu-footer-${index}`">
              <router-link :to="item.to">
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  setup (_, { root }) {
    const menu = [
      {
        to: {
          name: makeRouteName('home')
        },
        label: 'Home'
      },
      {
        to: {
          name: makeRouteName('about')
        },
        label: 'Sobre a Nyx'
      },
      {
        to: {
          name: makeRouteName('plans')
        },
        label: 'Planos'
      },
      // {
      //   to: {
      //     name: makeRouteName('work-us')
      //   },
      //   label: 'Trabalhe conosco'
      // },
      {
        to: {
          name: makeRouteName('contact')
        },
        label: 'Contato'
      }
    ]

    function makeRouteName (type) {
      return `${type}__${root.$i18n.locale}`
    }

    return {
      menu
    }
  }
}
</script>

<style lang="scss">
.footer {
  &__logo {
    filter: invert(1);
  }
  &__nav {
    li {
      @apply w-full mb-2;
    }
    a {
      @apply p-5 block text-center bg-gray-200;
    }
    @screen lg {
      li {
        @apply w-auto bg-transparent;
      }
      a {
        @apply inline bg-transparent;
      }
      li:not(:last-child):after {
        padding: 0 10px;
        content: '•';
        font-size: 12px;
      }
    }
  }
}
</style>
