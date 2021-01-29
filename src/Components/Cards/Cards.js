import React from 'react'
import './Cards.css'
import Bag from '../Img/bagg.png'
import appr from '../Img/appr.png'
import clored from '../Img/clored.png'
import tecsp from '../Img/tecsp.png'
import valSwe from '../Img/valSwe.png'
import sbd from '../Img/sbd.png'
import mabk from '../Img/mabk.png'
import acoat from '../Img/acoat.png'
import wat from '../Img/wat.png'
import gdgd from '../Img/gdgd.png'
import smphone from '../Img/smphone.png'
import schbag from '../Img/schbag.png'
import twowa from '../Img/twowa.png'
import smg7 from '../Img/smg7.png'
import lap from '../Img/lap 4.png'
import redd from '../Img/redd.png'
import wats from '../Img/wats.png'
import lappy from '../Img/lappy.png'
import MainCard from '../Cards/MainCard'

function Cards() {
  return (
    <div>
      <p style={{ fontSize: '20px', marginTop: '20px', fontWeight: 'bold' }}>Top Selling Product</p>
      <div className="Wrapper">
        <MainCard
          ProductPix={Bag}
          Productname="Italian Bag"
          Pricetag="$55,645"
          TotalSale="240"
        />
        <MainCard
          ProductPix={appr}
          Productname="Apple Air Max"
          Pricetag="$156,000"
          TotalSale="42"
        />
        <MainCard
          ProductPix={clored}
          Productname="Valintine Gown"
          Pricetag="$22.33"
          TotalSale="62"
        />
        <MainCard
          ProductPix={tecsp}
          Productname="i phone 22"
          Pricetag="$354,299"
          TotalSale="23"
        />
        <MainCard
          ProductPix={valSwe}
          Productname="Europian Coat"
          Pricetag="$23.68"
          TotalSale="24"
        />
        <MainCard
          ProductPix={sbd}
          Productname="Indian Bag"
          Pricetag="$45.85"
          TotalSale="91"
        />
        <MainCard
          ProductPix={mabk}
          Productname="Mark Pro Book"
          Pricetag="$727,394"
          TotalSale="12"
        />
        <MainCard
          ProductPix={acoat}
          Productname="Men Suit"
          Pricetag="$47.74"
          TotalSale="32"
        />
        <MainCard
          ProductPix={wat}
          Productname="Mens Watch"
          Pricetag="$44.20"
          TotalSale="49"
        />
        <MainCard
          ProductPix={gdgd}
          Productname="Office Bag"
          Pricetag="$32.88"
          TotalSale="21"
        />
        <MainCard
          ProductPix={smphone}
          Productname="Samsung s6"
          Pricetag="$74.28"
          TotalSale="94"
        />
        <MainCard
          ProductPix={twowa}
          Productname="Real Men's Watch"
          Pricetag="$39.38"
          TotalSale="22"
        />
        <MainCard
          ProductPix={smg7}
          Productname="Samsung s7 Edge"
          Pricetag="$884,834"
          TotalSale="11"
        />
        <MainCard
          ProductPix={lap}
          Productname="Lenovo Think Pad"
          Pricetag="$678,823"
          TotalSale="3"
        />
        <MainCard
          ProductPix={schbag}
          Productname="Student Bag"
          Pricetag="$20.85"
          TotalSale="87"
        />
        <MainCard
          ProductPix={redd}
          Productname="Red Sweater"
          Pricetag="$59.83"
          TotalSale="37"
        />
        <MainCard
          ProductPix={wats}
          Productname="Leather Watch"
          Pricetag="$84.73"
          TotalSale="83"
        />
        <MainCard
          ProductPix={lappy}
          Productname="Mark Air"
          Pricetag="$383,000"
          TotalSale="25"
        />
      </div>
    </div>
  )
}

export default Cards
