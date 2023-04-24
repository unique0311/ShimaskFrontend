import './CSS/Setting.component.css';
import { useState } from 'react';

import USDollor from '../assets/dashboard/usaFlag.svg';

export const MembershipCard = ({logoImage, membershipName, mask, price, buttonName, selectedCard}) => {
  const [selected, setSelected] = useState(null);

  return (
    <div onClick={() => setSelected(selectedCard)} className={`memebership__card__container ${selected  === selectedCard ? 'card__selected__setting' : ''}`}>
      <img src={logoImage} />
      <p>{membershipName}</p>
      <div>{mask}</div>
      <h5>Cashback</h5>
      <h4>{price}</h4>
      <button>{buttonName}</button>
    </div>
  )
}

export const CurrencyMain = () => {
  return (
    <div className='currency__main__container'>
      <div className='currency__main__leftcontainer'>
        <h5>Set Currency</h5>
        <p>Set your preferred local currency.</p>
      </div>
      <div className='currency__main__rightcontainer'>
        <img src={USDollor}/>
        <p>USD-United Stated Dollor</p>
      </div>
    </div>
  )
}