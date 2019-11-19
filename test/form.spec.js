import { shallowMount } from '@vue/test-utils'
import Form from '../src/Form.vue'

describe('Form.vue', () => {

    it('придупреждение о неправильном вводе', () => {
        const wrapper = shallowMount(Form);
        const textInput = wrapper.find('#formGroupExampleInput')
        //устанавливаем  мало символов
        textInput.setValue('va')
        textInput.trigger('change')
        // проверяем, что ошибка отобразилась
        expect(wrapper.find('.is-invalid').exists()).toBe(true)

    })
    it('придупреждение о правильном вводе', () => {
        const wrapper = shallowMount(Form);
        const textInput = wrapper.find('#formGroupExampleInput')
        // обновляем поле, чтобы оно было достаточно длинным
        textInput.setValue('vaдгу')
        textInput.trigger('change')
        // проверяем, что подтверждение о коректном вводе отобразилось
        expect(wrapper.find('.is-valid').exists()).toBe(true)
        // обновляем имя, чтобы оно было достаточно длинным
    })


    //Выберите базу для обзвона
    it('Выбор базу для обзвона', () => {
        const wrapper = shallowMount(Form);

        const options = wrapper.find('#exampleFormControlSelect1').findAll('option')

        options.at(2).setSelected()
        wrapper.find('#exampleFormControlSelect1').setValue(3)
        wrapper.find('#exampleFormControlSelect1').trigger('change')
       //проверяем что подтверждение о выборе отобразилось
        expect(wrapper.find('.is-valid').exists()).toBe(true)
    })
    it('Выбор базу для обзвона не выбрана', () => {
        const wrapper = shallowMount(Form);

        const options = wrapper.find('#exampleFormControlSelect1').findAll('option')

        options.at(0).setSelected()
        wrapper.find('#exampleFormControlSelect1').setValue(3)
        wrapper.find('#exampleFormControlSelect1').trigger('change')
        //проверяем что о не выбраном элементе отобразилось
        expect(wrapper.find('.is-invalid').exists()).toBe(true)
    })


})