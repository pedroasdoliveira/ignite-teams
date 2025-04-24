import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from "@assets/images/logo.png";

type Props = {
  showBackButton?: boolean;
};

const Header = ({ showBackButton = false }: Props) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.navigate("groups");
  }

  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={handleGoBack} >
          <BackIcon size={32} />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
};

export default Header;
