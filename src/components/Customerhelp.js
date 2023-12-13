import '../css/Customerhelp.css'
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import four from '../images/4.png'
function Customerhelp(){
    return(
        <div className='customerhelp'>
           <hr />
           <div className="customer-container">
              <h2 style={{fontWeight:"400"}}>Customer-Facing <span style={{fontWeight:"bold"}}>Team Love</span> LookSouq</h2>
              <br />
              <p>Provide the best, most intutive support across all channels.Proactively understand</p>
              <p>customer needs to serve excellence the first time.</p>
              <div className="customer-images">
                <img src={one} alt="" />
                <img src={two} alt="" />
                <img src={three} alt="" />
                <div className='four'>
                <img src={four} alt="" />
                </div>
              </div>
              <p>We have got Happy,Customers to..</p>
           </div>
           <hr />
        </div>
    )
}

export default Customerhelp;