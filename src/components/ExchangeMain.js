import { useState } from "react";

import { TransactionsExchange, ExchangeModal } from "./Exchange.component";

import shibaCoin from '../assets/dashboard/shibacoin.svg'
import kingShiba from '../assets/dashboard/kingShiba.svg'
import Bone from '../assets/dashboard/bone.svg';
import Shi from '../assets/dashboard/shibaToken.svg';
import Qom from '../assets/dashboard/shibavax.svg';
import exchangeImage from '../assets/dashboard/exchangeCoin.svg'
import dropdownImage from '../assets/dashboard/66.png';

const ExchangeMain = () => {
  const [selected, setSelected] = useState(null);
  const [dropdownSetOne, setDropdownSetOne] = useState(false)
  const [dropdownSetTwo, setDropdownSetTwo] = useState(false)
  const [modalShowExchange, setModalShowExchange] = useState(false)
  // const renderSelected=()=>{
  //   if(selected == "transactions")
  //   {
  //     return <div>Transaction</div>;
  //   }
  //   else{
  //     return <div>saction</div>;
  //   }
  // }

  
  return (
    <div className="exchange__main__container">
      <div className="exchangemain__main">
        <div className='exchangemain__button__container'>
          <button onClick={() => setSelected('transactions')} className="transactions__button__setting">Transactions</button>
          <button onClick={() => setSelected('instantExchange')} className="instantExchange__button__setting">Instant Exchange</button>
        </div>
        {
          selected === 'transactions' ? (
            <div className="transactions__detail__container">
              <div className="transactions__detail__subcontainer">
                <div className="transactions__subcontainer__title">
                  <p>YOU SENT</p>
                  <h5>YOU RECEIVE</h5>
                  <h4>DATE & TIME</h4>
                </div>
                <div className="transactions__subcontainer__main">
                  <TransactionsExchange />
                  <TransactionsExchange />
                  <TransactionsExchange />
                  <TransactionsExchange />
                  <TransactionsExchange />
                  <TransactionsExchange />
                  <TransactionsExchange />
                  <TransactionsExchange />
                  <TransactionsExchange />
                  <TransactionsExchange />
                  <TransactionsExchange />
                </div>
              </div>
            </div>
          ) : (
            <div className="instantExchange__detail__container">
              <div className="instantExchange__detail__exchangeMain">
                <div className="bothside__detail__main">
                  <img src={shibaCoin} />
                  <h5>Amount to Send</h5>
                  <div className='exchange__main__input'>
                    <input placeholder='SHIB 23.12340' />
                    <button className='input__button__setting' onClick={() => setDropdownSetOne(!dropdownSetOne)}>
                      <img src={shibaCoin}  style={{width: '48px', paddingRight: '10px', paddingLeft: '20px'}}/>
                      <p>SHIB</p>
                      <img src={dropdownImage} style={{rotate: '180deg', width: '13px', paddingRight: '20px', paddingLeft: '10px'}}/>
                    </button>
                    <div className={`dropdown__setting ${ dropdownSetOne ? 'changed__dropdown': ''}`}>
                      <button className="dropdown__button__Setting">
                        <img src={Bone} />
                        <p>BONE</p>
                      </button>
                      <button className="dropdown__button__Setting">
                        <img src={Shi} />
                        <p>SHI</p>
                      </button>
                      <button className="dropdown__button__Setting">
                        <img src={Qom} />
                        <p>QOM</p>
                      </button>
                      <button className="dropdown__button__Setting">
                        <img src={Qom} />
                        <p>QOM</p>
                      </button><button className="dropdown__button__Setting">
                        <img src={Qom} />
                        <p>QOM</p>
                      </button>
                    </div>
                  </div>
                  <p>Available: 5,091,148,234 SHIB</p>
                </div>
                <img src={exchangeImage} className="exchangeImage__setting"/>
                <div className="bothside__detail__main">
                  <img src={kingShiba}/>
                  <h5>You will Recieve</h5>
                  <div className='exchange__main__input'>
                    <input placeholder='SHIB 23.12340' />
                    <button className='input__button__setting' onClick={() => setDropdownSetTwo(!dropdownSetTwo)}>
                      <img src={kingShiba}  style={{width: '50px', paddingRight: '10px', paddingLeft: '20px'}}/>
                      <p>SHIB</p>
                      <img src={dropdownImage} style={{rotate: '180deg', width: '13px', paddingRight: '10px', paddingLeft: '20px'}}/>
                    </button>
                    <div className={`dropdown__setting ${ dropdownSetTwo ? 'changed__dropdown': ''}`}>
                      <button className="dropdown__button__Setting">
                        <img src={Bone} />
                        <p>BONE</p>
                      </button>
                      <button className="dropdown__button__Setting">
                        <img src={Shi} />
                        <p>SHI</p>
                      </button>
                      <button className="dropdown__button__Setting">
                        <img src={Qom} />
                        <p>QOM</p>
                      </button>
                      <button className="dropdown__button__Setting">
                        <img src={Qom} />
                        <p>QOM</p>
                      </button><button className="dropdown__button__Setting">
                        <img src={Qom} />
                        <p>QOM</p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="transactionExchange__button__exchange">
                <button onClick={() => {setModalShowExchange(true)}}>EXCHANGE</button>
                <p>Exchange Rate Challengly</p>
                <h5>1 SHIB = 0.1238 KINGSHIB</h5>
              </div>
            </div>
          )
        }
      </div>
      { modalShowExchange && <ExchangeModal setIsOpen={setModalShowExchange} /> }
    </div>
  )
}

export default ExchangeMain;