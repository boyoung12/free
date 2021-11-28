const oneClock = document.querySelector(".clock span:first-child");
const twoClock = document.querySelector(".clock span:last-child");


function sayHello() {
	
	const week = new Array('일요일','월요일','화요일','수요일','목요일','금요일','토요일');
    const date = new Date();
	const year = String(date.getFullYear());
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
	const day = String(date.getDay());
	const month = String(date.getMonth() + 1);
	const ToDate = String(date.getDate());
	const Today = week[day];
    oneClock.innerText = `${year}년 ${month}월 ${ToDate}일` ;
	twoClock.innerText = `${hours}시 ${minutes}분 ${Today}`;
}

function byInit() {

	sayHello();
	setInterval(sayHello, 1000);

}

byInit();