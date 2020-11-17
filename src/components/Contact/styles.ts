import styled, { css } from "styled-components";

interface ContainerProps {
  fieldFocus: boolean;
}

export const ContentWrapper = styled.div`
  position: relative;
  height: 120px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const Container = styled.div<ContainerProps>`
  background: #fff;

  min-width: 450px;
  height: 60px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: solid 2px transparent;
  border-radius: 5px;

  ${(props) =>
    props.fieldFocus
      ? css`
          background: linear-gradient(to right, white, white),
            linear-gradient(90deg, #f83600, #f9d423);
          background-clip: padding-box, border-box;
          background-origin: padding-box, border-box;
        `
      : css`
          border-color: #fff;
        `}
`;

export const TextInput = styled.input`
  flex: 1;
  height: 100%;
  border-radius: 5px 0 0 5px;

  padding: 0 16px;

  border: none;
  outline: none;

  font-weight: 500;
  font-size: 16px;

  &::placeholder {
    font-weight: 500;
    font-size: 16px;
  }
`;

export const Button = styled.button`
  width: 120px;
  height: 100%;
  border-radius: 0 5px 5px 0;
  background: #000;

  font-weight: 700;
  font-size: 18px;

  border: none;
  outline: none;

  color: #fff;

  &:hover {
    span {
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-image: linear-gradient(90deg, #f83600, #f9d423);
    }
  }
`;
