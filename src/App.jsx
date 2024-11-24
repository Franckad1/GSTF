import Dashboard from "./Components/Dashboard/Dashboard";
import Checklist from "./Components/Checklist/Checklist";
import { useState } from "react";
import Formulaire from "./Components/Formulaire/Formulaire";
import "./Components/GoodStuff.css";
const Dashboards = {
  checkTitle: "Checktitle",
  checkDescription: "Checkdescription",
  taskOk: 2,
  allTask: 4,
  checkState: 0,
};
const Checklists = {
  taskTitle: "Task Title",
  taskDescription: "Task description",
};
const doneTask = true;
const delet = true;
function App() {
  const [done, setDone] = useState(doneTask);
  const onAddOne = () => {
    {
      done ? (
        <img
          src="./assets/Button_Yes.png"
          alt="Completed"
          className="status-icon"
        />
      ) : (
        <img
          src="./assets/Button_No.png"
          alt="Completed"
          className="status-icon"
        />
      );
    }
    {
      done ? Dashboards.taskOk + 1 : Dashboards.taskOk - 1;
    }
    console.log(Dashboards.taskOk);

    setDone(!done);
  };

  const [sup, setSup] = useState(delet);
  const onDelete = () => {
    {
      sup
        ? alert("Voulez vous supprimer cette liste?")
        : alert("Voulez vous supprimer cette liste?");
    }
    setSup(!sup);
  };

  return (
    <>
      <Dashboard
        {...Dashboards}
        taskOk={Dashboards.taskOk}
        onDelete={onDelete}
      />

      <Checklist
        checkTitle={Dashboards.checkTitle}
        taskTitle={Checklists.taskTitle}
        onAddOne={onAddOne}
        done={done}
      />
      <Formulaire
        checkDescription={Dashboards.checkDescription}
        checkTitle={Dashboards.checkTitle}
        taskTitle={Checklists.taskTitle}
        taskDescription={Checklists.taskDescription}
      />
    </>
  );
}

export default App;
