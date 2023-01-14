import {React} from 'react';
import Tracker from './Tracker';

export default function TrackerContainer ({trackerLogs}) {
    return(
        <div className= "trackerLogContainer">
            <h1>I'm the container</h1>
            {
            trackerLogs.map((trackerLog) => <Tracker key= {trackerLogs.id} trackerLog= {trackerLog} />)
            }
        </div>
    )
}