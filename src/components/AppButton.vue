<template>
  <button
    :class="`text-xs py-3 px-5 rounded-full text-white bg-${bgColor}`"
    v-bind="$attrs"
    v-on="$listeners">
      <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  inheritAttrs: false,
  props: {
    bgColor: String
  }
}
</script>

<style lang="scss"></style>
