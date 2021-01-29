import React from 'react'
import zee from '../Img/zee.png'
import ddd from '../Img/ddd.gif'
import Cards from '../Cards/Cards'

function ContentPartTwo() {
  return (
    <div style={{
      width: '100%',
      marginTop: '30px',
      marginLeft: '50px'
    }}>
      <div>
        <img src={zee} alt="" style={{
          width: "600px",
          height: "230px"
        }} />
        <img src={ddd} alt="" width="500px" style={{
          width: "380px",
          height: "230px",
          marginLeft: "40px",
        }} />
      </div>
      <Cards />
    </div>
  )
}

export default ContentPartTwo
