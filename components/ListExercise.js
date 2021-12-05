import React from 'react'
import ListExerciseChildren from './ListExerciseChildren'
import ListExerciseChildren2 from './ListExerciseChildren2';
import ListExerciseChildren3 from './ListExerciseChildren3';

function ListExercise() {

    const Languages = [
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

    const programming = Languages.map((name) =><ListExerciseChildren  handle={name}/>);
    const programming2 = Languages.map(age=><ListExerciseChildren2 handle2={age}/>);
    const programming3 = Languages.map(skill=><ListExerciseChildren3 handle3 ={skill}/>)

    return (
        <div>
            {programming} 
            {programming2}
            {programming3}
            {programming2}

        </div>
    )
}

export default ListExercise
