import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delProduct, editProduct, toggleIsEdit } from "../../store/productSlice";
import Modal from "../Modal/Modal";

const Product = ({id, namePr, price,isEdit, setPrice, setNamePr}) => {
    const dispatch = useDispatch();  
    const onChangeCaptureHandler = (e) => {
        console.log(e.target.value);
        product.namePr = e.target.value;
    };
   const products = useSelector(state => state.products.products);
   const product = products.find(prod => prod.id === id);

   const [modalInfoIsOpen, setModalInfoIsOpen] = useState(false);

  return (
    <tr key={product.id}>
        <td>
            {
                isEdit
                ? <input value={product.namePr} onChange={(e) => {product.namePr = e.target.value}}/>
                : <span>{ product.namePr }</span>
            }
        </td>
        <td>
            {
                isEdit
                ? <input value={price} onChange = {(e) => setPrice(e.target.value)} />
                : <span>{ price }</span>
            }</td>
        <td>
            <button onClick = {() => dispatch(delProduct({id}))}>delProduct</button>
            <button onClick = {() => { 
                    isEdit && dispatch(editProduct({id, price, namePr}))
                    dispatch(toggleIsEdit({id}));                
                } }>
                {
                    isEdit 
                    ? "save"
                    : "editProduct"
                }
                </button>
                <button className='modal-show-button'
                    onClick={() => setModalInfoIsOpen(true)}
                    >Modal</button>
                <Modal 
                    namePr={namePr}
                    id={id}
                    price={price}
                    isOpen={modalInfoIsOpen}
                    onClose={() => setModalInfoIsOpen(false)}>
                        <h2>Modal info</h2>
                        <p>
                        text text
                        </p>
                </Modal>
        </td>
    </tr>
  );
};

export default Product;