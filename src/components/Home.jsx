import styled from 'styled-components';
import CAESAR_CIPHER_IMG from '../assets/caesar-cipher.png';

const Home = () => {
  return (
    <MainWrapper>
      <Main>
        <Author>정보통신공학과 21720956 박창협</Author>
        <Title>{`정보보안
        caesar cipher hw`}</Title>
        <Image
          href='https://ko.wikipedia.org/wiki/%EC%B9%B4%EC%9D%B4%EC%82%AC%EB%A5%B4_%EC%95%94%ED%98%B8'
          target='_blank'
          title='카이사르 암호(위키백과)'
        >
          <img src={CAESAR_CIPHER_IMG} alt='caesar cipher' />
        </Image>
        <Discription>
          <strong>카이사르 암호(Caesar cipher)</strong> 또는{' '}
          <strong>시저 암호</strong>는 암호학에서 다루는 간단한 치환암호의
          일종이다. 카이사르 암호는 암호화하고자 하는 내용을 알파벳별로 일정한
          거리만큼 밀어서 다른 알파벳으로 치환하는 방식이다. 예를 들어 3글자씩
          밀어내는 카이사르 암호로 'COME TO ROME'을 암호화하면 'FRPH WR URPH'가
          된다. 여기서 밀어내는 글자 수는 암호를 보내는 사람과 함께 정해 더
          어려운 암호를 만들 수 있다. 이런 카이사르 암호는 순환암호라고 한다.
          예를 들어 위의 카이사르 암호로 'RUSQHUVKBVEHQIIQIYDQJEH'라는 암호를
          받았을 경우, 해독하면 'BECAREFULFORASSASINATOR', 암살자를 조심하라는
          뜻이 된다.
        </Discription>
      </Main>
    </MainWrapper>
  );
};

export default Home;

const MainWrapper = styled.div`
  display: inline-block;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Author = styled.span`
  font-size: 20px;
  font-weight: 700;
  align-self: flex-end;
`;

const Title = styled.h2`
  white-space: pre-line;
  text-align: center;
`;

const Image = styled.a`
  width: 40%;

  img {
    width: 100%;
  }
`;

const Discription = styled.p`
  width: 50%;
  font-size: 20px;
  word-break: break-all;
`;
