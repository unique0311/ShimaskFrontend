import { useState } from 'react';
import './CSS/Setting.css';
import { MembershipCard, CurrencyMain } from './Setting.component';

import firstExchangeLogo from '../assets/dashboard/firstExchaneWallet.svg';
import blueLogo from '../assets/dashboard/blueWallet.svg';
import silverLogo from '../assets/dashboard/silverWallet.svg';
import goldLogo from '../assets/dashboard/goldWallet.svg';
import platinumLogo from '../assets/dashboard/platinumWallet.svg';


const Setting = () => {
  const [selected, setSelected] = useState('membership');

  const renderSelected = () => {
    if (selected === 'membership') {
      return (
        <div className='setting__main__background'>
          <div className='setting__membership__container'>
            <MembershipCard 
              logoImage={firstExchangeLogo}
              membershipName='First exchange'
              mask='5 SMASK'
              price='One Time Bonus'
              buttonName='BUY 5 SMASK'
              selectedCard='firstExchange'
            />
            <MembershipCard 
              logoImage={blueLogo}
              membershipName='Blue'
              mask='0.25 %'
              price='Max 50 USD/Month'
              buttonName='BUY 150 SMASK'
              selectedCard='blue'
            />
            <MembershipCard 
              logoImage={silverLogo}
              membershipName='Silver'
              mask='0.5 %'
              price='Max 100 USD/Month'
              buttonName='BUY 300 SMASK'
              selectedCard='silver'
            />
            <MembershipCard 
              logoImage={goldLogo}
              membershipName='Gold'
              mask='0.75 %'
              price='Max 200 USD/Month'
              buttonName='BUY 600 SMASK'
              selectedCard='gold'
            />
            <MembershipCard 
              logoImage={platinumLogo}
              membershipName='Platinum'
              mask='1 %'
              price='Max 300 USD/Month'
              buttonName='BUY 1000 SMASK'
              selectedCard='platinum'
            />
          </div>
        </div>
      )
    }
    else if (selected === 'currencies') {
      return (
        <div className='setting__main__background'>
          <div className='setting__currency__container'>
            <CurrencyMain />
          </div>
        </div>
      )
    }
    else if (selected === 'buyShimask') {
      return (
        <div className='setting__main__background'>Buy Shimask</div>
      )
    }
    else if (selected === 'security') {
      return (
        <div className='setting__main__background'>Security</div>        
      )
    }
    else if (selected === 'privateKeys') {
      return (
        <div className='setting__main__background'>Private Keys</div>
      )
    }
    else if (selected === 'support') {
      return (
        <div className='setting__main__background'>Support</div>
      )
    }
  }

  return (
    <div className="setting__main__container">
      <div className='setting__submain__container'>
        <div className={`${selected === 'membership' ? 'button__container__membership' : ''}`}>
          <button onClick={() => setSelected('membership')} className={`setting__button__main ${selected === 'membership' ? 'setting__button__selected__membership' : ''}`}>Membership</button>
          <button onClick={() => setSelected('currencies')} className={`setting__button__main ${selected === 'currencies' ? 'setting__button__selected__currencies' : ''}`}>Currencies</button>
          <button onClick={() => setSelected('buyShimask')} className={`setting__button__main ${selected === 'buyShimask' ? 'setting__button__selected__buyShimask' : ''}`}>Buy Shimask</button>
          <button onClick={() => setSelected('security')} className={`setting__button__main ${selected === 'security' ? 'setting__button__selected__security' : ''}`}>Security</button>
          <button onClick={() => setSelected('privateKeys')} className={`setting__button__main ${selected === 'privateKeys' ? 'setting__button__selected__privateKeys' : ''}`}>Private Keys</button>
          <button onClick={() => setSelected('support')} className={`setting__button__main ${selected === 'support' ? 'setting__button__selected__support' : ''}`}>Support</button>
        </div>
        {renderSelected()}
      </div>
    </div>
  )
}

export default Setting;