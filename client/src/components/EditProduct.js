import React, { useEffect, useState } from 'react';
import axios from 'axios';


const EditProduct = ({ product, _id }) => {

    const onSubmit = async (e) => {
        e.preventDefault();
        const formEl = e.target.closest('form');
        const formData = new FormData(formEl);
        const entries = {};
        for (let [key, value] of formData.entries()) entries[key] = value.trim()
        console.log(entries)
        //hacer el post a editar
        try {
            const res = await axios.post('/api/products/'+_id+'/edit',entries)
            console.log(res)
        } catch(err) {
            console.error("Error",err)
        }
    }


    return (
        <>
            <form onSubmit={onSubmit}>
                <label htmlFor='title'>Title</label>
                <input type="text" id="title" name="title" defaultValue={product.title} />
                <label htmlFor='price'>Price</label>
                <input type="number" id="price" name="price" defaultValue={product.price} />
                <label htmlFor='description'>Description</label>
                <input type="text" id="description" name="description" defaultValue={product.description} />
                <button>Editar</button>
            </form>
        </>
    );
}

export default EditProduct