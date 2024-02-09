import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFoodsContext = createContext();

const GetFoodsProvider = ({ children }) => {
  const [getFoods, setGetFoods] = useState();

  useEffect(() => {
    const getDataFromStorage = async () => {
      try {
        const existingFoods = await AsyncStorage.getItem("Foods");
        setGetFoods(JSON.parse(existingFoods) || []);
      } catch (error) {
        console.error("Error saving data: ", error);
      }
    };
    getDataFromStorage();
  }, [setGetFoods]);

  return (
    <getFoodsContext.Provider value={{ getFoods }}>
      {children}
    </getFoodsContext.Provider>
  );
};

export default GetFoodsProvider;
