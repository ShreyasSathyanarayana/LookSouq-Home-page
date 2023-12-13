import '../css/Div1.css'
import airplane from '../images/Trusted Suppliers Globally.png'
import exceptionalSupport from '../images/Exceptional  Support.png'
import supplier from "../images/Suppliers One Click Away.png"
import extensive from '../images/Extensive Product Range.png'
import hundred from '../images/100_ Data Security.png'
function Div1(){
    return(
        <div className='div1'>
            <h6 style={{color:"red"}}>WISE CHOICE</h6>
            <h3 style={{fontWeight:"bolder"}}>Why Should You Trust LookSouq?</h3>
            <Cards/>            
        </div>
    )
}
export default Div1;

function Cards(){
    return(
        <div className='cards'>
            <div className="card">
                <img src={airplane} alt="" />
                <h6 style={{fontWeight:"500"}}>Trusted Suppliers Globally</h6>
                <p>Lorem, ipsum dolor</p>
                <p>Lorem, ipsum dolor</p>
                <p>Lorem, ipsum </p>
            </div>
            <div className="card">
                <img src={exceptionalSupport} alt="" />
                <h6 style={{fontWeight:"500"}}>Exceptional Support</h6>
                <p>Lorem, ipsum dolor</p>
                <p>Lorem, ipsum dolor</p>
                <p>Lorem, ipsum </p>
            </div>
            <div className="card">
                <img src={supplier} alt="" />
                <h6 style={{fontWeight:"500"}}>Suppliers One Click away</h6>
                <p>Lorem, ipsum dolor</p>
                <p>Lorem, ipsum dolor</p>
                <p>Lorem, ipsum </p>
            </div>
            <div className="card">
                <img src={extensive} alt="" />
                <h6 style={{fontWeight:"500"}}>Extensive Product Range</h6>
                <p>Lorem, ipsum dolor</p>
                <p>Lorem, ipsum dolor</p>
                <p>Lorem, ipsum </p>
            </div>
            <div className="card">
                <img src={hundred} alt="" />
                <h6 style={{fontWeight:"500"}}>100% Data Security</h6>
                <p>Lorem, ipsum dolor</p>
                <p>Lorem, ipsum dolor</p>
                <p>Lorem, ipsum </p>
            </div>           

        </div>
    )
}