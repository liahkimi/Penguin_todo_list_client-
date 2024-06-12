import styled from "styled-components";



const S = {};
    // 핸드폰 화면 같은 화면 셋팅
    S.Background = styled.div`
        width: 100%;
        height: 100vh; // view-height
        background-color: #f5f5f5;
        display: flex;
        justify-content: center;
        align-items: center;
    `
    // app 화면 배경
    S.Wrapper = styled.div`
        width: 430px;
        height: 800px; // 화면이 좁다면 500-600px
        background-color: #fff;
        display: flex;
        flex-direction: column;
        padding: 0 30px;
    `
    // main 단
    S.Main = styled.main`
        flex: 1;
    `

    S.Header = styled.header`
        width: 100%;
        height: 100px; //100%하면 너무 세로길이가 떨어짐
        display: flex;
        align-items: center;
        // header 안의 <link>태그가 컴파일 되면 <a>태그라서
        // & 자가 선택자 
        & a {
            font-size: 24px;
            font-weight: 600;
            // inline인 a태그를 block으로 바꿔 글씨 크기 조정함
            display: block;
        }
    `
    // 아래 내비 바
    S.Nav = styled.nav`
        width: 100%;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content : space-between;

        & a {
            font-size: 16px;
            text-align: center;

            & p {
                color : #bec4c9
            }

            .icon {
                font-size: 24px;
                padding: 4px;
                path {
                    color : #bec4c9
                }
            }
        }

        // active 됐을 때, 스타일링 (덮어씌우기)
        & .active {
            & p {
                color : #917cf0 !important; // 덮어씌워지기에 우선적으로
            }
            & path {
                color: #917cf0 !important;
            }
        }


    `

export default S;