/**
 * 1. 구조분해할당을 사용하면 객체나 배열을 변수로 연결할수있다!
 * 
 * 2. 객체 분해하기 (t1참고)
 * 
 * 3. 배열 분해하기 (t2참고)
 * 
 * 할당 연산자 좌측패턴과 우측 구조가 같으면 중첨배열이나 객체가 있는 복잡한 구조에서도 원하는 데이터를 뽑아낼수있다!
 */

// t1

let {prop : varName = default, ...rest} = object
// object의 프로퍼티 prop의 값은 변수 varName에 할당되는데, object에 prop가 없으면 default가 varName에 할당!
// 연결할 변수가 없는 나머지 프로퍼티는 객체 rest에 복사된다!


// t2
let [item1 = default, item2, ...rest] = array
// 첫 요소는 item1에 두번째 요소는 변수 item2에 할당! 나머지는 ...rest에 저장된다.
