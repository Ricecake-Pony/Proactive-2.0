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

    function patchTrackerLog (updatedTrackerComment, trackerId) {


    fetch(`/trackers/${trackerId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTrackerComment)
    })
    .then(r => {
        if (r.ok) {
            r.json().then(filteredUpdatedLogs)
        } else {
            r.json().then(console.log);
        }
    });
}

// Lets try to have the update form function here instead of its own component. Nah it overwrites the POST submit form when I place it here.
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
                <img src= "https://blog.myfitnesspal.com/wp-content/uploads/2017/08/UA_TEMP1MONWEEK_GFX_JP_TM_V4.jpg" alt= ""/>
                <TrackerForm className= "trackerForm" addTrackerLog={addTrackerLog} exercises= {exercises}  />
                <UpdateForm className= "updateForm" />
                {
                    trackerLogs.map((trackerLog) => <Tracker key= {trackerLog.id} trackerLog= {trackerLog} deleteTrackerLog={deleteTrackerLog} patchTrackerLog= {patchTrackerLog}/>)
                }
            </div>
    )
}

