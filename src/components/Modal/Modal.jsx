import './modal.css';

import React from 'react'

const Modal = ({children, isOpen, onClose, namePr, price, id}) => {
    return(<>
        {isOpen && (
        <div className='modal'>
            <div className="modal-wrapper">
                <div className="modal-content">
                    <div className="modal-header">
                        <div className="nameWindow"> Add Product</div>
                        <button className="modal-close-button"
                        onClick = {() => onClose()}>
                            &times;
                        </button>
                    </div>
                    <label htmlFor="namePr"> Name</label>
                    <input value={namePr} name="NamePr"/>
                    <label htmlFor="price">Price</label>
                    <input value={price} name="price"/>
                    {children}
                </div>
            </div>

        </div>
        )}
        </>

    );
}

export default Modal; 