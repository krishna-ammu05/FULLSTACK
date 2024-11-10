import React from 'react'
import AdminPageHeader from '../../components/Admin/AdminPageHeader'
import { Loader2,Pencil,Trash,TriangleAlert } from 'lucide-react'
import {getOrders} from '../../Api/api'
const AdminOrders = () => {

  const [orders, setOrders] = useState(null)
  const [loading, setLoading] = useState(true)
  async function fetchData() {
    try {
      const res = await getOrders()
      if (res.status === 200) {
        setOrders(res.data)
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
  if (loading) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <Loader2 className='text-purple-500 h-14 w-14 animate-spin' />
        </div>
      </>
    )
  }
  if (!orders || orders.length === 0) {
    return (
      <>
        <div className='w-screen h-[90vh] flex flex-col justify-center items-center'>
          <TriangleAlert className='text-orange-400 h-12 w-12' />
          <p>
            No Orders Available !
          </p>
        </div>
      </>
    )
  }
  return (
    <div className='w-full h-full flex flex-col justify-start items-start'>
      <AdminPageHeader title='Orders' />
      <table className='w-full h-full border-collapse border shadow-lg rounded-md'>
        <thead className='shadow-sm font-bold text-purple-500 text-left'>
          <tr>
            <th className='p-6'>userID</th>
            <th className='p-6'>phone</th>
            <th className='p-6'>price</th>
            <th className='p-6'>email</th>
            <th className='p-6'> orderDate</th>
            <th className='p-6'>shippingDate</th>
          </tr>
        </thead>
        <tbody>
          {
            // orders.map((order, index) => (
            //   <tr key={index}>
            //     <td className='p-4'>{order.userID} </td>
            //     <td className='p-4'>{order.phone}</td>
            //     <td className='p-4'>{order.price}</td>
            //     <td className='p-4'>{order.email}</td>
            //     <td className='p-4'>{order. orderDate}</td>
            //     <td className='p-4'>{order.shippingDate}</td>
                
            //     <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
            //       <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
            //    hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
            //         <Pencil />
            //       </button>
            //       <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
            //    hover:bg-red-500 hover:text-white hover:shadow-red-500'>
            //         <Trash />
                  // </button>
                // </td>
              // </tr>
          
          
          }
          {/* <ProductCard img={product.img} name={product.name} price={product.price} key={product._id} /> */}
          {/* <tr>
            <td className='p-4'>Product1 </td>
            <td className='p-4'>100</td>
            <td className='p-4 flex h-full w-full flex-row justify-start items-center gap-4'>
              <button className='h-15 w-15 border-blue-500 border-2 p-1 rounded-md text-blue-500 shadow-md
               hover:bg-blue-500 hover:text-white hover:shadow-blue-500'>
                <Pencil />
              </button>
              <button className='h-15 w-15 border-red-500 border-2 p-1 rounded-md text-red-500 shadow-md
               hover:bg-red-500 hover:text-white hover:shadow-red-500'>
                <Trash />
              </button>
            </td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
    return (
        <div className='w-full min-h-[vh] flex flex-col justify-start items-start'>
            <AdminPageHeader title='Orders'/>
            table
        </div>
    )
}
export default AdminOrders