import App from "../App"
import Div1 from "./Div1"
import Browse from "./BrowseCategories"
import AutoMobile from "./AutoMobile"
import RecentAdd from "./RecentlyAdd"
import WhyNeed from './WhyNeed'
import Support from "./Support"
import Customerhelp from "./Customerhelp"
import Footer from "../components/Footer"
import Missed  from "./Missed"
function App1(){
    return(
        <div>
            <App/>      
            <Div1/>
            <Browse/>
            <AutoMobile/>
            <RecentAdd/>
            <WhyNeed/>
            <Missed/>
            <Support/>
            <Customerhelp/>
            <Footer/>
        </div>
    )
}
export default App1