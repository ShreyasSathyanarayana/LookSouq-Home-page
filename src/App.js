import './css/App.css'
import logo from './images/Logo_514_4740.png'
function App(){
  return(
    <div className="app">
      <NavBar/>
      <NavContent/>
    </div>
  )
}

export default App;

function NavBar(){
  return(
    <nav className='navbar'>
      <img src={logo} alt="" className='logo'/>
      <div className="search-div">
      <div className="search">
      <input type="search" className='search' placeholder='Search for products and get from highly trusted vendors...'/> 
      <button>Become a Supplier</button>
      </div>
        <ul  className='search-option'>
          <li>Browse All Categories</li>
          <li>Top Ranking</li>
          <li>New Arrivals</li>
          <li>Trending</li>
          <li>Buyer Centric</li>
          <li>Help</li>
          <li>GetApp</li>
          <li>WhyLooksouq?</li>
        </ul>
  
      </div>
      <div className="nav-icons" style={{display:"flex"}}>
        <p style={{display:"flex",marginRight:"10px"}}><i class="fa-solid fa-user"></i> Account</p>
        <p style={{display:"flex"}}><i class="fa-solid fa-arrows-rotate"></i>English</p>
      </div>
    </nav>
  )
}

function NavContent(){
  return(
    <div className='navcontent'>
      <h2>LOOKSOUQ'S TRUSTWORTHINESS STEMS FROM </h2>
      <h2>ITS RELIANCE ON TRUSTED SUPPLIERS</h2>
      <h6>we believe in quality partnerships, and out trusted suppliers reflect that commitment</h6>
      <br />
      <button className='Browse-btn'>Browse Products</button> <button className='Bro-btn'>Become a Supplier  <i class="fa-solid fa-arrow-right"></i></button>
    </div>
  )
}