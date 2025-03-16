import { StyleSheet } from "react-native";
import { Container } from "./styles"
import Header from "@components/Header";

export function Groups() {
  return (
    <Container>
      <Header />
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
