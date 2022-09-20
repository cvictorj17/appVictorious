import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './screens/LoginScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import ChatScreen from './screens/ChatScreen';

const Stack = createNativeStackNavigator();

const globalScreenOptions = {
  headerStyle: {backgroundColor: "#000000", },
  headerTitleStyle: { color: "white"},
  headerTitleAlign: "center",
  headerTintColor: "white",
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='Login' component={LoginScreen}/>        
        <Stack.Screen name='Register' component={RegisterScreen} />        
        <Stack.Screen name='Home' component={HomeScreen} />        
        <Stack.Screen name='Chat' component={ChatScreen} />        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


 