import { shallowMount } from '@vue/test-utils'
import ConnectPlusPatientInfo from '@/ConnectPlusPatientInfo.vue'

describe('ConnectPlusPatientInfo.vue', () => {
  it('placeholder', () => {
    const wrapper = shallowMount(ConnectPlusPatientInfo, {})
    expect(true).toEqual(true)
  })
})
