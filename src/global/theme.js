// theme 
// ThemeProvider: 하위 컴포넌트에 테마 객체를 전달하며, 
// styled-components에서 theme 객체에 접근할 수 있게 합니다. 
// 상위에 위치해야 하위 컴포넌트들이 테마에 접근 가능합니다.
// ThemeProvider로 감싸진 모든 컴포넌트는 theme 객체에 접근할 수 있습니다. 
// 이는 styled-components의 css 또는 styled 함수 내에서 props.theme로 접근할 수 있게 해줍니다. 


const theme = {};

    theme.PALETTE = {
        primary: {
            main: "#ffd159",
            sub: "#fff4d8",
        },
        secondary: "#f1ebf5",
        white: "#fff",
        gray: {
            100: "#F1EBF5",
            200: "#AEA8B2",
            300: "#605866",
        },
        error: "#eb6144",
        background: {
            white: "#fff",
            gray: "#f1ebf5",
            black: "#333"
        }
    }

    theme.FONT_SIZE = {
        h1: "55px",
        h2: "40px",
        h3: "30px",
        h4: "21px",
        h5: "18px",
        h6: "16px",
        h7: "12px",
    }

    theme.FONT_WEIGHT = {

        thin: "100",
        regular: "400",
        blod: "800",
        
    }

    theme.FONT_LINE = {

        h1: "75px",
        h2: "55px",
        h3: "41px",
        h4: "29px",
        h5: "25px",
        h6: "22px",
        h7: "17px",

    }

export default theme;
