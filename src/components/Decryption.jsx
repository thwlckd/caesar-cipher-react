import { useState } from "react";
import { decryptMsg } from "../utils/caesarCipher";
import styled from "styled-components";

const Decryption = () => {
  const [msg, setMsg] = useState("");
  const [decryptedMsg, setDecryptedMsg] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeInput = (e) => {
    setMsg(e.target.value);
  };

  const handleClickBtn = async () => {
    setIsLoading(true);
    let maxCount = 0;
    for (let i = 0; i < 26; i++) {
      const { count, solved } = await decryptMsg(i, msg);
      if (maxCount < count) {
        maxCount = count;
        setDecryptedMsg(solved);
      }
    }
    setIsLoading(false);
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
        <Result>{isLoading ? "Loading..." : decryptedMsg}</Result>
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

const Result = styled.div`
  margin-top: 30px;
  font-size: 30px;
  font-weight: bold;
`;
