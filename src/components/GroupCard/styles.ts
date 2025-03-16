import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

import { UsersThree } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }: { theme: DefaultTheme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }: { theme: DefaultTheme }) =>
    theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GRAY_200};
`;

// export const Icon = styled(UsersThree)`
//   font-size: 32px;
//   color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GREEN_700};
// `;

export const Icon = styled(UsersThree).attrs(
  ({ theme }: { theme: DefaultTheme }) => ({
    size: 32,
    color: theme.COLORS.GREEN_700,
    weight: 'fill'
  })
)`
  margin-right: 20px;
`;
