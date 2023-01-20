import {useState, useEffect} from 'react';
import Tracker from './Tracker';
import TrackerForm from './TrackerForm';
import UpdateForm from './UpdateForm';

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

    function filteredUpdatedLogs(updatedTrackerLog){
        const filteredTrackerLogs = trackerLogs.filter( trackerLog => trackerLog.id !== updatedTrackerLog.id)
            setTrackerLogs([...filteredTrackerLogs, updatedTrackerLog ])
            console.log(updatedTrackerLog)
    }

    function patchTrackerLog (updatedTrackerLog) {


    fetch(`/trackers/${updatedTrackerLog.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTrackerLog)
    })
    .then(r => {
        if (r.ok) {
            r.json().then(filteredUpdatedLogs)
        } else {
            r.json().then(console.log);
        }
    });
}

// Added above Patch function and passed props on line 78.

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
                <TrackerForm className= "trackerForm" addTrackerLog={addTrackerLog} exercises= {exercises}  />
                <UpdateForm className= "updateForm" patchTrackerLog={patchTrackerLog} />
                {
                    trackerLogs.map((trackerLog) => <Tracker key= {trackerLog.id} trackerLog= {trackerLog} deleteTrackerLog={deleteTrackerLog} />)
                }
            </div>
    )
}

// What we need to do for my PATCH:
// Grab the existing trackerLog.id
// Grab the comment and have an input that changes the comment to whatever the user wishes. 
// How would I like to edit it? Click the edit button and have a form appear with the input for the comment? How else could we do this? We could create a new page just for the update but that sounds awful.
// 
// Then submit the comment/click Edit to have it update.
