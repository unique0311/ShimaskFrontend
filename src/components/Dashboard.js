import './CSS/Dashboard.css';
import MainButton from './MainButton';

import background from '../assets/dashboard/Background.png';
// import sidebar from '../assets/dashboard/1.png';
import Logo from '../assets/dashboard/logo.svg';
import { useState, useEffect } from 'react';
import { Outlet,useParams  } from 'react-router-dom';
import DashboardMain from "./DashBoardMain";
import Exchange from "./Exchange";
import BuyCrypto from "./BuyCrypto";
import AddCoinAndToken from './AddCoinAndToken';

const Dashboard = () => {
  const [sideToggle, setSideToggle] = useState(false);

  const setSideHamburgerToggle = () => {
    setSideToggle(!sideToggle);
  }

  
  // const page = useParams().page;
  // let child = null;
  // if(page == "buyCrypto"){
  //   child = <BuyCrypto />
  // }
  // else if(page == "exchange"){
  //   child = <Exchange />
  // }
  // else if(page == "dashboard"){
  //   child = <DashboardMain />
  // }
  // else if(page == 'addcoinandtoken') {
  //   child = <AddCoinAndToken />
  // }
  return (
    <div style={{backgroundImage: `url(${background})`}} className='dashboard'>
      <div className='dashboard__left__container'>
        <div className='left__container__button'>
          <MainButton />
          <div className='logo__setting'>
            <img src={Logo} />
          </div>
        </div>
      </div>
      <div className='dashboard__outlet'> 
        <div className='hamburger__menu' onClick={() => setSideHamburgerToggle()}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        {/* {child} */}
        <Outlet />
      </div>

      <div className={`backdrop ${!sideToggle ? 'showmenu' : 'hiddenmenu'}`} onClick={() => setSideHamburgerToggle(false)}/>
      <div className={`sidedrawer ${sideToggle ? 'showmenu' : 'hiddenmenu'}`} onClick={() => setSideHamburgerToggle}>
        <div className='main__left__container__menu'>
          {/* <div className='left__container__logo__menu'>
            <img src={Logo} className="logo__setting" />
          </div> */}
          <div className='left__container__buttons__menu'>
            <MainButton />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard;