import React from 'react'

const RoleSelect = () => {
  return (
    <div>
      <div className="container">
      <div className="row row-cols-1 row-cols-md-3 g-4">
      <img src="https://imgv3.fotor.com/images/homepage-feature-card/Car-PNG.jpg" className="card-img-top"  data-testid="RoleImage" alt="ProfessionalImage" height={500}></img>
        <div className="col">
          <div className="card">
            <img src="https://imgv3.fotor.com/images/homepage-feature-card/Car-PNG.jpg" className="card-img-top" alt=""></img>
              <div className="card-body">
                <h5 className="card-title" data-testid="Professional">Professional</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button href="#" className="card-link"  data-testid="Signup" onClick={()=> console.log('Sign up clicked')} type='button'>Sign up</button>

              </div>
              
          </div>
        </div>
        
        <div className="col">
          <div className="card">
            <img src="https://imgv3.fotor.com/images/homepage-feature-card/Car-PNG.jpg" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title" data-testid="Employer">Employer</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <button href="#" className="card-link" type='button' data-testid="SignupEmp"  onClick={()=> console.log('Sign up clicked')}>Sign up</button>

              </div>
          </div>
        </div>

        <div className="col">
          <div className="card">
            <img src="https://imgv3.fotor.com/images/homepage-feature-card/Car-PNG.jpg" className="card-img-top" alt="..."></img>
              <div className="card-body">
                <h5 className="card-title"  data-testid="Partner">Partner</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                <button href="#" className="card-link" type='button' data-testid="SignupPart" onClick={()=> console.log('Sign up clicked')}>Sign up</button>
              </div>
          </div>
        </div>

      </div>

      <button className="nav-link" data-testid="Signin" onClick={()=> console.log('Sign in clicked')}>Sign in</button>
      </div>
    </div>
  )
}

export default RoleSelect