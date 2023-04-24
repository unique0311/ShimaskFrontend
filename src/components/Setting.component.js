import './CSS/Setting.component.css';

import { useState } from 'react';

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