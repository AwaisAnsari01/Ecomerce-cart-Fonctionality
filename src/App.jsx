import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart } from './config/cartSlice'
import Navbar from './components/Navbar'


function App() {
  let [data, setData] = useState([])
  let dispatch = useDispatch()

  // let selector = useSelector(state => state.cart.cartItems)

  useEffect(() => {
    axios('https://dummyjson.com/products')
      .then((res) => {
        console.log(res.data.products)
        setData(res.data.products)



      })
      .catch(err => console.log(err)
      )
  }, [])




  function addToCart(item) {
    console.log(item);
    dispatch(addCart({
      item: item,

    }))



  }

  return (
    <>

      <Navbar />

      <div className='flex justify-center text-center gap-3 flex-wrap mt-4'>
        {data ? data.map((item) => {
          return (
            <div key={item.id} className=''>
              <div className='p-5 border w-[25rem]'>
                <img className='w-[200px] mx-auto' src={item.thumbnail} alt="no product" />
                <>{item.title}</>
                <p>{item.price}</p>
                <p>{item.description.slice(0, 50) + "..."}</p>
                <button onClick={() => addToCart(item)} className='px-3 py-2 bg-[#7f7fc0] rounded-md w-[7rem] mt-3' >Add to cart</button>





              </div>

            </div>
          )
        }) : <h1>...loading</h1>
        }
      </div>

      {/* <CheckOut /> */}
    </>
  )
}

export default App