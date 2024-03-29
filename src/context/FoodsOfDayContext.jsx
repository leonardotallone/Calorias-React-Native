import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const foodsOfDayContext = createContext();

const FoodsOfDayProvider = ({ children }) => {
  const [foodOfDay, setFoodOfDay] = useState();
  const [removeFoodOfDay, setRemoveFoodOfDay] = useState();



  // console.log("FoodofDay CONTEXT", foodOfDay)

  useEffect(() => {
    const saveDataToStorage = async () => {
      if (foodOfDay) {
        // Retrieve existing foods array from AsyncStorage
        try {
          const existingFoods = await AsyncStorage.getItem("FoodsOfDay");
          let foodsArray = existingFoods ? JSON.parse(existingFoods) : [];
          // Add the new food object to the array
          foodsArray.push(foodOfDay);
          // Store the updated array back in AsyncStorage
          await AsyncStorage.setItem("FoodsOfDay", JSON.stringify(foodsArray));
          Alert.alert("Food added successfully", "Thanks!");
        } catch (error) {
          console.error("Error adding data: ", error);
        }
      }
    };
    saveDataToStorage();
  }, [foodOfDay]);

  useEffect(() => {
    const removeDataFromStorage = async () => {
      if (removeFoodOfDay) {
        // Retrieve existing foods array from AsyncStorage
        try {
          const existingFoods = await AsyncStorage.getItem("FoodsOfDay");
          let foodsArray = existingFoods ? JSON.parse(existingFoods) : [];

          // Filter out the object to remove from the array
          foodsArray = foodsArray.filter(
            (food) =>
             
              food.kcal !== removeFoodOfDay.kcal &&
              food.name !== removeFoodOfDay.name &&
              food.portion !== removeFoodOfDay.portion
          );

          // Store the updated array back in AsyncStorage

          await AsyncStorage.setItem("FoodsOfDay", JSON.stringify(foodsArray));
       
          Alert.alert("Food removed successfully", "Thanks!");
        } catch (error) {
          console.error("Error removing Food: ", error);
        }
      }
    };
    removeDataFromStorage();
  }, [removeFoodOfDay]);

  return (
    <foodsOfDayContext.Provider
      value={{ foodOfDay, setFoodOfDay, setRemoveFoodOfDay }}
    >
      {children}
    </foodsOfDayContext.Provider>
  );
};

export default FoodsOfDayProvider;
