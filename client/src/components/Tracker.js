import {React} from 'react'


export default function Tracker ({trackerLog, deleteTrackerLog, patchTrackerLog}) {


    return(
        <div className= "trackerLog">
            <h43>Journal Entry:</h43>
                <div>
                    <button onClick={(e) => {patchTrackerLog(updatedTrackerLog)}}>Edit</button>
                    <button className="deleteButton" onClick={ (e) => {deleteTrackerLog(trackerLog.id)}}>Delete</button>
                </div>         
            <p> {`Exercise: ${trackerLog.exercise_name}`}</p>
            <p>{`Amount of repetitions: ${trackerLog.exercise_reps}`}</p>
            <p>{`How did it go? ${trackerLog.comment}`}</p>
            <p>{`Date of entry: ${trackerLog.date}`}</p>
        </div>
    )
}
