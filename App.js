import { StyleSheet, SafeAreaView } from "react-native";
import Routes from "./Routes";
import SaveFoodsProvider from "./src/context/SaveFoodsCoxtext";
import GetFoodsProvider from "./src/context/GetFoodsContext";
import FoodsOfDayProvider from "./src/context/FoodsOfDayContext";

export default function App() {
  return (
    <GetFoodsProvider>
      <SaveFoodsProvider>
        <FoodsOfDayProvider>
          <SafeAreaView style={styles.container}>
            <Routes />
          </SafeAreaView>
        </FoodsOfDayProvider>
      </SaveFoodsProvider>
    </GetFoodsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
