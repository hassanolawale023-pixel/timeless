import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/myAssets/assets'
import { useParams } from 'react-router-dom';
import RelatedProduct from '../components/RelatedProduct';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext)
  const [productData, setProductData] = useState(false)
  const [image, setImage] = useState('')

  const fetchProductdata = async () => {
    products.map((item)=> {
      if(item._id === productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }

  useEffect (()=>{
    fetchProductdata()
  },[productId, products])
  
  return productData ? (
    <div className='px-5 lg:mt-25 transition-opacity ease-in duration-500 opacity-100'>

      {/* product data */}

      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

        {/* product images */}

        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>

          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item,index) => (
                <img
                onClick={()=>setImage(item)}
                key={index}
                src={item}
                className='w-[90%] sm:mb-3 flex-shrink-0 cursor-pointer'
                alt="" />
              ))
            }
          </div>

          <div className='w-full sm:w-[80%]'>
          <img src={image} className='w-full h-auto' alt="" />
        </div>
        </div>

        {/* product details */}
        <div className='flex-1'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap- mt02'>
            <img src={assets.star_icon} className='w-3.5' alt="" />
             <img src={assets.star_icon} className='w-3.5' alt="" />
              <img src={assets.star_icon} className='w-3.5' alt="" />
               <img src={assets.star_icon} className='w-3.5' alt="" />
                <img src={assets.star_dull_icon} className='w-3.5' alt="" />
                <p className='pl-2'>(50)</p>
          </div>
          <p className='mt-5 text-2xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-4 text-gray-700 md:w4/5'>{productData.description}</p>
          <button
          onClick={()=>addToCart(productData._id)}
          className='bg-black text-white px-8 py-3 text-sm active:bg-blue-500 cursor-pointer my-5 lg:my-5' >ADD TO COLLECTION</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gray-700 mt-5 flex flex-col gap-1'>
            <p>Easy return and exchange policy within 7 days</p>
            <p>100% Original Product</p>
            <p>Free shipping on orders over $5000</p>
            <p>Cash on delivery available 
              (Terms & Conditons apply)
            </p>
          </div>
        </div>
      </div>

      {/* Description and review */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (50)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-black'>
          <p>Experience the perfect blend of style, perfomance and reliability with this premium product. Designed with attention to details, This premium quality product is designed to deliver exceptional performance and lasting durability. Crafted with attention to detail and made from high-grade materials, it offers a perfect balance of style, comfort, and reliability. Whether for daily use or special occasions, this product fits seamlessly into your lifestyle. </p>

          <p>This premium quality product is designed to deliver exceptional performance and lasting durability. Crafted with attention to detail and made from high-grade materials, it offers a perfect balance of style, comfort, and reliability. Whether for daily use or special occasions, this product fits seamlessly into your lifestyle.</p>
        </div>
      </div>

      {/* Related Product */}
      <RelatedProduct 
      category={productData.category}
      brand={productData.brand}
      />


    </div> 
  ) : <div className='opacity-0'></div>
}

export default Product