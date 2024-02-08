import { View, Text, StyleSheet } from "react-native";
import CircularProgress from "react-native-circular-progress-indicator";

import { Button, Icon } from "@rneui/base";

const TodayCalories = ({ meal }) => {
  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <CircularProgress value={58} valueSuffix="%" />
      </View>
      <View style={Styles.rightContainer}>
        <Text style={Styles.today}>Today</Text>
        <View style={Styles.rightItem}>
          <Text style={Styles.rightItemLegend}>Total</Text>
          <Text style={Styles.rightItemValues}>2000</Text>
        </View>
        <View style={Styles.rightItem}>
          <Text style={Styles.rightItemLegend}>Consumed</Text>
          <Text style={Styles.rightItemValues}>1800</Text>
        </View>
        <View style={Styles.rightItem}>
          <Text style={Styles.rightItemLegend}>Remaining Calories</Text>
          <Text style={Styles.rightItemValues}>200</Text>
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
