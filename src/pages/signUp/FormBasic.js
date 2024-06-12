import React from 'react';

// 기본적인 form태그의 사용 방법 (react-hook-form 안쓴 ver) : 
const FormBasic = () => {
    const onSubmitHandle = (e) => {
        // 1.preventDefault : 전송시, URI에 회원정보가 적힌 쿼리스트링값을 노출시키면 안되어 막음
        e.preventDefault() 
        console.log('submit 막힘', e)

        // 2.form태그에서 단일 데이터 가져오기 (유효성 검사 위해)
        // FormData 객체로 form에서 입력된 데이터를 수집하여 서버로 전송할 때 유용
        const formData = new FormData(e.target)
        // get메서드에 현재 form의 name인'id'를 넣으면, 유저가 입력한 데이터를 얻을 수 있음
        const id = formData.get('id') 
        console.log(id)

        // 3. form태그에서 다중 데이터 가져오기
        // Object : js내장객체, 모든 객체의 원형(prototype)이여서 다양한 메소드를 제공한다.
        // Object.fromEntries(formData.entries()) : form에 입력한 dat를 js 객체로 변환하는 코드
        // 1) formData : html폼에서 데이터를 가져오는 객체
        // 2) formData.entries() : formData객체의 모든 키-값 쌍을 이터레이터 형태로 반환한다.
        // 3) Object.fromEntries : 키-값 쌍의 이터러블을 받아서 새로운 js 객체를 생성한다.
        const data = Object.fromEntries(formData.entries())
        console.log(data) 
        // 1)SyntheticBaseEvent객체도 콘솔에 찍히는 이유 :
        // on~이벤트의 evnet를 출력할 경우 SyntheticBaseEvent 객체가 출력되는데 
        // 이는 React가 브라우저에서 발생하는 이벤트를 React에서 처리할 수 있는 이벤트로 
        // 한 단계 더 감싸 객체로 만들어 EventListener로 전달해주는 것이다.
        
        // 위의 Object.fromEntries(formData.entries())를 사용할때, 체크박스를 여러개 찍고 전송할 경우
        // 마지막 체크박스에 찍힌 값만 전송된 데이터라고 인식되는 문제 생기는 경우가 있음.
        // 4. 값이 제대로 찍히지 않는 checkbox 값을 가져오기
        // 'check'라는 name의 값을 모두 가져오기
        const checked = formData.getAll('check');
        console.log(checked); // ['banana' , 'melon']

    return (
            <div>
                <form action="#" onSubmit={onSubmitHandle}>
                    <div>
                        <div>
                            <span>아이디</span><input type="text" name='id' placeholder='아이디를 입력하세요.'/>
                        </div>
                        <div>
                            <span>비밀번호</span><input type="text" name='password' placeholder='비밀번호를 입력하세요.'/>
                        </div>
                        <div>
                            <span>주소</span><input type="text" name='address' placeholder='주소를 입력하세요.'/>
                        </div>
                        <div>
                            <span>핸드폰 번호</span><input type="text" name='phone' placeholder='핸드폰 번호를 입력해주세요.'/>
                        </div>
                    </div>

                    <div>
                        {/* 여러 값 선택시, 값이 제대로 찍히지 않는 경우  */}
                        <span>바나나</span><input type="checkbox" name='check' value="banana"/>
                        <span>사과</span><input type="checkbox" name='check' value="apple"/>
                        <span>멜론</span><input type="checkbox" name='check' value="melon"/>
                    </div>

                    <button>전송</button>
                </form>
            </div>
        );
    };

};

export default FormBasic;