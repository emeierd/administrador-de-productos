import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios"

const Details = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('/api/products/'+id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log(res.data)
            });
    }, [id]);

    const eliminar =  async(e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/products/'+id+'/remove')
            console.log(res)
            navigate('/')
        } catch(err) {
            console.error("Error",err)
            alert("Error")
        }
    }

    return (
        <div>
            {loaded && 
            <div>
                <h3>{product.title}</h3>    
                <h3>{product.price}</h3>    
                <h3>{product.description}</h3>    
            </div>}
            <button onClick={eliminar}>Eliminar</button>
        </div>
    );
}

export default Details;
