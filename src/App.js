import './App.css';
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineFilterAlt } from "react-icons/md";

const App = () => {

  return (
    <div className="container">
      <section className='row align-items-center justify-content-center'>

        <div className="card m-2" style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Home</li>
            <li className="list-group-item">Learning</li>
            <li className="list-group-item">Community</li>
          </ul>
        </div>

       

        <div className="card m-2" style={{ width: '18rem' }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">All</li>
            <li className="list-group-item">Recommended</li>
            <li className="list-group-item">Applied</li>
            <li className="list-group-item">Saved</li>
          </ul>
        </div>
        {/* <input type="text" role='username' placeholder='username' /> */}
        <div div className='image m-2'>
          <button role='Bell' onClick={() => console.log('clicked')}><FaRegBell /></button>
          <p role='Profile' onClick={() => console.log('Profile icon clicked')}
          >George Martin</p>
        </div>



        <div className='m-3 Search'>
          <input type='text' role='Search' placeholder='Seach Company, title' />
          <button role='Search' onClick={() => console.log('Search clicked')}>Search</button>
        </div>

        <div className="card Main-Card-Buttons m-3" style={{ width: "18rem" }}>
          <div className="card-body">
            <h5 className="card-title" onClick={() => console.log('Search found the word')}>Data Quality Manager</h5>
            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>


            <button role='ApplyNow' onClick={() => console.log('Apply Now clicked')}>Apply Now</button>
            <button role='Save' onClick={() => console.log(' Save clicked')}>Save</button>
            <button role='Share' onClick={() => console.log('Share clicked')}>Share</button>

          </div>
        </div>

        <form className='m-3 posted-By'>
          <label htmlFor="Skills">Posted-By</label>
          <select name="Skills" id="Skills">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
          </select>
        </form>

        <div className='Filter m-3'>
          <button role='Filter' onClick={() => console.log('Filter clicked')}>Filter <MdOutlineFilterAlt /></button><br />
          
          <form className='m-3'>
            <label htmlFor="Skills">Skills</label>
            <select name="Skills" id="Skills">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
            </select>
          </form>

          <form className='m-3'>
            <label htmlFor="Sectors">Sectors</label>
            <select name="Sectors" id="Sectors">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
            </select>
          </form>

          <form className='m-3'>
            <label htmlFor="Specialization">Specialization</label>
            <select name="Specialization" id="Specialization">
              <option value="volvo">Volvo</option>
              <option value="saabb">Saab</option>
            </select>
          </form>

          <section className='col align-items-center justify-content-center WorkPlaceType'>

            <label htmlFor="checkbox">WorkPlace Type</label>

            <label htmlFor="Hybrid" className='mx-4'>Hybrid</label>
            <input id="Hybrid" className='m-3' role='Hybrid' type="checkbox" />

            <label htmlFor="On-site">On-site</label>
            <input id="On-site" className='m-3' role='On-site' type="checkbox" />

            <label htmlFor="Remote">Remote</label>
            <input id="Remote" className='m-3' role='Remote' type="checkbox" />
          </section>

          <form className='m-3'>
            <label htmlFor="Location">Location</label>
            <select name="Location" id="Location">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
            </select>
          </form>
        </div>

        {/* <label htmlFor="checkbox">Check</label>
        <input id="checkbox" className='mx-3' role='box' type="checkbox" /> */}
        <section className='col align-items-center justify-content-center Job-type'>
          <label htmlFor="Job-type">Job type</label>
          <label htmlFor="Contract" className='m-2'>Contract</label>
          <input id="Contract" className='m-2' role='Contract' type="checkbox" />

          <label htmlFor="Part-time">Part-time</label>
          <input id="Part-time" className='m-2' role='Part-time' type="checkbox" />

          <label htmlFor="Full-time">Full-time</label>
          <input id="Full-time" className='m-2' role='Full-time' type="checkbox" />

          <label htmlFor="Volunteer">Volunteer</label>
          <input id="Volunteer" className='m-2' role='Volunteer' type="checkbox" />

          <label htmlFor="Other">Other</label>
          <input id="Other" className='m-2' role='Other' type="checkbox" />

        </section>

        <section className='col align-items-center justify-content-center Schedule'>
          <label htmlFor="Schedule" className='m-2'>Schedule</label>
          {/* <input id="Schedule" className='m-3' role='Schedule' type="checkbox" /> */}

          <label htmlFor="Fixed">Fixed</label>
          <input id="Fixed" className='m-3' role='Fixed' type="checkbox" />

          <label htmlFor="Flexible">Flexible</label>
          <input id="Flexible" className='m-3' role='Flexible' type="checkbox" />

          <label htmlFor="WeekendOnly">Weekend Only</label>
          <input id="WeekendOnly" className='m-3' role='WeekendOnly' type="checkbox" />

          <label htmlFor="MondaytoFriday">Monday to Friday</label>
          <input id="MondaytoFriday" className='m-3' role='MondaytoFriday' type="checkbox" />

          <label htmlFor="UStime">US time</label>
          <input id="UStime" className='m-3' role='UStime' type="checkbox" />

          <label htmlFor="Indiatime">India time</label>
          <input id="Indiatime" className='m-3' role='Indiatime' type="checkbox" />

          <label htmlFor="ScheduleOther">Other</label>
          <input id="ScheduleOther" className='m-3' role='ScheduleOther' type="checkbox" />
        </section>



        {/* <!-- Button trigger modal --> */}
      {/* <button type="button" className="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button> */}

      {/* <!-- Modal --> */}
      {/* <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div> */}


      </section>

    </div>
  );
}

export default App;
