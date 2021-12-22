import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios"

const Details = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('/api/products/'+id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log(res.data)
            });
    }, [id]);
    return (
        <div>
            {loaded && 
            <div>
                <h3>{product.title}</h3>    
                <h3>{product.price}</h3>    
                <h3>{product.description}</h3>    
            </div>}
        </div>
    );
}

export default Details;
