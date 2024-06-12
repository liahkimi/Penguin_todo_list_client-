import React from 'react';
import { useSelector } from 'react-redux';

const MyPage = () => {

    // 리덕스 상태
    const previousUrl = useSelector((state) => state.user.previousUrl);
    const currentLogin = useSelector((state) => state.user.isLogin);
    const currentUser = useSelector((state) => state.user.currentUser);

    // 현재 로그인 상태를 확인하여 아닌 경우,
    if(!currentLogin) {
        // replace={true}  : 왔던 기록을 없애버린다. history
        return <Navigate to={previousUrl} replace={true} />
    }


    return (
        <div>
            관리자 페이지
        </div>
    );
};

export default MyPage;