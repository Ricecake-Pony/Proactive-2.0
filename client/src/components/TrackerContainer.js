import {useState, useEffect} from 'react';
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
        .then(r => {
            if (r.ok) {
                r.json().then((newTrackerData) => (setTrackerLogs((trackerLogs)=> ([...trackerLogs, newTrackerData]))))
            }
            else{
                r.json().then(console.log)
            }
        })
        
    }

    function patchTrackerLog (updatedTrackerLog) {
    fetch(`/trackers/${updatedTrackerLog.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTrackerLog)
    })
    .then(r => {
        if (r.ok) {
            r.json().then((updatedTrackerData) => {
                setTrackerLogs((trackerLogs) => {
                    const updatedTrackerLogs = trackerLogs.map((trackerLog) => {
                        if (trackerLog.id === updatedTrackerData.id) {
                            return updatedTrackerData;
                        }
                        return trackerLog;
                    });
                    return updatedTrackerLogs;
                });
            });
        } else {
            r.json().then(console.log);
        }
    });
}

    function deleteTrackerLog (trackerLogId) {
        console.log ('deleting....')
        const filteredResult = trackerLogs.filter((trackerLog) => trackerLog.id !== trackerLogId)
        setTrackerLogs(filteredResult)
        fetch(`/trackers/${trackerLogId}`,
        {
            method: "DELETE"
        })
        .then(r => r.json())
        .then( () => console.log(trackerLogId))
    }

    return(
            <div className= "trackerLogContainer">
                <TrackerForm className= "trackerForm" addTrackerLog={addTrackerLog} exercises= {exercises} />
                {
                    trackerLogs.map((trackerLog) => <Tracker key= {trackerLog.id} trackerLog= {trackerLog} deleteTrackerLog={deleteTrackerLog} patchTrackerLog={patchTrackerLog} />)
                    // trackerLogs.map((trackerLog) => console.log({trackerLog}))
                }
            </div>
    )
}
