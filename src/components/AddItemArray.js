import React, { useRef, useState } from "react";
import {FaTrash} from 'react-icons/fa'
import Alert from "./Alert";

const getLocalStoragef = () => {
  let list = localStorage.getItem('list');
  if (list) {
    return (list = JSON.parse(localStorage.getItem('list')));
  } else {
    return [];
  }
};


function AddItemArray() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStoragef());
  const [alert, setAlert] = useState({ show: false, msg: '', type: '' });

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), title: name };
    if (name) {
      setList([...list, newItem]);
      setName("");
      console.log(list);
    }
  };
  const removeHandler = (id) =>{
    setAlert(true, 'danger', 'item removed');

    console.log(id)

    setList(list.filter((item) => item.id  !==id ))
  }
  return (
    <div>
      <form className="grocery-form">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="btn btn-primary" type="" onClick={handleSubmit}>
          Add list
        </button>
      </form>
      <Alert />
      {list.map((item) => {
        //const {id, title} = item;
        return (
          <>
          
            <p key={item.id}>{item.title} <button className="btn btn-danger" onClick={() => removeHandler(item.id)}><FaTrash /></button></p>
          </>
        );
      })}
    </div>
  );
}

export default AddItemArray;
