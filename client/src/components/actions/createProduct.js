import axios from "axios"

const createProduct = async (data) => {
    try {
        const res = await axios.post('/api/products/createProduct',data)
        return {success: true}
    } catch(err) {
        return {success: false}
    }
}

export {createProduct};