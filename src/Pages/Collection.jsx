import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/myAssets/assets'
import ProductItem from '../components/ProductItem'
import Title from '../components/Title'

const Collection = () => {
  const {products, search, showSearch} = useContext(ShopContext)

  const [showFilter, setShowFilter] =useState(false)
  const [filterProduct, setFilterProduct] = useState([])
  const [category, setCategory] = useState([])
  const [brand, setBrand] = useState([])
  const [sortType, setSortType] =useState('relevant')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setCategory(prev=> [...prev, e.target.value])
    }
  }

  const toggleBrand = (e)=> {
    if (brand.includes(e.target.value)) {
      setBrand(prev=> prev.filter(item => item !== e.target.value))
    } else {
      setBrand(prev=> [...prev, e.target.value])
    }
  }

  const applyFilter = () => {

    let productCopy = products.slice();

    if(showSearch && search){
      productCopy = productCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productCopy = productCopy.filter(item => category.includes(item.category))
    }

     if (brand.length > 0){
      productCopy = productCopy.filter(item => brand.includes(item.brand))

    }

    setFilterProduct(productCopy)
  }

  const sortProduct = ()=> {

    let fpCopy = filterProduct.slice();

    switch(sortType) {

      case 'low-to-high':
        setFilterProduct(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;

      case 'high-to-low':
        setFilterProduct(fpCopy.sort((a,b) => (b.price - a.price) ))
        break;

        default:
          applyFilter();
          break;
    }
  }

  useEffect(()=> {
    applyFilter();
  },[category, brand, search, showSearch])

  useEffect(()=> {
    sortProduct();
  },[sortType])

  return (
    <div className='flex flex-col sm:flex-row gap-1 lg:mt-20 mx-15 sm:gap-10 pt-10 '>

      {/* Filter Options */}
      <div className='min-w-60'>
        
        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-2xl flex items-center cursor-pointer gap-3'>FILTERS 
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category filter */}
        <div className={`border border-gray-300 ${showFilter ? '' : 'hidden'} sm:block`}>

          <p className='mx-2 mb-5 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='mx-3.5 flex gap-2 text-black'>
              <input className='w-3' type="checkbox" value={'Men'} onChange={toggleCategory} />Men
            </p>

             <p className='mx-3.5 flex gap-2 text-black'>
              <input className='w-3' type="checkbox" value={'Women'}onChange={toggleCategory} />Women
            </p>
          </div>
        </div>

        {/* Brand Filter */}
        <div className={`border border-gray-300 pt-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p></p>
          <p className='mx-2 mb-5 text-sm font-medium'>BRANDS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='mx-3.5 flex gap-2 text-black'>
              <input className='w-3' type="checkbox" value={'Audemars Piguet'} onChange={toggleBrand}/>AUDEMARS PIGUET
            </p>

             <p className='mx-3.5 flex gap-2 text-black'>
              <input className='w-3' type="checkbox" value={'Cartier'} onChange={toggleBrand}/>CARTIER
            </p>

             <p className='mx-3.5 flex gap-2 text-black'>
              <input className='w-3' type="checkbox" value={'Rolex'} onChange={toggleBrand}/>ROLEX
            </p>

             <p className='mx-3.5 flex gap-2 text-black'>
              <input className='w-3' type="checkbox" value={'Patek Philippe'} onChange={toggleBrand} />PATEK PHILIPPE
            </p>

             <p className='mx-3.5 flex gap-2 text-black'>
              <input className='w-3' type="checkbox" value={'Smart'} onChange={toggleBrand}/>SMART
            </p>

             <p className='mx-3.5 flex gap-2 text-black'>
              <input className='w-3' type="checkbox" value={'Sport'} onChange={toggleBrand}/>SPORT
            </p>
          </div>
        </div>
      </div>

      {/* Right side*/}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'} text2={' COLLECTION'}/>

          {/* products sort  */}
          <select onChange={(e)=> setSortType(e.target.value)} className='border-2 border-gray-300 lg:h-[8vh] text-sm px-2 ' >
            <option value="relevant">Sort  by:Relevant</option>
            <option value="low-to-high">Sort  by:Low to High</option>
            <option value="high-to-low">Sort  by:High to Low</option>

          </select>
        </div>



       {/* Mapping product */}
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
        {
          filterProduct.map((item,index)=>(
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))

        }
      </div>
      </div>
    </div>
  )
}

export default Collection
