import './CSS/Exchange.component.css';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import showAllImage from '../assets/dashboard/showAll.svg';
import searchImage from '../assets/dashboard/search.svg';
import changeImage from '../assets/dashboard/addCoinAndToken.svg';
import addPlusImage from '../assets/dashboard/plus.svg';
import exchangeImage from '../assets/dashboard/exchange.svg';
import shibaCoinImage from '../assets/dashboard/shibacoin.svg';
import kingShibaCoinImage from '../assets/dashboard/kingShiba.svg';
import risingPriceImage from '../assets/dashboard/risingChart.svg';
import badgeUpImage from '../assets/dashboard/66.png';
import downloadImage from '../assets/dashboard/download.svg';
import alertImage from '../assets/dashboard/alert.svg';
import downSettingImage from '../assets/dashboard/22.png';
import toggleImage from '../assets/dashboard/toggleLeft.svg';
import toggleRightImage from '../assets/dashboard/toggleRight.svg';
import rightCrossImage from '../assets/dashboard/rightCross.svg';
import dolorImage from '../assets/dashboard/dolor.svg';

export const ExchangeStatusInfo = ({title, price}) => {
  return (
    <div className="exchange__status__container">
      <h5>{title}</h5>
      <p>{price}</p>
    </div>
  )
}

export const ExchangeChartTitle = () => {
  return (
    <div className='chart__title__container'>
      <div className='chart__container__search'>
        <div className='search__container'>
          <img src={searchImage} />
          <input placeholder='............' />
        </div>
        <button className='search__button_setting'>Search</button>
      </div>
      <div className='container__title__setting'>
        Balance
        <img src={showAllImage} />
      </div>
      <div className='container__title__setting'>
        Value
        <img src={showAllImage} />
      </div>
      <div className='container__title__setting'>
        Price
        <img src={showAllImage} />
      </div>
      <div className='container__title__setting'>
        30&nbsp;Days
        <img src={showAllImage} />
      </div>
      <div className='title__button__container'>
        <Link to="/main/exchange/addcoinandtoken" className='button__exchange__setting'>
          <img src={changeImage} />
        </Link>
        <Link to="/main/exchange/coininfo" className='button__exchange__setting'>
          <img src={addPlusImage} />
        </Link>
        <Link to="/main/exchange/exchange" className='button__exchange__setting'>
          <img src={exchangeImage} />
        </Link>
      </div>
    </div>
  )
}

export const CoinMarketInfo = () => {
  return (
    <div className='coinMarket__info__container'>
      <div className='coinMarket__title'>
        <img src={shibaCoinImage} />
        <p>Shiba INU</p>
      </div>
      <h5>5,091,148,234 SHIB</h5>
      <h4>$ 56.0026</h4>
      <div className='coinMarket__price'>
        <p>$ 56.0026</p>
        <div className='price__badge'>
          <img src={badgeUpImage}/>
          <p>0.2%</p>
        </div>
      </div>
      <img src={risingPriceImage} />
    </div>
  )
}


export const CoinAndTokenTitle = () => {
  return (
    <div className='coinandtoken__title__container'>
      <div className='chart__container__search'>
        <div className='search__container'>
          <img src={searchImage} />
          <input placeholder='............' />
        </div>
        <button className='search__button_setting'>Search</button>
      </div>
      <div className='cointokentitle__container__right'>
        <img src={alertImage} />
        <img src={downloadImage}/>
        <div className='currency__setting__up'>
          <p>USD</p>
          <img src={downSettingImage}/>
        </div>
      </div>
    </div>
  )
}

export const CoinList = () => {
  return (
    <div className='coinandtoken__list__container'>
      <div className='list__container__title'>
        <p>Coins</p>
        <img src={toggleImage} />
      </div>
      <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h5>
      <div className='list__container__main'>
        <div className='coin__list__container'>
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
        </div>
      </div>
    </div>
  )
}

export const TokenList = () => {
  return (
    <div className='coinandtoken__list__container'>
      <div className='list__container__title'>
        <p>Token</p>
        <img src={toggleRightImage} />
      </div>
      <div className='container__title__token'>
        <h5>Lorem ipsum dolor sit amet, consectetuer adipiscing elit</h5>
        <p>Add Token: ERC20-TRC20-BEP20</p>
      </div>
      <div className='list__container__main'>
        <div className='coin__list__container'>
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
          <PrettyCoin />
        </div>
      </div>
    </div>
  )
}

export const PrettyCoin = () => {
  return (
    <div className='pretty__coin__container'>
      <img src={shibaCoinImage} />
      <p>SHIB</p>
    </div>
  )
}

export const CoinInfoTitle = () => {
  return (
    <div className='coininfo__title__container'>
      <div className='coininfo__title__left'>
        <img src={shibaCoinImage} />
        <div className='title__container__coininfo'>
          <h1>Shiba INU</h1>
          <h5>0 SHIB</h5>
          <p>0.00000 SHIB</p>
        </div>
      </div>

      <div className='coininfo__title__right'>
        <button className='coininfo__button__setting'>RECEIVE</button>
        <button className='coininfo__button__setting'>SEND</button>
      </div>
    </div>
  )
}

