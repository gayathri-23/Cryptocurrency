import React from 'react';

class Api extends React.Component{

  constructor(){
    super();
    this.state = {
      items:[],
      isLoaded: false
    }
  }
  componentDidMount(){
    fetch("https://api.coingecko.com/api/v3/coins")
    .then(res => res.json())
    .then(json =>{
      this.setState({
      isLoaded:true,
      items:json
    })
  }) 
 }

 render(){
   var {isLoaded, items}= this.state;

   if(!isLoaded){
     return <div> Loadin.............</div>
   }
   else{
  return(
    <div >
     <ul type="none">
       {items.map(item =>(
         <li  key = {items.symbol}>
           Name: {items.name}|BOI :{item.block_time_in_minutes}|
           CP: {item.market_data.current_price.btc}|
           <img src= {`${item.image.large}`} height="50px" width="50px"/>

         </li>
       ))}
     </ul>

    </div>
  )
   }
 }
}
export default Api;