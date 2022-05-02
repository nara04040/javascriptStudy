/**
 * 맵은 키가 있는 값이 저장된 컬렉션이다.
    new Map([iterable]) – 맵을 만듭니다.
    [key,value]쌍이 있는 iterable(예: 배열)을 선택적으로 넘길 수 있는데, 이때 넘긴 이터러블 객체는 맵 초기화에 사용됩니다.
    map.set(key, value) – 키를 이용해 값을 저장합니다.
    map.get(key) – 키에 해당하는 값을 반환합니다. key가 존재하지 않으면 undefined를 반환합니다.
    map.has(key) – 키가 있으면 true, 없으면 false를 반환합니다.
    map.delete(key) – 키에 해당하는 값을 삭제합니다.
    map.clear() – 맵 안의 모든 요소를 제거합니다.
    map.size – 요소의 개수를 반환합니다.

*일반적인 객체와 차이점 
    키와 타입에 제약이 없다. 객체도 키가 될수 있다.
    size 프로퍼티 등의 유용한 메서드나 프로퍼티가 있다.

* 셋은 중복이 없는 값을 저장할 때 쓰이는 컬렉션이다.
    new Set([iterable]) – 셋을 만듭니다. iterable 객체를 선택적으로 전달받을 수 있는데(대개 배열을 전달받음), 이터러블 객체 안의 요소는 셋을 초기화하는데 쓰입니다.
    set.add(value) – 값을 추가하고 셋 자신을 반환합니다. 셋 내에 이미 value가 있는 경우 아무런 작업을 하지 않습니다.
    set.delete(value) – 값을 제거합니다. 호출 시점에 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환합니다.
    set.has(value) – 셋 내에 값이 존재하면 true, 아니면 false를 반환합니다.
    set.clear() – 셋을 비웁니다.
    set.size – 셋에 몇 개의 값이 있는지 세줍니다.


 */
