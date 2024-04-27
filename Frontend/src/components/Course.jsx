import React from 'react'
import Cards from './Cards'
import list from "../../public/list.json"
import {Link} from "react-router-dom"

const Course = () => {
  return (
  <>
  <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
    <div className='mt-28 items-center justify-center text-center'>
        <h1 className='text-2xl md:text-4xl'>
            We are delighted to have you 
        <span className='text-pink-500'> here !</span>
        
        </h1>
        <p className='mt-12'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Hic vel repellendus, ab, ratione reprehenderit blanditiis animi rem ipsa magnam et voluptatum quam repellat. Quis veritatis facere ipsum non quia molestiae quam quas aspernatur veniam culpa enim at soluta rerum magnam, amet omnis labore itaque? Minima, iste? Porro sunt assumenda, ipsum quisquam cum reiciendis. Provident iste voluptates nostrum rerum autem. Numquam.</p>

        <Link to="/" >
        <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>Back</button>
        
        </Link>

        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-3'>
            {
               list.map((item)=>(
                <Cards item={item} key={item.id} />
               ))
            }
        </div>
  </div>
  </>
  )
}

export default Course