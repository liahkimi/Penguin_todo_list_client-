import React from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import S from './style';
// 폰트어썸
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faSearch, faBell, faUser, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import { setPreviousUrl } from '../../modules/user';

// 전체적인 Layout 스타일링

const Layout = () => {

    // 비로그인 회원이 myPage 접근을 못하게 막는 로직

    const location = useLocation();
    const dispatch = useDispatch();

    // url중에서 uri만 분리
    const path = location.pathname + location.search;
    console.log(path)
    
    if(path !== "/my"){
        dispatch(setPreviousUrl(path))
    }



    return (
        <S.Background>
            <S.Wrapper>
                <S.Header>
                    <Link to={"/"}>Todo</Link>
                </S.Header>
                <S.Main>
                    {/* 페이지마다 들어가는 header,footer를 제외한 main 컨텐츠 구간 */}
                    <Outlet />
                </S.Main>
                <S.Nav>
                    {/* NavLink : 어떤 버튼을 눌렀는지 class:active로 나타내지는 link */}
                    <NavLink to={'/'}>
                        <FontAwesomeIcon icon={faHouse} className='icon'/>
                        <p>피드</p>
                    </NavLink>

                    <NavLink to={'/search'}>
                        <FontAwesomeIcon icon={faSearch} className='icon'/>
                        <p>검색</p>
                    </NavLink>

                    <NavLink to={'/bell'}>
                        <FontAwesomeIcon icon={faBell} className='icon'/>
                        <p>알림</p>
                    </NavLink>

                    <NavLink to={'/todo'}>
                        <FontAwesomeIcon icon={faPenToSquare} className='icon'/>
                        <p>할일</p>
                    </NavLink>

                    <NavLink to={"/my"}>
                        <FontAwesomeIcon icon={faUser} className='icon'/>
                        <p>My</p>
                    </NavLink>
                </S.Nav>
                
            </S.Wrapper>
        </S.Background>
    );
};

export default Layout;