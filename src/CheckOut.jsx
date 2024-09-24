import React from 'react'
import { useSelector } from 'react-redux'

function CheckOut() {
    let selector = useSelector(state => state.cart.cartItems)
    console.log(selector);

    return (
        <>
        <h1 className='text-center text-[2rem]'>Checkout</h1>

        <div className='flex justify-center text-center gap-3 flex-wrap mt-4'>
            {selector ? selector.map((item) => {

                return (
                    <div key={item.id} className=''>
                        <div className='p-5 border w-[25rem]'>
                            <img className='w-[200px] mx-auto' src={item.thumbnail} alt="no product" />
                            <>{item.title}</>
                            <p>{item.price}</p>
                            <p>{item.description.slice(0, 50) + "..."}</p>





                        </div>

                    </div>
                )
            }) : <h1>!no data found</h1>}
            </div>
        </>


    )
}
export default CheckOut