import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  border-style: solid;
  margin-left: 30%;
  margin-right: 30%;
  margin-bottom: 10px;
  justify-content: center;
  align-content: space-between;

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
      <p>{exercise.title}</p>
      <p>{exercise.description}</p>
      <ol>
        {exercise.render_steps.map((exerciseObj) => (
          <li> {exerciseObj.step_text} </li>
        ))}
        {/* HWas stuck because I was mapping over an object which is ruby logic. Needed to map over an array in React of course. */}
      </ol>
      <p> {exercise.duration} </p>
    </Container>
  );
}

//I'm trying to render the steps of the exercises without passing props for the steps themselves since they're associated with the exercises.
