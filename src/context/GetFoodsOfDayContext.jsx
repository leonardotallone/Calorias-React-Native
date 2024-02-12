import { useState, createContext, useEffect} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFoodsOfDayContext = createContext();

const GetFoodsOfdayProvider = ({ children }) => {
  const [getFoodsOfDays, setGetFoodsOfDays] = useState([]);
  console.log("FOOD OF DAY CONTEXT", getFoodsOfDays);
 
  useEffect(() => {
    if (getFoodsOfDays) {
    const getDataFromStorage = async () => {
      try {
        const existingFoods = await AsyncStorage.getItem("FoodsOfDay");
        setGetFoodsOfDays(JSON.parse(existingFoods) || []);
      } catch (error) {
        console.error("Error saving data: ", error);
      }
    };
    getDataFromStorage();
  }
    
  }, []);

  return (
    <getFoodsOfDayContext.Provider value={{ getFoodsOfDays }}>
      {children}
    </getFoodsOfDayContext.Provider>
  );
};

export default GetFoodsOfdayProvider;
