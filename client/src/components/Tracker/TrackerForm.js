import { React, useState } from "react";
import styled from "@emotion/styled";

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  // border-style: solid;
  // border-width: 5px;
  // border-color: tomato;
  text-align: left;
  padding-top: 15px;
  width: 450px;

  .top-line-inputs {
    width: 90%;
    display: flex;
    justify-content: space-around;
    text-align: left;
    margin: auto;
  }

  .input-exercise-name {
    width: 40%;
  }

  .input-repetitions {
    width: 25%;
  }

  .input-repetitions input {
    width: 100%;
  }
  .input-date {
    width: 25%;
  }
  .input-date input {
    width: 100%;
  }
  .submit-button {
    width: 90%;
    background-color: #76c3b1;
    border-radius: 5px 5px;
    color: #021a14;
    padding: 6px 2px;
    text-decoration: none;
    margin: auto;
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
  }

  .input-notes {
    width: 90%;
    margin: auto;
  }

  .input-notes input {
    width: 100%;
    height: 90px;
    padding: 0;
  }
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
          <label> Exercise: </label>
          <br />
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
          <br />
          <input
            placeholder="Enter How many repetitions"
            type="number"
            value={addExerciseReps}
            onChange={exerciseRepsChange}
          />
        </div>
        <div className="input-date">
          <label>Date:</label>
          <br />
          <input type="date" value={addDate} onChange={dateChange} />
        </div>
      </div>
      <br />
      <div className="input-notes">
        <label>Notes:</label>
        <br />
        <input
          placeholder="Enter a Comment"
          type="text"
          value={addComment}
          onChange={commentChange}
        />
      </div>
      <br />
      <input className="submit-button" type="submit" />
    </Container>
  );
}
