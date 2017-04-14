import React from 'react'

const Beer = props => (
   <div>
      <ol>
         { props.info.map(beerInfo => (
               <li key={beerInfo.name}>
                  <ul>
                     <li>
                        {beerInfo.name}
                     </li>
                     <li>
                        {beerInfo.brewery}
                     </li>
                     <li>
                        {beerInfo.country}
                     </li>
                     <li>
                        {beerInfo.style}
                     </li>
                     <li>
                        {beerInfo.abv}
                     </li>
                  </ul>
               </li>
            )
         )}
      </ol>
   </div>
)

export default Beer
