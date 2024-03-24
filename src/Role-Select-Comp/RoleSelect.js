import React from 'react'

const RoleSelect = () => {
  return (
    <div>

      <div className="row row-cols-1 row-cols-md-3 g-4">

        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title" role='Professional'>Professional</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button href="#" className="card-link" role='Signup' onClick={()=> console.log('Sign up clicked')} type='button'>Sign up</button>

              </div>
              
          </div>
        </div>
        
        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title" role='Employer'>Employer</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button href="#" className="card-link" type='button' role='SignupEmp'  onClick={()=> console.log('Sign up clicked')}>Sign up</button>

              </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title" role='Partner'>Partner</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                <button href="#" className="card-link" type='button' role='SignupPart' onClick={()=> console.log('Sign up clicked')}>Sign up</button>
              </div>
          </div>
        </div>

      </div>

      <a href="#" className="card-link" role='Signin' onClick={()=> console.log('Sign in clicked')}>Sign in</a>

    </div>
  )
}

export default RoleSelect