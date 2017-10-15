import React from 'react'

import data from '../../data/lunch'

const Lunch = () => {

    function values(data) {
        return Object.keys(data).map(prop => {
            return data[prop]
        })
    }
    const lunches = values(data)[0]

    return (
        <div>
            <h1>The Lunch Menu</h1>
            <ul>
                {lunches.map(lunch => {
                    return <li key={lunch.id}>
                        <ul>
                            <li>{lunch.name}</li>
                            <li>{lunch.description}</li>
                            <ul>
                                {lunch.ingredients.map(ingredient => {
                                    return <li key={ingredient.type}>
                                        {ingredient.type}
                                    </li>
                                })}
                            </ul>
                        </ul>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default Lunch


// in This component I'm showing three options for lunches  -  I'd like to use to be able to select one of these lunches to see the ingrediants and then click on the ingrediants they would like to bring and have it move to another list 



//I'd like the list to be clickable - maybe using an onCLick event. 