import '@components/_globals'
import { shallowMount } from '@vue/test-utils'

import WorkUs from './WorkUs.vue'

describe('@/pages/WorkUs', () => {
  const wrapper = shallowMount(WorkUs)

  it('Has logo', () => {
    expect(wrapper.contains('img')).toBe(true)
  })
})
