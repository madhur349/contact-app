import React from 'react'



function ALRT(props) {
    const capitalize=(word)=>{
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase()+lower.slice(1);
    }
  return (
    
   props.alert &&
    <div>
 <div className={`alert alert-${props.alert.type} alert-dismissible`}>
  
   <strong> {capitalize(props.alert.type)}</strong>: {props.alert.message}
    
 
    </div>
  
</div>
    
  )
}

export default ALRT
