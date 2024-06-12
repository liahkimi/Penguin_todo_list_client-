import styled from "styled-components";

const S = {}

    // 투두리스트의 투두 스타일
    S.Li = styled.li`
        display: flex;
        justify-content: space-between; // 아이템들의 "사이(between)"에 균일한 간격을 만들어준다.
        align-items: center; // 아이콘들 중앙정렬
        height: 40px;

        // 체크박스 클릭시, 취소선 
        // 원래 title의 className의 연산결과인 complete지만, li에서 일괄 처리함
        & .complete {
            text-decoration: line-through; //취소선을 그을 때 
            color : #ddd; //연한회색
        }

    ` 
    // 디폴트 투두의 타이틀 모습
    S.Title = styled.p`
        font-size: 16px;
        font-weight: 400;
    `
    // 
    S.SubTitle = styled.p`
        font-size: 14px;
        font-weight: 600;
        margin: 0 0 25px 0;
    `
    //
    S.Wrapper = styled.div`
        display: flex;
    `
    // 모든 icon 버튼들의 스타일
    S.Button = styled.button`
        cursor: pointer; // 버튼위에 올리면 커서상태
        background: none; 
        font-size : 16px; //icon도 font
        // 펜 아이콘
        & .pen path {
            // 아이콘은 color로 바로 적용이 안되서 path로 전달해줘야 함.
            // CSS에서 path는 SVG (Scalable Vector Graphics) 요소의 한 종류입니다. 
            // SVG는 웹에서 벡터 그래픽을 표시하기 위해 사용되는 XML 기반의 파일 형식입니다. 
            // path 요소는 SVG 내에서 특정 도형을 그리기 위한 명령어들을 포함하고 있습니다.
            color : #5f81f7;
        }
        // 삭제 아이콘
        & .trash path {
            color : #ec6863;
        }
    `
    // 투두리스트 입력창
    S.Input = styled.input`
        width: 100%;
        height: 40px;
        border: none; //테두리x
        background-color: #f5f5f5;
        padding: 0 16px; // 좌우 패딩값으로 간격 내기
        margin: 0 0 50px 0; // 상 우 하 좌 마진
        border-radius: 10px; // 둥근 테두리
        font-size: 14px;

        // 입력창안의 placeholder 폰트컬러 
        &::placeholder { // ::가상선택자-placeholder색상은 가독성 향상, 디자인 일관성을 위해 일부러 붙여주는게 관행
            color: #b5b5b5; //컬러 연하게
        }
        
    `

        // 수정모드의 체크버튼과 삭제버튼도 스타일링하기!!!
export default S;