import React, { useState } from 'react';
// 자주 쓰는 input관련 함수 재사용 위해, hook함수로 만들기
// useInput함수 내부 내용
// 1. input창에 보여질 값 상태 변경 관리
// 2. 입력한 값이 입력창에 보여지게 띄우는 onChangeValue 함수

// useInput("초기값")
const useInput = (initialValue) => {
    // value: 현재 입력 필드의 값  setValue: 입력 필드의 값을 업데이트하는 함수
    const [value, setValue] = useState(initialValue)
    // 사용자가 입력한 값(event로 받은 입력값 e.target.value)을 setValue로 value값 업데이트
    // onChangeValue: 입력 이벤트 핸들러 함수
    const onChangeValue = (e) => {
        setValue(e.target.value)
    }
    // useInput함수를 사용하는 쪽에서, useState로 관리하기 위해 비구조화할당으로 return 보내고 함수 종료.
    return [value, setValue, onChangeValue];
};

export default useInput;

