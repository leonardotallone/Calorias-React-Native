import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

export const saveFoodsContext = createContext();


const SaveFoodsProvider = ({ children }) => {
  const [saveFoods, setSaveFoods] = useState();

  useEffect(() => {
    const saveDataToStorage = async () => {
      if (saveFoods) {
        // Retrieve existing foods array from AsyncStorage
        try {
          const existingFoods = await AsyncStorage.getItem("Foods");
          let foodsArray = existingFoods ? JSON.parse(existingFoods) : [];
          // Add the new food object to the array
          foodsArray.push(saveFoods);
          // Store the updated array back in AsyncStorage
          await AsyncStorage.setItem("Foods", JSON.stringify(foodsArray));
          Alert.alert("Food saved successfully", "Thanks!");
        } catch (error) {
          console.error("Error saving data: ", error);
        }
      }
    };
    saveDataToStorage();
  }, [saveFoods]);

  return (
    <saveFoodsContext.Provider value={{ setSaveFoods }}>
      {children}
    </saveFoodsContext.Provider>
  );
};

export default SaveFoodsProvider;
