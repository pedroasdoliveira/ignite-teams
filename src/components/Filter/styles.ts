import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export type FilterStyleProps = {
  isActive?: boolean;
};

export const Container = styled(TouchableOpacity)<FilterStyleProps>`
  ${({ theme, isActive }: { theme: DefaultTheme; isActive: boolean }) =>
    isActive &&
    css`
      border: 1px solid ${theme.COLORS.GRAY_700};
    `}

  border-radius: 6px;
  margin-left: 12px;

  height: 38px;
  width: 70px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  ${({ theme }: { theme: DefaultTheme }) => css`
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
    color: ${theme.COLORS.WHITE};
  `}

  text-transform: uppercase;    
`;
