import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Productlist = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('/api/products/getAll')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
                console.log(res.data)
            });
    }, []);

    return (
        <div className='product-wrapper'>
            {loaded && products.map((product,i) => <Link key={i} to={"/"+product._id}>{product.title}</Link>)}
        </div>
    );
}

export default Productlist;
