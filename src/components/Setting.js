import { useState } from 'react';
import './CSS/Setting.css';
import { MembershipCard, CurrencyMain, AuthenticationModal, ExitModal } from './Setting.component';

import firstExchangeLogo from '../assets/dashboard/firstExchaneWallet.svg';
import blueLogo from '../assets/dashboard/blueWallet.svg';
import silverLogo from '../assets/dashboard/silverWallet.svg';
import goldLogo from '../assets/dashboard/goldWallet.svg';
import platinumLogo from '../assets/dashboard/platinumWallet.svg';
import EthImage from '../assets/dashboard/ethereum.svg';
import smaskImage from '../assets/dashboard/goldWallet.svg';
import fromToImage from '../assets/dashboard/fromTo.svg';
import EmailImage from '../assets/dashboard/emailSupport.svg';
import ChatImage from '../assets/dashboard/chatWithSupport.svg';
import TwitterImage from '../assets/dashboard/twitter.svg';
import TelegramImage from '../assets/dashboard/telegram.svg';
import MediumImage from '../assets/dashboard/medium.svg';
import ToggleRightImage from '../assets/dashboard/toggleRight.svg';
import InfoImage from '../assets/dashboard/info.svg';
import ExitImage from '../assets/dashboard/exit.svg';

const Setting = () => {
  const [selected, setSelected] = useState('membership');
  const [modalShowAuthentication, setModalShowAuthentication] = useState(false)
  const [modalShowExit, setModalShowExit] = useState(false);

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
        <div className='setting__main__background'>
          <div className="setting__buyShimask__container">
            <div className="buyShimask__detail__main">
              <div className="buyShimask__detail__subMains">
                <img src={EthImage} />
                <h5>From</h5>
                <div className='buyShimask__main__input'>
                  <input placeholder='0' />
                  <button className='buyShimask__button__setting'>
                    <p>ETH</p>
                  </button>
                </div>
              </div>
              <img src={fromToImage} className="buyCryptoImage__setting"/>
              <div className="buyShimask__detail__subMains">
                <img src={smaskImage}/>
                <h5>To</h5>
                <div className='buyShimask__main__input'>
                  <input placeholder='0' />
                  <button className='buyShimask__button__setting'>
                    <p>SMASK</p>
                  </button>
                </div>
              </div>
            </div>
            <div className="buyCrypto__button__exchange">
              <button>BUY SMASK</button>
              <p>1 ETH = 500.000 SMASK</p>
            </div>
          </div>
        </div>
      )
    }
    else if (selected === 'security') {
      return (
        <div className='setting__main__background'>
          <div className='setting__security__container'>
            <p>Before Changing your password, click Private Keys in top panel and write down your <br />12-word backup phrase. This will help you restore your wallet if you forget your new <br />password.</p>
            <input placeholder='Old Password' type='password'/>
            <input placeholder='New Password' type='password'/>
            <input placeholder='Repeat New Password'type='password'/>
            {/* <div className=''> */}
              {/* <img /> */}
              <p>Two-Factor Authentication</p>
            {/* </div> */}
            <button onClick={() => {setModalShowAuthentication(true)}}>CHANGE PASSWORD</button>
          </div>
          { modalShowAuthentication && <AuthenticationModal setIsOpen={setModalShowAuthentication}/>}
        </div>        
      )
    }
    else if (selected === 'privateKeys') {
      return (
        <div className='setting__main__background'>
          <div className='setting__privateKeys__container'>
            <p>NEVER share your 12-word seed phrase and private keys with anyone, including on any <br/> web wallets, websites, or online forms. Otherwise, you may lose all your money!</p>
            <input placeholder='Password' type='password'/>
            <button>SHOW KEY</button>
          </div>
        </div>
      )
    }
    else if (selected === 'support') {
      return (
        <div className='setting__main__background'>
          <div className='setting__support__container'>
            <h4>SMASK Wallet Support</h4>
            <p>Update your wallet to the latest version</p>
            <div className='support__card__container'>
              <div className='card__detail__main'>
                <img src={EmailImage}/>
                <pp>Email</pp>
                <pp>Support</pp>
              </div>
              <div className='card__detail__main'>
                <img src={ChatImage}/>
                <pp>Chat with</pp>
                <pp>Support</pp>
              </div>
            </div>
            <h5>Check our social media</h5>
            <div className='support__social__container'>
              <img src={TwitterImage}/>
              <img src={TelegramImage}/>
              <img src={MediumImage}/>
            </div>
            <div className='support__logCollection__container'>
              <img src={ToggleRightImage}/>
              <h5>Log collection</h5>
              <img src={InfoImage}/>
            </div>
            <button onClick={() => setModalShowExit(true)}>
              <img src={ExitImage} className='exit__button__setting'/>
              <h7>Exit App</h7>
            </button>
          </div>
          {modalShowExit && <ExitModal setIsOpen={setModalShowExit} />}
        </div>
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