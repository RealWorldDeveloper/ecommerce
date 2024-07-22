import React from "react";
import { useState } from "react";
import { assets } from "../../assets/assets";
import { food_list } from "../../assets/assets";
import '../FoodDisplay/FoodDisplay'
import { addToCar } from "../../Redux/Slice/CartSlice";
import {useDispatch} from 'react-redux'

function FoodDisplay({name,image,description,price, element}) {
  
const dispatch = useDispatch()
const handleCart = (element)=>{
dispatch(addToCar(element))
}
  return (
    <div>
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title text-white fs-3">{name}</h5>
          <p className="card-text text-light">{description}</p>
          <h4 className="price text-info">£{price}</h4>
          <button className="btn bg-primary p-2 text-white" onClick={()=> dispatch(addToCar(element))}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default FoodDisplay;
