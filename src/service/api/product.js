import axios from 'axios'
import Swal from "sweetalert2";

const baseUrl = 'http://localhost:4000'

const fetchDataProduct = async () => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`${baseUrl}/products/`, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        return response.data.products
    } catch (err) {
        console.log(err)
    }
}
const addData = async (postFruit) => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post(`${baseUrl}/products/create`, {
            name: postFruit.productName,
            description: postFruit.productDesc,
            price: postFruit.productPrice,
            stock: postFruit.productStock
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            },
        })
        return response.data.product
    } catch (err) {
        console.log(err)
    }
}
const editData = async (postFruit) => {
    const token = localStorage.getItem('token')
    const id = postFruit.productId
    const response = await axios.put(`http://localhost:4000/products/${id}`, {
        name: postFruit.productName,
        description: postFruit.productDesc,
        price: postFruit.productPrice,
        stock: postFruit.productStock
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return response.data.product
}
const deleteDataProduct = async (id) =>{
    const token = localStorage.getItem('token')
    const result = await Swal.fire({
        title: 'Konfirmasi Hapus Data',
        text: 'Anda yakin ingin menghapus data ini?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Ya, Hapus!',
        cancelButtonText: 'Batal',
        cancelButtonColor: '#C0C0C0',
        confirmButtonColor:'#d33'
    })
    if (result.isConfirmed){
        const response = await axios.delete(`http://localhost:4000/products/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        return response.data.product
    }
}

export {addData, editData, fetchDataProduct,deleteDataProduct}
