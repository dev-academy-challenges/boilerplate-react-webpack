import React from 'react'
import { Link, Route } from 'react-router-dom'

import lunches from '../../data/lunches'

const Lunch = (props) => {
    const id= props.match.params.id
    return (
     <div>
         hi {id}
         </div>
    )
}

export default Lunch