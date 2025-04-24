import { useNavigation } from "@react-navigation/native";
import { Container, Content, Icon } from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

const NewGroup = () => {
  const navigation = useNavigation();

  const handleNew = () => {
    navigation.navigate('players', { group: ''});
  };

  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="Nova turma"
          subtitle="crie a turma para adicionar as pessoas"
        />

        <Input placeholder="Nome da turma" />

        <Button title="Criar" onPress={handleNew} />
      </Content>
    </Container>
  );
};

export default NewGroup;
