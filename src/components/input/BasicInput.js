import React from 'react';
import Input from './style';

const BasicInput = ({...rest}) => {
    return (
        // 협업시, 아래의 옵션들 적어주기
        // size={size} shape={shape} variant={variant} color={color}
        <Input {...rest} />
    );
};

export default BasicInput;