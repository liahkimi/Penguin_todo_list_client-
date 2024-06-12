import React from 'react';
import useInput from '../../hooks/useInput';
import S from './style';

const TodoInsert = ({todos, isTodoUpdate, setIsTodoUpdate}) => {
    // 직접만든 hook함수 useInput을 선언하기 (import하기)
    // 💥TypeError: Converting circular structure to JSON
    // => useInput 훅함수 선언했을 때와 같은 순서로 가져와야 구조분해할당에 문제가 없어, 위의 에러가 생기지 않으니 주의!
    const [value, setValue, onChangeValue] = useInput("")

    // {
    //     "id": "1",
    //     "title": "todo 리스트 프로젝트!",
    //     "content": "이해하면 정말 쉬운 서버와의 통신",
    //     "userId": "홍길동",
    //     "isChecked": true
    //  },

    // 투두추가입력칸에 입력 후, 엔터 누르면 서버에 저장되고, 투두리스트에 추가되어 보이게 하는 함수
    const onKeyDownAddTodo = async (e) => {
        // event의 여러 key옵션들 중 Enter
        if(e.key === 'Enter'){
             // 엔터하고 확인 메시지 띄우기 => 추가 취소시 return으로 즉시 함수 종료
            if(!window.confirm('이대로 추가하시겠습니까?')) return;
            // 엔터하고 확인 메시지 띄웠을 때, 확인 누른 뒤의 로직
            // CRUD - CREATE, FETCH - POST
            await fetch('http://localhost:4000/todo', {
                method : 'POST',
                headers : {
                    'Content-type' : 'application/json'
                },
                body : JSON.stringify({
                    // 현재 투두리스트의 마지막 id번호 + 1
                    // id가 문자열이여서 문자열변환 toString()
                    //=>쿼리DB의 경우 자동으로 id값을 증가시키는 구조여서 이렇게 해줄 필요없음
                    // 지금은 json-serer라서 임의로 구현한 것
                    id : (todos.length+1).toString(),
                    title : value, // 입력한 값을 투두의 타이트로 설정
                    isChecked : false // 체크해제상태
                })
            }).then((response) => { // fetch 완료되었을 때, response 객체 받기
                if(!response.ok) return console.log(`Error ${response}`)
                // ui 업데이트를 위해 useEffect()의존성배열인 isTodoUpdate의 상태 변경하기
                setIsTodoUpdate(!isTodoUpdate)
                // 투두리스트에 입력값이 업데이트된 후, 입력창 초기화
                setValue("")
            })
        }
    }
    
    return (
        <div>
           <S.Input type='text' placeholder='할 일을 추가해 볼까요?' value={value} onChange={onChangeValue} onKeyDown={onKeyDownAddTodo}/>
        </div>
    );
};

export default TodoInsert;