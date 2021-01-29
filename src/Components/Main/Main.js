import React from 'react'
import { Button, Layout } from 'antd';
import 'antd/dist/antd.css';
import './Main.css'
import SwitchComp from '../MaterialComp/SwitchComp';
import { HomeOutlined } from '@ant-design/icons';
import { TagOutlined } from '@ant-design/icons';
import { GiftOutlined } from '@ant-design/icons';
import { FacebookFilled } from '@ant-design/icons';
import { PushpinFilled } from '@ant-design/icons';
import { UsergroupAddOutlined } from '@ant-design/icons';
import { FundProjectionScreenOutlined } from '@ant-design/icons';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { AmazonSquareFilled } from '@ant-design/icons';
import { MoneyCollectOutlined } from '@ant-design/icons';
import { MenuOutlined } from '@ant-design/icons';
import { PlusCircleFilled } from '@ant-design/icons';
import { Input, Space } from 'antd';
import MainContent from '../Content/MainContent';
import AvatarPix from '../MaterialComp/AvatarPix'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
// import { AudioOutlined } from '@ant-design/icons';

// import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
// import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
// import EqualizerOutlinedIcon from '@material-ui/icons/EqualizerOutlined';

function Main() {
  const { Header, Footer, Sider, Content } = Layout;

  //Search Box conditions
  const { Search } = Input;

  // const suffix = (
  //   <AudioOutlined
  //     style={{
  //       fontSize: 16,
  //       color: '#1890ff',
  //     }}
  //   />
  // );
  const onSearch = value => console.log(value);
  //Search Box Conditions Stop Hear

  return (
    <div>


      <Layout>
        <Sider className='theSlider'>
          <div>
            <SwitchComp />
          </div>

          <div>

            <div className='IconTextHold'>
              <HomeOutlined className='IconStyle' />
              <p className='TexticonStyle'>Home</p>
            </div>

            <div className='IconTextHold'>
              <ShoppingCartOutlined className='IconStyle' />
              <p className='TexticonStyle'>Sales Order</p>
            </div>


            <div className='IconTextHold'>
              <TagOutlined className='IconStyle' />
              <p className='TexticonStyle'>Purchase Order</p>
            </div>


            <div className='IconTextHold'>
              <GiftOutlined className='IconStyle' />
              <p className='TexticonStyle'>Products</p>
            </div>


            <div className='IconTextHold'>
              <UsergroupAddOutlined className='IconStyle' />
              <p className='TexticonStyle'>Coustomer</p>
            </div>


            <div className='IconTextHold'>
              <MoneyCollectOutlined className='IconStyle' />
              <p className='TexticonStyle'>Invoice</p>
            </div>


            <div className='IconTextHold'>
              <FundProjectionScreenOutlined className='IconStyle' />
              <p className='TexticonStyle'>Reports</p>
            </div>
          </div>

          <hr style={{ width: '170px', marginTop: '-10px', marginBottom: '20px' }} />


          <div>
            <p style={{ fontSize: "13px", color: 'white', marginLeft: '40px' }}>SALES CHANNEL</p>


            <div className='IconTextHold'>
              <FacebookFilled className='IconStyle' />
              <p className='TexticonStyle'>Facebook</p>
            </div>


            <div className='IconTextHold'>
              <AmazonSquareFilled className='IconStyle' />
              <p className='TexticonStyle'>Amazon</p>
            </div>


            <div className='IconTextHold'>
              <PushpinFilled className='IconStyle' />
              <p className='TexticonStyle'>Pintrest</p>
            </div>


            <div style={{
              width: '200px',
              display: 'flex',
              // backgroundColor: 'red',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <Button style={{ backgroundColor: '#0fdea5', color: 'white' }} >+ Add Channel</Button>
            </div>


          </div>
        </Sider>
        <Layout>
          <Header className='theHeader' >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '10px',
              // backgroundColor: 'red'
            }}>

              <div>
                <MenuOutlined style={{
                  fontSize: '25px',
                  marginRight: '30px'
                }} />
              </div>

              <div>
                <PlusCircleFilled style={{
                  fontSize: '25px',
                  color: '#0fdea5'
                }} />
              </div>

              <div style={{
                marginTop: '20px',
                marginLeft: '20px',
                // backgroundColor: '#f7f5f9'
              }}>
                <Space direction="vertical">
                  <Search placeholder="input search text" onSearch={onSearch} enterButton />
                </Space>
              </div>

              <NotificationsActiveIcon style={{ marginTop: '-10px', marginLeft: '500px' }} />


              <div style={{ marginLeft: "20px" }}>
                <AvatarPix />
              </div>
              <div>
                <h3>Olorunda Samuel</h3>
              </div>

            </div>
          </Header>
          <Content className='theContent'>
            <MainContent />
          </Content>
          <Footer className='theFooter'>
            Designed By Olorunda Samuel<strong> A Student of CodeLab 🚀We Move 🚀  </strong>
          </Footer>
        </Layout>
      </Layout>
    </div>
  )
}

export default Main
