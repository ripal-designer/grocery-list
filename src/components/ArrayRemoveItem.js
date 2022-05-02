import React, { useState } from "react";

function ArrayRemoveItem() {
  const myArray = [
    { title: "item", id: 1 },
    { title: "item2", id: 2 },
    { title: "item3", id: 3 },
    { title: "item4", id: 14 },
  ];
  const [CopyArray, setCopyArray] = useState(myArray);

  const RemoveItem = (id) => {
    setCopyArray(CopyArray.filter((item) => item.id !== id));

    console.log(id);
  };

  return (
    <div>
        <p>          Remove Array item using ID
</p>
      {CopyArray.map((item) => {
        return (
          <>
            <p>{item.title} </p>
            <button className="btn btn-danger" title={item.title} onClick={() => RemoveItem(item.id)}>
              X
            </button>
          </>
        );
      })}
    </div>
  );
}

export default ArrayRemoveItem;
