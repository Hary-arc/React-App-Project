import React from 'react';

const ClearCompleted = ({ onClear }) => {
  return (
    <button onClick={onClear}>Clear Completed Tasks</button>
  );
};

export default ClearCompleted;
