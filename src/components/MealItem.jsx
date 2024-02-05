import { View, Text, StyleSheet  } from "react-native";

import { Button, Icon } from "@rneui/base";

const MealItem = ({meal}) => {

  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <Text style={Styles.name}>{meal.name}</Text>
        <Text style={Styles.portion}>{meal.portion}</Text>
      </View>
      <View style={Styles.rightContainer}>
        <Button
          icon={<Icon name="add-circle-outline" color="black" style={Styles.iconButton}/>}
          radius={"lg"}
          color="#4ecb71"
          type="clear"
        //   onPress={handleAddCaloriesPress}
        ></Button>
         <Text style={Styles.calories}>{meal.kcal} cal</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    backgroundColor:"#ade8af",
    borderRadius:12,
    padding:12,
    marginBottom:12,
    flexDirection: "row",
    // alignItems: "center",
    // marginVertical: 24,
    // flexDirection: "row",
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
    color:"#808080",
    fontWeight: 800,
  },
  calories: {
    fontSize: 14,
    fontWeight: "normal",
  },
  iconButton:{
    marginBottom: -1 ,

  },
});
export default MealItem;
