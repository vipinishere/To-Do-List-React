import React, { useState } from "react";
import ListItem from "./components/ListItem";
import InputArea from "./components/InputArea";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (inputText) => {
    setItems((prevValue) => [...prevValue, inputText]);
  };

  const deleteItem = (id) => {
    setItems((prevValue) => {
      return prevValue.filter((value, index) => {return index !== id;})
    })
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea  
        onAdd={addItem}
      />
      <div>
        <ul>
          {items.map((todoItem, index) => (
            <ListItem 
              key={index} 
              id={index} 
              text={todoItem} 
              isChecked={deleteItem} 
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
