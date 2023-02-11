import { React } from "react";
import ExerciseCard from "./ExerciseCard";

export default ({ exercises }) => {
  return (
    <div>
      <br />
      {exercises.map((exercise) => (
        <ExerciseCard key={exercise.id} exercise={exercise} />
      ))}
    </div>
  );
};
