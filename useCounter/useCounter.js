import { useState } from 'react';


export const useCounter = ( initialValue = 0 ) => {

  const [counter, setCounter] = useState( initialValue );

  const addCounter = ( val = 1 ) => {
    setCounter( current => current + val );
  }

  const restCounter = ( val = 1 ) => {
    // if (counter===0) return;
    setCounter( current => current - val );
  }

  const reset = () => {
    setCounter( initialValue );
  }

  return {
    counter,
    addCounter,
    restCounter,
    reset,
  }
}
