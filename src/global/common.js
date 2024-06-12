import { css } from "styled-components";

// 공통적인 css 속성
// 쓰면서 많이 쓰게 되는 것 정리

// GlobalStyle과 common.js의 css 의 차이점
//1.작성 방식 :  
//  GlobalStyle: CSS-in-JS 방식으로 작성되어 JavaScript 파일 내에서 스타일을 정의합니다.
//  common.css 또는 common.js: 전통적인 CSS 파일이나 JavaScript 내의 정적 CSS로 작성됩니다.
//2.적용 범위 :  
//  GlobalStyle: React 애플리케이션의 컴포넌트 트리에 국한되어 전역 스타일을 적용합니다.
//  common.css: HTML 문서 전체에 전역적으로 스타일을 적용합니다.
//3.동적 스타일링 :  
//  GlobalStyle: 테마나 props를 통해 동적으로 스타일을 변경할 수 있습니다.
// common.css: 정적으로 정의되며, JavaScript로 동적으로 변경할 수 없습니다.


// flex로 column기준 중앙정렬 스타일링
// css를 담은 변수
export const flexCenterColumn = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
// h1 폰트
export const textH1 = css`
    font-size: 48px;
    font-weight: 900;
` 

