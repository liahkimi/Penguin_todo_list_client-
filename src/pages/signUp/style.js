import styled from 'styled-components'
import {flexCenterColumn} from './../../global/common'

const S = {}
S.SignUpWrapper = styled.div`
        ${flexCenterColumn}
        height : 600px;
    `
S.Form = styled.form`
    width : 100%;
    height: 100%;
`

S.Label = styled.label`
    display : block;
    width : 100%;
    margin : 0 0 30px 0;
`
S.Title = styled.p`
    font-size : 16px;
    color : #333;
    font-weight: 600;
    margin : 0 0 12px 0; // 타이틀과 입력칸 사이 margin 띄우기(하)
`
// 컨펌메시지 디자인
S.ConfirmMessage = styled.p`
    font-size : 12px;
    color : #b965f1;
    padding-top : 10px
`
export default S;