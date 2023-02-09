import React from 'react'

function ExchangeBlock({currency}) {
    const list = ['UAH', 'USD', 'EUR', 'PLN']
  return (
    <div className='block'>
        <ul>
        {list.map( el => <li key={el}  className='active'>{el}</li> )}
        </ul>
        <input type="number" />
        
    </div>
  )
}

export default ExchangeBlock