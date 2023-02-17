import { React, useState } from "react";
import styled from "@emotion/styled";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content:flex-start;
  border-style: solid;
  border-width: 5px;
  border-color: tomato;
`;

export default function TrackerForm({ addTrackerLog, exercises }) {
  const [addExerciseName, setAddExerciseName] = useState("");
  const [selectedExerciseId, setSelectedExerciseId] = useState("");
  // console.log(selectedExerciseId)
  const [addExerciseReps, setAddExerciseReps] = useState("");
  const [addComment, setAddComment] = useState("");
  const [addDate, setAddDate] = useState("");

  // console.log(exercises.map((exercise)=> exercise.title ))

  function exerciseRepsChange(e) {
    setAddExerciseReps(e.target.value);
  }

  function commentChange(e) {
    setAddComment(e.target.value);
  }

  function dateChange(e) {
    setAddDate(e.target.value);
  }

  function exerciseNameChange(e) {
    setSelectedExerciseId(e.target.value);
    let optionTagText = e.nativeEvent.target.selectedIndex;
    setAddExerciseName(e.nativeEvent.target[optionTagText].text);
  }
  function submitNewTrackerLog(e) {
    e.preventDefault();
    const newEntry = {
      exercise_name: addExerciseName,
      exercise_id: selectedExerciseId,
      exercise_reps: addExerciseReps,
      comment: addComment,
      date: addDate,
    };
    console.log(newEntry);
    addTrackerLog(newEntry);
  }

  return (
    <Container onSubmit={submitNewTrackerLog}>
      <div className="top-line-inputs">
        <div className="input-exercise-name">
        <label> Exercise Name: </label>
        <select onChange={exerciseNameChange}>
          <option defaultValue="">Select Option</option>
          {exercises.map((exercise) => (
            <option key={exercise.id} value={exercise.id}>
              {exercise.title}
            </option>
          ))}
        </select>
        <br />
          </div>
      <div className="input-repetitions">
        <label>Repetitions:</label>
        <input
          placeholder="Enter How many repetitions"
          type="text"
          value={addExerciseReps}
          onChange={exerciseRepsChange}
          />
      </div>
          </div>  
      <br />
      <label>Notes:</label>
      <input
        placeholder="Enter a Comment"
        type="text"
        value={addComment}
        onChange={commentChange}
      />
      <br />
      <label>Date:</label>
      <input
        className="input-date"
        type="date"
        value={addDate}
        onChange={dateChange}
      />
      <input className="submit-button" type="submit" />
    </Container>
  );
}
