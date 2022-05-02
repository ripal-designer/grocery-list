import React, { useState } from "react";

function Test() {
  const defaultList = [
    { name: "ItemOne" },
    { name: "ItemTwo" },
    { name: "ItemThree" },
  ];

  const [list, updateList] = useState(defaultList);

  const handleRemoveItem = (e) => {
    const name = e.target.getAttribute("name");
    updateList(list.filter((item) => item.name !== name));
    console.log(name);
  };

  return (
    <div>
      <p> Remove Array item using getAttribute</p>
      {list.map((item) => {
        return (
          <>
            <p>{item.name}</p>
            <button name={item.name} onClick={handleRemoveItem}>
              x
            </button>
          </>
        );
      })}
    </div>
  );
}

export default Test;
