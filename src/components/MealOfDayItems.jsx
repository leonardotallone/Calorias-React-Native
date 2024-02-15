import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/base";
import { getFoodsOfDayContext } from "../context/GetFoodsOfDayContext";
import { foodsOfDayContext } from "../context/FoodsOfDayContext";

const MealOfDayItems = () => {
  const { getFoodsOfDays } = useContext(getFoodsOfDayContext);
  const { setRemoveFoodOfDay } = useContext(foodsOfDayContext);

  // Get the current date
  const currentDate = new Date();

  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  const handleRemoveFoodOfDay = (foodOfDay) => {
    const selectedFood = {
      calories: foodOfDay.calories,
      name: foodOfDay.name,
      kcal: foodOfDay.kcal,
    };
    setRemoveFoodOfDay(selectedFood);
  };

  const getFoodsOfDaysFiltered = getFoodsOfDays.filter(
    (food) => food.date === formattedDate
  );

  return (
    <>
      {getFoodsOfDaysFiltered ? (
        getFoodsOfDaysFiltered.map((foodOfDay, index) => (
          <View style={Styles.container} key={index}>
            <View style={Styles.leftContainer}>
              <Text style={Styles.name}>{foodOfDay.name}</Text>
              <Text style={Styles.portion}>{foodOfDay.portion}</Text>
            </View>
            <View style={Styles.rightContainer}>
              <Button
                icon={
                  <Icon name="close" color="black" style={Styles.iconButton} />
                }
                radius={"lg"}
                color="#4ecb71"
                type="clear"
                onPress={() => handleRemoveFoodOfDay(foodOfDay)}
              ></Button>
              <Text style={Styles.calories}>{foodOfDay.kcal} cal</Text>
            </View>
          </View>
        ))
      ) : (
        <Text style={Styles.nothing}>No food of the day to show</Text>
      )}
    </>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor: "#ade8af",
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  portion: {
    fontSize: 13,
    color: "#808080",
    fontWeight: 800,
  },
  calories: {
    fontSize: 14,
    fontWeight: "normal",
  },
  iconButton: {
    marginBottom: -1,
  },
  nothing: {
    fontSize: 14,
  },
});

export default MealOfDayItems;
