import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon } from "@rneui/base";

const SubHeader = () => {
  const { navigate } = useNavigation();

  const handleAddCaloriesPress = () => {
    navigate("addFood");
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.leftContainer}>
        <Text style={Styles.caloriesText}>Calories</Text>
      </View>
      <View style={Styles.rightContainer}>
        <Button
          icon={<Icon name="add-circle-outline" color="white" />}
          radius={"lg"}
          color="#4ecb71"
          type="solid"
          onPress={handleAddCaloriesPress}
        ></Button>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 24,
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
  caloriesText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default SubHeader;
