import React, { useState } from 'react';
import { FaRegBell } from "react-icons/fa6";
import { MdOutlineFilterAlt } from "react-icons/md";
import { RiUploadCloud2Line } from "react-icons/ri";


const Home = () => {

    const [search, setSearch] = React.useState('');
    const [error, setError] = React.useState(false);
    const [option, setOption] = React.useState('')

    function handleSearchInput(e) {
        // console.log(e.target.value)
        setSearch(e.target.value)
    }

    function handleSearchButtonClick() {
        console.log(search)
        if (search === '') {
            setError(true)
            console.log('True')
        }
        else {
            setError(false);
            console.log('False')
        }
    }

    function handleSavedClick() {
        console.log('Clicked Save Button')
        handleHeadSaveClick()
    }

    function handleHeadSaveClick() {
        console.log('Head Save Clicked');
    }


    return (
        <div className="container">
            <section className='row align-items-center justify-content-center'>

                <div className="card m-2" style={{ width: '18rem' }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" data-testid='Home' onClick={() => console.log('Home')}>Home</li>
                        <li className="list-group-item" data-testid='Learning'>Learning</li>
                        <li className="list-group-item" data-testid='Community'>Community</li>
                    </ul>
                </div>





                <div className="card m-2" style={{ width: '18rem' }}>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item" data-testid='All'>All</li>
                        <li className="list-group-item" data-testid='Recommended'>Recommended</li>
                        <li className="list-group-item" data-testid='Applied'>Applied</li>
                        <li className="list-group-item" data-testid='Saved' onClick={handleHeadSaveClick}>Saved</li>
                    </ul>
                </div>
                {/* <input type="text" role='username' placeholder='username' /> */}
                <div className='image m-2'>
                    <button data-testid="Bell" data-bs-toggle="modal" data-bs-target="#BellIconModal" onClick={() => console.log('clicked')}><FaRegBell /></button>
                    <p data-testid="Profile" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => console.log('Profile icon clicked')}
                    >George Martin</p>
                </div>


                <div className='m-3 Search'>

                    <input type='text' placeholder='Seach Company, title' data-testid="searchResult" value={search} onChange={handleSearchInput} />

                    <button data-testid="SearchButton" onClick={handleSearchButtonClick}>Search</button>

                    {/* {error ? <p className='text-danger' style={{ visibility: error ? "visible" : "hidden" }} data-testid='error'>Enter keyword to search</p> : <p data-testid='no-error'>Good</p>} */}
                    <p className='text-danger' data-testid='error' style={{ visibility: error ? "visible" : "hidden" }}>Enter keyword to search</p>

                </div>

                <div className="card Main-Card-Buttons m-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title" data-testid='DataQualityManager' onClick={() => console.log('Search found the word')}>Data Quality Manager</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                </div>


                <div className="card Main-Card-Buttons m-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title" data-testid='DataQualityManagerResult' onClick={() => console.log('Search found the word')}>Data Quality Manager</h5>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>


                        <button data-testid="ApplyNow" data-bs-toggle="modal" data-bs-target="#ApplyNowModal" onClick={() => console.log('Apply Now clicked')}>Apply Now</button>
                        <button data-testid="Save" onClick={handleSavedClick}>Save</button>
                        <button data-testid="Share" onClick={() => console.log('Share clicked')}>Share</button>

                    </div>
                </div>

                <form data-testid="formSortBy">
                    <label htmlFor="SortBy" className='text-center'>Sort-By</label>
                    <select name="SortBy" id="SortBy" className='col-3' data-testid='SortBy'>
                        <option value="Date of Posting Latest" data-testid='SortByOption'>Date of Posting Latest</option>
                        <option value="Date of Posting Oldest" data-testid='SortByOption'>Date of Posting Oldest</option>
                    </select>
                </form>

                <div className='Filter m-3'>
                    <button data-testid='Filter' onClick={() => console.log('Filter clicked')}>Filter <MdOutlineFilterAlt /></button><br />

                    <form data-testid="formSkills">
                        <label htmlFor="Skills">Skills</label>
                        <select name="Skills" id="Skills" className='m-3' data-testid='Skills' value={option} onChange={e => setOption(e.target.value)} >
                            <option>Select</option>
                            <option value="Html">Html</option>
                            <option value="Css">Css</option>
                            <option value="JavaScript">JavaScript</option>
                        </select>
                    </form>

                    <form data-testid="formSectors">
                        <label htmlFor="Sectors">Sectors</label>
                        <select name="Sectors" id="Sectors" className='mx-3' data-testid='Sectors'>
                            <option value="DefaultValue" data-testid='SectorsSelect'>Select</option>
                            <option data-testid='SectorsOption' value="It">It</option>
                            <option data-testid='SectorsOption' value="Mechanical">Mechanical</option>
                        </select>
                    </form>

                    <form data-testid="formSpecialization">
                        <label htmlFor="Specialization">Specialization</label>
                        <select name="Specialization" id="Specialization" className='mx-3' data-testid='Specialization'>
                            <option value="DefaultValue" data-testid='SpecializationSelect'>Select</option>
                            <option data-testid='SpecializationOption' value="developer">developer</option>
                            <option data-testid='SpecializationOption' value="Tester">Tester</option>
                        </select>
                    </form>

                    <section className='col align-items-center justify-content-center WorkPlaceType'>

                        <label htmlFor="checkbox">WorkPlace Type</label>

                        <label htmlFor="Hybrid" className='mx-4'>Hybrid</label>
                        <input id="Hybrid" className='m-3' data-testid="Hybrid" type="checkbox" />

                        <label htmlFor="On-site">On-site</label>
                        <input id="On-site" className='m-3' data-testid="On-site" type="checkbox" />

                        <label htmlFor="Remote">Remote</label>
                        <input id="Remote" className='m-3' data-testid="Remote" type="checkbox" />
                    </section>

                    <form data-testid="formLocation">
                        <label htmlFor="Location">Location</label>
                        <select name="Location" id="Location" className='mx-3' data-testid='Location'>
                            <option value="DefaultValue" data-testid='LocationSelect'>Select</option>
                            <option data-testid='LocationOption' value="India">India</option>
                            <option data-testid='LocationOption' value="America">America</option>
                        </select>
                    </form>
                </div>

                {/* <label htmlFor="checkbox">Check</label>
        <input id="checkbox" className='mx-3' role='box' type="checkbox" /> */}
                <section className='col align-items-center justify-content-center Job-type'>
                    <label htmlFor="Job-type">Job type</label>
                    <label htmlFor="Contract" className='m-2'>Contract</label>
                    <input id="Contract" className='m-2' data-testid="Contract" type="checkbox" />

                    <label htmlFor="Part-time">Part-time</label>
                    <input id="Part-time" className='m-2' data-testid="Part-time" type="checkbox" />

                    <label htmlFor="Full-time">Full-time</label>
                    <input id="Full-time" className='m-2' data-testid="Full-time" type="checkbox" />

                    <label htmlFor="Volunteer">Volunteer</label>
                    <input id="Volunteer" className='m-2' data-testid="Volunteer" type="checkbox" />

                    <label htmlFor="Other">Other</label>
                    <input id="Other" className='m-2' data-testid="Other" type="checkbox" />

                </section>

                <section className='col align-items-center justify-content-center Schedule'>
                    <label htmlFor="Schedule" className='m-2'>Schedule</label>
                    {/* <input id="Schedule" className='m-3' role='Schedule' type="checkbox" /> */}

                    <label htmlFor="Fixed">Fixed</label>
                    <input id="Fixed" className='m-3' data-testid="Fixed" type="checkbox" />

                    <label htmlFor="Flexible">Flexible</label>
                    <input id="Flexible" className='m-3' data-testid="Flexible" type="checkbox" />

                    <label htmlFor="WeekendOnly">Weekend Only</label>
                    <input id="WeekendOnly" className='m-3' data-testid="WeekendOnly" type="checkbox" />

                    <label htmlFor="MondaytoFriday">Monday to Friday</label>
                    <input id="MondaytoFriday" className='m-3' data-testid="MondaytoFriday" type="checkbox" />

                    <label htmlFor="UStime">US time</label>
                    <input id="UStime" className='m-3' data-testid="UStime" type="checkbox" />

                    <label htmlFor="Indiatime">India time</label>
                    <input id="Indiatime" className='m-3' data-testid="Indiatime" type="checkbox" />

                    <label htmlFor="ScheduleOther">Other</label>
                    <input id="ScheduleOther" className='m-3' data-testid="ScheduleOther" type="checkbox" />
                </section>




                {/* <!-- Profile Modal --> */}
                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">George Martin</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" data-testid='ProfileCard'>
                                <p>georgemartin@gmail.com</p>
                                <p>My Profile</p>
                                <p>Contact 2nd Careers</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn" data-bs-dismiss="modal">Logout</button>
                                {/* <button type="button" className="btn">Logout</button> */}
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Apply Now Modal --> */}
                <div className="modal fade" id="ApplyNowModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body" data-testid='ApplyNowCard'>

                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="message-text" className="col-form-label">Please upload a Resume
                                        </label>
                                        <section className="form-control" id="message-text"><RiUploadCloud2Line />
                                        </section>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="message-text" className="col-form-label">Please upload a cover Letter
                                        </label>
                                        <section className="form-control" id="message-text"> <RiUploadCloud2Line /></section>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="recipient-name" className="col-form-label">Why do you think you are a good fit for the job?</label>
                                        <input type="text" className="form-control" id="recipient-name" />
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Apply Now</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* <!-- Button trigger modal --> */}
                {/* <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button> */}

                {/* <!--   Modal --> */}
                <div className="modal fade" id="BellIconModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header row align-items-center justify-content-between">
                                <h5 className="col modal-title" id="exampleModalLabel">Notification</h5>

                                <button type="button" className="col btn btn-secondary btn-sm" data-bs-dismiss="modal" aria-label="Close">Clear All</button>
                            </div>
                            <div className="modal-body" data-testid='BellModal'>

                                <div className="card" style={{ width: '100%' }}>
                                    <div className="card-body">
                                        <section className='row'>
                                            <h5 className="col card-title">Title </h5>
                                            <button className='col btn btn-close'></button>
                                        </section>

                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>

                                <div className="card" style={{ width: '100%' }}>
                                    <div className="card-body">
                                        <section className='row'>
                                            <h5 className="col card-title">Title</h5>
                                            <button className='col btn btn-close'></button>
                                        </section>                                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>

                                <div className="card" style={{ width: '100%' }}>
                                    <div className="card-body">
                                        <section className='row'>
                                            <h5 className="col card-title">Title</h5>
                                            <button className='col btn btn-close'></button>
                                        </section>                                       
                                         <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                {/* <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button> */}
                            </div>
                        </div>
                    </div>
                </div>


            </section>

        </div>
    );
}

export default Home;
