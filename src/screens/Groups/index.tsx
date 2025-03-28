import { StyleSheet } from "react-native";
import { useState } from "react";
import { FlatList } from "react-native"; 

import { Container } from "./styles"

import Header from "@components/Header";
import Highlight from "@components/Highlight";
import GroupCard from "@components/GroupCard";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera do Java", "Amigos"]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
      />
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
