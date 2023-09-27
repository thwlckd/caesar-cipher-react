import { useState } from "react";
import { validateWord } from "../api/freeDictionaryApi";
import styled from "styled-components";

const CaesarCipher2 = () => {
  const [msg, setMsg] = useState();
  const [decryptedMsg, setDecrypted] = useState();

  const handleClickBtn = async () => {
    console.log(await validateWord(msg));
    // setDecrypted(await validateWord(msg));
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
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>
        <Btn onClick={handleClickBtn}>Encrypt</Btn>
        {decryptedMsg && <Result>{decryptedMsg}</Result>}
      </Main>
    </MainWrapper>
  );
};

export default CaesarCipher2;

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
