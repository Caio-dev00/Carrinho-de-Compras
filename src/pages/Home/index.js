import React, { useContext, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Icon from '@expo/vector-icons/AntDesign';
import { useNavigation } from "@react-navigation/native";

import { CartContext } from "../../context/cartContext";
import ListProduct from "../../components/ListProducts";


export default function Home(){
    const {cart, addItemCart} = useContext(CartContext);
    const navigation = useNavigation();

    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: 'Celular',
            preco: 1000,
            descricao: 'Celular de 1000 R$'
        },
        {
            id: 2,
            nome: 'Tablet',
            preco: 2000,
            descricao: 'Tablet de 2000 R$'
        },
        {
            id: 3,
            nome: 'Mouse',
            preco: 3000,
            descricao: 'Mouse de 3000 R$'
        },
        {
            id: 4,
            nome: 'Keyboard',
            preco: 4000,
            descricao: 'Keyboard de 4000 R$'
        },
        {
            id: 5,
            nome: 'Monitor',
            preco: 5000,
            descricao: 'Monitor de 5000 R$'
        }
    ])


    function handleAddItemCart(item){
        addItemCart(item)
    }


    return(
        <View style={styles.container}>

            <View style={styles.cartContainer}>
                 <Text style={styles.title}>Lista de Produtos</Text>
                 <TouchableOpacity style={styles.bgCart} onPress={() => navigation.navigate('Cart')}>
                    {cart.length >= 1 && (
                        <View style={styles.viewDot}>
                             <Text style={styles.dot}>{cart?.length}</Text>
                        </View>
                    )}
                    <Icon name="shoppingcart" size={30} color="#000"/>
                   
                 </TouchableOpacity>
            </View>

            <FlatList
                data={produtos}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => String(item.id)}
                renderItem={({item}) => (<ListProduct data={item} addToCart={() => handleAddItemCart(item)}/>)}
            />
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    cartContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 30,
    },
    title:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000'
    },
    bgCart:{
        backgroundColor: '#236ee8',
        borderRadius: 20,
        padding: 7,
    },
    viewDot:{
        backgroundColor:'#000',
        borderRadius: 20,
        width: 25,
        height: 25,
        position: 'absolute',
        marginTop: 28,
        marginLeft: -5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    dot:{
        fontSize: 12,
        color: '#fff'
    }
})