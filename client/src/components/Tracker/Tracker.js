import { React, useState } from "react";
import styled from "@emotion/styled";

// This container is for the edit form not the entire parent jsx tag.
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }
`;
export default function Tracker({
  trackerLog,
  deleteTrackerLog,
  patchTrackerLog,
  key,
  exercises,
}) {
  // added the patch props here and the onClick button on line 11. But it needs to be able to read the parameter of the function to be read somehow.
  const [showForm, setShowForm] = useState(false);
  const [updateComment, setUpdateComment] = useState(trackerLog.comment);
  const [exerciseName, setExerciseName] = useState(trackerLog.exercise_name);
  const [exerciseReps, setExerciseReps] = useState(trackerLog.exercise_reps);

  const submitUpdatedTrackerLog = (e) => {
    e.preventDefault();
    const updatedTrackerLog = {
      exercise_name: exerciseName,
      exercise_id: key,
      exercise_reps: exerciseReps,
      comment: updateComment,
      date: trackerLog.date,
    };
    console.log(updatedTrackerLog);
    setShowForm(false);
    patchTrackerLog(updatedTrackerLog, trackerLog.id);
  };

  return (
    <div className="tracker-log">
      <h4 className="exercise-header">{trackerLog.exercise_name}
        <div className="reps-log"> Reps: {trackerLog.exercise_reps}</div>
      </h4>
      <p> Notes: {trackerLog.comment}</p>
      <p> Posted on: {trackerLog.date}</p>

      <div className="U-D-buttons" >
        <button
        className="edit-button"
          onClick={(e) => {
            setShowForm(!showForm);
          }}
        >
          Edit
        </button>
        <button
          className="delete-button"
          onClick={(e) => {
            deleteTrackerLog(trackerLog.id);
          }}
        >
          Delete
        </button>
      </div>
      {showForm && (
        <Container>
          <div>
            <label>Exercise:</label>
            <select
              onChange={(e) => {
                setExerciseName(e.target.value);
              }}
            >
              <option>Select Option</option>
              {exercises.map((exercise) => (
                <option key={exercise.id} value={exercise.title}>
                  {exercise.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label>Amount of repetitions:</label>
            <input
              type="text"
              value={exerciseReps}
              onChange={(e) => setExerciseReps(e.target.value)}
            />
          </div>
          <div>
            <label>Notes:</label>
            <input
              type="text"
              value={updateComment}
              onChange={(e) => setUpdateComment(e.target.value)}
            />
          </div>
          <div>
            <button onClick={submitUpdatedTrackerLog}>submit</button>
            <label>Original Date of Entry: {trackerLog.date}</label>
          </div>
        </Container>
      )}
    </div>
  );
}
