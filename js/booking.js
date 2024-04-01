// Javascript Date System 안쓰고 Java API를 추후에 개발해서 사용
var today = new Date();
var currentYear = today.getFullYear();
var currentMonth = today.getMonth();
var currentDate = today.getDate();
var currentDay = today.getDay()

// 이전 달의 마지막 날 날짜와 요일 구하기
var startDay = new Date(currentYear, currentMonth, 0);
var prevDate = startDay.getDate();
var prevDay = startDay.getDay();

// 이번 달의 마지막날 날짜와 요일 구하기
var endDay = new Date(currentYear, currentMonth + 1, 0);
var nextDate = endDay.getDate();
var nextDay = endDay.getDay();

console.log(prevDate, prevDay, nextDate, nextDay);

// 월 설정
calendarMonth = document.querySelector('#calendar__month')
calendarMonth.innerHTML=''
for (var i = 0; i < 12; i++) {
    if (i == currentMonth) {
        calendarMonth.innerHTML = calendarMonth.innerHTML + '<option selected>' + (i+1) + '월</option>\n';
    }
    else {
        calendarMonth.innerHTML = calendarMonth.innerHTML + '<option>' + (i+1) + '월</option>\n';
    }
}

// 년도 설정
calendarYear = document.querySelector('#calendar__year');
calendarYear.innerHTML = ''
calendarYear.innerHTML = '<option selected>' + currentYear + '</option>\n' + '<option>' + (currentYear+1) + '</option>';


function calendar_update(pDate, pDay, nDate, nDay) {
    // 날짜 설정
    calendarDate = document.querySelector('.calendar__dates');
    calendarDate.innerHTML = '';
    //// 지난달
    if (pDay+1!=7) {
        for (var i=0; i<pDay+1; i++) {
            calendarDate.innerHTML = calendarDate.innerHTML + '<div class="calendar__date calendar__date--grey"><span>' + (pDate-pDay+i) + '</span></div>\n';
        }
    }
    //// 이번달
    for (var i=1; i<nDate; i++) {
        calendarDate.innerHTML = calendarDate.innerHTML + '<div class="calendar__date current__month"><span>' + (i) + '</span></div>\n';
    }
    //// 다음달
    if (7-nDay!=7) {
        for (var i=0; i<(7-nDay); i++) {
            calendarDate.innerHTML = calendarDate.innerHTML + '<div class="calendar__date calendar__date--grey"><span>' + (i+1) + '</span></div>\n';
        }
    }

    const items = document.querySelectorAll(".current__month");
    //배열로 저장되기 때문에 forEach로 하나씩 이벤트를 등록해준다.
    items.forEach((item)=>{
        item.addEventListener('click',()=>{
            items.forEach((e)=>{
            //하나만 선택되도록 기존의 효과를 지워준다.
                e.classList.remove('calendar__date--range-end');
            })
            // 선택한 그 아이만 효과를 추가해준다.
            item.classList.add('calendar__date--range-end');
        })
    })
}

calendar_update(prevDate, prevDay, nextDate, nextDay);


function monthChangedLisntener() {
    currentMonth = $("#calendar__month option:selected").val().replace("월", "")-1
    // 이전 달의 마지막 날 날짜와 요일 구하기
    var startDay = new Date(currentYear, currentMonth, 0);
    var prevDate = startDay.getDate();
    var prevDay = startDay.getDay();
    // 이번 달의 마지막날 날짜와 요일 구하기
    var endDay = new Date(currentYear, currentMonth + 1, 0);
    var nextDate = endDay.getDate();
    var nextDay = endDay.getDay();

    calendar_update(prevDate, prevDay, nextDate, nextDay);
}
function yearChangedLisntener() {
    currentYear = $("#calendar__year option:selected").val()
    // 이전 달의 마지막 날 날짜와 요일 구하기
    var startDay = new Date(currentYear, currentMonth, 0);
    var prevDate = startDay.getDate();
    var prevDay = startDay.getDay();
    // 이번 달의 마지막날 날짜와 요일 구하기
    var endDay = new Date(currentYear, currentMonth + 1, 0);
    var nextDate = endDay.getDate();
    var nextDay = endDay.getDay();

    calendar_update(prevDate, prevDay, nextDate, nextDay);
}

const timeButtons = document.querySelectorAll(".time__button");
timeButtons.forEach((timeButton)=>{
    timeButton.addEventListener('click',()=>{
        timeButton.classList.toggle('select');
    })
})

var member=1
function memberDecrese() {
    if (member>1) {
        member--;
    }
    document.querySelector(".member").innerText = member;
}
function memberIncrese() {
    if (member<=20) {
        member++;
    }
    document.querySelector(".member").innerText = member;
}

function popup(img, h2, p) {
    document.getElementById('layer_bg').classList.toggle('showed')
    
    document.getElementById('layer_bg').querySelector("img").src = img;
    document.getElementById('layer_bg').querySelector("h2").innerText = h2;
    document.getElementById('layer_bg').querySelector("p").innerText = p;
}

const selectServices = document.querySelectorAll(".select_service");
const services = document.querySelectorAll(".service");
selectServices.forEach((selectService)=>{
    selectService.addEventListener('click',()=>{
        services.forEach((e)=> {
            e.classList.remove('select')
        })
        selectService.parentElement.parentElement.classList.add('select')
    })
})