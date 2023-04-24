import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import {Coins, BTCCoin, ETHCoin, BNBCoin, USDTCoin, Transactions, TransactionFilter, TrendChartFilter} from './Dashboard.component';
import TransactionData from './TransactionData';

import calendar from '../assets/dashboard/calendar.svg';
import balance from '../assets/dashboard/balance.svg';
import pendingWithdraw from '../assets/dashboard/pending.svg';
import showAllImage from '../assets/dashboard/showAll.svg';
import avatarImage from '../assets/dashboard/profile.svg';
import MarketChartImage from '../assets/dashboard/MarketTrendChart.svg';
import profileDownImage from '../assets/dashboard/profileDown.svg';


const DashboardMain = () => {
  const [item, setItem] = useState(TransactionData);

  const filter = (title)=>{
    if(title)
      setItem(TransactionData.filter(i=>i.title === title));
    else setItem(TransactionData)
  }

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
        <div className='right__container__main'>
          <div className='dashboardMain__left'>
            <div className='left__balance__market'>
              <div className='left__balance'>
                <div className='balance__title'>
                  <div className='balance__title__name'>
                    Balance
                  </div>
                </div>
                <div className='balance__detail'>
                  <div className='show__all__com'>
                    Show All
                    <img src={showAllImage} className='showAllImage__Setting' />
                  </div>
                  <div>
                    <Coins />
                    <Coins />
                    <Coins />
                  </div>
                </div>
              </div>
              <div className='left__market'>
                <div className='balance__title'>
                  <div className='balance__title__name'>
                    Today&nbsp;Market
                  </div>
                </div>
                <div className='balance__detail'>
                  <div className='show__all__com'>
                    Show All
                    <img src={showAllImage} className='showAllImage__Setting' />
                  </div>
                  <div className='show__coin__container'>
                    <BTCCoin />
                    <ETHCoin />
                    <BNBCoin />
                    <USDTCoin />
                  </div>
                </div>
              </div>
            </div>
            <div className='left__priceChart'>
              <div className='navbar__info'>
                <div className='info__detail'>
                  Market&nbsp;Trend
                </div>
              </div>
              <div className='trend__chart__detail'>
                <div className='chart__filter'>
                  <TrendChartFilter />
                </div>
                {/* Chart */}
                <img src={MarketChartImage} />
              </div>
            </div>
          </div>
          <div className='dashboardMain__right'>
            <div className='transaction__title'>
              <div className='info__detail'>
                Last&nbsp;Transaction
              </div>
            </div>
            <div className='balance__detail'>
              <div className='show__all__com'>
                Show All
                <img src={showAllImage} className='showAllImage__Setting' />
              </div>
              <div className='transaction__component'>
                <TransactionFilter filter={filter} />
                <Transactions item = {item} />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DashboardMain;