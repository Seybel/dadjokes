import { shallowMount } from '@vue/test-utils'
import AppHeader from '@/components/AppHeader.vue'

describe('app-header.vue', ()=> {
    it('should contain a header', ()=> {
        const wrapper = shallowMount(AppHeader)

        const title = wrapper.find('h1')
        expect(title.text()).toContain('Dad Jokes')
    })
})