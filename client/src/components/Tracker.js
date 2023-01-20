import {React} from 'react'


export default function Tracker ({trackerLog, deleteTrackerLog, patchTrackerLog}) {
// added the patch props here and the onClick button on line 11. But it needs to be able to read the parameter of the function to be read somehow.

    return(
        <div className= "trackerLog">
            <h4>Journal Entry:</h4>
                <div>
                    <button onClick={(e) => {patchTrackerLog(trackerLog)}}>Edit</button>
                    <button className="deleteButton" onClick={ (e) => {deleteTrackerLog(trackerLog.id)}}>Delete</button>
                </div>         
            <p>{`Exercise: ${trackerLog.exercise_name}`}</p>
            <p>{`Amount of repetitions: ${trackerLog.exercise_reps}`}</p>
            <p>{`How did it go? ${trackerLog.comment}`}</p>
            <p>{`Date of entry: ${trackerLog.date}`}</p>
        </div>
    )
}
