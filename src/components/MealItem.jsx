import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/base";
import { foodsOfDayContext } from "../context/FoodsOfDayContext";
import { getFoodsContext } from "../context/GetFoodsContext";

const MealItem = ({ searchItems }) => {
  const { foodOfDay, setFoodOfDay } = useContext(foodsOfDayContext);
  const { getFoods } = useContext(getFoodsContext);

  const handleSaveFoodOfDay = (food) => {
    const selectedFood = {
      calories: food.calories,
      name: food.name,
      kcal: food.kcal,
    };
    setFoodOfDay(selectedFood);
  };
 

  const renderFoodItem = (food, index) => (
    <View style={Styles.container} key={index}>
      <View style={Styles.leftContainer}>
        <Text style={Styles.name}>{food.name}</Text>
        <Text style={Styles.portion}>{food.portion}</Text>
      </View>
      <View style={Styles.rightContainer}>
        <Button
          icon={<Icon name="add-circle-outline" color="black" style={Styles.iconButton} />}
          radius={"lg"}
          color="#4ecb71"
          type="clear"
          onPress={() => handleSaveFoodOfDay(food)}
        ></Button>
        <Text style={Styles.calories}>{food.kcal} cal</Text>
      </View>
    </View>
  );

  return (
    <>
      {getFoods ? (
        <>
          {searchItems ? searchItems.map(renderFoodItem) : getFoods.map(renderFoodItem)}
        </>
      ) : (
        <Text style={Styles.nothing}>No food stored at the moment</Text>
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
    // Add your styles for the "No food stored at the moment" text here
  },
});

export default MealItem;
