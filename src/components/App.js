import React, { useEffect } from 'react';
import Spinner from './Spinner';

// custom hooks
import useSpinner from '../hooks/useSpinner';

const App = () => {
  const [spinnerLoaded, setSpinnerLoaded] = useSpinner();

  return (
    <div>
      Hello world
      {spinnerLoaded ? <Spinner type='dots' /> : null}
      <button
        onClick={() => setSpinnerLoaded(!spinnerLoaded)}
        style={{ zIndex: 11000, position: 'absolute' }}
      >
        Click
      </button>
    </div>
  );
};

export default App;
