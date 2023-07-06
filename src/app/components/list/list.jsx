import React from "react";

const List = ({title, list}) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))
        }
      </ul>
    </>
  );
};

export default List;
