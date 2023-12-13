import '../css/RecntlyAdd.css'
import wheel from '../images/wheel.png'
function RecentAdd(){
    const cards=[{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},
    {Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"}
    ,{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"},{Name:"Cutting Wheels",Sub:"14 products"}]
    return(
        <div className="recentadd">
            <div className="recent-head">
                <span>Trending Products</span>
                <span> Recently Added Products</span>
                <span>Top Rated Products</span>
            </div>  
            <div className="recent-card-list">
                {cards.map((item)=><RecentCard name={item.Name} sub={item.Sub}/>)}                
            </div>       
        </div>
    )
}

export default RecentAdd;

function RecentCard(props){
    
    return(
        <div className="recent-card">
             <div>
                <img src={wheel} alt="" />
            </div>
            <div>
                <span>{props.name}</span>
                <p>{props.sub}</p>
                <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-regular fa-star" id='last-star'></i> <span>(4.0)</span>
            </div>
         </div>        
    )
}