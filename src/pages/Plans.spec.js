import '@components/_globals'
import { shallowMount } from '@vue/test-utils'

import Plans from './Plans.vue'

describe('@/pages/Plans', () => {
  const wrapper = shallowMount(Plans)

  it('Has logo', () => {
    expect(wrapper.contains('img')).toBe(true)
  })
})
