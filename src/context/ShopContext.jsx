import { createContext, useEffect, useState } from "react";
import { products } from "../assets/myAssets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const ShopContext= createContext();

const ShopContextProvider = (props) => {

    const currency = "$"
    const delivery_fee = 150;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItem, setCartItem] = useState({})
    const navigate = useNavigate();

    const addToCart = async (itemId) => {
        toast.success('Item added to Collection')

        let cartData = structuredClone(cartItem)

        if(cartData[itemId]) {
            if (cartData[itemId]) {
                cartData[itemId] += 1;
            } else {
                cartData[itemId] = 1;
            }
        }
        else {
            cartData[itemId] = {}
            cartData[itemId] = 1;
        }
        setCartItem(cartData)
    }

    const getCartCount = ()=> {
        let totalCount = 0;

        for (const itemId in cartItem) {
            totalCount += cartItem[itemId]
        }

        return totalCount
    }

    const updateQuantity = async (itemId, quantity)=> {
        let cartData = structuredClone(cartItem);
        cartData[itemId] = quantity;

        setCartItem(cartData)

    }

    const getCartAmount = () => {
        let totalAmount = 0; 

       for (const itemId in cartItem) {
        const itemInfo = products.find ((products) => products._id === itemId)

        if(itemInfo) {
            totalAmount += itemInfo.price * cartItem[itemId]
        }
       }
        return totalAmount
    }

    
    const value = {
        products, delivery_fee, currency, search, setSearch, showSearch, setShowSearch, cartItem, setCartItem, addToCart, navigate, getCartAmount, getCartCount, updateQuantity
    }

    return( 
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>

    )
}
    



export default ShopContextProvider