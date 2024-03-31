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
calendarYear.innerHTML = '<option selected>' + currentYear + '</option>\n' + '<option>' + (currentYear+1) + '</option>';

// 날짜 설정
calendarDate = document.querySelector('.calendar__dates');
calendarDate.innerHTML = '';
//// 지난달
for (var i=1; i<prevDay; i++) {
    calendarDate.innerHTML = calendarDate.innerHTML + '<div class="calendar__date calendar__date--grey"><span>' + (prevDate-(prevDay-1-i)) + '</span></div>\n';
}
//// 이번달
for (var i=1; i<nextDate; i++) {
    calendarDate.innerHTML = calendarDate.innerHTML + '<div class="calendar__date current__month"><span>' + (i) + '</span></div>\n';
}
//// 다음달
for (var i=1; i<(7-nextDay-1); i++) {
    calendarDate.innerHTML = calendarDate.innerHTML + '<div class="calendar__date calendar__date--grey"><span>' + (i) + '</span></div>\n';
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

function monthChangedLinstener() {

    currentMonth = $("#calendar__month option:selected").val().replace("월", "")-1
    // 이전 달의 마지막 날 날짜와 요일 구하기
    var startDay = new Date(currentYear, currentMonth, 0);
    var prevDate = startDay.getDate();
    var prevDay = startDay.getDay();
    // 이번 달의 마지막날 날짜와 요일 구하기
    var endDay = new Date(currentYear, currentMonth + 1, 0);
    var nextDate = endDay.getDate();
    var nextDay = endDay.getDay();
    console.log(prevDate, prevDay, nextDate, nextDay);


    // 날짜 설정
    calendarDate = document.querySelector('.calendar__dates');
    calendarDate.innerHTML = '';
   //// 지난달
    for (var i=1; i<prevDay; i++) {
        calendarDate.innerHTML = calendarDate.innerHTML + '<div class="calendar__date calendar__date--grey"><span>' + (prevDate-(prevDay-1-i)) + '</span></div>\n';
    }
    //// 이번달
    for (var i=1; i<nextDate; i++) {
        calendarDate.innerHTML = calendarDate.innerHTML + '<div class="calendar__date current__month"><span>' + (i) + '</span></div>\n';
    }
    //// 다음달
    for (var i=1; i<(7-nextDay-1); i++) {
        calendarDate.innerHTML = calendarDate.innerHTML + '<div class="calendar__date calendar__date--grey"><span>' + (i) + '</span></div>\n';
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