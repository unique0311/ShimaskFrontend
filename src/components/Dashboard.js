import './CSS/Dashboard.css';
import MainButton from './MainButton';

import background from '../assets/dashboard/Background.png';
// import sidebar from '../assets/dashboard/1.png';
import Logo from '../assets/dashboard/logo.svg';
import { useEffect } from 'react';
import { Outlet,useParams  } from 'react-router-dom';
import DashboardMain from "./DashBoardMain";
import Exchange from "./Exchange";
import BuyCrypto from "./BuyCrypto";
import AddCoinAndToken from './AddCoinAndToken';

const Dashboard = () => {
  
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
        {/* {child} */}
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard;