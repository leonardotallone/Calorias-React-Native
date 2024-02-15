import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";
import { getFoodsOfDayContext } from "../context/GetFoodsOfDayContext";

const TodayCalories = () => {
  const { getFoodsOfDays } = useContext(getFoodsOfDayContext);

  const currentDate = new Date();

  const formattedDate = `${currentDate.getFullYear()}-${
    currentDate.getMonth() + 1
  }-${currentDate.getDate()}`;

  const getFoodsOfDaysFiltered = getFoodsOfDays.filter(
    (food) => food.date === formattedDate
  );

  const consumed = getFoodsOfDaysFiltered.reduce(
    (accumulator, food) => accumulator + parseFloat(food.kcal),
    0
  );
  const remaining = 2000 - consumed;
  const percent = (consumed * 100) / 2000;

  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <CircularProgress value={percent} valueSuffix="%" />
      </View>
      <View style={Styles.rightContainer}>
        <Text style={Styles.today}>Today</Text>
        <View style={Styles.rightItem}>
          <Text style={Styles.rightItemLegend}>Total</Text>
          <Text style={Styles.rightItemValues}>2000</Text>
        </View>
        <View style={Styles.rightItem}>
          <Text style={Styles.rightItemLegend}>Consumed</Text>
          <Text style={Styles.rightItemValues}>{consumed}</Text>
        </View>
        <View style={Styles.rightItem}>
          <Text style={Styles.rightItemLegend}>Remaining Calories</Text>
          <Text style={Styles.rightItemValues}>{remaining}</Text>
        </View>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    // backgroundColor: "grey",
    // borderRadius: 12,
    padding: 12,
    // marginBottom: 12,
    flexDirection: "row",
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
  },
  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },
  today: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 14,
  },
  rightItem: {
    flexDirection: "row",
    marginBottom: 8,
  },
  rightItemLegend: {
    flex: 1,
    fontWeight: "600",
  },
  rightItemValues: {
    flex: 0.4,
    textAlign: "right",
    fontWeight: "600",
  },
});
export default TodayCalories;
