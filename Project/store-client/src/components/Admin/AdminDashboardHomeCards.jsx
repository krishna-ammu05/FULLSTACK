import React from 'react'
import { ShoppingCart,Package2,User } from 'lucide-react'

const AdminDashboardHomeCards = () => {
  return (
      <>
        <div className='w-full flex flex-col justify-center items-center gap-6'>
          <div className='w-full h-[20vh] flex flex-row justify-center items-center px-4 shadow-md rounded-md hover:shadow-purple-500 hover:text-purple-500'>
            <div className='w-[90%] h-full flex flex-col justify-center items-center px-6'>
              <p className='text-3xl font-bold'>
                1000
              </p>
              <p className='text-sm font-semibold px-1'>
                Products

              </p>
            </div>
            <div className='w-[90%] h-full flex justify-center items-center'>
            <ShoppingCart />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-6'>
          <div className='w-full h-[20vh] flex flex-row justify-center items-center px-2 shadow-md rounded-md hover:shadow-purple-500 hover:text-purple-500'>
            <div className='w-[70%] h-full flex flex-col justify-center items-center px-4'>
              <p className='text-3xl font-bold'>
                1000
              </p>
              <p className='text-sm font-semibold px-1'>
                Orders

              </p>
            </div>
            <div className='w-[30%] h-full flex justify-center items-center'>
            <Package2 />
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center gap-6'>
          <div className='w-full h-[20vh] flex flex-row justify-center items-center px-4 shadow-md rounded-md hover:shadow-purple-500 hover:text-purple-500'>
            <div className='w-[70%] h-full flex flex-col justify-center items-center px-4'>
              <p className='text-3xl font-bold'>
                1000
              </p>
              <p className='text-sm font-semibold px-1'>
                Users

              </p>
            </div>
            <div className='w-[30%] h-full flex justify-center items-center'>
            <User />
            </div>
          </div>
        </div>
    </>
  )
}

export default AdminDashboardHomeCards