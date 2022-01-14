import { useState } from "react";

const initialState = {
    cart: [],
    toggleOrders: false,
    toggle: false,
    addedIds: []
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, payload],
            addedIds: [...state.addedIds, payload.id]
        });
    };

    const removeFromCart = (payload, indexValue) => {
        setState({
            ...state,
            cart: state.cart.filter((item, index) => item.id !== payload && index !== indexValue),
            addedIds: state.addedIds.filter((item, index) => index !== indexValue)
        });
    };

    const setToggleOrders = () => {
        setState({
            ...state,
            toggleOrders: !state.toggleOrders,
            toggle: false
        })
    }

    const setToggle = () => {
        setState({
            ...state,
            toggle: !state.toggle,
            toggleOrders: false
        })
    }

    return {
        state,
        addToCart,
        removeFromCart,
        setToggleOrders,
        setToggle
    }
}

export default useInitialState;