export const CoinInfoMain = () => {
  return (
    <div className='coininfo__main__container'>
      <div className='chart__date__filter__setting'>
        <InfoChartDateFilter />
      </div>
      <div className='price__transaction__setting'>
        <InfoPriceAndTransactionFilter />
      </div>
      {/* TODO */}
    </div>
  )
}


export const InfoChartDateFilter = () => {
  const [dateSelected, setDateSelected] = useState(null);

  useEffect(() => {
    setDateSelected('1W')
  }, [])
  return (
    <div className='ChartDate__filter'>
      <button onClick={() => setDateSelected('24H')} className={`ChartDate__button__setting ${dateSelected === '24H' ? 'ChartDate__selected' : ''}`}>24H</button>
      <button onClick={() => setDateSelected('1W')} className={`ChartDate__button__setting ${dateSelected === '1W' ? 'ChartDate__selected' : ''}`}>1W</button>
      <button onClick={() => setDateSelected('1M')} className={`ChartDate__button__setting ${dateSelected === '1M' ? 'ChartDate__selected' : ''}`}>1M</button>
      <button onClick={() => setDateSelected('1Y')} className={`ChartDate__button__setting ${dateSelected === '1Y' ? 'ChartDate__selected' : ''}`}>1Y</button>
      <button onClick={() => setDateSelected('All')} className={`ChartDate__button__setting ${dateSelected === 'All' ? 'ChartDate__selected' : ''}`}>All</button>
    </div>
  )
}

export const InfoPriceAndTransactionFilter = () => {
  const [priceSelected, setPriceSelected] = useState(null);

  useEffect(() => {
    setPriceSelected('price')
  }, [])
  return (
    <div className='price__transaction__filter'>
      <button onClick={() => setPriceSelected('transaction')} className={`price__button__setting ${priceSelected === 'transaction' ? 'price__transaction__selected' : ''}`}>TRANSACTION</button>
      <button onClick={() => setPriceSelected('price')} className={`price__button__setting ${priceSelected === 'price' ? 'price__transaction__selected' : ''}`}>PRICE CHART</button>
    </div>
  )
}

export const TransactionsExchange = () => {
  return (
    <div className="transactions__subcontainer__submain">
      <div className='transactions__submain__container'>
        <div className='transactions__main__sent'>
          <img src={shibaCoinImage} />
          <p>0.1237940 SHIB</p>
        </div>
        <div className='transactions__main__receive'>
          <img src={kingShibaCoinImage} />
          <p>0.0412345 KINGSHIB-USD</p>
        </div>
        <div className='transactions__main__dateandtime'>12-02-23, 20:13:49</div>
      </div>
    </div>
  )
}

export const TransactionsBuyCrypto = () => {
  return (
    <div className="transactions__subcontainer__submain">
      <div className='transactions__submain__container'>
        <div className='transactions__main__sent'>
          <img src={dolorImage} />
          <p>0.1237940 SHIB</p>
        </div>
        <div className='transactions__main__receive'>
          <img src={shibaCoinImage} />
          <p>0.0412345 KINGSHIB-USD</p>
        </div>
        <div className='transactions__main__dateandtime'>12-02-23, 20:13:49</div>
      </div>
    </div>
  )
}

export const ExchangeModal = ({ setIsOpen }) => {
  return (
    <>
      <div  className='modal__main__background' onClick={() => setIsOpen(false)}/>
      <div className='modal__main__container'>
        <div className='modal__container__title'>Exchange SHIB to KINGSHIB</div>
        <div className='modal__container__main'>
          <div className='modal__main__status'>Completed</div>
          <div className='modal__main__exchange'>
            <div className='modal__exchange__sent'>
              <img src={shibaCoinImage}/>
              <div className='modal__sent__details'>
                <p>Your Sent</p>
                <h5>23.12340 SHIB</h5>
              </div>
            </div>
            <img src={rightCrossImage} className='modal__exchange__image'/>
            <div className='modal__exchange__sent'>
              <img src={kingShibaCoinImage}/>
              <div className='modal__sent__details'>
                <p>Your Received</p>
                <h5>23.12340 KINGSHIB</h5>
              </div>
            </div>
          </div>
          <div className='modal__container__address'>
            <div className='modal__address__details'>
              <h5>My Wallet:</h5>
              <p>564823asdf23456</p>
            </div>
            <div className='modal__address__details'>
              <h5>Cashback:</h5>
              <p>0.0012387 ETH</p>
            </div>
            <div className='modal__address__details'>
              <h5>Sent Hash:</h5>
              <p>87897786868768gjhghjghj687fghfhgfgh879</p>
            </div>
            <div className='modal__address__details'>
              <h5>Received Hash:</h5>
              <p>87897786868768gjhghjghj687fghfhgfgh879</p>
            </div>
          </div>
          <div className='modal__container__button'>
            <button>NEW EXCHANGE</button>
            <button>ORDER HISTORY</button>
            <button>CONTACT SUPPORT</button>
          </div>
        </div>
      </div>
    </>
  )
}