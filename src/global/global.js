import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

// global style을 화면에 전체 적용시키는 로직
// GlobalStyle: 전역 스타일을 정의하며, 트리 어디에 위치해도 스타일이 전역적으로 적용됩니다. 
// 하지만 테마 값을 사용하려면 ThemeProvider 안에 두는 것이 일반적입니다.


const GlobalStyle = createGlobalStyle`

    /* 웹 폰트 적용 */
    @font-face {
        font-family: 'Pretendard-Regular';
        src: url('https://fastly.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
        font-weight: 400;
        font-style: normal;
    }

    // 리셋 변수
    ${reset}
    // 전체 선택자 *의 우선순위 가장 낮음
    * {
        text-shadow: 0 0 2px rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        // 전체선택자여서 우선순위 낮아도, font-family만큼은 !important로 무조건 적용되게함
        font-family: 'Pretendard-Regular' !important; 
        font-weight: 500; // regular font-weight가 500이라 적용 안될수 있음
        letter-spacing: -0.2px;
        text-decoration: none;
        line-height: 1.2;
        color: #131313;
    }
    // 모든 button 테두리 삭제
    button {
        border : none;
    }
`

export default GlobalStyle;