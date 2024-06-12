import React from 'react';
import './index.css';
import SeerLogo from '../../assets/images/client_hallensteins.png'

const ClientCard = () => {
  return (
    <div className={`${ClientCard}  md:h-[500px]  sm:h-[300px]  p-10 `}>
      <div className="flex items-center justify-center ">
        <img src={SeerLogo} alt="Logo" className='h-12 ' />
        </div>
        <div className="ClientCardContent mt-8 ">
            
            <p style={{fontFamily:'Roboto, sans-serif'}}className='text-center'>"Our stores were swamped with web- returns. Seer AI swiftly and elegantly enabled us to re-distribute the returns to locations with the greatest sales potential. Lorem ipsum dolor sit amet consectetur. "</p>
        
            <h5 className='text-center pt-2'  style={{fontFamily:'gothic-book, sans-serif'}}>
            <span style={{fontFamily:"roboto"}}>-</span>
              Name</h5>
        </div>
    </div>
  )
}

export default ClientCard



