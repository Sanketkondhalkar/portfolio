import React, { useEffect } from 'react'

const Scrolltop = () => {
    useEffect(() => {
        // 👇️ scroll to top on page load
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }, []);
    
  return (
  
<div style={{height: '155rem'}} >

<button
  onClick={() => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }}
  style={{
    position: 'fixed',
    padding: '1rem 2rem',
    fontSize: '20px',
    bottom: '40px',
    right: '40px',
    backgroundColor: '#0C9',
    color: '#fff',
    textAlign: 'center',
  }}
>
  Scroll to top
</button>
</div>
  )
}

export default Scrolltop