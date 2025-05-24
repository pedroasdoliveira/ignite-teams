import { Alert, FlatList } from "react-native";
import { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";

import { Container, Form, HeaderList, NumberOfPlayers } from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import ButtonIcon from "@components/ButtonIcon";
import Input from "@components/Input";
import Filter from "@components/Filter";
import PlayerCard from "@components/PlayerCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { PlayerStorageDTO } from "@storage/player/PlayerStorageDTO";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playerAddByGroupAndTeam";

type RouteParams = {
  group: string;
};

const Players: React.FC = () => {
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);
  const [newPalyerName, setNewPlayerName] = useState<string>("");

  const { params } = useRoute();
  const { group } = params as RouteParams;

  const handleAddPlayer = async () => {
    if (newPalyerName.trim().length === 0) {
      return Alert.alert("Novo Player", "Informe o nome da pessoa.");
    }

    const newPlayer: PlayerStorageDTO = {
      name: newPalyerName,
      team,
    };

    try {
      await playerAddByGroup(newPlayer, group);
      fetchPlayersByTeam();

      return;
    } catch (error) {
      if (error instanceof AppError) {
        return Alert.alert("Novo Player", error.message);
      } else {
        console.error("Error ao adicionar player", error);
        return Alert.alert(
          "Novo Player",
          "Nao foi possível adicionar o player"
        );
      }
    }
  };

  const fetchPlayersByTeam = async () => {
    try {
      const playersByTeam = await playersGetByGroupAndTeam(group, team);
      setPlayers(playersByTeam);
      return;
    } catch (error) {
      console.error("Error ao buscar players", error);
      return Alert.alert(
        "Players",
        "Nao foi possível buscar os players do time selecionado."
      );
    }
  };

  useEffect(() => {
    fetchPlayersByTeam();
  }, [team])

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          onChangeText={setNewPlayerName}
          placeholder="Nome da pessoa"
          autoCorrect={false}
        />

        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time A", "Time B"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />

        <NumberOfPlayers>{players.length}</NumberOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard icon="person" name={item.name} onRemove={() => {}} />
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time." />
        )}
      />

      <Button title="Remover Turma" type="SECONDARY" />
    </Container>
  );
};

export default Players;
