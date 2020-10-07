import { useState, useEffect } from 'react';

const useSpinner = () => {
  const [spinnerLoaded, setSpinnerLoaded] = useState(false);
  return [spinnerLoaded, setSpinnerLoaded];
};

export default useSpinner;
