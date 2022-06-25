import { test, describe, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheFooter from '../components/TheFooter.vue'

describe('TheFooter', () => {
  test('CheckFooterMessage', () => {
    const wrapper = mount(TheFooter, {})

    expect(wrapper.text()).toContain('Nuxt3')
    expect(wrapper.text()).toContain('Primer CSS')
    expect(wrapper.text()).toContain('All rights reserved.')
  })
})
