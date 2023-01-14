import {React} from 'react';
import Tracker from './Tracker';

export default function TrackerContainer ({trackerLogs}) {
    return(
        <div>
            {
            trackerLogs.map((trackerLog) => <Tracker key= {trackerLogs.id} trackerLog= {trackerLog} />)
            }
        </div>
    )
}