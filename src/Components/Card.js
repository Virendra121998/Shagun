import React from 'react';
import './Card.css';
const Card=()=>{
    return(
        <div className="card-main">
           <div className="card-image">
               <div className="badges">
                  <label>badge1</label>
                  <label>Badge2</label>
                 
               </div>
               <div >
                  <div className="rating"> 
                   <div>3.2</div>
                   <div>Very Good</div>
                  </div> 
                  <label id="right-badge" >tag 3</label>
               </div>
               
           </div>
           <div className="content">
              <div className="Left-side">
                <div>
                    <label style={{margin:'3px'}}>HansRaj College</label>
                </div>
                <div>
                    <label style={{marginLeft:'3px'}}>Near Metro Station</label>
                    <label style={{marginLeft:'3px'}}>2 kms away from bus stand</label>
                </div>
                <div>
                    <label style={{marginLeft:'3px'}}>93% Match:</label>
                    <label style={{marginLeft:'3px'}}>2.5 kms away</label>
                    <label style={{marginLeft:'3px'}}>7 km away from raiv chowk</label>
                </div>
                <div id="discount">
                    <label style={{margin:'10px',width:'max-content'}}>2000 off + upto 500 avail in wallet</label>
                </div>
              </div>
              <div className="Right-side">
                 <div>
                   <label>- Discount</label>
                 </div>
                 <div id="price">
                     <label >5768</label>
                 </div>
                 <div>
                     <label>Per Semester</label>
                 </div>
                 <div>
                     <label>Free Cancellation</label>
                     <label style={{marginLeft:'3px'}}>Free wifi</label>
                 </div>            
               </div>
           </div>
        </div>
    )
}

export default Card;