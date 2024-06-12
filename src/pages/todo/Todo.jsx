import { faCheck, faPen, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import S from './style';

// 투두리스트의 투두
const Todo = ({todo, getTodos, setTodos, isTodoUpdate, setIsTodoUpdate}) => {
    // id : 투두를 식별하는 값, title : 투두의 제목
    const { id, title } = todo; 
    // isChecked : 할일이 완료되었는지 나타내는 체크박스의 상태
    const [ isChecked, setIsChecked ] = useState(todo.isChecked);
    // 투두가 현재 수정중인지 나타내는 상태
    // 수정중 = isEdit : true
    const [ isEdit, setIsEdit ] = useState(false);
    // input의 현재 value값
    const [ inputValue, setInputValue ] = useState(title)
    

    // 수정 모드로 전환하거나 종료
    // (수정 버튼(펜 아이콘) 클릭 시 호출되어 isEdit 상태를 반전시킨다.) 
    const handleEdit = () => {
        setIsEdit(!isEdit) 
    }

    // 수정 모드인 입력칸에 작성한 것을 입력칸에 보이게 하기
    const onChangeInput = (e) => {
        // input창에 입력한 값을 inputValue값으로 바꿔주기
        setInputValue(e.target.value)
    }

    // 수정모드에서 체크버튼 클릭시 수정한 내용을 서버에 저장하는 함수
    // (수정된 내용을 서버에 업데이트하고, 수정 모드를 종료한 후 투두리스트를 최신화한다.)
    const onChangeUpdateTodo = async () => {
        await fetch(`http://localhost:4000/todo/${id}`, {
            method : 'PUT',
            // headers에 이 데이터(파일)의 정보 기록
            headers : {
                'Content-Type' : 'application/json'
            },
            // body에 적힌 수정된 내용을 서버에 업데이트
            body : JSON.stringify({
                ...todo, // 스프레드 문법: 변경사항 없는 것은 그대로 두고, 변경사항 있는 것은 수정해줌. 없는건 추가도해줌.
                title : inputValue
            })
        }).then((response) => {
            // response는 fetch 함수가 서버에 HTTP 요청을 보낸 후 서버로부터 받는 응답 객체
            console.log(response, '리스폰스 데이터') 
            // response.ok는 HTTP 응답 코드가 200번대(성공 범위)에 있는지 여부를 나타낸다. 성공이면 true
            if(!response.ok) return console.log(`Error ${response}`)
            // 수정모드 종료
            setIsEdit(!isEdit)
            //⭐setIsTodoUpdate(!isTodoUpdate)는 isTodoUpdate 상태를 변경하여 useEffect를 트리거하고, 
            // 이를 통해 getTodos()호출로 최신 투두 리스트를 fetch하여 다시 가져오게 함으로써 수정된 내용이 화면에 반영되도록 한다.
            setIsTodoUpdate(!isTodoUpdate)
        })      
    }

    
    // 체크박스 상태를 변경하고, 그 변경사항을 서버에 업데이트하는 핸들러 함수
    const handleChecked = async () => {
        await fetch(`http://localhost:4000/todo/${id}`, {
            method : 'PUT', 
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                ...todo,
                isChecked : !isChecked 
            })
        }).then((response) => {
            // 응답을 받은 후, 응답이 성공적인지 확인하고, 성공하면 상태를 업데이트하여 UI에 반영한다.
            if(!response.ok) return console.log(`error ${response}`)
            // isChecked가 false->true 변경시, S.Title 태그의 className이 complete가 되면서 style이 적용되어
            // UI에 취소선 그어진 모습으로 반영된다.
            setIsChecked(!isChecked)
        })        
    } //==> ❤️찜하기버튼 작동에 활용: 찜하기버튼의 isChecked가 true인 데이터 모두 반복문으로 들고 오는 로직 짜기



    // 삭제버튼 클릭 시, 해당 항목이 서버와 클라이언트 모두에서 제거되는 핸들러 함수
    const handleRemoveTodo = async () => {
        // 사용자에게 삭제할지  재확인
        // 삭제버튼 클릭하여 해당 함수 호출시, 윈도우에서 문구 띄워준다. 
        if(window.confirm('정말로 삭제하시겠습니까?')){ 
            // console.log(id) - 내가 삭제버튼 누른 것의 id가 실제 id와 같은지 테스트

            // 사용자 확인시, fetch DELETE 요청보내기 
            // jsonplaceholder가서 봐도, 특정 페이지의 특정 id인 객체를 확인하려면 상단링크에
            // http://localhost:4000/todo/${id} <- 이런 형식으로 적어야 보여진다.
            await fetch(`http://localhost:4000/todo/${id}`, {
                method : 'DELETE' 
            }).then((response) => {
                if(response.ok) { // 정상적으로 삭제가 된 경우
                    // 화면 업데이트
                    // isTodoUpdate의 상태를 반전시킴으로써
                     // useEffect를 트리거하여 
                     // getTodo()를 호출하여 
                     // 최신 투두리스트를 fetch하여 다시 가져오게 함으로써 수정된 내용이 화면에 반영되도록 한다.
                    setIsTodoUpdate(!isTodoUpdate)
                }
            })
        }
    }

    return (
        <S.Li>
            <S.Wrapper>
                <input type="checkbox" checked={isChecked} onChange={handleChecked}/>
                 {/* 조건이 1개면 삼항연산자 사용!*/}
                { isEdit ? (
                    // 수정모드일 때, 입력칸 보여주기
                    <>
                        <input className='update-input' type="text" value={inputValue} onChange={onChangeInput}/>
                    </>
                ) : (
                    <>
                        {/* 수정모드 종료일 때,
                            isChecked상태가 true면 complete라는 className을 달아 취소선이 보이게하고, 
                            아니면 달지 않게 구현하여 취소되지 않은 상태로 보여주기.
                            (어떤 조건이면 보이게 할때 이런식으로 리액트의 연산을{} 사용하도록 하자)
                            */}
                        <S.Title className={ isChecked ? "complete" : ""}>
                            {title}   
                        </S.Title>
                    </>
                ) }

            </S.Wrapper>
            <S.Wrapper>
                {/* 펜아이콘 클릭시, isEdit가 true면 check버튼과 x버튼 추가로 보이게 하기 */}
                { isEdit ? (
                    <>
                        {/* 체크버튼 (수정 확인버튼) */}
                        <S.Button onClick={onChangeUpdateTodo}>
                            <FontAwesomeIcon icon={faCheck} className='check' />
                        </S.Button>
                        {/* x버튼 (수정 취소버튼) 
                            x버튼 클릭시 isEdit의 상태 false로 바뀌어, 기존화면(아래코드처럼)으로 보임 */}
                        <S.Button onClick={handleEdit}>
                            <FontAwesomeIcon icon={faX} className='exit' />
                        </S.Button>
                    </>
                ) : ( 
                    <>
                        {/* 펜아이콘버튼(수정버튼) */}
                        <S.Button onClick={handleEdit}>
                            <FontAwesomeIcon icon={faPen} className='pen' />
                        </S.Button>
                    </>
                ) }
                {/* isEdit와 상관없이 항상 보이는 삭제버튼 */}
                <S.Button onClick={handleRemoveTodo}>
                    <FontAwesomeIcon icon={faTrash} className='trash'/>
                </S.Button>
            </S.Wrapper>
        </S.Li>
    );
};

export default Todo;