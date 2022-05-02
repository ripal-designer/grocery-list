import React, { useState } from "react";

function StringReverse() {
  const str = "hello";
  const [string, SetString] = useState(str);
  const [stringLen, SetstringLen] = useState();

  const Reverse = (str) => {
    console.log(str);
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");
    SetString(joinArray);
  };

  return (
    <>
      <div>
        StringReverse{" "}
        <b>
          {string}
          {stringLen}
        </b>
      </div>
      <button onClick={() => Reverse(str)}>Click here to reverse String</button>
    
    </>
  );
}

export default StringReverse;
