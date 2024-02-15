import { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFoodsOfDayContext = createContext();

const GetFoodsOfdayProvider = ({ children }) => {
  const [getFoodsOfDays, setGetFoodsOfDays] = useState([]);

  useEffect(() => {
    const getDataFromStorage = async () => {
      try {
        const existingFoods = await AsyncStorage.getItem("FoodsOfDay");
        setGetFoodsOfDays(JSON.parse(existingFoods) || []);
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
    <getFoodsOfDayContext.Provider value={{ getFoodsOfDays }}>
      {children}
    </getFoodsOfDayContext.Provider>
  );
};

export default GetFoodsOfdayProvider;
