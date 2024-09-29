import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Navbar() {
  let seletor = useSelector(state => state.cart.cartItems)
  console.log(seletor);


  return (
    <>

      <div className='bg-[#808080] flex items-center p-3' >
        <div className='flex w-[45%]  gap-2 items-center' >

          <button>cart items <sup className='bg-[red] w-[1rem] px-1 rounded-full bg-slate-500 p-2 w-[6rem]'>{seletor.length}</sup></button>


          <Link to="check">
            <button className='bg-slate-500 p-2 w-[6rem] rounded-md'>checkout</button>
          </Link>

        </div>

        <div className='w-[50%]'> <h1 className=' text-[2rem] mt-0'>Product</h1></div>

      </div>

    </>
  )
}

export default Navbar