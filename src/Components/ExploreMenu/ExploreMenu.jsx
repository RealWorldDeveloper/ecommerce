import React from 'react'
import {menu_list} from '../../assets/assets'
import './ExploreMenu.css'
function ExploreMenu({category,Setcategory}) {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore Our Secret Menu</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ducimus.</p>
    <div className="explore-menu-list">
      {
        menu_list.map((items,index) =>{
        return <div className='explore-menu-list-items' key={index}onClick={() => Setcategory(prev => prev === items.menu_name ? 'all': items.menu_name ) }>
          <img src= {items.menu_image} alt="" />
          <p>{items.menu_name}</p>
        </div>})
      }

    
    </div>
    
    </div>
  )
}

export default ExploreMenu
