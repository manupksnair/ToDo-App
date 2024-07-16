import "./App.css";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  const [toDo, setToDo] = useState("");
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {day} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input
          value={toDo}
          onChange={(event) => setToDo(event.target.value)}
          type="text"
          placeholder="🖊️ Add item..."
        />
        <i
          onClick={() => {
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }])
            setToDo('')
          }
            
          }
          className="fas fa-plus"
        ></i>
      </div>
      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo">
              <div className="left">
                <input
                  onChange={(event) => {
                    setToDos(
                      toDos.filter((checkObj) => {
                        if (checkObj.id === obj.id) {
                          checkObj.status = event.target.checked;
                        }
                        return checkObj;
                      })
                    );
                  }}
                  value={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i
                  onClick={() => {
                    const updatedToDos = toDos.filter((delCheckObj) => delCheckObj.id !== obj.id);
                    setToDos(updatedToDos);                    
                  }}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
        <div>
          <h1>Active tasks</h1>
        </div>
        {toDos.map((obj) => {
          if (obj.status) {
            return (
              <div>
                <h2>{obj.text}</h2>
              </div>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
}

export default App;
