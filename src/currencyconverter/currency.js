import React from 'react'

export default function Currency({amount, currency, currencies, oncurrencyValueChange, oncurrencyChange}) {
  return (
    <>
    <div className='currencyInput'>
            <input type='number' 
            className="placeholder-shown:border-black-500 border-2 rounded py-1 pl-2 mt-3" 
            value = {amount}
            onChange={e => oncurrencyValueChange(e.target.value)}
            />
            <select 
            className="placeholder-shown:border-black-500 border-2 rounded py-1 pl-2" 
            name="currency" 
            value={currency}
            onChange={e => oncurrencyChange(e.target.value)}
            >
                {currencies.map((currency)=>{
                    return(
                        <option value={currency} key={currency}>{currency}</option>
                    )
                })}
            </select>

        </div>
    </>
  )
}
