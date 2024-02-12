import { View, StyleSheet, ScrollView } from "react-native";
import MealOfDayItems from "../components/MealOfDayItems";

const TodayMeals = () => {
  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.scroll}>
        <MealOfDayItems />
      </ScrollView>
    </View>
  );
};
export default TodayMeals;

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#FFF",
  },
  scroll: {
    flex: 1,
  },
});
