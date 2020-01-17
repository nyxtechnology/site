<template>
  <div class="left-side">
    <div
      class="flex h-screen flex-col left-side__box justify-between items-center pt-10 pb-20 sticky top-0 z-50"
      :class="{ 'left-side__box--active': menuActive }"
    >
      <div>
        <button
          class="left-side__menu-icon p-6"
          :class="{ 'left-side__menu-icon--close': menuActive }"
          type="button"
          @click="showMenu"
          @keyup.enter="showMenu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
      <ul class="flex flex-col items-center">
        <li class="mb-2">
          <!-- Add vue-dark-mode -->
        </li>
        <li class="mb-2">
          <a href="#" class="py-2 px-4 block">
            <svg-icon name="facebook" width="20px" />
          </a>
        </li>
        <li>
          <a href="#" class="py-2 px-4 block">
            <svg-icon name="linkedin" width="20px" />
          </a>
        </li>
      </ul>
    </div>
    <div class="left-side-menu fixed z-0 invisible top-0 left-0 h-screen bg-gray-900"
      :class="{ 'left-side-menu--active': menuActive }">
        <div class="container nyx-container h-full">
          <ul
            class="left-side-menu__list flex flex-wrap justify-center content-center h-full"
            :class="{ 'left-side-menu__list--active': menuActive }">
            <li v-for="item in menu" :key="`menu-item-${item.routeName}`">
              <button
                type="button"
                class="font-bold uppercase"
                @click="goTo(item.routeName)"
                @keydown.enter="goTo(item.routeName)"
              >
                <span class="sr-only">Ir para a página </span>
                {{ item.label }}
              </button>
            </li>
          </ul>
        </div>
    </div>
    <div class="left-side-menu__slide fixed z-0 invisible left-0 top-0 h-full bg-primary"></div>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'

export default {
  name: 'LeftSide',
  setup (_, { root }) {
    const menuActive = ref(false)
    const menu = [
      {
        routeName: 'about',
        label: 'Sobre a Nyx'
      },
      {
        routeName: 'plans',
        label: 'Suporte (planos)'
      },
      {
        routeName: 'work-us',
        label: 'Trabalhe conosco'
      },
      {
        routeName: 'contact',
        label: 'Fale conosco'
      }
    ]

    function showMenu () {
      menuActive.value = !menuActive.value
    }

    function goTo (type) {
      showMenu()

      setTimeout(() => {
        root.$router.push({
          name: `${type}__${root.$i18n.locale}`
        })
      }, 1800)
    }

    return {
      goTo,
      menu,
      showMenu,
      menuActive
    }
  }
}
</script>

<style lang="scss">
.left-side {
  &__box {
    transition: all .5s 1.4s;

    &--active {
      @apply text-gray-100;
      transition: all .5s;
    }
  }

  &__menu-icon {
    span {
      @apply relative bg-gray-800 block rounded-full mb-1;
      transition: all .5s 1.4s;
      width: 24px;
      height: 4px;

      &:nth-child(2) {
        left: -3px;
      }
    }

    &--close {
      span {
        @apply bg-gray-100;
        transition: all .5s;

        &:nth-child(1) {
          transform: rotate(45deg);
          margin-top: 5px;
        }

        &:nth-child(2) {
          transform: rotate(-45deg);
          margin-top: -8px;
          margin-left: 2px;
        }
      }
    }
  }
}

.left-side-menu, .left-side-menu__slide {
  width: 1px;
}

.left-side-menu {
  transition: width .8s ease-in, visibility .1s .8s ease-in, z-index .1s .8s;

  + .left-side-menu__slide {
    transition: width .6s .8s ease-in, visibility .1s 1.3s ease-in, z-index .1s 1.5s;
  }

  &--active {
    @apply z-40 w-full visible;
    transition: width .8s .6s ease-out, visibility .1s ease-out;

    + .left-side-menu__slide {
      @apply z-30 w-full visible;
      transition: width .6s ease-out, visibility .1s ease-out;
    }
  }

  &__list {
    @apply pl-20 text-gray-300 invisible opacity-0;
    transition: all .5s ease;

    li {
      @apply relative font-bold text-4xl mb-6 w-full pl-0 invisible opacity-0;
      top: -50px;
      transition: top .8s ease, opacity .8s, visibility .1s 1s;

      @screen md {
        @apply text-5xl;
      }

      @screen xl {
        @apply text-6xl;
      }

      a {
        @apply block uppercase;

        @screen xl {
          @apply pl-20;
        }
      }
    }

    li:nth-child(1) {
      transition-delay: 1.3s;
    }
    li:nth-child(2) {
      transition-delay: 1.5s;
    }
    li:nth-child(3) {
      transition-delay: 1.8s;
    }
    li:nth-child(4) {
      transition-delay: 2.1s;
    }

    &--active {
      @apply relative visible opacity-100;
      transition: all .5s 1.3s ease;

      li {
        @apply top-0 visible opacity-100;
      }
    }
  }
}

</style>
