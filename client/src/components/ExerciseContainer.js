import {React} from 'react';
import ExerciseCard from './ExerciseCard';

export default function ExerciseContainer ({exercises}) {

    return( 
        <div>
            {
            exercises.map((exercise) => <ExerciseCard key= {exercise.id} exercise= {exercise} />)
            }
        </div>
    )
}