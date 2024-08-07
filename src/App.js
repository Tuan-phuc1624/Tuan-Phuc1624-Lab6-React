import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { PizzaProvider } from './PizzaContext';
import PizzaBuilder from './components/PizzaBuilder';
import ToppingDetail from './components/ToppingDetail';
import './App.css';
function App() {
    return (
        <PizzaProvider>
            <Router>
                <div className="App">
                    <Routes>
                        <Route path="/" element={<PizzaBuilder />} />
                        <Route path="/topping/:topping" element={<ToppingDetail />} />
                    </Routes>
                </div>
            </Router>
        </PizzaProvider>
    );
}

export default App;
