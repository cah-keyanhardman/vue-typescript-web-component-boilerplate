import { shallowMount } from '@vue/test-utils'
import MyWebComponent from '@/MyWebComponent.vue';

describe('MyWebComponent.vue', () => {
  it('placeholder', () => {
    const wrapper = shallowMount(MyWebComponent, {})
    expect(true).toEqual(true)
  })
})
