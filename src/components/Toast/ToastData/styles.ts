import styled from "styled-components";
import { animated } from "react-spring";

export const Container = styled(animated.div)`
  min-width: 250px;
  height: 40px;
  background: #000;
  border-radius: 10px;
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    padding: 0 8px;
  }
`;
