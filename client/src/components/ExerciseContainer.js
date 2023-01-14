import {React} from 'react';
import ExerciseCard from './ExerciseCard';

export default function ExerciseContainer ({exercises}) {

    return( 
        <div>
            <h1>This is the Tracker Page!</h1>
            {
            exercises.map((exercise) => <ExerciseCard key= {exercise.id} exercise= {exercise} />)
            }
        </div>
    )
}