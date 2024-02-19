import React, { useEffect, useState } from 'react';
import Currency from './currency';
import axios from 'axios';

const API_KEY = "fca_live_C1opBliT2cKJpSK7LiB4Ox4NHE9Mpa3ZxUwk3oNO";
const API_URL = `https://api.freecurrencyapi.com/v1/latest?base=USD&apikey=${API_KEY}`;

// https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_C1opBliT2cKJpSK7LiB4Ox4NHE9Mpa3ZxUwk3oNO


function CurrencyConverter() {
    const [currencyOne, setCurrencyOne] = useState("USD");
    const [currencyTwo, setCurrencyTwo] = useState("INR");
    const [currencyValueOne, setCurrencyValueOne] = useState(1);
    const [currencyValueTwo, setCurrencyValueTwo] = useState(1);
    const [currencyRates, setCurrencyRates] = useState({});
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        // Check if currency rates exist in localStorage
        const cachedCurrencyRates = localStorage.getItem('currencyRates');
        if (cachedCurrencyRates) {
            setCurrencyRates(JSON.parse(cachedCurrencyRates));
            setLoading(false);
            setCurrencyValueTwo(currencyValueOne * (currencyRates[currencyTwo] / currencyRates[currencyOne]));
        } else {
            axios.get(API_URL)
            .then(response => {
                const { data } = response.data;
                localStorage.setItem('currencyRates', JSON.stringify(data)); // Cache the currency rates
                setCurrencyRates(data);
                setLoading(false);
                setCurrencyValueTwo(currencyValueOne * (currencyRates[currencyTwo] / currencyRates[currencyOne]));
                })
                .catch(error => {
                    console.log(error);
                    setLoading(false);
                });
        }
    }, [currencyValueOne, currencyRates, currencyTwo, currencyOne]);

    const handleChangeCurrencyValueOne = (newCurrencyValueOne) => {
        setCurrencyValueOne(newCurrencyValueOne);
        setCurrencyValueTwo(newCurrencyValueOne * (currencyRates[currencyTwo] / currencyRates[currencyOne]));
    }

    const handleChangeCurrencyValueTwo = (newCurrencyValueTwo) => {
        setCurrencyValueTwo(newCurrencyValueTwo);
        setCurrencyValueOne(newCurrencyValueTwo * (currencyRates[currencyOne] / currencyRates[currencyTwo]));
    }

    const handleChangeCurrencyOne = (newCurrencyOne) => {
        setCurrencyOne(newCurrencyOne);
        setCurrencyValueTwo(currencyValueOne * (currencyRates[currencyTwo] / currencyRates[newCurrencyOne]));
    }

    const handleChangeCurrencyTwo = (newCurrencyTwo) => {
        setCurrencyTwo(newCurrencyTwo);
        setCurrencyValueTwo(currencyValueOne * (currencyRates[newCurrencyTwo] / currencyRates[currencyOne]));
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline m-5">Currency Converter</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <Currency
                        amount={currencyValueOne}
                        currency={currencyOne}
                        currencies={Object.keys(currencyRates)}
                        oncurrencyChange={handleChangeCurrencyOne}
                        oncurrencyValueChange={handleChangeCurrencyValueOne}
                    />

                    <Currency
                        amount={currencyValueTwo}
                        currency={currencyTwo}
                        currencies={Object.keys(currencyRates)}
                        oncurrencyChange={handleChangeCurrencyTwo}
                        oncurrencyValueChange={handleChangeCurrencyValueTwo}
                    />
                </>
            )}
        </>
    )
}

export default CurrencyConverter;
