import { useState } from 'react';
import React from 'react';
import './App.css';

const monthNames = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];



export default function App() {
  const [enter, setEnter] = useState('');
  const [goalToday, setGoalToday] = useState('');
  const [goalFuture, setGoalFuture] = useState('');



  const [toDosM3, setToDosM3] = useState([]);
  const [toDosM1, setToDosM1] = useState([]);
  const [toDosM2, setToDosM2] = useState([]);
  const [toDosEveryday, setTodosEveryday] = useState([]);
  const [toDosTomorrow, setTodosTomorrow] = useState([]);
  const [toDosToday, setTodosToday] = useState([]);

  const [selected, setSelected] = useState('');

  function onSubmit(todo) {

    if (todo === "") return;

    if (selected === "GoalToday") {
      setGoalToday(todo);
    } else if (selected === "GoalFuture") {
      setGoalFuture(todo);
    } else if (selected === "Today") {
      setTodosToday(prevTodos => [...prevTodos, todo]);
      
    } else if (selected === "Tomorrow") {
      setTodosTomorrow(prevTodos => [...prevTodos, todo]);
      
    } else if (selected === "Everyday") {
      setTodosEveryday(prevTodos => [...prevTodos, todo]);
    
    } else if (selected === "Month1") {
      setToDosM1(prevTodos => [...prevTodos, todo]);

     
    } else if (selected === "Month2") {
      setToDosM2(prevTodos => [...prevTodos, todo]);


    } else if (selected === "Month3") {
      setToDosM3(prevTodos => [...prevTodos, todo]);

    }
  }




  return <div className='app'>
            <div className="header">
            <GoalToday selected={selected} setSelected={setSelected} goalToday={goalToday} setGoalToday={setGoalToday} />
            <Title />
            <GoalFuture selected={selected} setSelected={setSelected} goalFuture={goalFuture} setGoalFuture={setGoalFuture} />
            </div>
            <div className='todos'>
              <Today selected={selected} setSelected={setSelected} toDosToday={toDosToday} setTodosToday={setTodosToday}/>
              <Tomorrow selected={selected} setSelected={setSelected} toDosTomorrow={toDosTomorrow} setTodosTomorrow={setTodosTomorrow}/>
              <Everyday selected={selected} setSelected={setSelected} toDosEveryday={toDosEveryday} setTodosEveryday={setTodosEveryday}/>
              <Monthly selected={selected} setSelected={setSelected} toDosM3={toDosM3} setToDosM3={setToDosM3} toDosM1={toDosM1} setToDosM1={setToDosM1} toDosM2={toDosM2} setToDosM2={setToDosM2}/>
            </div>
            <Input onSubmit={onSubmit} enter={enter} setEnter={setEnter}/>
  </div>
}


function GoalToday({goalToday, setGoalToday, selected, setSelected}) {
  

  

  return <h2 onClick={() => setSelected(selected === "GoalToday" ? "" : "GoalToday")}>
  <span className={`point ${selected === "GoalToday" ? "point-show" : ""}`}>👉🏼</span>
  Goal Today
                <p className="goal-text">{goalToday}</p>
            </h2>
}

function GoalFuture({goalFuture, setGoalFuture, selected, setSelected}) {
  

  return <h2 onClick={()=> setSelected(selected === "GoalFuture" ? "" : "GoalFuture")}><span className={`point ${selected === "GoalFuture" ? "point-show" : ""}`}>👉🏼</span>Goal Future
                <p className="goal-text">{goalFuture}</p>
            </h2>
}

function Title() {
  const date = new Date();
  const parts = date.toDateString().split(' '); // parts = ["Sun", "Apr", "28", "2024"]
  // Reorder the parts to move the day (parts[0]) to the end
  const newDateString = `${parts[1]} ${parts[2]} ${parts[3]} ${parts[0]}`; // "Apr 28 2024 Sun"
  return <h1>To Do List<span>{newDateString}</span></h1>
}


function Today({toDosToday, setTodosToday, selected, setSelected}) {
  const audioRef = React.useRef(new Audio('/Blow.mp3'));
  const handleCheckboxClick = (e) => {
    audioRef.current.play();
    if (e.target.checked) {
      e.target.nextSibling.classList.add('strike-through');
    } else {
      e.target.nextSibling.classList.remove('strike-through');
    }
  };

  return <div className="today">
                <h2 onClick={()=> setSelected(selected === "Today" ? "" : "Today")}><span className={`point ${selected === "Today" ? "point-show" : ""}`}>👉🏼</span>Today</h2>
                <ul>
                  { toDosToday.map((todo, index) => {
                    return <li key={index}>
                        <input onClick={handleCheckboxClick} type="checkbox" name="todo" /> 
                        <span>{todo}</span>
                    </li>
                  }) }
                   
                    
                </ul>
            </div>
}

