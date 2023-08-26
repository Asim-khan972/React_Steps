import React from 'react'
import Order from './Order';
  const currentDate = new Date();
  const hour = currentDate.getHours();
  const openHour = 12;
  const closeHour = 23;
   const isOpen = hour >= openHour && hour <= closeHour;
  
//   if(hours>=openHour&&hours<=closeHour){alert("we are open ")}else{alert("we are close")}
  
//   const formattedTime = currentDate.toLocaleTimeString();
function Footer() {
  return (
    <div>
{isOpen?(<Order  openHour={openHour} closeHour={closeHour} />):(
        <footer className='footer'> 
         <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
         </footer>
       
   
  )
  }
   </div>
  )
}

export default Footer