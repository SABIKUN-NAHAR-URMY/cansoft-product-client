import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const ProductEdit = () => {
    const data = useLoaderData();
    console.log(data);
    const navigate = useNavigate();
    // useTitle('EditReview');

    const handelEditProduct = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const stock = form.stock.value;

        const editProduct = {
            title,
            price,
            rating,
            stock
        }

        fetch(`http://localhost:5000/editProduct/${data._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(editProduct)
        })
            .then(data => {
                alert("Product Updated!");
                navigate('/productList');
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='bg-[#764432a5] w-full h-screen'>
            <div className='lg:w-1/2 pt-20 mx-auto border shadow-xl rounded-lg p-5 m-10'>
            <form onSubmit={handelEditProduct}>
                <input data-aos="fade-up"
     data-aos-duration="1000" type="text" name='title' defaultValue={data.title} placeholder='Title' className="input input-bordered w-full mb-8" />
                <input data-aos="fade-up"
     data-aos-duration="1000" type="text" name='price' defaultValue={data.price} placeholder='Price' className="input input-bordered w-full mb-8" />
                <input data-aos="fade-up"
     data-aos-duration="1000" type="text" name='rating' defaultValue={data.rating} placeholder='Rating' className="input input-bordered w-full mb-8" />
                <input data-aos="fade-up"
     data-aos-duration="1000" type="text" name='stock' defaultValue={data.stock} placeholder='Stock' className="input input-bordered w-full mb-8" />

                <input data-aos="fade-up"
     data-aos-duration="1000" className='btn bg-[#795548] w-full' type="submit" value="Update" />
            </form>
            </div>
        </div>
    );

};

export default ProductEdit;