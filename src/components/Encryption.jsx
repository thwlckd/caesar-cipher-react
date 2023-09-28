import { useState } from "react";
import { shiftMsg } from "../utils/caesarCipher";
import styled from "styled-components";

const Encryption = () => {
  const [key, setKey] = useState(0);
  const [msg, setMsg] = useState("");
  const [encryptedMsg, setEncrypted] = useState("");

  const handleClickBtn = () => {
    setEncrypted(shiftMsg(key, msg));
  };

  return (
    <MainWrapper>
      <Main>
        <div>
          <InputLabel htmlFor="key">Shift value</InputLabel>
          <Input
            id="key"
            type="number"
            value={key}
            onChange={(e) => setKey(Number(e.target.value))}
          />
        </div>
        <div>
          <InputLabel htmlFor="msg">Message to encrypt</InputLabel>
          <Input
            id="msg"
            type="text"
            value={msg}
            onChange={(e) => setMsg(e.target.value)}
          />
        </div>
        <Btn onClick={handleClickBtn}>Encrypt</Btn>
        {encryptedMsg && <Result>{encryptedMsg}</Result>}
      </Main>
    </MainWrapper>
  );
};

export default Encryption;

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
