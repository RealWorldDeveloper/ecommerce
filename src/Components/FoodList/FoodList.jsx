import './FoodList.css'
import React from 'react';
import { food_list } from "../../assets/assets";

import FoodDisplay from "../FoodDisplay/FoodDisplay";
function FoodList({category}) {
  
  return (
    <div className="food-list">
      <h1 className="foodlist-text text-white p-4">Our Top Dishes</h1>
      <div className="food-list-container">
        {food_list.map((items,index) => {
            if(category === 'all' || category === items.category){
                return <FoodDisplay key={index} element = {items} name= {items.name} image= {items.image} description= {items.description} price= {items.price} id = {items._id} />
              }
        })}
      </div>
    </div>
  );
}

export default FoodList;
