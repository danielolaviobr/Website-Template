import styled, { css } from "styled-components";

interface PageBackgroundProps {
  backgroundURL: string;
}

interface TextProps {
  numberOfChilds: 2 | 3;
}

export const Container = styled.div``;

export const PageBackground = styled.div<PageBackgroundProps>`
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
  background: url(${(props) => props.backgroundURL}) no-repeat 50% 70%;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.div<TextProps>`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }

    90% {
      opacity: 1;
    }
  }

  animation: fadeInAnimation 1s ease-in;

  span {
    font-size: 128px;
    font-weight: bold;
    letter-spacing: -10px;
    padding: 0 5px;

    filter: brightness(0) invert(1);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    animation: colorCycle 10s ease-in-out infinite;
  }

  @keyframes colorCycle {
    0%,
    55% {
      filter: brightness(0) invert(1);
    }
    11%,
    33% {
      filter: none;
    }
  }

  ${(props) =>
    props.numberOfChilds === 3
      ? css`
          span:nth-child(1) {
            background-image: linear-gradient(90deg, #89f7fe, #66a6ff);
          }
          span:nth-child(2) {
            background-image: linear-gradient(90deg, #2af598, #f9f047);
            animation-delay: 3.33s;
          }
          span:nth-child(3) {
            background-image: linear-gradient(90deg, #f83600, #f9d423);
            animation-delay: 6.66s;
          }
        `
      : css`
          span:nth-child(1) {
            background-image: linear-gradient(90deg, #89f7fe, #66a6ff);
          }
          span:nth-child(2) {
            background-image: linear-gradient(90deg, #2af598, #f9f047);
            animation-delay: 5s;
          }
        `}
`;

export const Buttons = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 400px;

  button {
    padding: 0 8px;
    margin: 8px;
    min-width: 96px;
    height: 40px;

    font-size: 16px;
    font-weight: bold;

    background: #fff;
    color: #000;

    border: 1px solid #fff;
    border-radius: 5px;
    outline: none;

    &:hover {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    &:hover:nth-child(1) {
      background-image: linear-gradient(90deg, #98de5b, #08e1ae);
    }
    &:hover:nth-child(2) {
      background-image: linear-gradient(90deg, #0acffe, #495aff);
    }
    &:hover:nth-child(3) {
      background-image: linear-gradient(90deg, #b224ef, #7579ff);
    }
  }
`;
