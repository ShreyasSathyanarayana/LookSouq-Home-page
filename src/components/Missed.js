import '../css/Missed.css'
import customersupporticon from '../images/Why I Need Become Paid Supplier/customer support icon.png'
import customersupport from '../images/Why I Need Become Paid Supplier/customer support image.png'
import freetraing from '../images/Why I Need Become Paid Supplier/free training Img.png'
import freetrainingicon from '../images/Why I Need Become Paid Supplier/free training.png'
import livechaticon from '../images/Why I Need Become Paid Supplier/live chat icon.png'
import livechat from '../images/Why I Need Become Paid Supplier/live chat Img.png'
function Missed(){
    return(
        <div className="missed">
           
            <div className="missed-colum1">
                <img src={customersupporticon} alt="" />
                <h2>Provide Multi-Channel Customer</h2>
                <h2>Support 24/7</h2>
                <br />
                <p className='missedp'>LookSouq Support Team Stay in touch with Pro Suppliers anytime, wherever you are, on web and mobile.Assist them via chat,email, and offer a 24/7 customer self-service knowledge base.</p>
                <button className='getstarted'>GET STARTED</button>
            </div>
            <div className="missed-colum2">
                <img src={customersupport} alt="" />
            </div>

            <div className="missed-column3">
                <img src={freetraing} alt="" />
            </div>
            <div className="missed-column4">
                <img src={freetrainingicon} alt="" />
                <h2>Free Traing And Demos From </h2>
                <h2>The LookSouq Team</h2>
                <br />
                <p className='missedp'>Stay in touch with customers anytime, wherever you are,
on web and mobile. Assist them via chat, email, and offer a
24/7 customer self-service knowledge base.</p>
                 <button className='getstarted'>GET STARTED</button>
            </div>

            <div className="missed-column5">
                <img src={livechaticon} alt="" />
                <h2>Live Chat, About Support,</h2>
                <h2>Reaching Your Buyers,Product,</h2>
                <h2>And More</h2>
                <p className='missedp'>Stay in touch with customers anytime, wherever you are,
on web and mobile. Assist them via chat, email, and offer a
24/7 customer self-service knowledge base.</p>
               <button className='getstarted'>GET STARTED</button>

            </div>

            <div className="missed-column6">
                <img src={livechat} alt="" />
            </div>

        </div>
    )
}
export default Missed;