import '@components/_globals'
import { shallowMount } from '@vue/test-utils'

import About from './About.vue'

describe('@/pages/About', () => {
  const wrapper = shallowMount(About)

  it('Has logo', () => {
    expect(wrapper.contains('img')).toBe(true)
  })
})
