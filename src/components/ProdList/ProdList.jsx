import React from "react";
import Product from "../Product/Product";
import { useSelector } from "react-redux";

const ProductList = ({setPrice, setNamePr}) => {
    const products = useSelector(state => state.products.products);

  return (
    <table>
        <thead>
            <tr>
                <td>Название</td>
                <td>Цена</td>
                <td>Action</td>
            </tr>
        </thead>
        <tbody>
                {
                products.map(   product =>  <Product setPrice={setPrice} setNamePr={setNamePr} key={product.id} {...product} />)
                }
            
        </tbody>
    </table>
  );
};

export default ProductList;