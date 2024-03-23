import './App.css';
import { FaRegBell } from "react-icons/fa6";

const App = () => {

  return (
    <div className="container">

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
      <div className='image m-2'>
        <button role='Bell' onClick={()=> console.log('clicked')}><FaRegBell /></button>
        <p>George Martin</p>
      </div>

      <label htmlFor="checkbox">Check</label>
      <input id="checkbox" role='box' type="checkbox" />

    </div>
  );
}

export default App;
