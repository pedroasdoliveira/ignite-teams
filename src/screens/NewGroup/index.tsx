import { Container, Content, Icon } from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import Button from "@components/Button";
import Input from "@components/Input";

const NewGroup = () => {
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

        <Button title="Criar" />
      </Content>
    </Container>
  );
};

export default NewGroup;
