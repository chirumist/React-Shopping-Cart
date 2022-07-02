import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCartProp = {
    children: ReactNode
}

type ShoopingCartContext = {
    getItemQuantity: (id: number) => number,
    increaseItemQuantity: (id: number) => void,
    decreaseItemQuantity: (id: number) => void,
    removeItem: (id: number) => void
}

type CartItem = {
    id: number,
    qty: number
}

const ShoppingCartContext = createContext({} as ShoopingCartContext)

export function useShoppingCart() {
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children }: ShoppingCartProp) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const getItemQuantity = (id: number) => {
        return cartItems.find(items => items.id === id)?.qty || 0
    }
    
    const increaseItemQuantity = (id: number) => {
        setCartItems(listLitem => {
            console.log(listLitem.find(item => item.id === id))
            if(listLitem.find(item => item.id === id) == null) {
                return [...listLitem, {id, qty: 1}]
            } else {
                return listLitem.map(item => {
                    if(item.id === id) {
                        return {...item, qty: item.qty + 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const decreaseItemQuantity = (id: number) => {
        setCartItems(listLitem => {
            if(listLitem.find(item => item.id === id)?.qty === 1) {
                return cartItems.filter(item => item.id !== id)
            } else {
                return listLitem.map(item => {
                    if(item.id === id) {
                        return {...item, qty: item.qty - 1}
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeItem = (id: number) => {
        return setCartItems(() => cartItems.filter(item => item.id !== id))
    }

    return <ShoppingCartContext.Provider value={{getItemQuantity, increaseItemQuantity, decreaseItemQuantity, removeItem}}>{children}</ShoppingCartContext.Provider>
}