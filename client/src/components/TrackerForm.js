import {React, useState} from 'react';

export default function TrackerForm ({addTrackerLog}){
    const [addExerciseName, setAddExerciseName] = useState("")
    const [addExerciseReps, setExerciseReps] = useState("")
    const [addComment, setAddComment] = useState("")
    const [addDate, setAddDate] = useState("")
    

    function submitNewTrackerLog (e) {
        setAddExerciseName(e.target.value)
        setExerciseReps(e.target.value)
        setAddComment(e.target.value)
        setAddDate(e.target.value)
    }
        

    return(
        <form onSubmit={submitNewTrackerLog}>
            <label> Exercise Name: </label>
            <input type = "text" placeholder='Enter name of exercise' id="exercise_name" value= {addExerciseName} onChange={submitNewTrackerLog}/>
                {/* Need exercise ID from a dropdown menu */}
                <label>Number of times Exercise was performed:</label>
                <input placeholder='Enter How many repetitions' value={addExerciseReps} onChange={submitNewTrackerLog}/>
                    
                    <label>How did it go?</label>
                    <input placeholder='Enter a Comment' value={addComment} onChange={submitNewTrackerLog}/>

                    <label>Date</label>
                    <input placeholder='When did you perform this Exercise?' value={addDate} onChange={submitNewTrackerLog}/>
                        <input type="submit"/>
        </form>
    )
}