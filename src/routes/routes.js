import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../pages/Home";
import Cart from "../pages/Cart";

const stack = createNativeStackNavigator();

export default function Routes(){
    return(
        <stack.Navigator>
            <stack.Screen 
            name="Home" 
            component={Home} 
            options={{
                headerShown: false
            }}
            />
            <stack.Screen 
            name="Cart" 
            component={Cart} 
            options={{
                headerStyle:{
                    backgroundColor: "#236ee8"
                },
                headerTintColor: "#fff",
                headerTitle:'Carrinho'
            }}
            />
        </stack.Navigator>
    )
}