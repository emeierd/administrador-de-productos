import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Productlist = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/products/getAll')
            .then(res => {
                setProducts(res.data);
                setLoaded(true);
                console.log(res.data)
            });
    }, []);

    const eliminar =  async(e,id) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/products/'+id+'/remove')
            console.log(res)
            setProducts(products.filter(p => p._id != id));
        } catch(err) {
            console.error("Error",err)
            alert("Error")
        }
    }

    return (
        <div className='product-wrapper'>
            {loaded && products.map((product,i) => 
            <div>
            <Link key={i} to={"/"+product._id}>{product.title}</Link>
            <button onClick={(e) => eliminar(e,product._id)}>Eliminar</button>
            </div>)}
        </div>
    );
}

export default Productlist;
