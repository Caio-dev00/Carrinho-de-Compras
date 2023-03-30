import React, {createContext, useContext, useState} from "react";

export const CartContext = createContext({});

export default function CartProvider({children}){

    const [cart, setCart] = useState([]);
    const [total, setTotal] = useState(0);

    function addItemCart(novoItem){
        const indexItem = cart.findIndex(item => item.id === novoItem.id);

        if(indexItem !== -1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount + 1;

            cartList[indexItem].total = cartList[indexItem].amount * cartList[indexItem].preco;

            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        let data = {
            ...novoItem,
            amount: 1,
            total: novoItem.preco
        }

        setCart(produto => [...produto, data]);
        totalResultCart([...cart, data]);
       
    }

    function removeItemCart(product){
        const indexItem = cart.findIndex(item => item.id === product.id);

        if(cart[indexItem]?.amount > 1){
            let cartList = cart;

            cartList[indexItem].amount = cartList[indexItem].amount - 1;
            cartList[indexItem].total =  cartList[indexItem].total - cartList[indexItem].preco;

            setCart(cartList);
            totalResultCart(cartList);
            return;
        }

        const removeItem = cart.filter(item => item.id !== product.id)
        setCart(removeItem);
        totalResultCart(removeItem);
    }

    function totalResultCart(items){
        let myCart = items;
        let result = myCart.reduce((acc, obj) => {return acc + obj.total }, 0)

        setTotal(result.toFixed(2));

    }


    return(
        <CartContext.Provider value={{cart, addItemCart, removeItemCart, total}}>
            {children}
        </CartContext.Provider>
    )
}