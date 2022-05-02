import React, { useRef, useState } from "react";
// 




function AddItemArray() {
  // const inputadd = useRef(null);
  // const unique_id = uuid();
  // const small_id = unique_id.slice(0,8)

  const addItem = [
    { title: "item" },
    { title: "item2"},
    { title: "item3"},
    { title: "item4" },
  ];
const [additem, setItem] = useState(addItem)
const [stitle, Setstitle] = useState()


const AddHandler = () => {
// Setstitle(inputadd.current.value)
//  const newvalue =   addItem.concat({stitle, id: small_id  })
//   setItem(newvalue);

//   Setstitle('');

}

  return <div>
      <p>add item in array</p>
      {/* <input type='text' ref={inputadd} value={stitle}/> <button onClick={() => AddHandler()}>Add item </button> */}
      {additem}
  </div>;
}

export default AddItemArray;
