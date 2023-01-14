import React from 'react'

export default function ExerciseCard ({exercise}) {
    return(
        <div className= "exerciseCard">
            <h1>I'm the exercise card!</h1>
                <img className="exerciseImage"
                src={exercise.image}
                alt= {`This is a picture of performing ${exercise.title}`}
                />
            <p>{exercise.title}</p>
            <p>{exercise.description}</p>
            <p> {exercise.duration} </p>
        </div>
    )
}