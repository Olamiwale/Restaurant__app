import React from 'react'
import menu from '../../images/menu.png'
import spoon from '../../images/spoon.png'

import wineData from '../wineData.js'
import cocktailData from '../cocktailData'
import './Menu.css'

export default function Menu() {

const wineList = wineData.map(wine =>(
  <div className='app__menuitem-wine'>
   <p> {wine.title}</p>
   <div className='app__menuitem-dash'></div>
   <p> {wine.price}</p>
  </div>
))

const cocktailList = cocktailData.map(cocktail =>(
  <div  className='app__menuitem-cocktail'>
    
   <p> {cocktail.title}</p>
   <div className='app__menuitem-dash'></div>
   <p> {cocktail.price}</p>
  </div>
))


  return (
    <div className='app__menuitem-head flex__center'> 
    
    
    <div>
      <p className='app__menu-p'>Menu That Fits You Palatte</p>
      <img src={spoon} alt='spoon' />
      <h1>Today's Special</h1>
    </div>

      <div className='app__menuitem'>
    <div>
      <p className='app__wine-head'>Wine</p>
        {wineList}    
      </div>

    <div className='app__menuitem-image'>
      <img src={menu} alt='menu-list' />
    </div>

    <div> 
      <p className='app__cocktail-head'>Cocktail</p>
      {cocktailList}</div>
      </div>
      <button className='menu-button'>Choose Menu</button>
    </div>
  )
}

