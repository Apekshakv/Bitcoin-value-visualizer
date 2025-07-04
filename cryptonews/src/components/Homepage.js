 import React from 'react'
import millify from 'millify';
import { Typography, Statistic, Col, Row ,Card } from 'antd';
import { Link } from 'react-router-dom';
import './Homebar.css'
import Navbar from './Navbar';
import { useGetCryptosQuery } from './services/CryptoApi'
import Cryptocurencies from './Cryptocurencies';
import { useState, useEffect } from 'react';
const Homepage = () => {
  const {data ,isFetching} = useGetCryptosQuery()
  const [cryptos, setCryptos] = useState([]);

  
useEffect(() => {
      if (data?.data?.coins) {
        setCryptos(data.data.coins.slice(0, 10));
      }
    }, [data]);
  
  if (isFetching) return <p>Loading...</p>;

  const gobalstats =  data?.data?.stats
  console.log(data)
    
  return (
    <div className="layout">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="content">
        <Typography.Title level={2}>
          Global Crypto Stats
        </Typography.Title>
        <Row>
          <Col span={12}><Statistic title='Cryptocurrenices' value={gobalstats.total}></Statistic></Col>
          <Col span={12}><Statistic title='Total Exchanges' value={millify(gobalstats.totalExchanges)}></Statistic></Col>
          <Col span={12}><Statistic title='Total Market Cap' value={millify(gobalstats.totalMarketCap)}></Statistic></Col>
          <Col span={12}><Statistic title='Total 24 Volume' value={millify(gobalstats.total24hVolume)}></Statistic></Col>
          <Col span={12}><Statistic title='Cryptocurrenices' value={millify(gobalstats.totalMarkets)}></Statistic></Col>
        </Row>
       <div style={{ marginTop: '24px' }}>
          <Typography.Title level={2}>Top 10 Cryptocurrenices in the world</Typography.Title>
          <div>
             <Row gutter={[32, 32]}>
          {cryptos.map((currency) => (
            <Col xs={24} sm={12} lg={6} key={currency.uuid}>
              <Link to={`/details/${currency.uuid}`}>
                <Card
                  title={`${currency.rank}. ${currency.name}`}
                  extra={<img src={currency.iconUrl} alt={currency.name} style={{ width: '30px' }} />}
                  hoverable
                >
                  <p>Price: {millify(currency.price)}</p>
                  <p>Market Cap: {millify(currency.marketCap)}</p>
                  <p>Daily Change: {currency.change}%</p>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>

          </div>
          <Typography.Title level={3}><Link to='/cryptocuriencs'>Show More</Link>  </Typography.Title>
          
        </div>
      </div>
    </div>
  )
}

export default Homepage  