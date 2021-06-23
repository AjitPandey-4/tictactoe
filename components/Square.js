import React from 'react';

const Square = ({ value, onClick, isWinnigSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinnigSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
