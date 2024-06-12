import styled, { css } from "styled-components";

// 버튼만을 위한 style. 결국 export하는 것은 styled.button

// 직접 styled-components를 사용하는 방식 : 
// => 특정 컴포넌트에 다양한 스타일 변형을 적용해야 하는 경우 사용

// 배경 variant
const variantCSS = {
    black : css`
        background-color: ${({theme}) => theme.PALETTE.background["black"]}; // theme.js에서 컬러 가져옴
    `
}
// 버튼 모양
const shapeCSS = {
    // default는 빈 스타일 (빈 스타일을 정의하는 이유는 코드의 일관성과 명확성을 유지하기 위해서입니다.)
    default : css``,
    // small-button
    small : css`
        border-radius : 10px;
    `,
    //large-button
    large : css`
        border-radius: 20px;
    `,
    //big-button
    big : css`
        border-radius: 30px;
    `,
    //round-button(원형)
    round : css`
        border-radius: 50%;
    `
}

// size
const sizeCSS = {
    small: css`
        width: 64px;
        height: 32px;
        padding: 16px 0;
    `,
    medium: css`
        width: 96px;
        height: 48px;
        padding: 16px 0;
    `,
    large: css`
        width: 128px;
        height: 64px;
        padding: 16px 0;
    `,
    full: css`
        width: 100%;
        aspect-ratio: 8 / 1; //가로와 세로의 비율이 8:1
        padding: 16px 0;
    `
}

// font-color
const colorCSS = {
    white : css`
        color: #fff;
    `,
    black : css`
        color : #131313;
    `
}


// styled.button
// styled.button은 styled-components 라이브러리에서 제공하는 방법으로, 
// 버튼을 스타일링하기 위한 styled-components의 기능입니다. 
// 여기에서 styled.button은 CSS 템플릿 리터럴을 사용하여 버튼의 스타일을 정의합니다.

// {prop}) => object[prop] 구문
// prop 값에 따라 다른 스타일을 적용하는 방식입니다.
// => 구조분해할당 + 객체프로퍼티 접근 방법 중 대괄호 표기법*
// *대괄호 표기법 : const object = { key: 'value' }; console.log(object['key']); // 'value' 

const Button = styled.button`
    // variant prop에 해당하는 스타일을 variantCSS 객체에서 찾아 적용합니다.
    ${({variant})=> variantCSS[variant]}
    // 만약 shape prop이 small이라면, shapeCSS.small에 정의된 스타일이 적용됩니다.
    // shape prop이 shapeCSS 객체에서 해당하는 스타일을 가져와서 버튼에 적용되도록 합니다.
    /* <Button shape="small">Small Button</Button> */
    ${({shape})=> shapeCSS[shape]}
    ${({size})=> sizeCSS[size]}
    ${({color})=> colorCSS[color]}

    cursor: pointer;
`

export default Button;