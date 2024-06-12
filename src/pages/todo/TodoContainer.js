import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoInsert from './TodoInsert';

// 투두리스트 - CRUD 활용

// 흐름
//1.사용자가 새로운 할 일을 추가하면,TodoInsert 컴포넌트에서 setIsTodoUpdate를 호출하여 isTodoUpdate 상태를 변경합니다.
//2.isTodoUpdate 상태가 변경되면 useEffect가 다시 실행되어 getTodos 함수를 호출합니다.
//3.getTodos 함수는 서버로부터 최신 할 일 목록을 가져와 todos 상태를 업데이트합니다.
//4.업데이트된 할 일 목록이 화면에 렌더링됩니다. 

// useEffect를 사용하는 이유
// = 주로 컴포넌트가 렌더링될 때 발생하는 부수 효과(side effects)를 처리하기 위해서.
// side-effect의 종류
// 1.데이터 페칭(Fetching data): API로부터 데이터를 가져오는 작업
// 2. 구독(Subscriptions): 데이터 스트림에 구독하는 작업
// 3. DOM 수동 조작: 직접 DOM을 변경하는 작업
// 4. 타이머 설정: 타이머를 설정하는 작업 (setIntervals())


// layout의 main단의 Todo-container
const TodoContainer = () => {
    
    // 투두리스트를 저장하는 상태
    // todos: 현재 투두리스트
    // setTodos: 새로운 투두리스트로 업데이트하는 함수
    // 할 일을 추가하거나 삭제할 때 이 상태를 업데이트한다
    const [ todos, setTodos ] = useState([])

    // 에러 발생 여부를 저장하는 상태
    // error: 에러가 발생했는지를 나타내는 플래그
    // setError: 에러 상태를 변경하는 함수
    const [ error, setError ] = useState(false);

    // 투두리스트가 업데이트되었는지를 추적하는 상태 
    // => 상태 변경시, useEffect의 getTodos() 호출되어 서버에 저장되게 하기 위해 사용
    // isTodoUpdate: 투두리스트가 업데이트되었는지를 나타내는 플래그
    // setIsTodoUpdate: 투두리스트의 업데이트 여부를 변경하는 함수
    const [ isTodoUpdate, setIsTodoUpdate ] = useState(false);

    // 투두리스트로 서버에서 데이터 페칭 해오는 함수
    const getTodos = async () => {
        try {
            // 성공시
            // 요청했을 때 받아와서 화면에 뿌리기 위해 담아두는 response 변수
            const response = await fetch('http://localhost:4000/todo');

            // json형식의 db파일인 response를 parsing해서 datas에 담아주기
            //(parsing : 주어진 데이터를 해석하고 분석하여 원하는 형식 또는 구조로 변환하는 작업)
            const datas = await response.json()
            // return으로 하나의 함수 종결 (데이터 가져오기만하고 종료)
            return datas
        } catch (error) { 
            //에러 발생시, 에러 상태 업뎃 
            // => 초기화값 error:false => 에러 발생시, error:true 로 업데이트
            // => 추후, error:true 에러 발생시 띄울 404페이지 만들때 사용하자
            setError(error)
        }
    } 

    // 데이터 페칭으로 인한 사이드이펙트 잡기 위한 useEffect
    useEffect(() => {
        getTodos().then(setTodos) // getTodos함수 실행으로 datas를 받아 setTodos로 Todos 내용 업데이트
    }, [isTodoUpdate]) 
    // 의존성 배열 (useEffect의 두번째 인수)
    // 이 배열에 포함된 값이 변경될 때마다 함수가 다시 실행된다
    // 빈 배열 []을 넣으면 처음 렌더링될 때만 실행된다


    return ( 
        <div>
            {/* 투두 추가 입력칸 */}
            <TodoInsert 
                todos={todos}
                setIsTodoUpdate={setIsTodoUpdate} 
                isTodoUpdate={isTodoUpdate}
            />
           
            {/* todos && todos.length = todos가 존재(true)하면 todos.length를 보여주는 조건 */}
             {/* 💥todos(서버의 데이터)에 데이터가 없는 경우에 나는 에러를 미연에 방지하고자 &&연산자 꼭 넣기! */}
            {<p className='sub-title'>남은 할 일:😒 {todos && todos.length}개 </p>}
            <ul>
                {todos && todos.map((todo, i) => (
                    // todo:투두리스트의 개별 투두
                    <Todo 
                        key={i} 
                        todo={todo} 
                        getTodos={getTodos}
                        setIsTodoUpdate={setIsTodoUpdate} 
                        isTodoUpdate={isTodoUpdate}
                    />
                ))}
                 {/* li태그로 구현하지 않는 이유 : 
                     li 안의 각각의 버튼들에 접근이 불가해지고,
                     어떤 li인지 판별하는 로직이 추가되는 불편함도 있어서
                     상태관리가 용이한 Todo component를 만들어 map함수로 뿌림 */}
            </ul>
        </div>
    );
};

export default TodoContainer;