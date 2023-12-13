import '../css/Support.css'
import rectus from "../images/Reach Us Img.png"
function Support(){
    return(
        <div className='support'>
            <button className='support-btn'>Support Solutions</button>
            <br /><br />
            <div className='support-name'>
                <div>
                <h2>Reach Us And Experience A</h2>
                <h2>LookSouq Best Support</h2>
                </div>
                <div className='support-btn-container'>
                    <button className='chat-btn'>CHAT WITH US</button>
                    <button className='watch-btn'>WATCH VIDEOS</button>
                </div>
            </div>
            <div className="supportContent">
                <div className="support1">
                    <div className="support11 ss">
                        <h3>Submit Your Ticket</h3>
                        <p>Shorten the time between intent and purchase by</p>
                        <p>Connecting with loosouq when they're on your website,</p>
                        <p>and most likely to act.</p>
                    </div>
                    <div className="support12 ss">
                        <h3>Email us </h3>
                        <i class="fa-solid fa-greater-than"></i>
                    </div>
                    <div className="support13 ss">
                        <h3>Call Us</h3>
                        <i class="fa-solid fa-greater-than"></i>
                    </div>
                </div>
                <div className="support2">
                    <img src={rectus} alt="" />
                </div>
            </div>
        </div>
    )
}
export default Support;