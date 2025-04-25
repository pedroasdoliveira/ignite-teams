import { StyleSheet } from "react-native";
import { useCallback, useState } from "react";
import { FlatList } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import { Container } from "./styles";

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";
import ListEmpty from "@components/ListEmpty";
import Button from "@components/Button";
import { groupsGetAll } from "@storage/group/groupsGetAll";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  const handleNewGroup = () => {
    navigation.navigate("new");
  };

  const fetchGroups = async () => {
    try {
      const data = await groupsGetAll();
      setGroups(data);
    } catch (error) {
      console.error(error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        renderItem={({ item }) => <GroupCard title={item} />}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há turmas cadastradas" />
        )}
        showsHorizontalScrollIndicator={false}
      />

      <Button title="Criar nova turma" onPress={handleNewGroup} />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
    fontSize: 32,
  },
});
