
import { useState } from 'react';
import './App.css';
import ExchangeBlock from './components/ExchangeBlock';

function App() {
  const [fromCurrency, setFromCurrency] = useState('UAH')
  return (
    <div className="wrapper">
      
      <ExchangeBlock fromCurrency={fromCurrency}/>
      <ExchangeBlock/>

    </div>
  );
}

export default App;
