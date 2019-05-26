import React from 'react';

var CategoryEntry = props => {
  return (
    <div
      className="CatEntStyled"
      onMouseOver={e => {
        props.displayBox(props.name);
      }}
    >
      {props.name}
    </div>
  );
};
export default CategoryEntry;
