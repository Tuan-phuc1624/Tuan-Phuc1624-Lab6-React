import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePizzaContext } from '../PizzaContext';

const ToppingDetail = () => {
    const { topping } = useParams();
    const { state } = usePizzaContext();
    const navigate = useNavigate();

    const toppingImage = `/images/${topping.toLowerCase().replace(' ', '_')}.jpg`;

    return (
        <div className="topping-detail">
            <h2>Chi tiết {topping}</h2>
            <p>Giá: {state.prices[topping]}$</p>
            <p>Số lượng hiện tại: {state.toppings[topping]}</p>
            <img src={toppingImage} alt={topping} />
            <button onClick={() => navigate('/')}>Quay lại</button>
        </div>
    );
};

export default ToppingDetail;
