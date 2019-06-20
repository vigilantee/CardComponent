import React,{Component} from 'react';
import './List.css';
import  'tachyons';
import CardComponent from './CardComponent/CardComponent';
import veg from './Assets/veg.png';
import nonVeg from './Assets/nonveg.png';

const menulist=[
    {
        name:"pizza ",
        price:"100",
        type:"nonveg",
        details:"Finger Licking pizza",
        "image_url":"https://i0.wp.com/lazizkhana.com/wp-content/uploads/2015/09/momos.jpg?w=640&ssl=1"
    },
    {
        
        name:"combo pizza ",
        price:"200",
        type:"veg",
        details:"Finger Licking pizza",
        "image_url":"http://www.theterracekitchen.in/wp-content/uploads/2017/09/LREdit_Wordpress-5638.jpg"
    },
    {
    
        name:"double pizza",
        price:"300",
        type:"veg",
        details:"Finger Licking pizza",
        "image_url":"http://www.theterracekitchen.in/wp-content/uploads/2017/09/LREdit_Wordpress-5638.jpg"
    },
    {
        
        name:"burger",
        price:"125",
        type:"nonveg",
        details:"Finger Licking pizza",
        "image_url":"http://www.theterracekitchen.in/wp-content/uploads/2017/09/LREdit_Wordpress-5638.jpg"
    }
]
const store=menulist.map((anythingh,i)=>{
    return <CardComponent key={i}  details={menulist[i]} veg={"./Assets/veg.png"} nonveg={"./Assets/nonveg.png"}/>

})

class List extends React.Component{
    render(){
    return(
        <div>
        <CardComponent key={0}  details={menulist[0]} veg={veg} nonveg={nonVeg}/>
         </div>
         );
    }
}
export default List;
