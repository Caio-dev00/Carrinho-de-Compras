import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { CartContext } from "../../context/cartContext";

import CartList from "../../components/CartList";

export default function Cart(){
    const {cart, addItemCart, removeItemCart, total} = useContext(CartContext);

    return(
        <View style={styles.container}>
            <FlatList
                data={cart}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                ListEmptyComponent={() => <Text style={styles.empty}>Nenhum produto foi adicionado!</Text>} 
                renderItem={({item}) => (<CartList 
                    data={item}
                    addAmount={() => addItemCart(item)}
                    removeAmount={() => removeItemCart(item)}/>
                    )}
              
                ListFooterComponent={() => <Text style={styles.total}>Total: R$ {total}</Text>}   
            />
        </View>
    )
}

const styles = StyleSheet.create({
    empty:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    total:{
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        fontWeight:'bold'
    }
})