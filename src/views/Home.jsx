import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import TodayCalories from "../components/TodayCalories";
import TodayMeals from "../components/TodayMeals";

const Home = () => {
  return (
    <View style={Styles.container}>
      <Header />
      <SubHeader />
      <TodayCalories />
      <TodayMeals />
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
