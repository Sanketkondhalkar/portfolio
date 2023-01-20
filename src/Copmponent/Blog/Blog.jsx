import React, { useContext } from 'react'
import Store from '../../Store';
import "../Blog/Blog.css";


const Blog = () => {
  const {flag,setflag}=useContext(Store)
  return (
    <div className='Blog_Container' style={{backgroundColor:flag ? "#111111":"#ffffff"}}>
            <div className="title_container" >
        <h1 className="title" style={{color:flag ? "#ffffff":"#666"}}>
          MY <span className="titlecolor">BLOGS</span>
        </h1>
      </div>
    </div>
  )
}

export default Blog