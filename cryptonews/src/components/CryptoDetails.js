import React, { useState } from 'react';
import HTMLReactParser from 'html-react-parser';
import millify from 'millify';
import { Col, Row, Typography, Select } from 'antd';
import { useParams } from 'react-router-dom';
import './Cryptodetails.css'
import Navbar from './Navbar';
import { useGetCryptoDetailsQuery } from './services/CryptoApi';
import LineChart from './LineChart';
import { useGetCryptoHistoryQuery } from './services/CryptoApi';
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons';

const CryptoDetails = () => {
  const { uuid } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(uuid);
  const { Title, Text } = Typography;
  const { Option } = Select;
  const [timeperiod, setTimeperiod] = useState('7d');
    const { data: coinHistory } =  useGetCryptoHistoryQuery({uuid , timeperiod });

  console.log(data)
 

  const cryptoDetails = data?.data?.coin;
  if (isFetching || !cryptoDetails) return <p>Loading...</p>;

  const time = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];

  const stats = [
    { title: 'Price to USD', value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`, icon: <DollarCircleOutlined /> },
    { title: 'Rank', value: cryptoDetails?.rank, icon: <NumberOutlined /> },
    { title: 'Market Cap', value: `$ ${cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)}`, icon: <DollarCircleOutlined /> },
    { title: 'All-time-high (daily avg.)', value: `$ ${cryptoDetails?.allTimeHigh?.price && millify(cryptoDetails?.allTimeHigh?.price)}`, icon: <TrophyOutlined /> },
  ];

  const genericStats = [
    { title: 'Number Of Markets', value: cryptoDetails?.numberOfMarkets, icon: <FundOutlined /> },
    { title: 'Number Of Exchanges', value: cryptoDetails?.numberOfExchanges, icon: <MoneyCollectOutlined /> },
    { title: 'Approved Supply', value: cryptoDetails?.supply?.confirmed ? <CheckOutlined /> : <StopOutlined />, icon: <ExclamationCircleOutlined /> },
    { title: 'Total Supply', value: `$ ${cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)}`, icon: <ExclamationCircleOutlined /> },
    { title: 'Circulating Supply', value: `$ ${cryptoDetails?.supply?.circulating && millify(cryptoDetails?.supply?.circulating)}`, icon: <ExclamationCircleOutlined /> },
  ];

  return (
    <div className="layout">
      <div className="sidebar">
        <Navbar />
      </div>
        <div className="content">
    <div>
      <Col>
        <Col>
          <Title level={2}>
            {cryptoDetails.name} ({cryptoDetails.symbol}) Price
          </Title>
          <p>
            {cryptoDetails.name} live price in USD.
            View value statistics, market cap and supply.
          </p>
        </Col>

        <Select
          defaultValue="7d"
          placeholder="Select Time period"
          onChange={(value) => setTimeperiod(value)}
        >
          {time.map((date) => (
            <Option key={date}>{date}</Option>
          ))}
        </Select>
        <LineChart
coinHistory={coinHistory}
              currentPrice={millify(cryptoDetails.price)}
              coinName={cryptoDetails.name}
></LineChart>
        <Col>
          <Title level={3}>{cryptoDetails.name} Value Statistics</Title>
          {stats.map(({ icon, title, value }) => (
            <Col className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>

           <Col>
          <Title level={3}>{cryptoDetails.name} Other Statistics</Title>
          {genericStats.map(({ icon, title, value }) => (
            <Col className="coin-stats" key={title}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
       <Col className='des'>
   
     <Title level={3}>What is {cryptoDetails.name}
      
     </Title>
       {HTMLReactParser(cryptoDetails.description)}
     
       </Col>

      </Col>
       </div>
    </div>
    </div>
  );
};

export default CryptoDetails; 