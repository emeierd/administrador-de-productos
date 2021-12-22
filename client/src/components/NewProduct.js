import React from 'react';
import {createProduct} from './actions/createProduct';

const Newproduct = () => {

    const onSubmit = (e) => {
        e.preventDefault();
        const formEl = e.target.closest('form');
        const formData = new FormData(formEl);
        const entries = {};
        for(let [key,value] of formData.entries()) entries[key]=value.trim()
        console.log(entries)
        const {success} = createProduct(entries);
    }
    return (
        <form onSubmit={onSubmit}>
            <label htmlFor='title'>Title</label>
            <input type="text" id="title" name="title"/>
            <label htmlFor='price'>Price</label>
            <input type="number" id="price" name="price"/>
            <label htmlFor='description'>Description</label>
            <input type="text" id="description" name="description"/>
            <button>Create</button>
        </form>
    );
}

export default Newproduct;
