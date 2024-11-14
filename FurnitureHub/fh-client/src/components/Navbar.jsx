import {NavLink} from 'react-router-dom'

const Navbar = () => {
  const Linksdata = [
    {
      title:'Home',
      path:'/'
    },
    {
      title:'Products',
      path:'/products'
    }
    
  ]
  return (
    <>
     <div className=' = w-screen h-14 shadow-gray-600 shadow-md flex flex-col justify-center items-center'>
        <div className='w-[40%] flex justify-start items-center font-bold text-2xl text-gray-700'>
            Furniture Hub
            </div>
            <div className='w-[40%] h-full flex justify-end items-center '>
                    <div className='w-full h-full flex flex-row justify-end items-center gap-8 font-bold'>
                        {Linksdata.map((link, index) => (
                            <NavLink to={link.path} key={index} className='h-[65%] w-20 hover:bg-gray-500 hover:text-white flex justify-center items-center rounded-sm'>
                                {link.title}
                            </NavLink>
                        ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
     