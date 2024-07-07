import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/client_glassons.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard}  md:h-[400px]  p-10 `}>
      <div className="flex items-center justify-center ">
        <img src={SeerLogo} alt="Logo" className='h-8 ' />
        </div>
        <div className="ClientCardContent mt-8">

            <p style={{fontFamily:'Roboto, sans-serif'}} className='text-centertext-[#374151] '>"Our stores were swamped with web- returns. Seer AI swiftly and elegantly enabled us to re-distribute the returns to locations with the greatest sales potential."</p>
        
            <h5 className='text-center pt-2  text-[#374151] '  style={{fontFamily:'gothic-book, sans-serif'}}>
            <span style={{fontFamily:"roboto"}}>-</span>
               CHRIS REID, C.I.O., HALLENSTEIN GLASSON</h5>
        </div>
    </div>
  )
}

export default ClientCard



