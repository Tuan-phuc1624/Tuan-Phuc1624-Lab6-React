import React, {useState} from 'react';
import { usePizzaContext } from '../PizzaContext';
import ToppingControl from './ToppingControl';

const PizzaBuilder = () => {
    const { state, dispatch } = usePizzaContext();
    const [selectedToppings, setSelectedToppings] = useState({});

    const handleAddTopping = (topping) => {
        dispatch({ type: 'ADD_TOPPING', topping, price: state.prices[topping] });
        setSelectedToppings(prev => ({
            ...prev,
            [topping]: (prev[topping] || 0) + 1
        }));
    };

    const handleRemoveTopping = (topping) => {
        dispatch({ type: 'REMOVE_TOPPING', topping, price: state.prices[topping] });
        setSelectedToppings(prev => {
            const newToppings = { ...prev };
            if (newToppings[topping] > 1) {
                newToppings[topping] -= 1;
            } else {
                delete newToppings[topping];
            }
            return newToppings;
        });
    };

    const handleResetPizza = () => {
        dispatch({ type: 'RESET_PIZZA' });
        setSelectedToppings({});
    };

    const renderToppingImages = () => {
        const toppingPositions = {
            Pepperoni: "1 / 1",
            Feta: "1 / 2",
            Mozzarella: "1 / 3",
            'Swiss cheese': "2 / 1",
            Spices: "2 / 2",
            Vegetables: "2 / 3",
        };

        return Object.keys(selectedToppings).map(topping => (
            <img
                key={topping}
                src={`/images/${topping.toLowerCase().replace(' ', '_')}.jpg`}
                alt={topping}
                className="topping-image"
                style={{ gridArea: toppingPositions[topping] }}
            />
        ));
    };

    return (
        <div className="pizza-builder">
            <div className="pizza-base">
                <img src="https://tse3.mm.bing.net/th?id=OIP.BjYGWlCE5ApzeMkzFb_1QwHaDk&pid=Api&P=0&h=220" alt="Pizza Base" />
                {renderToppingImages()}
            </div>
            <div className="topping-controls">
                {Object.keys(state.toppings).map(topping => (
                    <ToppingControl
                        key={topping}
                        topping={topping}
                        count={state.toppings[topping]}
                        price={state.prices[topping]}
                        onAdd={() => handleAddTopping(topping)}
                        onRemove={() => handleRemoveTopping(topping)}
                    />
                ))}
            </div>
            <div className="order-summary">
                <h3>Tổng cộng: {state.total.toFixed(2)}$</h3>
                <button className="reset-btn" onClick={handleResetPizza}>Reset pizza</button>
                <button>Thanh toán</button>
            </div>
        </div>
    );
};

export default PizzaBuilder;
