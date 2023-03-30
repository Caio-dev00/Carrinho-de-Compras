import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes/routes';
import CartProvider from './src/context/cartContext';

export default function App() {
  return (
   <NavigationContainer>
      <CartProvider>
          <StatusBar hidden />
          <Routes />
      </CartProvider>
   </NavigationContainer>
  );
}
