import { React, useState } from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  div {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
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
    <div className="trackerLog">
      <h4>Journal Entry: {trackerLog.exercise_name}</h4>
      <p> Reps:{trackerLog.exercise_reps}</p>
      <p> Notes: {trackerLog.comment}</p>
      <p> Date: {trackerLog.date}</p>

      <div>
        <button
          onClick={(e) => {
            setShowForm(!showForm);
          }}
        >
          Edit
        </button>
        <button
          className="deleteButton"
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
            <label>How did it go?</label>
            <input
              type="text"
              value={updateComment}
              onChange={(e) => setUpdateComment(e.target.value)}
            />
          </div>
          <div>
            <button onClick={submitUpdatedTrackerLog}>submit</button>
            <label>Date of entry: {trackerLog.date}</label>
          </div>
        </Container>
      )}
    </div>
  );
}
