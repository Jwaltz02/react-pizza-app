import React from 'react'
import '../styles/Menu.css'
import { MenuList } from '../helpers/MenuList'
import MenuItem from '../components/MenuItem'

function Menu() {
  return (
    <div className='menu'>
      <h1 className='menu-title'>Our Menu</h1>
      <div className='menu-list'>{MenuList.map((Item, key) => {
        return <MenuItem key={key} image={Item.image} name={Item.name} price={Item.price} />
      })}
      </div>

    </div>
  )
}

export default Menu

