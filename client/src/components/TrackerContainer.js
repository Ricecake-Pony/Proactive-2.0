import {React, useState, useEffect} from 'react';
import Tracker from './Tracker';
import TrackerForm from './TrackerForm';

export default function TrackerContainer ({exercises}) {
    const [trackerLogs, setTrackerLogs] = useState([])

    useEffect(() => {
        function fetchTrackerData(){
            fetch("/trackers")
            .then((r) => r.json())
            .then((trackerData) => setTrackerLogs(trackerData));
        }
        fetchTrackerData();
        }, []);

    function addTrackerLog (newEntry) {
        fetch("/trackers",
            {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(newEntry)
            }
        )
        .then(r => r.json())
        .then((newTrackerData) => (setTrackerLogs((trackerLogs)=> ([...trackerLogs, newTrackerData]))))
    }

    return(
            <div className= "trackerLogContainer">
                <TrackerForm addTrackerLog={addTrackerLog} exercises= {exercises} />
                <h1>I'm the container</h1>
                {
                    trackerLogs.map((trackerLog) => <Tracker key= {trackerLogs.id} trackerLog= {trackerLog} />)
                }
            </div>
    )
}