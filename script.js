'use strict';

const getDate = function () {
  const dateA = document.getElementById('a');
  const dateB = document.getElementById('b');
  const todayDay = new Date();
  const monthIndex = todayDay.getMonth();
  const monthTitle = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
  const day = todayDay.getDay(); // 0 - 6
  const dayTitle = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  const date = todayDay.getDate().toString().padStart(2, "0");
  const year = todayDay.getFullYear();
  const month = (todayDay.getMonth() + 1).toString().padStart(2, "0");
  const h = todayDay.getHours().toString().padStart(2, "0");
  const m = todayDay.getMinutes().toString().padStart(2, "0");
  const s = todayDay.getSeconds().toString().padStart(2, "0");

  function nowTime() {
    let hour = '';
    let minutes = '';
    let second = '';
    let testH = h;
    let testM = m.toString().slice(-1);
    let testS = s.toString().slice(-1);

    console.log(testH);

    function checkHour() {
      if (testH === '1' || testH === '21') {
        return hour = "час";
      } else if (testH >= '2' && testH <= '4') {
        return hour = "часа";
      } else if (testH >= '22' && testH <= '24') {
        return hour = "часа";
      } else {
        return hour = "часов";
      }
    }

    function checkM() {
      if (testM === '1') {
        return minutes = "минута";
      } else if (testM === '2' || testM === '3' || testM === '4') {
        return minutes = "минуты";
      } else {
        return minutes = "минут";
      }
    }

    function checkS() {
      if (testS === '1') {
        return second = "секунда";
      } else if (testS === '2' || testS === '3' || testS === '4') {
        return second = "секунды";
      } else {
        return second = "секунд";
      }
    }
    
    checkHour();
    checkM();
    checkS();

    dateA.innerHTML = `Сегодня ${dayTitle[day]}, ${date} ${monthTitle[monthIndex]} ${year}, ${h} ${hour} ${m} ${minutes} ${s} ${second}`;
    dateB.innerHTML = `${date}.${month}.${year}, ${h}:${m}:${s}`;
  }
  nowTime();
};

setInterval(getDate, 1000);


// 1 секунда, 2-4 секунды, 5-0 секунд
// 1 21 час 2-4 22-24 часа 5- часов