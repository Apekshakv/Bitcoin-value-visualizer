import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Typography, Spin } from 'antd';
import Navbar from './Navbar';
import './Cryptocu.css';

const { Title } = Typography;

const New = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true); 

  const fetchNews = async () => {
    const url = 'https://cryptocurrency-news2.p.rapidapi.com/v1/cryptodaily';
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '8fd4cc5935msh55369f10316779ap1845e9jsneaa2d2f9d6f8',
        'x-rapidapi-host': 'cryptocurrency-news2.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setNews(data.data.slice(0, 20));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
       <p>Loading</p>
      </div>
    );
  }

  return (
    <div className="layout">
      <div className="sidebar">
        <Navbar />
      </div>
      <div className="content" style={{ padding: '30px 40px' }}>
        <Title level={2}>Latest Crypto News</Title>
        <Row gutter={[24, 24]}>
          {news.map((item, idx) => (
            <Col key={idx} xs={24} sm={12} lg={6}>
              <Card hoverable style={{ height: '100%', borderRadius: '9px' }}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a href={item.url} target="_blank" rel="noopener noreferrer">
                  Read Full Article
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default New;
