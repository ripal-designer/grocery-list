import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem, editItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="grocery-item" key={id}>
            <ul className="list-group ">
              <li className="list-group-item " style={{textAlign: "left"}}>
                <span>{title}{" "}</span>
                <p style={{float:'right'}}>
                <button
                  type="button"
                  className="btn btn-info"
                  onClick={() => editItem(id)}
                >
                  <FaEdit />
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => removeItem(id)}
                >
                  <FaTrash />
                </button>
                </p>
              </li>
            </ul>
          </article>
        );
      })}
    </div>
  );
};

export default List;
