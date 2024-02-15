import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFoodsContext = createContext();

const GetFoodsProvider = ({ children }) => {
  const [getFoods, setGetFoods] = useState([]);

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

    // Listen for changes in AsyncStorage by polling
    const interval = setInterval(() => {
      getDataFromStorage();
    }, 1000); // Adjust the polling interval as needed

    return () => clearInterval(interval); // Cleanup interval
  }, []);

  return (
    <getFoodsContext.Provider value={{ getFoods }}>
      {children}
    </getFoodsContext.Provider>
  );
};

export default GetFoodsProvider;
