import React from 'react';
import { Link } from 'react-router-dom';

const ToppingControl = ({ topping, count, price, onAdd, onRemove }) => {
    return (
        <div className="topping-control">
            <Link to={`/topping/${topping}`} className="topping-link">{topping} ({price}$)</Link>
            <button className="remove-btn" onClick={onRemove} disabled={count === 0}>-</button>
            <span>{count}</span>
            <button className="add-btn" onClick={onAdd}>+</button>
        </div>
    );
};

export default ToppingControl;
