import './CSS/Exchange.css';
import { CoinAndTokenTitle, CoinList, TokenList } from "./Exchange.component";

const AddCoinAndToken = () => {
  return (
    <div className="addcoindandtoken__container">
      <CoinAndTokenTitle />
      <CoinList />
      <TokenList />
      <div style={{display: 'flex', justifyContent: 'flex-end', paddingTop: '40px', alignItems: 'center'}}>
        <button className='save__change__setting'>Save Change</button>
      </div>
    </div>
  )
}

export default AddCoinAndToken;