import React from 'react';
const validation = (props) => {
  let validationMessage = 'Text long Enough';
  if (props.inputLength <= 5) validationMessage = 'Text too short ';
  return (
    <div>
      {/* {props.inputLength ? <p>Text long enough</p> : <p>Text too short</p>} */}
      {validationMessage}
    </div>
  );
};

export default validation;
