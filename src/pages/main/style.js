// main 페이지에 관련된 스타일만 정의
import styled from "styled-components";
import { flexCenterColumn } from "../../global/common";

// 스타일 컴포넌트
// 스타일을 객체(S)에 모아서 관리하는 방법
// => 여러 스타일을 그룹화하고 네임스페이스를 통해 명확하게 구분할 때 유용합니다.
// => 여러 컴포넌트에서 S 객체를 가져와 재사용할 수 있습니다.
// => 여러 스타일을 그룹화하고 명확하게 관리해야 하는 경우에 사용

const S = {}

    S.Wrapper = styled.div`
        width: 100%;
        height: 100%;
        //common.js에 정의한 flex중앙정렬 css (import)
        ${flexCenterColumn} 
    `
    S.ImageWrapper = styled.div`
        // flex: [flex-grow] [flex-shrink] [flex-basis];
        // flex: 0.7; = 컨테이너 안에서 남은 공간을 차지할 때 이 아이템이 얼마나 성장할지를 나타냅니다
        // = 남은 공간이 있으면 이 요소는 해당 공간의 70%를 차지하게 됩니다.
        flex: 0.7;
        ${flexCenterColumn}
    `

    S.ButtonWrapper = styled.div`
        width: 100%;
        height: 110px;
        display: flex;
        flex-direction: column; // 메인축이 위에서 아래
        justify-content: space-between; // 메인축 담당 justify-content
    `

export default S;