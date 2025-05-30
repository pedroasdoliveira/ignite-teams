import React from "react";
import { Container } from "./styles";

import { TextInput, TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

type Props = TextInputProps & {
  inputRef?: React.RefObject<TextInput>;
};

const Input = ({ inputRef, ...rest }: Props) => {
    const { COLORS } = useTheme();

  return (
    <Container 
        ref={inputRef}
        placeholderTextColor={COLORS.GRAY_300} 
        {...rest} 
    />
  );
};

export default Input;
