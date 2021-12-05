import React from 'react'
import { Namelistmapchild } from './NameListMapChild'
import Namelistmapchild2 from './NameListMapChild2'
import NameListMapChildSecond from './NameListMapChild2'

function NameListMap() {
    //const names = ['Roxette','Luke Bryan','Luke Comb','Cold Play'];
    const persons = [
        {id:1,
            theirname:'Vanilla JavaScript',
            theirage:20,
            theirSkill:'Web,Mobile and Desltop Platforms'
    },
    {id:2,
        theirname:'React JavaScript',
        theirage:22,
        theirSkill:'Web for JavaScript Library'
},
{id:1,
    theirname:'React Native',
    theirage:24,
    theirSkill:'Hybric Mobile and Web'
}
    ]
    //const nameMapArray = names.map(name=><div>{name}</div>)
    const personsMapArray = persons.map(thisperson=><Namelistmapchild person={thisperson}/>)
    const personsMapArray2 = persons.map(test=><NameListMapChildSecond ella={test}/>)
    return (
        <div>
           {personsMapArray}
           {personsMapArray2}
        </div>
    )
}

export default NameListMap
