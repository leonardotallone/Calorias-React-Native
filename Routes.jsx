import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from"./src/views/Home";
import AddFood from"./src/views/AddFood";

const Stack = createStackNavigator();

const routeOptions = {
    headerStyle:{
        backgroundColor: "#FFFFFF",
    }, 
};

const Routes = () => {
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" >

        <Stack.Screen name="Home" component={Home} options={{...routeOptions, headerShown:false}} />
        <Stack.Screen name="addFood" component={AddFood} options={{...routeOptions, headerShown:true, headerTitle: "",  headerBackTitle:'', headerTintColor: "#4ecb71", headerBackTitleVisible: false,
        }} />

      </Stack.Navigator>
    </NavigationContainer>
    );
};
export default Routes;