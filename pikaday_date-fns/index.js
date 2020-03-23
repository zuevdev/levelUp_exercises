import Pikaday from 'pikaday';
import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';
import formatDistance from 'date-fns/formatDistance';
let currentDate = format(utcToZonedTime(Date.now(), 'Europe/Kiev'), 'dd MMMM yyyy');
current.innerHTML += `${currentDate}`;
const settingsForPicker = {
    previousMonth : 'Previous Month',
    nextMonth     : 'Next Month',
    months        : ['January','February','Март','April','May','June','July','August','September','October','November','December'],
    weekdays      : ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
    weekdaysShort : ['Вс','Пн','Вт','Ср','Чт','Пт','Сб']
};

let picker1 =  new Pikaday({ 
    field: document.getElementById('datepicker1'), 
    firstDay: 1,
    i18n: settingsForPicker,
    });
let picker2 =  new Pikaday({ 
    field: document.getElementById('datepicker2'), 
    firstDay: 1,
    i18n: settingsForPicker,
    });
let picker3 =  new Pikaday({ 
    field: document.getElementById('datepicker3'), 
    firstDay: 1,
    i18n: settingsForPicker,
    });

function activator(){
    if(datepicker1.value != '') datepicker2.removeAttribute("disabled");
    if(datepicker1.value == ''){
        datepicker2.setAttribute("disabled", "disabled");
        datepicker2.value = '';
        }
    if(datepicker2.value != ''){
        answer2.innerHTML = '';
       let res = formatDistance(
        new Date(picker1.toString()),
        new Date(picker2.toString())
        )
        return answer2.innerHTML = `is a ${res}`;
    }
    }

    datepicker1.addEventListener('change', activator);
    datepicker2.addEventListener('change', () => {
        answer2.innerHTML = '';
       let res = formatDistance(
        new Date(picker1.toString()),
        new Date(picker2.toString())
        )
        return answer2.innerHTML = `is a ${res}`;
    });
    datepicker3.addEventListener('change', () => {
        answer1.innerHTML = '';
       let res = formatDistance(
        new Date(picker3.toString()),
        new Date(currentDate),
        { addSuffix: true })
        return answer1.innerHTML = `is ${res}`;
    }
    )