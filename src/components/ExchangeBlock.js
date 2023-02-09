import React from 'react'

function ExchangeBlock({currency, onChangeCurrency, price, changePrice}) {
    const list = ['UAH', 'USD', 'EUR', 'PLN']
    console.log(currency)
  return (
    <div className='block'>
        <ul>
        {list.map( el => <li 
        onClick={() => onChangeCurrency(el)}
        key={el}
        className={currency === el? 'active': ''}>{el}</li> )}
        </ul>
        <input value={price} onChange={(e) => changePrice(e.target.value)} type="number" />
        
    </div>
  )
}

export default ExchangeBlock