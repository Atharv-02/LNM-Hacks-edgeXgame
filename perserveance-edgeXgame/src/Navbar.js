import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const walletConnect = async () => {
    console.log('Requesting Account');

    //check if metamsk extention exist
    if (window.ethereum) {
      console.log('detected');

      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.log('Error Connecting ...');
      }
    } else {
      console.log('Metamask not detected');
    }
  };
  return (
    <>
      <nav className='navbar'>
        <div className='left-nav'>
          <p>edgeXgame</p>
        </div>
        <div className='right_nav'>
          <Link to='/' className='nav-link'>
            <button className='home btn'>Home</button>
          </Link>
          <Link to='/buy' className='nav-link'>
            <button className='buy btn'>Buy</button>
          </Link>
          <Link to='/aboutus' className='nav-link'>
            <button className='about btn'>About Us</button>
          </Link>
          <button
            className='connect_wallet btn btn_connect_wallet'
            onClick={walletConnect}
          >
            {walletAddress
              ? `${walletAddress.substring(0, 15)}...`
              : 'Connect Wallet'}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
