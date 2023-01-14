import React from 'react'

export default function Tracker ({trackerLog}) {
    return(
        <div className= "trackerLog">
            <h3>I'm the tracker log!</h3>
            <p> {`Exercise Name: ${trackerLog.exercise_name}`}</p>
            <p>{`Amount of repetions: ${trackerLog.exercise_reps}`}</p>
            <p>{`How did it go? ${trackerLog.comment}`}</p>
            <p>{`Date of entry: ${trackerLog.date}`}</p>
        </div>
    )
}