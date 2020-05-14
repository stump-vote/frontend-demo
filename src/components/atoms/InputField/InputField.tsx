import React from 'react';
import styled, { css } from 'styled-components';

const InputWrapper = styled.div(({ theme }) => {
  const { background } = theme;

  return css`
    background-color: ${background.primary};
  `;
});

const TextField = styled.input`
  padding: 6px 8px;
  // border-width: 1px;
  // border-style: solid;
  border-radius: 10px;
  border-color: black;
  height: 20px;
  margin: 10px;
  :focus {
    border-width: 4px;
    border-color: magenta;
    border-radius: 10px;
    outline: none;
  }
`;

const TextID = styled.p`
  margin: 20px;
  color: magenta;
`;

interface IInputIdentification {
  text: string;
}

export default function InputField(props: IInputIdentification) {
  const { text } = props;

  return (
    <InputWrapper>
      <TextID>{text}</TextID>
      <TextField />
    </InputWrapper>
  );
}