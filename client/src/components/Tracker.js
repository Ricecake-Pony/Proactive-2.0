import {React, useState} from 'react';
import UpdateTrackerForm from './UpdateForm.js';


export default function Tracker ({trackerLog, deleteTrackerLog, patchTrackerLog}) {
// added the patch props here and the onClick button on line 11. But it needs to be able to read the parameter of the function to be read somehow.
    const [showForm, setShowForm] = useState(false)
    



    return(
        <div className= "trackerLog">
            <h4>Journal Entry:</h4>
                <div>
            <button onClick={(e) => {setShowForm(!showForm)}}>Edit</button>
                    <button className="deleteButton" onClick={ (e) => {deleteTrackerLog(trackerLog.id)}}>Delete</button>
                </div>         
            <p>{`Exercise: ${trackerLog.exercise_name}`}</p>
            <p>{`Amount of repetitions: ${trackerLog.exercise_reps}`}</p>
            <p>{`How did it go? ${trackerLog.comment}`}</p>
            {showForm ? 
            <UpdateTrackerForm patchTrackerLog={patchTrackerLog} trackerLog= {trackerLog} setShowForm= {setShowForm} showForm= {showForm}/> 
            :
            null
            }
            <p>{`Date of entry: ${trackerLog.date}`}</p>
        </div>
    )
}
