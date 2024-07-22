import React, { useState } from 'react'
import "./Home.css";
import Header from '../../Components/Header/Header';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodList from '../../Components/FoodList/FoodList';
function Home() {
  const [category, Setcategory] = useState('all')
  return (
    <div>
      <Header/>
      <ExploreMenu category = {category} Setcategory = {Setcategory}/>
      <FoodList category = {category}/>
    </div>
  )
}

export default Home
