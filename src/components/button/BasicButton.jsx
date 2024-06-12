import React from 'react';
import Button from './style'; 

// 버튼 컴포넌트 만들기
// ⭐버튼의 틀만 만들고, style파일에서 여러 옵션을 줘서 재사용성 높이기!!
const BasicButton = ({children, ...rest}) => {
    // props 받아오는 여러가지 방법 : 
    // props란? properties의 줄임말로 부모 컴포넌트로부터 자식컴포넌트로 데이터의 흐름을 촉진하며,
    // 부모 컴포넌트로부터 자식 컴포넌트로 전달할 수 있는 사용자 정의 속성이다.
    // *props는 컴포넌트 내부에서 관리되며 시간이 지남에 따라 변경될 수 있는 상태(state)와 달리 
    // props는 자식 컴포넌트의 관점에서 불변이다.(자식 컴포넌트가 부모로부터 받은 props를 수정할 수 없으며 오직 읽을 수만 있다는 것을 의미한다.)
    // Props는 숫자나 문자열과 같은 단순한 데이터 타입에 국한되지 않으며 함수, 객체, 배열 또는 다른 컴포넌트까지도 될 수 있어 
    // 애플리케이션 내 복잡한 데이터 구조와 상호작용을 관리하는 데 있어 매우 다재다능하다.

    // 1. 명시적으로 props를 적어서 받기 {onClick, type}
    // => 필요한 경우 명시적으로 보여주기 위해 직접 지정해준다.

    // 2. ...rest 스프레드 문법으로 나머지 porps 한꺼번에 받기 {onClick, type, ...rest}
    // => 컴포넌트가 받을 수 있는 모든 props를 유연하게 처리하기 위해 쓰는 것.
    // 모든 가능한 속성을 명시적으로 정의하지 않고도 수용해야 하는 컴포넌트에 주로 사용한다.
    
    // 3. 명시적으로 적은 props 없이 {...rest}인 경우, 모든 props 한꺼번에 받게해준다.

    // 4. children은 React 컴포넌트의 시작 태그와 종료 태그 사이에 포함된 모든 내용을 나타낸다.
    // 부모컴포넌트에서 자식컴포넌트로 전달된 내용을 의미한다.

    // props vs, state
    //1. props : Props는 데이터와 이벤트 핸들러를 부모로부터 자식 컴포넌트로 전달하는 데 사용되며 단방향 데이터 흐름을 설정한다. 
    // 부모에 의해 설정되며 자식 컴포넌트에 의해 변경되지 않는다.
    //2. state :  State는 컴포넌트 내부의 것으로 동작과 렌더링을 제어한다. 
    // Props와 달리 상태는 가변적이며 보통 사용자의 행동이나 시스템 이벤트에 응답하여 시간이 지남에 따라 변할 수 있다.
    // => 결론 : 컴포넌트에 데이터를 전달하기 위해 props를 사용하고, 컴포넌트 내부의 데이터를 관리하기 위해 state를 사용한다.
     // 참고 : https://laurent.tistory.com/entry/React-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%EA%B0%84-%EB%8D%B0%EC%9D%B4%ED%84%B0-%EC%A0%84%EB%8B%AC%EC%9D%84-%EC%9C%84%ED%95%9C-props%EC%9D%98-%EC%9D%B4%ED%95%B4
    return (
        // ⭐팀원들을 위해 rest에서 어떤 옵션을 받아 올건지 주석 남기기
        // style.js파일의 styled된 button의 옵션 props :
        // ⭐size={size} shape={shape} variant={variant} color={color}
        <Button {...rest}>
            {children}
        </Button>
    );
};

export default BasicButton;