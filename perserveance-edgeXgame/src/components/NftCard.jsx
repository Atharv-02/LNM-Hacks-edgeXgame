import React from 'react';
import './NftCard.css';

function NftCard({ game }) {
  return (
    <div className='NftCard'>
      <img src={game.url} alt='' />
      <h2 className='nft_title'>{game.name}</h2>
      <p className='price'>0.025 ETH</p>
      <button className='buy'>Buy</button>
    </div>
  );
}

export default NftCard;
