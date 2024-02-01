import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";

const Home = () => {
  return (
    <View style={Styles.container}>
      <Header />
      <SubHeader />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#FFFFFF",
  },
});
export default Home;
