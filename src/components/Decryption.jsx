import { useState } from "react";
import { decryptMsg } from "../utils/caesarCipher";
import styled from "styled-components";

const Decryption = () => {
  const [msg, setMsg] = useState();
  const [decryptedMsg, setDecryptedMsg] = useState();
  const [isValidCount, setIsValidCount] = useState(0);

  const handleChangeInput = (e) => {
    setIsValidCount(0);
    setMsg(e.target.value);
  };

  const handleClickBtn = async () => {
    for (let i = 0; i < 26; i++) {
      const { count, solved } = await decryptMsg(i, msg);
      if (isValidCount < count) {
        setIsValidCount(() => count);
        setDecryptedMsg(solved);
        console.log(solved, isValidCount, count);
      }
    }
  };

  return (
    <MainWrapper>
      <Main>
        <div>
          <InputLabel htmlFor="msg">Message to decrypt</InputLabel>
          <Input
            id="msg"
            type="text"
            value={msg}
            onChange={handleChangeInput}
          />
        </div>
        <Btn onClick={handleClickBtn}>Encrypt</Btn>
        {decryptedMsg && <Result>{decryptedMsg}</Result>}
      </Main>
    </MainWrapper>
  );
};

export default Decryption;

const MainWrapper = styled.main`
  display: inline-block;
  position: fixed;
  top: 70px;
  width: calc(100vw - 150px);
  height: calc(100vh - 70px);
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
  color: #333842;
`;

const Input = styled.input`
  margin-bottom: 20px;
  font-size: 20px;
  color: #333842;
`;

const Btn = styled.button`
  padding: 20px 30px;
  border: none;
  border-radius: 20px;
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;
  background-color: #bdbfc1;
  cursor: pointer;

  &:hover {
    background-color: #333842;
  }
`;

const Result = styled.div`
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
  color: #333842;
`;
