
import { useEffect, useRef, useState } from 'react';
import './App.css';
import ExchangeBlock from './components/ExchangeBlock';

function App() {
  const ratesRef = useRef({})
  const [fromCurrency, setFromCurrency] = useState('UAH')
  const [toCurrency, setToCurrency] = useState('USD')
  const [fromPrice, setFromPrice] = useState(0)
  const [toPrice, setToPrice] = useState(1)

  useEffect(() => {
    fetch('https://v6.exchangerate-api.com/v6/bada389b22f98c36c86cc6bb/latest/USD')
    .then(res => res.json())
    .then(json => {
      ratesRef.current = json.conversion_rates
      onChangeToPrice(1)
    })
    .catch(err => {
      console.warn(err)
      alert('Error in the process of getting data')
    })
  }, [])




 const onChangeFromPrice = (e) =>{
  console.log(e)
  
  const result = (e/ratesRef.current[fromCurrency])*ratesRef.current[toCurrency]
  setFromPrice(e)
  setToPrice(result.toFixed(3))
 }
 

 const onChangeToPrice = (e) =>{
  console.log(e)
  
  const result = (ratesRef.current[fromCurrency]/ratesRef.current[toCurrency])*e
  setFromPrice(result.toFixed(3))
  setToPrice(e)
 }
     
 
//  const onChangeFromCurrency = (e) =>{
//   setFromCurrency(e)
//   const result = (rates[e]/rates[toCurrency])*toPrice
//   setFromPrice(result)
//  }

//  const onChangeToCurrency = (e) =>{
//   setToCurrency(e)
//   const result = (fromPrice/rates[fromCurrency])*rates[e]
//   setToPrice(result)
//  }
       
useEffect(() => {
 onChangeFromPrice(fromPrice)
}, [fromCurrency])

useEffect(() => {
  onChangeToPrice(toPrice)
 }, [toCurrency])



  return (
    <div className="wrapper">
      
      <ExchangeBlock 
      changePrice={onChangeFromPrice}
      price={fromPrice} 
      currency={fromCurrency} 
      onChangeCurrency={setFromCurrency}/>
      <ExchangeBlock 
      changePrice={onChangeToPrice} 
      price={toPrice} 
      currency={toCurrency } 
      onChangeCurrency={setToCurrency }/>

    </div>
  );
}

export default App;
