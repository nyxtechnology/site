import '@components/_globals'
import { shallowMount } from '@vue/test-utils'

import Contact from './Contact.vue'

describe('@/pages/Contact', () => {
  const wrapper = shallowMount(Contact)

  it('Has logo', () => {
    expect(wrapper.contains('img')).toBe(true)
  })
})
