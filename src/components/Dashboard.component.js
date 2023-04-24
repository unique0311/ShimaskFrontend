import './CSS/Dashboard.component.css';
import React, { useEffect, useState } from 'react';

import ShibaImage from '../assets/dashboard/shibacoin.svg';
import BTCImage from '../assets/dashboard/bitcoin.svg';
import ETHImage from '../assets/dashboard/ethereum.svg';
import BNBImage from '../assets/dashboard/binance.svg';
import USDTImage from '../assets/dashboard/tether.svg';
import priceUpImage from '../assets/dashboard/priceUp.svg';
import priceDownImage from '../assets/dashboard/priceDown.svg';
// import transactionSelectedImage from '../assets/dashboard/77.png';

// import DepositImage from '../assets/dashboard/80.png';

export const Coins = () => {
  return (
    <div className="Coins__container">
      <img src={ShibaImage} className='token__image__setting'/>
      <div className='Coins__title'>
        <p>Shiba INU</p>
        <pp>5,091,148.234</pp>
        <ppp>56.002630574 USD</ppp>
      </div>
    </div>
  )
}

export const BTCCoin = () => {
  return (
    <div className='BTCCoin__Container'>
      <div className='BTCCoin__left'>
        <img src={BTCImage} className='coin__image__setting'/>
        <div>
          <h2>BTC</h2>
          <p>Bitcoin</p>
        </div>
      </div>
      <div className='BTCCoin__right'>
        <img src={priceUpImage} className='price__image__setting' />
        <p>$277,835.99</p>
      </div>
    </div>
  )
}

export const ETHCoin = () => {
  return (
    <div className='BTCCoin__Container'>
      <div className='BTCCoin__left'>
        <img src={ETHImage} className='coin__image__setting'/>
        <div>
          <h2>ETH</h2>
          <p>Ethereum</p>
        </div>
      </div>
      <div className='BTCCoin__right'>
        <img src={priceDownImage} className='price__image__setting' />
        <p>$1,760.33</p>
      </div>
    </div>
  )
}

export const BNBCoin = () => {
  return (
    <div className='BTCCoin__Container'>
      <div className='BTCCoin__left'>
        <img src={BNBImage} className='coin__image__setting'/>
        <div>
          <h2>BNB</h2>
          <p>Binance</p>
        </div>
      </div>
      <div className='BTCCoin__right'>
        <img src={priceUpImage} className='price__image__setting' />
        <p>$327.67</p>
      </div>
    </div>
  )
}

export const USDTCoin = () => {
  return (
    <div className='BTCCoin__Container'>
      <div className='BTCCoin__left'>
        <img src={USDTImage} className='coin__image__setting'/>
        <div>
          <h2>USDT</h2>
          <p>Tether USD</p>
        </div>
      </div>
      <div className='BTCCoin__right'>
        <img src={priceDownImage} className='price__image__setting' />
        <p>$1.00</p>
      </div>
    </div>
  )
}

export const Transactions = ({item}) => {
  return (
    <>
      {item?.map((params) => {
        return (
          <div className='transactions__container'>
            <div className='transactions__left'>
              <img src={params.image} className='transactions__image__setting' />
              <div>
                <h2>{params.title}</h2>
                <p>{params.status}</p>
              </div>
            </div>
            <div className='transactions__right'>
              <h2>$ {params.price}</h2>
              <p>{params.date}</p>
            </div>
          </div>
        );
      })}
    </>
  )
}

export const TransactionFilter = ({filter}) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected('All')
  }, [])
  return (
    <div className='transactions__filter'>
      <button onClick={() => {setSelected('All'); filter();}} className={`transaction__button__setting ${selected === 'All' ? 'transaction__selected' : ''}`}>
        All
      </button>
      <button onClick={() => {setSelected('Deposit'); filter('Deposit');}} className={`transaction__button__setting ${selected === 'Deposit' ? 'transaction__selected' : ''}`}>Deposit</button>
      <button onClick={() => {setSelected('Withdraw'); filter('Withdraw');}} className={`transaction__button__setting ${selected === 'Withdraw' ? 'transaction__selected' : ''}`}>Withdraw</button>
    </div>
  )
}

export const TrendChartFilter = () => {
  const [chartSelected, setChartSelected] = useState(null);

  useEffect(() => {
    setChartSelected('ETH')
  }, [])
  return (
    <div className='trendChart__filter'>
      <button onClick={() => setChartSelected('ETH')} className={`trendChart__button__setting ${chartSelected === 'ETH' ? 'trendChart__selected' : ''}`}>ETH</button>
      <button onClick={() => setChartSelected('BTC')} className={`trendChart__button__setting ${chartSelected === 'BTC' ? 'trendChart__selected' : ''}`}>BTC</button>
      <button onClick={() => setChartSelected('BNB')} className={`trendChart__button__setting ${chartSelected === 'BNB' ? 'trendChart__selected' : ''}`}>BNB</button>
      <button onClick={() => setChartSelected('XRP')} className={`trendChart__button__setting ${chartSelected === 'XRP' ? 'trendChart__selected' : ''}`}>XRP</button>
      <button onClick={() => setChartSelected('SOL')} className={`trendChart__button__setting ${chartSelected === 'SOL' ? 'trendChart__selected' : ''}`}>SOL</button>
    </div>
  )
}