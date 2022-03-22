// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) {
// 			return false;
// 		}
// 	}
	
// 	return true;
// }

// for (let i = 1; i <= 100; i++){
//     console.log(i);
//     if (isPrime(i)) {
//         alert(i)
//     }
// }

//// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// function getDigitsSum(num) {
// 	let sum = 0;
// 	let digits = String(num).split('');
	
// 	for (let digit of digits) {
// 		sum += Number(digit);
// 	}
	
// 	return sum;
// }

// for (let i = 1; i < 2031; i++) {
//     if (getDigitsSum(i) % 13 == 0) {
//         console.log(i)
//     }
// }

//// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function revArr(A) {
//     var answ = []
//     for (i of A) {
//         answ.push(String(i).split("").reverse().join(""))
//     }
//     return answ
// }
// console.log(revArr([123, 456, 789]));

//// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// function letC(num) {
//     return String(num).split("").length
// }
// let num1 = 123, num2 = 600
// console.log(letC(num1) == letC(num2));

//// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// console.log(!undefined);
// 1 + function() {
//     return 2;
// }
// let test = 1 + function() {
//     return 2;
// }
// alert(test())

//// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------


let Dnow = new Date, DOP = new Date;
let Dates31 = [0, 2, 4, 6, 7, 9, 11], Dates30 = [3, 5, 8, 10], Months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"], Days = ["Воскресение", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

function newMonth(num = 0) {
    $("#WS1 li").remove()
    DOP.setMonth(DOP.getMonth() + num);
    $("#WS1 p").text(Months[DOP.getMonth()] + " " + DOP.getFullYear());
    Dates();
};

function Dates(){
    let dC = 0, r;
    if (Dates31.indexOf(DOP.getMonth()) != -1) {
        dC = 31;
    }else if (Dates30.indexOf(DOP.getMonth()) != -1) {
        dC = 30;
    }else {
        dC = 28 + !(DOP.getFullYear() % 4);
    };
    if (Dnow.getMonth() == DOP.getMonth() && Dnow.getFullYear() == DOP.getFullYear()){
        r = DOP.getDate();
    };
    for (let i = 1; i <= dC; i++) {
        if (r != undefined && r == i){
            $("#WS1 ul").append($("<li>").append($("<p>").text(i + " " + Days[new Date(DOP.getFullYear(), DOP.getMonth(), i).getDay()]).css("background-color", "red")));
            continue;
        }
        $("#WS1 ul").append($("<li>").append($("<p>")).text(i + " " + Days[new Date(DOP.getFullYear(), DOP.getMonth(), i).getDay()]));
    };
};
newMonth();
$("#WS1BuL").click( () => {
    newMonth(-1);
});
$("#WS1BuR").click( () => {
    newMonth(1);
});