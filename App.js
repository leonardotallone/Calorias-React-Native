import { StyleSheet, SafeAreaView } from "react-native";
import Routes from "./Routes";
import SaveFoodsProvider from "./src/context/SaveFoodsCoxtext";
import GetFoodsProvider from "./src/context/GetFoodsContext";

export default function App() {
  return (
    <GetFoodsProvider>
    <SaveFoodsProvider>
      <SafeAreaView style={styles.container}>
        <Routes />
      </SafeAreaView>
    </SaveFoodsProvider>
    </GetFoodsProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
