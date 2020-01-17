<template>
  <label :for="id">
    <span class="w-full block text-sm uppercase" v-if="label">{{ label }}</span>
    <div class="w-full mt-1">
      <input
        :id="id"
        :name="id"
        :aria-label="label"
        class="w-full px-2 py-4 bg-transparent border-b"
        v-on="$listeners"
        v-bind="$attrs"
        @keydown.enter="$emit('update', $event.target.value)"
        @input="$emit('update', $event.target.value)">
    </div>
  </label>
</template>

<script>
export default {
  name: 'AppInput',
  inheritAttrs: false,
  model: {
    event: 'update'
  },
  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String
    },
    labelInfo: {
      type: String
    }
  }
}
</script>
