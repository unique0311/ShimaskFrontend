import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './CSS/MainButton.css';

import dashboardUnselectImage from '../assets/dashboard/dashboardUnselected.svg';
import dashboardSelectedImage from '../assets/dashboard/dashboardSelected.svg';
import exchangeUnselectImage from '../assets/dashboard/exchangeUnselected.svg';
import exchangeSelectedImage from '../assets/dashboard/exchangeSelected.svg';
import buyCryptoUnselectImage from '../assets/dashboard/buyCryptoUnselected.svg';
import buyCryptoSelectedImage from '../assets/dashboard/buyCryptoSelected.svg';
import walletUnselectedImage from '../assets/dashboard/walletUnselected.svg';
import stakingUnselectedImage from '../assets/dashboard/stakingUnselected.svg';
import tradingUnselectedImage from '../assets/dashboard/tradingUnselected.svg';
import settingUnselectedImage from '../assets/dashboard/settingUnselected.svg';
import settingSelectedImage from '../assets/dashboard/settingSelected.svg';

const MainButton = () => {
  
  const [currentPage, setCurrentPage] = useState(null);
  useEffect(()=>{
    setCurrentPage('dashboard');
  },[])
  return (
    <div className='mainButton'>
      <Link to="/main/dashboard" onClick={() => setCurrentPage('dashboard')} className={`button__setting ${currentPage === 'dashboard'? 'seleted': '' }`} >
        <img src={currentPage === 'dashboard' ? dashboardSelectedImage : dashboardUnselectImage}  className='image__button__setting'/>
        <p className={`button__text ${currentPage === 'dashboard' ? 'colorSelected': ''}`}>DASHBOARD</p>
      </Link>
      <Link to="/main/exchange" onClick={() => setCurrentPage('exchange')} className={`button__setting ${currentPage === 'exchange'? 'seleted': '' }`} >
        <img src={currentPage === 'exchange' ? exchangeSelectedImage : exchangeUnselectImage}  className='image__button__setting'/>
        <p className={`button__text ${currentPage === 'exchange' ? 'colorSelected': ''}`}>EXCHANGE</p>
      </Link>
      <Link to="/main/buyCrypto" onClick={() => setCurrentPage('buyCrypto')} className={`button__setting ${currentPage === 'buyCrypto'? 'seleted': '' }`} >
        <img src={currentPage === 'buyCrypto' ? buyCryptoSelectedImage : buyCryptoUnselectImage}  className='image__button__setting'/>
        <p className={`button__text ${currentPage === 'buyCrypto' ? 'colorSelected': ''}`}>BUY CRYPTO</p>
      </Link>
      <Link to="/main/wallet" onClick={() => setCurrentPage('wallet')} className={`button__setting ${currentPage === 'wallet'? 'seleted': '' }`} >
        <img src={currentPage === 'wallet' ? walletUnselectedImage : walletUnselectedImage}  className='image__button__setting'/>
        <p className={`button__text ${currentPage === 'wallet' ? 'colorSelected': ''}`}>WALLET</p>
      </Link>
      <Link to="/main/staking" onClick={() => setCurrentPage('staking')} className={`button__setting ${currentPage === 'staking'? 'seleted': '' }`} >
        <img src={currentPage === 'staking' ? stakingUnselectedImage : stakingUnselectedImage}  className='image__button__setting'/>
        <p className={`button__text ${currentPage === 'staking' ? 'colorSelected': ''}`}>STAKING</p>
      </Link>
      <Link to="/main/trading" onClick={() => setCurrentPage('trading')} className={`button__setting ${currentPage === 'trading'? 'seleted': '' }`} >
        <img src={currentPage === 'trading' ? tradingUnselectedImage : tradingUnselectedImage}  className='image__button__setting'/>
        <p className={`button__text ${currentPage === 'trading' ? 'colorSelected': ''}`}>TRADING</p>
      </Link>
      <Link to="/main/setting" onClick={() => setCurrentPage('setting')} className={`button__setting ${currentPage === 'setting'? 'seleted': '' }`} >
        <img src={currentPage === 'setting' ? settingSelectedImage : settingUnselectedImage}  className='image__button__setting'/>
        <p className={`button__text ${currentPage === 'setting' ? 'colorSelected': ''}`}>SETTING</p>
      </Link>
    </div>
  )
}

export default MainButton;