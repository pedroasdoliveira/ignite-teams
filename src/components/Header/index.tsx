import { Container, Logo, BackButton, BackIcon } from "./styles";
import logoImg from "@assets/images/logo.png";

type Props = {
  showBackButton?: boolean;
};

const Header = ({ showBackButton = false }: Props) => {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon size={32} />
        </BackButton>
      )}

      <Logo source={logoImg} />
    </Container>
  );
};

export default Header;
