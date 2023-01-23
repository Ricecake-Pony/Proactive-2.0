import React from 'react'

export default function ExerciseCard ({exercise}) {
    console.log(exercise)
    return(
        <div className= "exerciseCard">
                <img className="exerciseImage"
                src={exercise.image}
                alt= {`This is a picture of performing ${exercise.title}`}
                />
            <p>{exercise.title}</p>
            <p>{exercise.description}</p>
            <ol>
                {exercise.render_steps.map((exerciseObj) => <li> {exerciseObj.step_text} </li>)}
            </ol>
            <p> {exercise.duration} </p>
        </div>
    )
}

//I'm trying to render the steps of the exercises without passing props for the steps themselves since they're associated with the exercises. 