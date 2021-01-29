import React from 'react'
import './MainContent.css'
import Invest from '../Img/invest.svg'
import ContentPartTwo from './ContentPartTwo'

function MainContent() {
  return (
    <div className="ContentColtrol">
      <div className="SubContentControl">

        <div className="RightSide">
          <div className="GreetingDiv">
            <p style={{ fontSize: '35px' }}>Hi Olorunda, <i style={{ color: '#aa98d9' }}>Good Morning</i></p>
            <p style={{
              fontSize: "20px"
            }}>Hear is what is Happning with Your Store<br /> Today... Lets Check It Out</p>
          </div>
          <div className="SalesCard">
            <div className="SubSalesCard">
              <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#0fdea5',
                // backgroundColor: 'green'
              }} >$24, 736  <sup style={{ fontWeight: 'lighter', marginLeft: '10px' }}>12%</sup> </p>
              <p style={{
                // backgroundColor: 'blue',
                marginTop: "-15px",
                fontSize: "12px",
                fontWeight: 'bold'
              }}>Today's Sale</p>
            </div>

            <div className="SubSalesCard">
              <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#512ab5',
                // backgroundColor: 'green'
              }}>270  <sup style={{ fontWeight: 'lighter', marginLeft: '10px', color: 'darkred' }}>   21%</sup> </p>
              <p style={{
                // backgroundColor: 'blue',
                marginTop: "-15px",
                fontSize: "12px",
                fontWeight: 'bold'
              }}>Today's Total Order</p>
            </div>

            <div className="SubSalesCard">
              <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
                color: '#c813d1',
                // backgroundColor: 'green'
              }}>19,482  <sup style={{ fontWeight: 'lighter', marginLeft: '10px', color: '#0fdea5', }}>35%</sup> </p>
              <p style={{
                // backgroundColor: 'blue',
                marginTop: "-15px",
                fontSize: "12px",
                fontWeight: 'bold'
              }}>Today's Visitors</p>
            </div>
          </div>
        </div>



        <div className="LeftSide" style={{ marginLeft: '170px' }}>
          <img src={Invest} alt="" style={{
            width: '400px'
          }} />
        </div>
      </div>
      <ContentPartTwo />
    </div>
  )
}

export default MainContent
