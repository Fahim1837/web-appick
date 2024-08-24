import { useState } from 'react';

function CardFlipper() {
  const [cardStates, setCardStates] = useState(['white', 'black', 'white']);

  const handleCardClick = (index: number) => {
    setCardStates(() => {
      const newStates = ['white', 'white', 'white']; // Create a copy of the current states
      newStates[index] = 'black'; // Set the clicked card to black
    //   const middleIndex = 1; // Assuming the middle card is always at index 1
    //   newStates[middleIndex] = 'white'; // Reset the middle card to white
      return newStates;
    });
  };

  return (
    <div>
      {cardStates.map((color, index) => (
        <div
          key={index}
          style={{
            backgroundColor: color,
            width: '100px',
            height: '100px',
            cursor: 'pointer',
          }}
          onClick={() => handleCardClick(index)}
        ></div>
      ))}
    </div>
  );
}

export default CardFlipper;