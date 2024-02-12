import { StyleSheet, SafeAreaView } from "react-native";
import Routes from "./Routes";
import SaveFoodsProvider from "./src/context/SaveFoodsCoxtext";
import GetFoodsProvider from "./src/context/GetFoodsContext";
import FoodsOfDayProvider from "./src/context/FoodsOfDayContext";
import GetFoodsOfdayProvider from "./src/context/GetFoodsOfDayContext";

export default function App() {
  return (
    <GetFoodsOfdayProvider>
      <GetFoodsProvider>
        <SaveFoodsProvider>
          <FoodsOfDayProvider>
            <SafeAreaView style={styles.container}>
              <Routes />
            </SafeAreaView>
          </FoodsOfDayProvider>
        </SaveFoodsProvider>
      </GetFoodsProvider>
    </GetFoodsOfdayProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
