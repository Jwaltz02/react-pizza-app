import React from 'react'

function MenuItem({ image, name, price }) {
  return (
    <div className='menu-items'>
      <div className='menu-image' style={{ backgroundImage: `url(${image})` }}></div>
      <div className='name-price'>
        <h5 className='menu-name'> {name} </h5>
        <p className='menu-price'> ${price}</p>
      </div>
    </div>
  ) 
}

export default MenuItem