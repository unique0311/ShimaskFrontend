import './CSS/Setting.component.css';
import { useState } from 'react';

import USDollor from '../assets/dashboard/usaFlag.svg';
import EUROImage from '../assets/dashboard/eurFlag.svg';
import ExitImage from '../assets/dashboard/exit.svg';
import qrCodeImage from '../assets/dashboard/qrcode.svg';

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
  const [buttonSelected, setButtonSelected] = useState(null)
  const [selected, setSelected] = useState(false);

  return (
    <div className='currency__main__container'>
      <div className='currency__main__leftcontainer'>
        <h5>Set Currency</h5>
        <p>Set your preferred local currency.</p>
      </div>
      <div onClick={() => setSelected(!selected)} className='currency__main__rightcontainer'>
        <img src={USDollor}/>
        <p>USD-United Stated Dollor</p>
      </div>

      <div className={`currency__setting__dropdown ${selected ? 'currency__dropdown__selected' : ''}`}>
        <div className='currency__dropdown__container'>
          <div className='currency__dropdown__details'>
            <img src={EUROImage}/>
            <p>EUR-Euro</p>
          </div>
          <div className='currency__dropdown__details'>
            <img src={EUROImage}/>
            <p>EUR-Euro</p>
          </div>
          <div className='currency__dropdown__details'>
            <img src={EUROImage}/>
            <p>EUR-Euro</p>
          </div>
          <div className='currency__dropdown__details'>
            <img src={EUROImage}/>
            <p>EUR-Euro</p>
          </div>
          <div className='currency__dropdown__details'>
            <img src={EUROImage}/>
            <p>EUR-Euro</p>
          </div>
          <div className='currency__dropdown__details'>
            <img src={EUROImage}/>
            <p>EUR-Euro</p>
          </div>
          <div className='currency__dropdown__details'>
            <img src={EUROImage}/>
            <p>EUR-Euro</p>
          </div>
          <div className='currency__dropdown__details'>
            <img src={EUROImage}/>
            <p>EUR-Euro</p>
          </div><div className='currency__dropdown__details'>
            <img src={EUROImage}/>
            <p>EUR-Euro</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export const AuthenticationModal = ({ setIsOpen }) => {
  return (
    <>
      <div  className='modal__main__background' onClick={() => setIsOpen(false)}/>
      <div className='modalAuthentication__main__container'>
        <div className='modal__authentication__container'>
          <h5>Scan Code</h5>
          <img src={qrCodeImage}/>
          <p>IF you won't to turn on 2FA, use Google Authentication app to scan code,</p>
          <p>then enther six-digit code provided by the app to the form below.</p>
          <button>DOWNLOAD APP</button>
          <h4>Enter 6-digit Code</h4>
          <div></div>
        </div>
      </div>
    </>
  )
}

export const ExitModal = ({setIsOpen}) => {
  return (
    <>
      <div  className='modal__main__background' onClick={() => setIsOpen(false)}/>
      <div className='exitModal__main__container'>
        <div className='exitModal__container__detail'>
          <img src={ExitImage} />
          <p>Close the Wallet ?</p>
          <div className='exitModal__button__container'>
            <button onClick={() => setIsOpen(false)}>NO</button>
            <button onClick={() => setIsOpen(false)}>YES</button>
          </div>
        </div>
      </div>
    </>
  )
}