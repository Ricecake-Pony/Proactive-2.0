import {React, useState} from 'react';

export default function TrackerForm ({updateTrackerLog, exercises, patchTrackerLog}){

    const [updateComment, setUpdateComment] = useState("")
    
    // function exerciseRepsChange(e){
    //     setUpdateExerciseReps(e.target.value)
    // }
    
    function updateCommentChange(e){
        setUpdateComment(e.target.value)
    }
    
    // function dateChange(e){
    //     setUpdateDate(e.target.value)
    // }
    
    // function exerciseNameChange(e){
    //             setSelectedExerciseId(e.target.value)
    //             let optionTagText = e.nativeEvent.target.selectedIndex;
    //             setUpdateExerciseName(e.nativeEvent.target[optionTagText].text)
    //         }
            function submitUpdatedTrackerLog (e) {
                e.preventDefault()
                const updatedEntry = {
                    // exercise_name: updateExerciseName,
                    // exercise_id: selectedExerciseId,
                    // exercise_reps: updateExerciseReps,
                    comment: updateComment,
                    // date: updateDate
                }
                console.log(updatedEntry)
                updateTrackerLog(updatedEntry)
                
            }

            return(
                <div></div>
                // <form onSubmit={submitUpdatedTrackerLog}>
                //     <label> Exercise Name: </label>
                //         <select onChange={exerciseNameChange} >
                //         {/* value={selectedExerciseId} onChange={exerciseIdChange} */}
                //         {exercises.map((exercise) => <option key={exercise.id} value={exercise.id}> {exercise.title} </option>)} 
                //         </select>

                //         <label>Number of times Exercise was performed:</label>
                //         <input placeholder='Enter How many repetitions' type = "text" value={updateExerciseReps} onChange={exerciseRepsChange}/>
                            
                //             <label>How did it go?</label>
                //             <input placeholder='Enter a Comment' type = "text"value={updateComment} onChange={commentChange}/>

                //             <label>Date</label>
                //             <input placeholder='When did you perform this Exercise?'type = "date" value={updateDate} onChange={dateChange}/>
                //                 <input type="submit"/>
                // </form>
            )
}
