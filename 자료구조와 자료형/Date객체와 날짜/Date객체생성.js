/**
 * 날짜 구성요소 설정하기
 * 아래 메서드를 사용하면 날짜 구성요소를 설정할 수 있습니다.

    setFullYear(year, [month], [date])
    setMonth(month, [date])
    setDate(date)
    setHours(hour, [min], [sec], [ms])
    setMinutes(min, [sec], [ms])
    setSeconds(sec, [ms])
    setMilliseconds(ms)
    setTime(milliseconds) (1970년 1월 1일 00:00:00 UTC부터 밀리초 이후를 나타내는 날짜를 설정)
    setTime()을 제외한 모든 메서드는 setUTCHours()같이 표준시에 따라 날짜 구성 요소를 설정해주는 메서드가 있습니다.

setHours와 같은 메서드는 여러 개의 날짜 구성요소를 동시에 설정할 수 있는데, 
메서드의 인수에 없는 구성요소는 변경되지 않습니다.
 */

//----------------------------------------------

/**
 * new Date() 를 호출하면 새로운 Date 객체가 만들어지는데, new Date() 는 다음과 같은 형태로 호출한다
 * UTCrlwns 1970년 1월 1일 0시 0분0초에서 밀리초후의 시점이 저장된 Date 객체가 반환된다.
 */

// let now = new Date();
// console.log(now);

// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);

// let date = new Date("2017-01-26");
// console.log(date);

/**
 * 날짜 구성요소 얻기
 *  -Date 객체의 메서드를 사용하면 연,월,일 등의 값을 얻을 수 있습니다.
 * 
 * getFullYear()
    -연도(네 자릿수)를 반환합니다.
    -getMonth()
    -월을 반환합니다(0 이상 11 이하).
    -getDate()
    -일을 반환합니다(1 이상 31 이하). 어! 그런데 메서드 이름이 뭔가 이상하네요.
    -getHours(), getMinutes(), getSeconds(), getMilliseconds()
    -시, 분, 초, 밀리초를 반환합니다.
    !! getYear() 말고 getFullYear()를 사용하자

* 요일을 반환해주는 메서드도 있댜!
* getDay() : 0부터 토요일을 나타내는 6까지의 숫자 중 하나를 반환한다.
* getTime() : 주어진 일시와 1970년 1월1일 00시00분00초 사이 간격의 타임스템프를 반환합니다.
* getTimezoneOffset() : 현지 시간과 표준 시간의 차이를 반환한다.
 */

// getDay()
let date = new Date();

console.log(date.getHours()); // 현재 시간 기준 시
console.log(date.getUTCHours()); // 표준 시간대

let today = new Date();
today.setHours(0);
console.log(today); // 날짜는 변경되지 않고 시만 0으로 바뀐다.

today.setHours(0, 0, 0, 0);
console.log(today); // 날짜는 변경되지 않고 시만 0으로 바뀐다.
