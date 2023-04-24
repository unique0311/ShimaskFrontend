import './CSS/Exchange.css';
import { ExchangeStatusInfo, ExchangeChartTitle, CoinMarketInfo } from './Exchange.component';

import calendar from '../assets/dashboard/calendar.svg';
import balance from '../assets/dashboard/balance.svg';
import pendingWithdraw from '../assets/dashboard/pending.svg';
import avatarImage from '../assets/dashboard/profile.svg';
import profileDownImage from '../assets/dashboard/profileDown.svg';


const Exchange = () => {
  return (
    <div className='dashboard__right__container'>
      <div className='right__container__navbar'>
        <div className='container__navbar__back'>
          <div className='navbar__info'>
            <div className='info__detail'>
              info
            </div>
          </div>
          <div className='navbar__infos'>
            <div className='infos__date'>
              <img src={calendar} className='img__setting'/>
              <div className='date__text__part'>
                <p>27/03/23</p>
                <pp>Last visit:</pp>
                <pp>02/02/23 02.20pm</pp>
              </div>
            </div>
            <div className='infos__date'>
              <img src={balance} className='img__setting'/>
              <div className='balance__text__part'>
                <p>Balance</p>
                <pp>350.3441920 ETH</pp>
                <ppp>614,181.40 USD</ppp>
              </div>
            </div>
            <div className='infos__date'>
              <img src={pendingWithdraw} className='img__setting'/>
              <div className='balance__text__part'>
                <p>Pending Withdraw</p>
                <pp>23.3845792 ETH</pp>
                <ppp>40,995.04 USD</ppp>
              </div>
            </div>
            <div className='profile__setting'>
              {/* TODO */}
              <img src={avatarImage} className='avatar__setting'/>
              <p>0x87...</p>
              <img src={profileDownImage} className='profiledown__image__setting'/>
            </div>
          </div>
        </div>
      </div>
      <div className='right__container__main__exchange'>
        <div className='exchange__statue__bar'>
          <ExchangeStatusInfo title="24H&nbsp;Change" price="$0.00" />
          <ExchangeStatusInfo title="Highest&nbsp;Balance" price="$0.00" />
          <ExchangeStatusInfo title="Portfolio&nbsp;Age" price="30&nbsp;Days" />
          <ExchangeStatusInfo title="Best&nbsp;24H&nbsp;Asset" price="$0.00" />
          <ExchangeStatusInfo title="24H&nbsp;Change" price="$0.00" />
        </div>
        <div className='coin__price__chart'>
          <div className='price__chart__detail'>
            <ExchangeChartTitle />
            <div>
              <CoinMarketInfo />
              <CoinMarketInfo />
              <CoinMarketInfo />
              <CoinMarketInfo />
              <CoinMarketInfo />
              <CoinMarketInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exchange;