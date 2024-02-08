import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/base";


const MealItem = ({ food }) => {

 
  console.log("Food LIST!, " , food)
  const [add, setAdd] = useState(true);

  // const handleSaveTodayFood = () => {};

  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <Text style={Styles.name}>{food.name}</Text>
        <Text style={Styles.portion}>{food.portion}</Text>
      </View>
      <View style={Styles.rightContainer}>
        <Button
          icon={
            <Icon
              name={add ? "add-circle-outline" : "close"}
              color="black"
              style={Styles.iconButton}
            />
          }
          radius={"lg"}
          color="#4ecb71"
          type="clear"
          // onPress={handleSaveTodayFood}
        ></Button>
        <Text style={Styles.calories}>{food.kcal} cal</Text>
      </View>
    </View>
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
});
export default MealItem;