function Tomorrow({toDosTomorrow, setTodosTomorrow, selected, setSelected}) {
  const audioRef = React.useRef(new Audio('/Blow.mp3'));
  const handleCheckboxClick = (e) => {
    audioRef.current.play();
    if (e.target.checked) {
      e.target.nextSibling.classList.add('strike-through');
    } else {
      e.target.nextSibling.classList.remove('strike-through');
    }
  };

  return <div className="tomorrow">
                <h2 onClick={()=> setSelected(selected === "Tomorrow" ? "" : "Tomorrow")}><span className={`point ${selected === "Tomorrow" ? "point-show" : ""}`}>👉🏼</span>Tomorrow</h2>
                <ul>
                  { toDosTomorrow.map((todo, index) => {
                    return <li key={index}>
                        <input onClick={handleCheckboxClick} type="checkbox" name="todo" /> 
                        <span>{todo}</span>
                    </li>
                  }) }
                   
                    
                </ul>
            </div>
}

function Everyday({toDosEveryday, setTodosEveryday, selected, setSelected}) {

  

  return <div className="everyday">
                <h2 onClick={()=> setSelected(selected === "Everyday" ? "" : "Everyday")}><span className={`point ${selected === "Everyday" ? "point-show" : ""}`}>👉🏼</span>Everyday</h2>
                <ul>
                  { toDosEveryday.map((todo, index) => {
                    return <li key={index}>
                         
                        <span>{todo}</span>
                    </li>
                  }) }
                   
                    
                </ul>
            </div>
}

function Monthly({toDosM3, setToDosM3, toDosM1, setToDosM1, toDosM2, setToDosM2, selected, setSelected}) {

  

  return <div className="monthly">
                <h2>Monthly</h2>
                <Month1 selected={selected} setSelected={setSelected}toDosM1={toDosM1} setToDosM1={setToDosM1}/>
                <Month2 selected={selected} setSelected={setSelected}toDosM2={toDosM2} setToDosM2={setToDosM2}/>
                <Month3 selected={selected} setSelected={setSelected}toDosM3={toDosM3} setToDosM3={setToDosM3}/>
            </div>
}


function Month1 ({toDosM1, setToDosM1, selected, setSelected}) {
  

  
  const month = new Date().getMonth();
  
  
  let monthWord = monthNames[month];
  return <>
                  <h3 onClick={()=> setSelected(selected === "Month1" ? "" : "Month1")}><span className={`point ${selected === "Month1" ? "point-show" : ""}`}>👉🏼</span>{monthWord}</h3>
                    <ul>
                        {toDosM1.map(todo => {
                            return <li key={todo}>{todo}</li>
                        })}
                    </ul>
  </>
}
function Month2 ({toDosM2, setToDosM2, selected, setSelected}) {
  const month = new Date().getMonth();
  
  
  let nextMonth = (month + 1) % 12; 


  let monthWord = monthNames[nextMonth];
  return <>
                  <h3 onClick={()=> setSelected(selected === "Month2" ? "" : "Month2")}><span className={`point ${selected === "Month2" ? "point-show" : ""}`}>👉🏼</span>{monthWord}</h3>
                    <ul>
                        {toDosM2.map(todo => {
                            return <li key={todo}>{todo}</li>
                        })}
                    </ul>
  </>
}
function Month3 ({toDosM3, setToDosM3, selected, setSelected}) {
  const month = new Date().getMonth();
  let nextMonth = (month + 2) % 12; 
  
  
  let monthWord = monthNames[nextMonth];
  return <>
                  <h3 onClick={()=> setSelected(selected === "Month3" ? "" : "Month3")}><span className={`point ${selected === "Month3" ? "point-show" : ""}`}>👉🏼</span>{monthWord}</h3>
                    <ul>
                        {toDosM3.map(todo => {
                            return <li key={todo}>{todo}</li>
                        })}
                    </ul>
  </>
}


function Input({enter, setEnter, onSubmit}) {

  const audioRef = React.useRef(new Audio('/Glass.mp3'));

  const handleKeyUp = (event) => {
    
    if (event.key === 'Enter') {
      audioRef.current.play();
      console.log('Enter pressed'); 
      event.stopPropagation();
      event.preventDefault();  // Prevent default form submit behavior
      onSubmit(enter);  // Call the onSubmit prop function, passing the current input value
      setEnter('');  // Optionally clear the input after submitting
    }
  };
  
  return <div className="input">
            <span className="plus">+</span><input onKeyUp={handleKeyUp} onChange={e => setEnter(e.target.value)} type="text" value={enter} placeholder="Add New Goal" />
        </div>
}