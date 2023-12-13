import "../css/BrowseCategories.css"
import wheel from '../images/wheel.png'
function Browse(){
    const cards=[{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"}]
    const cards1 =[{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"}]
    return(
        <div className="Browse-container">
            <h4>Browse Categories</h4>
            <a href="" className="viewAll">View All</a>
            <div className="cards-list">
             {cards.map((item)=><Card name={item.Name} sub={item.Sub}/>)} 
             </div>
             <div className="cards-list" style={{marginTop:"3%"}}>
             {cards1.map((item)=><Card name={item.Name} sub={item.Sub}/>)} 
             <div className="viewMore">
             <i class="fa-solid fa-greater-than"></i>
             <p>View more</p>                              
                </div>  
             </div>     
        </div>
    )
}

export default Browse;

function Card(props){
    return(
        
                <div className="browse-card">
                    <img src={wheel} alt="" />
                    <span>{props.name}</span>
                    <p>{props.sub}</p>
                </div>        
    )
}

