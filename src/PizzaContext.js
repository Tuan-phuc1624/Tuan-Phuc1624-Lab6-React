import React, { createContext, useReducer, useContext } from 'react';

const PizzaContext = createContext();

const initialState = {
    toppings: {
        Pepperoni: 0,
        Feta: 0,
        Mozzarella: 0,
        'Swiss cheese': 0,
        Spices: 0,
        Vegetables: 0,
    },
    prices: {
        Pepperoni: 3.5,
        Feta: 2.5,
        Mozzarella: 1.5,
        'Swiss cheese': 3.0,
        Spices: 0.5,
        Vegetables: 1.25,
    },
    total: 0.0
};

const pizzaReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TOPPING':
            return {
                ...state,
                toppings: {
                    ...state.toppings,
                    [action.topping]: state.toppings[action.topping] + 1
                },
                total: state.total + action.price
            };
        case 'REMOVE_TOPPING':
            if (state.toppings[action.topping] > 0) {
                return {
                    ...state,
                    toppings: {
                        ...state.toppings,
                        [action.topping]: state.toppings[action.topping] - 1
                    },
                    total: state.total - action.price
                };
            }
            return state;
        case 'RESET_PIZZA':
            return initialState;
        default:
            return state;
    }
};

export const PizzaProvider = ({ children }) => {
    const [state, dispatch] = useReducer(pizzaReducer, initialState);

    return (
        <PizzaContext.Provider value={{ state, dispatch }}>
            {children}
        </PizzaContext.Provider>
    );
};

export const usePizzaContext = () => useContext(PizzaContext);
