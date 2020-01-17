<template>
  <label :for="id">
    <span class="w-full block text-sm uppercase" v-show="label">{{ label }}</span>
    <span class="w-full block text-xs text-indigo-700" v-show="labelInfo">{{ labelInfo }}</span>
    <div class="w-full mt-1">
      <textarea
        :id="id"
        :name="id"
        :aria-label="label"
        class="w-full px-2 py-3 bg-transparent border-b"
        v-on="$listeners"
        v-bind="$attrs"
        @keydown.enter="$emit('update', $event.target.value)"
        @input="$emit('update', $event.target.value)"></textarea>
    </div>
  </label>
</template>

<script>
export default {
  name: 'AppTextarea',
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
