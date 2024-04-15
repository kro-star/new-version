import React from "react";
import { useDispatch } from "react-redux";

const ItemField = ({namePr, price, setNamePr, setPrice, addProduct}) => {

  return (
    <label>
        <input type="text" name = "namePr" value = {namePr} onChange = {(e) => setNamePr(e.target.value)} />
        <input type="text" name = "price" value = {price} onChange = {(e) => setPrice(e.target.value)} />
        <button onClick = {addProduct}>add product</button>
    </label>
  );
};

export default ItemField;