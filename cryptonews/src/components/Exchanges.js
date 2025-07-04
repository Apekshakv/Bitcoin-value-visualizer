import React from 'react';
import Navbar from './Navbar';
import './Exchange.css';

const Exchanges = () => {
  return (
    <div className="layout">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="content" style={{ padding: '30px 40px' }}>
        <h1>Cryptocurrency Exchanges</h1>
        <p>
          A <strong>cryptocurrency exchange</strong> is a digital platform that allows users to buy, sell, and trade cryptocurrencies like Bitcoin, Ethereum, and others. These exchanges play a crucial role in the crypto ecosystem by providing liquidity, price discovery, and a marketplace for trading.
        </p>

        <h2>Types of Exchanges</h2>
        <ul>
          <li><strong>Centralized Exchanges (CEXs):</strong> Operated by companies that act as intermediaries. They are fast, easy to use, and often support fiat currencies. Examples include Binance, Coinbase, Kraken.</li>
          <li><strong>Decentralized Exchanges (DEXs):</strong> Peer-to-peer platforms with no central authority. Trades happen directly between users using smart contracts. Examples include Uniswap, PancakeSwap, dYdX.</li>
        </ul>

        <h2>Popular Centralized Exchanges</h2>
        <ol>
          <li><strong>Binance:</strong> World's largest crypto exchange by volume. Offers hundreds of coins and advanced trading tools.</li>
          <li><strong>Coinbase:</strong> U.S.-based and beginner-friendly. Publicly traded and highly regulated.</li>
          <li><strong>Kraken:</strong> Offers margin trading and futures. Known for security and compliance.</li>
          <li><strong>KuCoin:</strong> Popular for altcoins and low trading fees.</li>
        </ol>

        <h2>Why Use a Crypto Exchange?</h2>
        <ul>
          <li>Buy or sell crypto using fiat currencies.</li>
          <li>Trade crypto pairs (e.g., BTC/ETH, BTC/USDT).</li>
          <li>Store assets in exchange wallets (though cold wallets are safer).</li>
          <li>Access additional tools like staking, futures, or spot trading.</li>
        </ul>

        <p style={{ marginTop: '20px' }}>
          Always do your research before using any exchange, and use strong passwords and two-factor authentication to protect your assets.
        </p>
      </div>
    </div>
  );
};

export default Exchanges;
