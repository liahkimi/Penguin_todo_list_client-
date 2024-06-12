import React from 'react';
import BasicButton from '../../components/button/BasicButton';
import Input from '../../components/input/style';
import S from '../signIn/style';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {setUser, setUserStatus} from '../../moduls/user';


const SignIn = () => {

    const {
        register, handleSubmit, 
        formState : { isSubmitting, isSubmitted, errors } 
    } = useForm({mode : "onChange"})

    // email 정규식 문법
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;

    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.user.currentUser);
    const userStatus = useSelector((state) => state.user.isLogin);

    if(userStatus){
        return(
            <div>{currentUser.email}님 환영합니다.</div>
        )
    }

  


    return (
        <S.Form onSubmit={handleSubmit(async (data)=>{
            console.log(data)
            // 로그인 로직
            await fetch('http://localhost:8000/user/login', {
                method : 'POST',
                headers : {
                    'Content-Type' : 'application/json',
                },
                body : JSON.stringify({
                    email : data.email,
                    password : data.password
                })
            })
            .then( (res) => res.json() )
            .then( (res) => {
                console.log(res)
                dispatch(setUser(res.user))
                dispatch(setUserStatus(true))
            })


        })}>

            {/* email */}
            <S.Label htmlFor="email">
                <S.Title>이메일</S.Title>
                <Input 
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    id='email' type="text"
                    placeholder='아이디를 입력하세요.'
                    {...register("email", {
                        required : true,
                        pattern : {
                            value : emailRegex,
                        }
                    })}
                />
                {errors?.email?.type === 'required' && (
                    <S.ConfirmMessage>이메일을 입력해주세요.</S.ConfirmMessage>
                )}
                {errors?.email?.type === 'pattern' && (
                    <S.ConfirmMessage>이메일 양식에 맞게 입력해주세요.</S.ConfirmMessage>
                )}
            </S.Label>
            
             {/* 비밀번호 로직 */} 
             <S.Label htmlFor="password">
                <S.Title>비밀번호</S.Title>
                <Input 
                    size={"full"} shape={"small"} variant={"gray"} color={"black"}
                    id='password' type="password"
                    placeholder='비밀번호를 입력하세요.'
                    {...register("password", {
                        required : true,
                        pattern : {
                            value : passwordRegex,
                        }
                    })}
                />
                {errors?.password?.type === 'required' && (
                    <S.ConfirmMessage>비밀번호를 입력해주세요.</S.ConfirmMessage>
                )}
                {errors?.password?.type === 'pattern' && (
                    <S.ConfirmMessage>
                        소문자, 숫자, 특수문자를 각 하나씩 포함한 8자리 이상이어야 합니다.
                    </S.ConfirmMessage>
                )}
            </S.Label>
            
            {/* submit 버튼 */}
            <BasicButton 
                size={"full"} shape={"small"} variant={"black"} color={"white"}
                disabled={isSubmitting} >
                로그인
            </BasicButton>
            <Link to='/signUp'><S.SubTitle>투두 페이지가 처음이신가요?</S.SubTitle></Link>
        </S.Form>
    );
};

export default SignIn;