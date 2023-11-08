import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import colors from '../../styles/colors';
import EditInput from '../../components/input/input-sign';
import EditButton from '../../components/button/button-main';

const EditPasswordSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.p`
    font-weight: 700;
    font-size: 1.75vw;
    color: ${colors.white};
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 6vw;
    gap: 1.2vw;
`;

const StyledButton = styled(EditButton)`
    width: 11.7vw;
    margin-top: 3.4vw;
`;

const Edit = () => {
    const [originPassword, setOriginPassword] = useState('');
    const [password1, setPassword1] = useState('');
    const [password2, setPassword2] = useState('');
    const [message, setMessage] = useState('');

    const canSubmit = password1 && password2 && originPassword && password1 === password2;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password1 !== password2) {
            setMessage('새로운 비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await axios.post('/account/password', {
                origin_password: originPassword,
                new_password: password1,
            });

            if (response.status === 200) {
                setMessage('비밀번호가 변경되었습니다.');
            }
        } catch (error) {
            const errorMsg = error.response ? error.response.data.msg : '비밀번호 변경 요청에 실패했습니다.';
            setMessage(errorMsg);
        }
    };

    return (
        <EditPasswordSection>
            <Title>비밀번호 변경</Title>
            <Form onSubmit={handleSubmit}>
                <EditInput type="password" placeholder="기존의 비밀번호를 입력해주세요" value={originPassword} onChange={(e) => setOriginPassword(e.target.value)} />
                <EditInput type="password" placeholder="새로운 비밀번호를 입력해주세요" value={password1} onChange={(e) => setPassword1(e.target.value)} />
                <EditInput type="password" placeholder="새로운 비밀번호를 다시 입력해주세요" value={password2} onChange={(e) => setPassword2(e.target.value)} />
                <StyledButton buttonText="완료" disabled={!canSubmit} />
            </Form>
            {message && <p style={{ color: colors.white }}>{message}</p>}
        </EditPasswordSection>
    );
};

export default Edit;
