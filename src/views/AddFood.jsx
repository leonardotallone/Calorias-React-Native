import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import AddFoodModal from "../components/AddFoodModal";
import MealItem from "../components/MealItem";
import { Button, Icon } from "@rneui/base";
import { Input } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddFood = () => {
  const [visible, setVisible] = useState(false);
  const [foods, setFoods] = useState([]);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
    refreshData();
  };

  const refreshData = async () => {
    try {
      const foodsData = await AsyncStorage.getItem("Foods");
      const parsedFoods = JSON.parse(foodsData) || [];
      setFoods(parsedFoods);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const foodsData = await AsyncStorage.getItem("Foods");
        const parsedFoods = JSON.parse(foodsData) || []; // Handle case when AsyncStorage returns null
        setFoods(parsedFoods);
        console.log("FOODS IN LOCAL STORAGE", parsedFoods);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
  
    fetchFoods();
  }, []);

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
      <ScrollView style={Styles.scroll}> 
        {foods?.map((meal, index) => <MealItem key={index} meal={meal}/>)}
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
  scroll:{
    
    flex: 1,
  },
});
export default AddFood;
