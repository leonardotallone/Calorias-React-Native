import { useState, useContext, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, TextInput } from "react-native";
import { Button, Icon } from "@rneui/base";
import { Formik } from "formik";

import AddFoodModal from "../components/AddFoodModal";
import Header from "../components/Header";
import MealItem from "../components/MealItem";
import { getFoodsContext } from "../context/GetFoodsContext";
// import AsyncStorage from "@react-native-async-storage/async-storage";

const AddFood = () => {
  // useEffect(() => {

  //   const removeAllItems = async () => {
  //     try {
  //       // Get all keys from AsyncStorage
  //       const keys = await AsyncStorage.getAllKeys();

  //       // Remove all items corresponding to the keys
  //       await AsyncStorage.multiRemove(keys);

  //       console.log('All items removed successfully.');
  //     } catch (error) {
  //       console.error('Error removing items:', error);
  //     }
  //   };

  //   // Call the function to remove all items
  //   removeAllItems();
  // }, []);

  const { getFoods } = useContext(getFoodsContext);
  const [visible, setVisible] = useState(false);
  const [foods, setFoods] = useState([]);
  const [searchFoods, setSearchFoods] = useState();

  console.log("GETFOODS", getFoods);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
    // refreshData();
  };

  // const refreshData = async () => {
  //   try {
  //     const foodsData = await AsyncStorage.getItem("Foods");
  //     const parsedFoods = JSON.parse(foodsData) || [];
  //     setFoods(parsedFoods);
  //   } catch (error) {
  //     console.error("Error fetching data: ", error);
  //   }
  // };

  const handleSearch = (values) => {
    setSearchFoods(
      getFoods.filter((item) => item.name.includes(values.search))
    );
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

      <Formik
        initialValues={{
          search: "",
        }}
        onSubmit={(values) => handleSearch(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View style={Styles.down}>
            <View style={Styles.leftDown}>
              <TextInput
                placeholder="beer, apple, pies, soda"
                onChangeText={(text) => {
                  handleChange("search")(text);
                  handleSearch({ search: text });
                }}
                onBlur={handleBlur("search")}
                value={values.search}
                style={Styles.textInput}
              />
            </View>
            <View style={Styles.rightDown}>
              <Button
                title="Search"
                radius={"lg"}
                color="#ade8af"
                titleStyle={Styles.searchBtnTitle}
                onPress={handleSubmit}
              ></Button>
            </View>
          </View>
        )}
      </Formik>

      <ScrollView style={Styles.scroll}>
        {searchFoods
          ? searchFoods?.map((meal, index) => (
              <MealItem key={index} meal={meal} />
            ))
          : getFoods?.map((food, index) => <MealItem key={index} food={food} />)}
      </ScrollView>

      <AddFoodModal visible={visible} closeModal={closeModal} />
    </View>
  );
};

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
});
export default AddFood;
