<template>
    <form @submit.prevent="submitf">

        <div class="row">
            <div class="container">
                <div class="col-md-6">
                    <div class="form-group">

                        <label for="formGroupExampleInput">Название проекта
                            <div class="ico"><img src="/src/img/ico.jpg" alt=""></div>
                        </label>
                        <input type="text" class="form-control " id="formGroupExampleInput"  @change="name_change" v-model="name" v-bind:class="[name_valid]" placeholder="Введите название проекта">

                    </div>
                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Выберите базу для обзвона
                            <div class="ico"><img src="/src/img/ico.jpg" alt=""></div>
                        </label>
                        <select class="form-control " id="exampleFormControlSelect1" v-bind:class="[select1_valid]" @change="select1_change" v-model="callBase_selected">
                            <option value="0">Выберите базу для обзвона</option>

                            <option v-for="item in callBase"   v-bind:value="item.value"> {{item.text}}</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label > Дата и время запуска проекта
                            <div class="ico"><img src="/src/img/ico.jpg" alt=""></div>
                        </label>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="0" id="exampleRadios1" v-model="startTime_selected" >
                            <label class="form-check-label" for="exampleRadios1">
                               Начать сразу полсе запуска рассылки
                            </label>
                        </div>
                        <div class="form-check">
                            <input class="form-check-input" type="radio" value="1" id="exampleRadios2" v-model="startTime_selected">
                            <label class="form-check-label" for="exampleRadios2">
                                Начать в указанное время
                            </label>
                        </div>
                    </div>
                    <div class="form-row">
                        <div class="col-md-4 mb-3">
                            <input type="date" class="form-control" id="validationCustom01" placeholder="Дата" v-model="date_selected" required>
                        </div>
                        <div class="col-md-4 mb-3">

                            <select class="form-control" v-model="hours_selected">
                                <option value="0">Часы</option>
                                <option v-for="itm in hours" v-bind:value="itm.value">{{itm.text}}</option>

                            </select>
                        </div>
                        <div class="col-md-4 mb-3">
                            <select class="form-control" v-model="minutes_selected">
                                <option value="0">Минуты</option>
                                <option v-for="itm in minutes" v-bind:value="itm.value">{{itm.text}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label >Время совершения звонков
                            <div class="ico"><img src="/src/img/ico.jpg" alt=""></div>
                        </label>

                    </div>
                    <div class="form-row">
                        <div class="col-md-3 text-left">
                            <label for="selecth">Не раньше</label>
                            <select id="selecth" class="form-control"  v-model="notEarlierHours_selected">
                                <option selected value="0">Часы</option>
                                <option v-for="itm in notEarlierHours " v-bind:value="itm.value">{{itm.text}}</option>
                            </select>
                        </div>
                        <div class="col-md-3 text-left">
                            <label for="selectm"> &nbsp;</label>
                            <select id="selectm" class="form-control" v-model="notEarlierMinutes_selected">
                                <option selected value="0">Минуты</option>
                                <option v-for="itm in notEarlierMinutes " v-bind:value="itm.value">{{itm.text}}</option>
                            </select>
                        </div>



                        <div class="col-md-3 text-left">
                            <label for="selecth-later">Не позднее</label>
                            <select id="selecth-later" class="form-control"   v-model="notLaterHours_selected">
                                <option selected value="0">Часы</option>
                                <option v-for="itm in notLaterHours " v-bind:value="itm.value">{{itm.text}}</option>
                            </select>
                        </div>
                        <div class="col-md-3 text-left">
                            <label for="selectm-later"> &nbsp;</label>
                            <select id="selectm-later" class="form-control"   v-model="notLaterMinutes_selected">
                                <option selected value="0">Минуты</option>
                                <option v-for="itm in notLaterMinutes " v-bind:value="itm.value">{{itm.text}}</option>
                            </select>
                        </div>
                    </div>


                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label > Параметры звонков
                            <div class="ico"><img src="/src/img/ico.jpg" alt=""></div>
                        </label>
                    </div>
                    <div class="form-group row aling-items-center">
                        <label for="select5" class="col-sm-9 col-form-label">
                        Сколько раз перезвонить если абонент не ответил
                        </label>
                        <div class="col-sm-3">
                            <select id="select5" class="form-control" v-model="callback_selected">
                                <option
                                        v-for="item in callback"
                                        v-bind:value="item.value"
                                >
                                    {{item.text}}
                                </option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row aling-items-center">
                        <label for="select6" class="col-sm-9 col-form-label">
                           Интервал между повторами звонками если абонент не ответил
                        </label>
                        <div class="col-sm-3">
                            <select id="select6" class="form-control" v-model="repeatInterval_selected">
                                <option
                                        v-for="item in repeatInterval"
                                        v-bind:value="item.value"
                                >
                                   {{item.text}}
                                </option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group block-down">
                        <label >Дополнительные настройки
                            <div class="ico"><img src="/src/img/ico.jpg" alt=""></div>
                        </label>
                        <div class="">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck1" value="1" v-model="additionalSettings_1">
                                <label class="form-check-label" for="gridCheck1">
                                    Разпозновать автоответчик
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck2"  value="2" v-model="additionalSettings_2">
                                <label class="form-check-label" for="gridCheck2">
                                    Интелектуальная задержка
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck3"  value="3" v-model="additionalSettings_3">
                                <label class="form-check-label" for="gridCheck3">
                                    Записывать разговоры(аудио)
                                </label>
                            </div>
                        </div>
                        <div class="">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="gridCheck4" value="4"  v-model="additionalSettings_4">
                                <label class="form-check-label" for="gridCheck4">
                                    Вести текстовую запись разговора
                                </label>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-12 btn-block">
                    <button type="submit" class="btn btn-secondary">Сохранить</button>
                    <button type="button" class="btn btn-secondary">Отмена</button>
                </div>
                <div class="col-md-12 btn-block">
                    <textarea  v-bind:class='show' class="json">{{json}}</textarea>
                </div>
            </div>

        </div>

    </form>
</template>

<script>
export default {

  data () {
    return {
        //Название проекта
        name: '',
        //Базу для обзвона
        callBase_selected: 0,
        callBase: [
            { value: 1, text: 'база 1' },
            { value: 2, text: 'база 2' },
            { value: 3, text: 'база 3' }
        ],
        //Дата и время запуска проекта
        startTime_selected: 0,
        //дата
        date_selected:0,
        //часы
        hours_selected :0,
        hours: [
            { value: 1, text: '1 ' },
            { value: 2, text: '2 ' },
            { value: 3, text: '3 ' }
        ],
        //минуты
        minutes_selected:0,
        minutes: [
            { value: 1, text: '1 Мин' },
            { value: 2, text: '2 Мин' },
            { value: 3, text: '3 Мин' }
        ],
        //Время совершения звонков
          // не раньше часы
        notEarlierHours_selected:0,
        notEarlierHours: [
            { value: 1, text: '1 ' },
            { value: 2, text: '2 ' },
            { value: 3, text: '3 ' }
        ],
        // не раньше минуты
        notEarlierMinutes_selected:0,
        notEarlierMinutes: [
            { value: 1, text: '1 Мин' },
            { value: 2, text: '2 Мин' },
            { value: 3, text: '3 Мин' }
        ],
        //Не позднее  часы
        notLaterHours_selected:0,
        notLaterHours: [
            { value: 1, text: '1 ' },
            { value: 2, text: '2 ' },
            { value: 3, text: '3 ' }
        ],
        // Не позднее минуты
        notLaterMinutes_selected:0,
        notLaterMinutes: [
            { value: 1, text: '1 Мин' },
            { value: 2, text: '2 Мин' },
            { value: 3, text: '3 Мин' }
        ],

        // Интервал между повторами звонками если абонент не ответил
        repeatInterval_selected: 1,
        repeatInterval: [
            { value: 0, text: '10 Мин' },
            { value: 1, text: '5 Мин' },
            { value: 2, text: '1 Мин' }
        ],
        //Сколько раз перезвонить если абонент не ответил
        callback_selected: 2,
        callback: [
            { value: 0, text: '3 раза' },
            { value: 1, text: '5 раз' },
            { value: 2, text: '1 раз' }
        ],



        //Дополнительные настройки
        additionalSettings_1: true,
        additionalSettings_2: false,
        additionalSettings_3: false,
        additionalSettings_4: false,

        //Валидация название проекта
        name_valid: '',
        select1_valid:'',
        json:'',
        show:''
    }
  },
    computed: {
        error () {
            return this.username.trim().length < 7
                ? 'Имя пользователя должно быть длиннее 6 символов'
                : ''
        }
    },

  methods:{
    name_change(event){
        if(  event.target.value.trim().length > 4 ){
            this.name_valid = 'is-valid';
        }
        else{
            this.name_valid = 'is-invalid';
        }
    },
     select1_change(event){
        console.log(event.target.value)
         if(  event.target.value != 0 ){
             this.select1_valid = 'is-valid';
         }
         else{
             this.select1_valid = 'is-invalid';
         }
    },
      submitf(){
         var data={
             name: this.name,
             //Базу для обзвона
             callBase_selected: this.callBase_selected,
             //Дата и время запуска проекта
             startTime_selected: this.startTime_selected,
             //дата
             date_selected:this.date_selected,
             //часы
             hours_selected :this.hours_selected,
             //минуты
             minutes_selected:this.minutes_selected,
             //Время совершения звонков
             // не раньше часы
             notEarlierHours_selected:this.notEarlierHours_selected,
             // не раньше минуты
             notEarlierMinutes_selected:this.notEarlierMinutes_selected,
             //Не позднее  часы
             notLaterHours_selected:this.notLaterHours_selected,
             // Не позднее минуты
             notLaterMinutes_selected:this.notLaterMinutes_selected,
             // Интервал между повторами звонками если абонент не ответил
             repeatInterval_selected: this.repeatInterval_selected,
                 //Сколько раз перезвонить если абонент не ответил
             callback_selected: this.callback_selected,
             //Дополнительные настройки
             additionalSettings_1: this.additionalSettings_1,
             additionalSettings_2: this.additionalSettings_2,
             additionalSettings_3: this.additionalSettings_3,
             additionalSettings_4: this.additionalSettings_4,

         }
         console.log(data);
            this.json = JSON.stringify(data);
            this.show='show';
      }


  }
}
</script>

<style lang="scss">
    .form-group{
        text-align: left;

    }
    .form-group label {
        position: relative;
    }
    .form-group-block{

        display: flex;
        justify-content: flex-start;
    }
    .ico{
        position: absolute;
        top:-10px;
        right: -20px;
        cursor: pointer;
        cursor: pointer;
    }
    .text-left{
        text-align: left;
    }
    .btn-block{
        margin-top: 100px;
    }
    .container{
        display: flex;
        flex-wrap: wrap;
    }
    .aling-items-center{
        align-items: center;
    }
    .block-down{
        position: absolute;
        bottom: 1px;
    }
    textarea{
        height: 153px;width: 100%;
        display: none;
    }
    .show{
        display: block;
    }
    </style>