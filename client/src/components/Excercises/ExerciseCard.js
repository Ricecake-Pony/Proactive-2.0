import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  border-style: solid;
  border-color: #71DDC4;
  width: 700px;
  height: 250px;
  display: flex;
  margin: auto;
  margin-top: 45px;
  // justify-content: center;
  align-content: space-between;
  flex-direction: row;
  border-radius: 10px;

  .exerciseImage {
    border-radius: 7px;
    height: auto;
    width: 35%;
  }


.card-info{
  width: 65%;
  height: 100%;
  padding-left: 40px;
  text-align: left;
  font-family: 'Mulish';
  position: relative;
}

.card-info h2{
  margin-top: 8%;
  
}


.card-footer{
  position: absolute;
  background: #71DDC4;
  color: #021A14;
  width: 60%;
  height: 50px;
  bottom: 20px;
  margin: 0;
  text-align: center;
  font-size: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
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
        {/* <p>{exercise.description}</p> Actually doesn't exist yet, may specify muscles targeted */}
        <ol>
          {exercise.render_steps.map((exerciseObj) => (
            <li> {exerciseObj.step_text} </li>
            ))}
          {/* I was stuck because I was mapping over an object which is ruby logic. Needed to map over an array in React of course. */}
        </ol>
        <h2 className="card-footer"> {exercise.duration} </h2>
      </div>
    </Container>
  );
}

//I'm trying to render the steps of the exercises without passing props for the steps themselves since they're associated with the exercises.