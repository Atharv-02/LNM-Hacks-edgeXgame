import React from 'react';
import SecNftCard from '../components/SecNftCard';
import './SecondaryExplore.css';

function SecondaryExplore() {
  return (
    <div className='SecondaryExplore'>
      <div className='Exploree'>
        <h1 className='head'>Explore</h1>
        <div className='nft_cards'>
          <SecNftCard />
          <SecNftCard />
          <SecNftCard />
          <SecNftCard />
          <SecNftCard />
          <SecNftCard />
          <SecNftCard />
          <SecNftCard />
          <SecNftCard />
          <SecNftCard />
          <SecNftCard />
          <SecNftCard />
        </div>
      </div>
    </div>
  );
}

export default SecondaryExplore;
