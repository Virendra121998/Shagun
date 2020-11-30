import React from 'react';
import Card from './Card';
class List extends React.Component{

    state={
       college_in_rows:[]
    }
    componentDidMount(){
        const json=require('./college.json');
        var string=JSON.stringify(json);
        var obj=JSON.parse(string);
        var listofcolleges_row=[]
       
        for(let i=0;i<obj.colleges.length;i=i+2)
        {   
            let college1=obj.colleges[i];
            let college2=null;
            let card1=<Card college={college1.college_name} discount={college1.discount}
            original_fees={college1.original_fees}
            discounted_fess={college1.discounted_fees}
            fees_cycle={college1.fees_cycle} 
            ranking={college1.ranking}
            tags={college1.tags}
            amenities={college1.amenities}
            rating={college1.rating}
            rating_remarks={college1.rating_remarks}
            famous_nearest_places={college1.famous_neares_places}
            nearest_place={college1.nearest_place}
            offertext={college1.offertext}/>
            let card2=null;
            if(i+1<obj.colleges.length)
            {   college2=obj.colleges[i+1];
                card2=<Card college={college2.college_name} discount={college2.discount}
                original_fees={college2.original_fees}
                discounted_fess={college2.discounted_fees}
                fees_cycle={college2.fees_cycle} 
                ranking={college2.ranking}
                tags={college2.tags}
                amenities={college2.amenities}
                rating={college2.rating}
                rating_remarks={college2.rating_remarks}
                famous_nearest_places={college2.famous_neares_places}
                nearest_place={college2.nearest_place}
                offertext={college2.offertext}/>
            }
            var collegelist=[];
            collegelist.push(card1);
            collegelist.push(card2);
            listofcolleges_row.push(collegelist)
        }
        //console.log(listofcolleges_row)
        this.setState({college_in_rows:listofcolleges_row})
    }
    render(){
       
        var listofcolleges=this.state.college_in_rows.map((element)=>{
           return <div style={{display:'flex',justifyContent:'space-evenly',margin:'15px',marginBottom:'20px'}}>
               {element.map((e)=>e)}
           </div>
          
        })

        return listofcolleges;
    }
}

export default List;