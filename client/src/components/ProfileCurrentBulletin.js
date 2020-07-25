import React from "react";
import OutlinedCard from './card';

function CurrentBulletin() {
 var style ={
    backgroundColor: 'white'
    
  }
  return (
    <div>
       <div style={style}>
<OutlinedCard />
  </div>
  <div style={style}>
  <OutlinedCard />
    </div>
    <div style={style}>
    <OutlinedCard />
      </div><div style={style}>
<OutlinedCard />
  </div>
    </div>
  )
}
export default CurrentBulletin;