import React from 'react'

const Login = () => {
  return (
    <div className='d-flex aligns-item-center vh-100'>
      <div className="m-auto text-center" style={{ maxWidth: "350px", width: "100%" }}>
        <div>
          <img src="/logo-identify-purple.svg" style={{ "max-height": "45px" }} />
          <div className='form-floating mt-4'>
            <input className='form-control rounded-top rounded-0 ' style={{ marginBottom: "-1px" }} />
            <label for="floatingInput">Username</label>
          </div>
          <div className='form-floating'>
            <input className='form-control rounded-bottom rounded-0' />
            <label for="floatingInput">Password</label>
          </div>
          <button type="button" class="mt-4 w-100  btn btn-outline-dark fw-bold">Login</button>
        </div>
        
        <div className='d-flex justify-content-center mt-5'>
          <img src="/assets/img/bangkit-logo.png" style={{ "max-height": "25px" }} />
          <img src="/assets/img/traveloka-logo.png" style={{ "max-height": "25px" }} />
        </div>
      </div>
     
      
    </div>

  )
}

export default Login