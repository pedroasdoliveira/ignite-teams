import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }: { theme: DefaultTheme }) =>
    theme.COLORS.GRAY_600};
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree)`
    width: 56px;
    color: ${({ theme }: { theme: DefaultTheme }) => theme.COLORS.GREEN_700};
    align-self: center;
`;

// export const Icon = styled(UsersThree).attrs(
//   ({ theme }: { theme: DefaultTheme }) => ({
//     size: 56,
//     color: theme.COLORS.GREEN_700,
//   })
// )`
//   align-self: center;
// `;
