import React, {useEffect, useState} from 'react';
import EditProduct from '../components/EditProduct';
import { useParams } from "react-router-dom";
import axios from "axios"

const Edit = () => {
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get('/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
                console.log(res.data)
            });
    }, [id]);
    return (
        <div>
            {loaded && <EditProduct product={product} _id={id} />}
        </div>
    );
}

export default Edit;
