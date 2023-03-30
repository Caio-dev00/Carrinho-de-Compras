import React, { useState, useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CartList({data, addAmount, removeAmount}){
    const [amount, setAmount] = useState(data.amount);



    function handleIncrease(){
        addAmount();
        setAmount(item => item + 1);
    }


    function handleDecrease(){
        removeAmount();
        if(amount === 0){
            setAmount(0)
            return;
        }
        setAmount(item => item - 1);
    }

    return(
        <View style={styles.container}>
            <View style={styles.viewCart}>
                <Text style={styles.title}>{data.nome}</Text>
                <Text style={styles.title}>R$ {data.preco}</Text>
            </View>

            <View style={styles.buttonCart}>
                <TouchableOpacity style={styles.button} onPress={handleDecrease}>
                    <Text style={styles.text}>-</Text>
                </TouchableOpacity>

                <Text style={styles.amount}>{amount}</Text>

                <TouchableOpacity style={styles.button} onPress={handleIncrease}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#236ee8",
        margin: 20,
        padding: 20,
        borderRadius: 10,
    },
    viewCart:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },

    title:{
        fontSize: 20,
        color: "#fff",
        fontWeight: "bold"
    },
    buttonCart: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal:100
    },
    button:{
        backgroundColor: "#fff",
        width: 30,
        justifyContent: 'center',
        alignItems:'center'
    },
    text:{
        color: "#000",
        fontSize: 22,
        fontWeight: "bold"
    },
    amount:{
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold"
    }
})