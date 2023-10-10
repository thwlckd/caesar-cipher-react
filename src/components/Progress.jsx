import styled from 'styled-components';

const Progress = () => {
  return (
    <ProgressContainer>
      <ProgressWrapper>
        <BallWrapper>
          <Ball />
          <Ball />
          <Ball />
        </BallWrapper>
        <LetterWrapper>
          <Letter className='l-1'>L</Letter>
          <Letter className='l-2'>o</Letter>
          <Letter className='l-3'>a</Letter>
          <Letter className='l-4'>d</Letter>
          <Letter className='l-5'>i</Letter>
          <Letter className='l-6'>n</Letter>
          <Letter className='l-7'>g</Letter>
          <Letter className='l-8'>.</Letter>
          <Letter className='l-9'>.</Letter>
          <Letter className='l-10'>.</Letter>
        </LetterWrapper>
      </ProgressWrapper>
    </ProgressContainer>
  );
};

export default Progress;

const ProgressContainer = styled.div`
  position: fixed;
  left: 50%;
  top: 0;
  width: 100%;
  height: 100vh;
  transform: translateX(-50%);
  z-index: 99;
`;

const ProgressWrapper = styled.main`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 5rem;
  background-color: #4a4a4a;
  opacity: 60%;
`;

const BallWrapper = styled.section`
  display: flex;
  justify-content: space-between;
  width: 5rem;
`;

const Ball = styled.div`
  display: inline-block;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: #ffffff;

  &:nth-last-child(1) {
    animation: progress_ball 0.6s 0.1s linear infinite;
  }

  &:nth-last-child(2) {
    animation: progress_ball 0.6s 0.2s linear infinite;
  }

  &:nth-last-child(3) {
    animation: progress_ball 0.6s 0.3s linear infinite;
  }

  @keyframes progress_ball {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0, 15px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
`;

const LetterWrapper = styled.section`
  display: flex;
  padding-top: 3rem;
`;

const Letter = styled.div`
  font-size: 2rem;
  animation-name: progress_letter;
  animation-duration: 1.6s;
  animation-iteration-count: infinite;
  animation-direction: linear;

  @keyframes progress_letter {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .l-1 {
    animation-delay: 0.48s;
  }

  .l-2 {
    animation-delay: 0.6s;
  }

  .l-3 {
    animation-delay: 0.72s;
  }

  .l-4 {
    animation-delay: 0.84s;
  }

  .l-5 {
    animation-delay: 0.96s;
  }

  .l-6 {
    animation-delay: 1.08s;
  }

  .l-7 {
    animation-delay: 1.2s;
  }

  .l-8 {
    animation-delay: 1.32s;
  }

  .l-9 {
    animation-delay: 1.44s;
  }

  .l-10 {
    animation-delay: 1.56s;
  }
`;
