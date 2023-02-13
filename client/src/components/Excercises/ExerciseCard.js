import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  border-style: solid;
  border-color: pink;
  display: flex;
  margin-left: 30%;
  margin-right: 30%;
  margin-bottom: 10px;
  // justify-content: center;
  align-content: space-between;
  flex-direction: row;

  .exerciseCard img {
    height: auto;
    width: 200px;
  }

  .exerciseCard p {
    margin-top: 20px;
    margin-bottom: 10px;
  }
`;
export default function ExerciseCard({ exercise }) {
  console.log(exercise);
  return (
    <Container>
      <img
        className="exerciseImage"
        src={exercise.image}
        alt={`This is a picture of performing ${exercise.title}`}
        />
      <div className="card-info">
        <h2>{exercise.title}</h2>
        <p>{exercise.description}</p>
        <ol>
          {exercise.render_steps.map((exerciseObj) => (
            <li> {exerciseObj.step_text} </li>
            ))}
          {/* I was stuck because I was mapping over an object which is ruby logic. Needed to map over an array in React of course. */}
        </ol>
        <h2> {exercise.duration} </h2>
      </div>
    </Container>
  );
}

//I'm trying to render the steps of the exercises without passing props for the steps themselves since they're associated with the exercises.
