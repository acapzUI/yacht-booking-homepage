// Javascript Date System 안쓰고 Java API를 추후에 개발해서 사용
// 


let today = new Date();
let now_year = today.getFullYear();
let now_month = today.getMonth();
let now_date = today.getDate();
let now_day = today.getDay()


if (now_month == 12) {
    let next_month = new Date(now_year+1, 1);
} else {
    let next_month = new Date(now_year, now_month+1);
}

if (now_month == 1) {
    let prev_month = new Date(now_year-1, 12);
} else {
    let prev_month = new Date(now_year, now_month-1);
}

let size_month = getDateDiff("".contcat(next_month).contcat("-").contcat)


const getDateDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);
    
    const diffDate = date1.getTime() - date2.getTime();
    
    return Math.abs(diffDate / (1000 * 60 * 60 * 24)); // 밀리세컨 * 초 * 분 * 시 = 일
  }