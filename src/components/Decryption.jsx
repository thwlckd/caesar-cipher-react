import { useState } from 'react';
import { decryptMsg } from '../utils/caesarCipher';
import styled from 'styled-components';

const Decryption = () => {
  const [msg, setMsg] = useState('');
  const [decryptedMsg, setDecryptedMsg] = useState('');

  const handleChangeInput = (e) => {
    setMsg(e.target.value);
  };

  const handleClickBtn = () => {
    setDecryptedMsg(decryptMsg(msg));
  };

  return (
    <MainWrapper>
      <Main>
        <div>
          <InputLabel htmlFor='msg'>Message to decrypt</InputLabel>
          <Input
            id='msg'
            type='text'
            value={msg}
            onChange={handleChangeInput}
          />
        </div>
        <Btn onClick={handleClickBtn}>Decrypt</Btn>
        <Result>{decryptedMsg}</Result>
      </Main>
    </MainWrapper>
  );
};

export default Decryption;

const MainWrapper = styled.main`
  display: inline-block;
  position: fixed;
  top: 70px;
  min-width: calc(100vw - 150px);
  padding-top: 30px;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputLabel = styled.label`
  margin-right: 10px;
  font-size: 20px;
`;

const Input = styled.input`
  margin-bottom: 20px;
  font-size: 20px;
  border-radius: 20px;
  padding-left: 10px;
`;

const Btn = styled.button`
  padding: 20px 30px;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
`;

const Result = styled.p`
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
`;
