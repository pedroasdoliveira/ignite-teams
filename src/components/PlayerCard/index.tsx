import { MaterialIcons } from "@expo/vector-icons";

import { Container, Name, Icon } from "./styles";
import ButtonIcon from "@components/ButtonIcon";

type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  name: string;
  onRemove: () => void;
};

const PlayerCard = ({ icon, name, onRemove }: Props) => {
  return (
    <Container>
      <Icon name={icon} size={24} />

      <Name>{name}</Name>

      <ButtonIcon icon="close" type="SECONDARY" onPress={onRemove} />
    </Container>
  );
};

export default PlayerCard;
