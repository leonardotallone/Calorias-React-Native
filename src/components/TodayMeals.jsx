import { useContext } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import MealOfDayItems from "../components/MealOfDayItems";
import { foodsOfDayContext } from "../context/FoodsOfDayContext";

const TodayMeals = () => {
  const { foodsOfDay } = useContext(foodsOfDayContext);

  return (
    <View style={Styles.container}>
      <ScrollView style={Styles.scroll}>
        {foodsOfDay !== undefined ? (
          foodsOfDay.map((foodOfDay, index) => <MealOfDayItems key={index} foodOfDay={foodOfDay} />)
        ) : (
          <Text style={Styles.nothing}>No food of the day to show</Text>
        )}
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
  up: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  leftUp: {
    flex: 1,
  },
  rightUp: {
    flex: 1,
    alignItems: "flex-end",
  },
  addFoodText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  down: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 24,
  },
  leftDown: {
    fontSize: 20,
    flex: 0.7,
    marginLeft: 5,
  },
  rightDown: {
    flex: 0.3,
    alignItems: "flex-end",
  },
  searchBtnTitle: {
    color: "black",
    fontSize: 14,
  },
  scroll: {
    flex: 1,
  },
  inputContainer: {
    flex: 2,
  },
  textInput: {
    fontSize: 28,
    borderBottomColor: "grey",
    borderBottomWidth: 0.2,
  },
  nothing: {
    fontSize: 14,
  },
});
