import { useState, useEffect } from "react";
import Tracker from "./Tracker";
import TrackerForm from "./TrackerForm";
import styled from "@emotion/styled";

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  // flex-direction: column;
  justify-content: space-between;
  // align-items: center;

  .submit-form{
    display:flex
    // justify-content: flex-start;
    width: 50%;
    
  }

  .top-line-inputs{
    flex-direction: row;
    justify-content: space-around;
  }

  .input-exercise-name{
    width:50%;
    border-style: solid;
  }
  .input-repetitions{
    width:50%;
    border-style: dashed;
  }
  
  .input-date{

  }
  .submit-button{
    background-color: #76c3b1;
    border: none;
    color: white;
    padding: 6px 2px;
    text-decoration: none;
    margin: 4px 2px;
    cursor: pointer;
  }

  img{
    width: 400px;
    height: 350px;
    border-style: solid;
    border-width: 4px;
    border-color: purple;
  }

  .trackers{
    border-style: dotted;
    border-width: 10px;
    width: 50%;
  }

  .form-with-img{
    border-style: solid;
    border-width: 10px;
    border-color: green;
  }

  .tracker-log{
    
    border-style: solid;
    border-width: 4px;
    border-radius: 2%;
    border-color: #71DDC4;
    margin: 3%;
    display: flex;
    flex-direction: column;
  }

  .tracker-log p{
    display: flex;
    align-items: flex-start;
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: 'lato';
  }

  
  .exercise-header{
    font-family: 'Mulish';
    display:flex;
    // algin-items: center;
    justify-content:space-between;
    margin-top: 0%;
    margin-bottom: 0%;
  }
  .reps-log{
    margin: 0%;
    border-style: solid;
    border-width: 3px;
    border-color: #71DDC4;
  }

  .U-D.buttons{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .edit-button{
    width: 50%;
    height: 100%;
    border-radius: 3px;
    cursor: pointer;
    background-color:#C7A756 ;
    font-family: 'Mulish';
  }
  .delete-button{
    width: 50%;
    height: 100%;
    border-radius: 3px;
    cursor: pointer;
    background-color:#AC4141 ;
    font-family: 'Mulish';
  }

`;

export default function TrackerContainer({ exercises }) {
  const [trackerLogs, setTrackerLogs] = useState([]);
  useEffect(() => {
    function fetchTrackerData() {
      fetch("/trackers")
        .then((r) => r.json())
        .then((trackerData) => setTrackerLogs(trackerData));
    }
    fetchTrackerData();
  }, []);
  function addTrackerLog(newEntry) {
    fetch("/trackers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry),
    }).then((r) => {
      if (r.ok) {
        r.json().then((newTrackerData) =>
          setTrackerLogs((trackerLogs) => [...trackerLogs, newTrackerData])
        );
      } else {
        r.json().then(console.log);
      }
    });
  }
  function filteredUpdatedLogs(updatedTrackerLog) {
    const filteredTrackerLogs = trackerLogs.filter(
      (trackerLog) => trackerLog.id !== updatedTrackerLog.id
    );
    setTrackerLogs([...filteredTrackerLogs, updatedTrackerLog]);
    console.log(updatedTrackerLog);
  }

  function patchTrackerLog(updatedTrackerComment, trackerId) {
    fetch(`/trackers/${trackerId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTrackerComment),
    }).then((r) => {
      if (r.ok) {
        r.json().then(filteredUpdatedLogs);
      } else {
        r.json().then(console.log);
      }
    });
  }

  // Lets try to have the update form function here instead of its own component. Nah it overwrites the POST submit form when I place it here.
  // Added above Patch function and passed props on line 78.
  function deleteTrackerLog(trackerLogId) {
    console.log("deleting....");
    const filteredResult = trackerLogs.filter(
      (trackerLog) => trackerLog.id !== trackerLogId
    );
    setTrackerLogs(filteredResult);
    fetch(`/trackers/${trackerLogId}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => console.log(trackerLogId));
  }

  return (
    <Container>
      <div className="form-with-img">
        <img
          src="https://blog.myfitnesspal.com/wp-content/uploads/2017/08/UA_TEMP1MONWEEK_GFX_JP_TM_V4.jpg"
          alt=""
          />
        <TrackerForm
          className="tracker-form"
          addTrackerLog={addTrackerLog}
          exercises={exercises}
          />
      </div>
      <div className="trackers">
      {trackerLogs.map((trackerLog) => (
        <Tracker
        exercises={exercises}
        key={trackerLog.id}
        trackerLog={trackerLog}
        deleteTrackerLog={deleteTrackerLog}
        patchTrackerLog={patchTrackerLog}
        />
        ))}
        </div>
    </Container>
  );
}
