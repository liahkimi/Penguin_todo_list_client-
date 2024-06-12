import React from 'react';
import BasicButton from '../../components/button/BasicButton';
import { Link } from 'react-router-dom'
import S from './style';

const Main = () => {
    // {} = 연산을 처리하겠다는 의미
    // public폴더 = process.env.PUBLIC_URL = 환경변수의 public 경로
    // public폴더: 환경변수에 접근할 수 있는 폴더 (기존  img의 src는 상대경로. fort마다 달라짐) 
    // 환경변수에 fort번호를 변수로 저장해두면 fort가 달라져도 찾아서 fetch할 수 있듯이
    // PUBLIC_URL도 public폴더경로라는 뜻의 변수로 저장되어 있다.
    return (
        <S.Wrapper>
            <S.ImageWrapper>
                {/* public폴더 = process.env.PUBLIC_URL */}
                <img src={process.env.PUBLIC_URL + '/images/main/penguin.png'}/>
            </S.ImageWrapper>
            <S.ButtonWrapper>
                {/* a태그 = Link태그 (import) */}
                <Link to={'/signIn'}>
                    <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>로그인</BasicButton>
                </Link>
                <Link to={'signUp'}>
                    <BasicButton size={"full"} shape={"small"} variant={"black"} color={"white"}>회원가입</BasicButton>
                </Link>
            </S.ButtonWrapper>
        </S.Wrapper>
    );
};

export default Main;