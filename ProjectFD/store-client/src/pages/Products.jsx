import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { getProducts } from '../api/api'
import { Loader, Loader2, TriangleAlert } from 'lucide-react'

const Products = () => {
    const [products, setProducts] = useState(null)
    const [loading, setLoading] = useState(true)

    async function fetchData() {
        try {
            const res = await getProducts()
            if (res.status === 200) {
                setProducts(res.data)
            }

        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
        }
    }


    useEffect(() => {
        fetchData()
    }, [])

    // if (loading) {
    //     return (
    //         <>
    //             <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
    //                 <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
    //             </div>
    //         </>
    //     )
    // }
    // if (!products || products.length === 0) {
    //     return (
    //         <>
    //             <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
    //                 <TriangleAlert className='text-orange-400 h-12 w-12' />
    //                 <p>
    //                     No Products Available !
    //                 </p>
    //             </div>
    //         </>
    //     )
    // }

    // const img = "https://loremflickr.com/640/480/cats"
    // const name = "Bespoke Fresh Mouse"
    // const price = "101.00"
    return (
        
        <div className="h-[16em] w-[18em] border-2 border-[rgba(75,30,133,0.5)] rounded-[1.5em] bg-gradient-to-br from-[rgba(75,30,133,1)] to-[rgba(75,30,133,0.01)] text-white font-nunito p-[1em] flex justify-center items-left flex-col gap-[0.75em] backdrop-blur-[12px]">
  <div>
    <h1 className="text-[2em] font-medium">Heading</h1>
    <p className="text-[0.85em]">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum
      blanditiis pariatur sequi magni.
    </p>
  </div>
  <button className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
    <p>Button</p>
    <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  </button>
</div>

            {/* <div className='w-screen h-full flex justify-start items-start flex-row flex-wrap mt-14 mb-12 gap-y-20 gap-x-2'>

                {products.map((product, index) => (
                    <ProductCard img={product.img} name={product.name} price={product.price} key={product.id} />
                ))
                }
            </div> */}
        </>
    )
}

export default Products