import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";
import AddFoodModal from "../components/AddFoodModal";
import { Button, Icon } from "@rneui/base";
import { Input } from "@rneui/themed";

const AddFood = () => {
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <View style={Styles.container}>
      <Header />
      <View style={Styles.up}>
        <View style={Styles.leftUp}>
          <Text style={Styles.addFoodText}>Add Food</Text>
        </View>
        <View style={Styles.rightUp}>
          <Button
            icon={<Icon name="add-circle-outline" color="white" />}
            radius={"lg"}
            color="#4ecb71"
            type="solid"
            onPress={openModal}
          ></Button>
        </View>
      </View>
      <View style={Styles.down}>
        <View style={Styles.leftDown}>
          <Input placeholder="apples, pies, soda" />
        </View>
        <View style={Styles.rightDown}>
          <Button
            title="Search"
            radius={"lg"}
            color="#ade8af"
            titleStyle={Styles.searchBtnTitle}
          ></Button>
        </View>
      </View>
      <AddFoodModal visible={visible} closeModal={closeModal} />
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#FFFFFF",
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
    flex: 1,
    marginLeft: -12,
  },
  rightDown: {
    flex: 1,
    alignItems: "flex-end",
  },
  searchBtnTitle: {
    color: "black",
    fontSize: 14,
  },
});
export default AddFood;
