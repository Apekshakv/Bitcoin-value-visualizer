import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card, Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from './services/CryptoApi';
import { SearchOutlined } from '@ant-design/icons';
import './Cryptocu.css';

const Cryptocurencies = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  

  
  useEffect(() => {
    const coins = data?.data?.coins || []
    const filteredData = coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setCryptos(filteredData);
  }, [data, searchTerm]);

  if (isFetching) return <p>Loading...</p>;

  return (
    <div className="layout">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="content">
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: '25px', width: '300px' }}
          
          /> {<SearchOutlined />}
        </div>

        <Row gutter={[28, 28]}>
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
    </div>
  );
};

export default Cryptocurencies;
