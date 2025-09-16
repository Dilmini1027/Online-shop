import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      // Fix: compare id and options for uniqueness (for cakes/dresses with options)
      const existing = state.cartItems.find(item =>
        item.id === action.item.id &&
        JSON.stringify(item.options || {}) === JSON.stringify(action.item.options || {})
      );
      if (existing) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.id === action.item.id &&
            JSON.stringify(item.options || {}) === JSON.stringify(action.item.options || {})
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...action.item, quantity: 1 }],
      };
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        cartItems: state.cartItems.filter(item =>
          !(item.id === action.id &&
            (action.options
              ? JSON.stringify(item.options || {}) === JSON.stringify(action.options)
              : true))
        ),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.id === action.id &&
          (action.options
            ? JSON.stringify(item.options || {}) === JSON.stringify(action.options)
            : true)
            ? { ...item, quantity: action.quantity }
            : item
        ),
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Fix: support options for remove/update
  const addItem = item => dispatch({ type: "ADD_ITEM", item });
  const removeItem = (id, options) => dispatch({ type: "REMOVE_ITEM", id, options });
  const updateQuantity = (id, quantity, options) => dispatch({ type: "UPDATE_QUANTITY", id, quantity, options });

  return (
    <CartContext.Provider value={{
      cartItems: state.cartItems,
      addItem,
      removeItem,
      updateQuantity,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
