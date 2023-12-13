import '../css/Footer.css'
import facebook from '../images/footer/facebook_529_4261.svg'
import twiter from '../images/footer/twitter_529_4255.svg'
import instagram from '../images/footer/instagram_529_4257.svg'
import googleplay from '../images/footer/google-play-badge 1.png'
function Footer(){
    return(
        <>
        <div className="footer">
            <div className='footer1'>
                <h5>Popular Catagories</h5>
                <ul>
                    <li>Auto Mobile</li>
                    <li>Industries</li>
                    <li>Paper Manufactures</li>
                    <li>Medical Industry</li>
                    <li>Home Applicances</li>
                    <li>Electricals</li>
                </ul>
            </div>
            <div className="footer2">
                <h5>Customer Services</h5>
                <ul>
                    <li>About Us</li>
                    <li>FAQ</li>
                    <li>Terms and conditions</li>
                    <li>Privacy policy</li>
                </ul>
                <br /><br />
                <h5>Connect with Us</h5>
            </div>
            <div className="footer3">

            </div>
            <div className="footer4">
                <h5>Reach Us@</h5>
                <ul>
                    <li>whatsApp us: 9878843210</li>
                    <li>call Us: 1800 890 1222</li>
                    <li>8:00 Am to 8:00PM,365 days</li>
                </ul>
                <br />
                <p>For Queries,please email us on call@looksouq.com</p>
                <br />
                <div className="social-media-icons">
                    <img src={facebook} alt="" />
                    <img src={twiter} alt="" />
                    <img src={instagram} alt="" />
                </div>
            </div>
            <div className="footer5">
                <h5>Try our mobile apps</h5>
                <img src={googleplay} alt="" />
            </div>
        </div>
        </>
    )
}

export default Footer;