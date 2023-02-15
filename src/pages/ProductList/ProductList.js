import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(res => res.json())
      .then(data => setProducts(data))
  }, [])

  const handelEdit = id => {
    navigate(`/editProduct/${id}`);
  }

  return (
    <div>
      <div className='bg-[#cb937f] text-white p-28'>
        <p className='text-4xl font-bold' data-aos="fade-up"
     data-aos-duration="1000">All Product List</p>
      </div>
      <div className="overflow-x-auto my-10 border-2 border-orange-700 shadow-2xl shadow-orange-100">
        {
          console.log(products)
        }
        <table className="table w-full">

          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Thumbnail</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            {
              products.map(product => <tr key={product._id}>
                <th>{product.Id}</th>
                <td>{product.title}</td>
                <td>{product.price}</td>
                <td>{product.rating}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                <td><div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={product.thumbnail} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div></td>
                <td><button onClick={() => handelEdit(product._id)} className='btn bg-[#795548]'>Edit</button></td>
              </tr>)
            }

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;