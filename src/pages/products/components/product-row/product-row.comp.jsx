import React from 'react';

import './product-row.style.css';

const ProductRow = (props) => {
    return (
        <div className="product-row-container">
            
            {
                /*todo lo que se ingrese en estas llaves corresponde a codigo*/
                props.product.stock === 0
                
                /**operador ternario */ 
                ?/**si el stock es cero entonces            if true*/
                    <span className="product-without-stock">{props.product.name}</span>

                : /**si no es cero, entonces                 else*/
                    <span>{props.product.name}</span>

            }
            
            {props.product.price}
        </div>
    );
}

export default ProductRow;