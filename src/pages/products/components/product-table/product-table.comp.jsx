import React from 'react';
import ProductCategoryRow from '../product-category-row/product-category-row.comp';
import ProductRow from '../product-row/product-row.comp';

import './product-table.style.css';

const ProductTable = () => {
    return (
        <div className="product-table-container">
            <ProductCategoryRow categoryName="Sporting goods"/>
            <ProductRow product={{
                name:"Football",
                price: 49.99,
                stock: 15,
            }}/>

            <ProductRow product={{
                name:"Baseball",
                price: 9.99,
                stock: 3,
            }}/>

            <ProductRow product={{
                name:"Basketball",
                price: 29.99,
                stock: 0,
            }}/>
            <ProductCategoryRow categoryName="Electronics"/>
            <ProductRow product={{
                name:"ipod touch",
                price: 99.99,
                stock: 15,
            }}/>

            <ProductRow product={{
                name:"IPhone 5",
                price: 399.99,
                stock: 0,
            }}/>

            <ProductRow product={{
                name:"Nessus 7",
                price: 99.99,
                stock: 4,
            }}/>

        </div>
    );
}

export default ProductTable;