import React from 'react'
import { Avatar, Button ,Menu ,Typography } from 'antd'
import { Link } from 'react-router-dom'
import {HomeOutlined, MoneyCollectOutlined, FullscreenOutlined, BulbOutlined , MeanuOutlined, FundOutlined} from '@ant-design/icons'
import Homepage from './Homepage'

const Navbar = () => {



  return (



    <div>

<div className='nav-container'>

    <div className='logo-container'>
      
       <Menu theme='dark'>
     <Menu.Item icon={<HomeOutlined/>}>
        <Link to='/'>Home</Link>
        </Menu.Item>
        <Menu.Item icon={<FundOutlined/>}>
        <Link to='/cryptocuriencs'>Cryptocurencies</Link>
        </Menu.Item>
        <Menu.Item icon={<MoneyCollectOutlined/>}>
        <Link to='/exchanges'>Exchanges</Link>
        </Menu.Item>
        <Menu.Item icon={<BulbOutlined/>}>
        <Link to='/news'>News</Link>
        </Menu.Item>
      

       <Menu/>
       </Menu>








    </div>

</div>

   

    </div>
  )
}

export default Navbar