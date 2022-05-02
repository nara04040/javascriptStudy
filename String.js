// length : 문자열 길이
// 특정 위치에 접근
// toUpperCase(), toLowerCase()
// str.indexOf(text) : text의 어디위치에있는지 검색가능

let desc = "Hi guys. Nice to meet you.";
console.log(desc.indexOf("to"));
// 주의 : if문을 쓸때 주의를 해야한다.
if (desc.indexOf("Hi")) {
  // 이렇게 쓰면 hi의 위치가 0 이기에 인식되지않음 고로 > -1을 넣어주자
  console.log("Hi가 포함된 문장입니다.");
}

//str.slice(n,m) : 특정 범위 문자열을 골라줌 ,n에서 m 직전까지
// str.substring(n,m) : 음수 허용 x
// str.substr(n,m) : n부터 m 개를 가져옴
// str.trim() : 앞,뒤 공백 제거
// str.repeat(n) : n번 반복
