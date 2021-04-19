import styled, { keyframes } from "styled-components";
import { device } from "../../utils/mediaBreakPoints";

const roll = keyframes`
from{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg)
}
`;

const Container = styled.div`
  margin: 17vh;
  @media ${device.tablet} {
    margin: 10vh;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: 15s linear 0.5s infinite;
  animation-name: ${roll};
`;
  
const Ellipse1 = styled.div`
  position: absolute;
  height: 12vw;
  width: 4vw;
  animation: 5s infinite;
  @media ${device.tablet} {
    height: 16vw;
    width: 5.3vw;
  }
  border-radius: 50%;
  border: 0.6vw solid #5ed3f3;
  @media ${device.tablet} {
    border: 0.8vw solid #5ed3f3;
  }
  transform: rotate(30deg);
`;

const Ellipse2 = styled.div`
  position: absolute;
  height: 12vw;
  width: 4vw;
  @media ${device.tablet} {
    height: 16vw;
    width: 5.3vw;
  }
  border-radius: 50%;
  border: 0.6vw solid #5ed3f3;
  @media ${device.tablet} {
    border: 0.8vw solid #5ed3f3;
  }
  transform: rotate(-30deg);
`;
const Ellipse3 = styled.div`
  position: absolute;
  height: 12vw;
  width: 4vw;
  @media ${device.tablet} {
    height: 16vw;
    width: 5.3vw;
  }
  border-radius: 50%;
  border: 0.6vw solid #5ed3f3;
  @media ${device.tablet} {
    border: 0.8vw solid #5ed3f3;
  }
  transform: rotate(90deg);
`;
const Ball = styled.div`
  position: absolute;
  width: 2.5vw;
  height: 2.5vw;
  @media ${device.tablet} {
    width: 3.3vw;
    height: 3.3vw;
  }
  border-radius: 50%;
  background-color: #5ed3f3;
`;

const AnimatedIcon = () => {
  return (
    <div>
      <Container>
        <Ellipse1 />
        <Ellipse2 />
        <Ellipse3 />
        <Ball />
      </Container>
    </div>
  );
};

export default AnimatedIcon;
