import React from 'react';
import './spinner.css';

// custom hooks

import useSpinner from '../hooks/useSpinner';

const Spinner = ({ type, text }) => {
  const renderedSpinner = () => {
    switch (type) {
      case 'spinner':
      default: {
        return <div className='spDefault spinner'></div>;
      }
      case 'dots': {
        return (
          <div className='spDefault dots'>
            <div className='dot'></div>
            <div className='dot bounce-1'></div>
            <div className='dot bounce-2'></div>
          </div>
        );
      }
      case 'square': {
        return <div className='spDefault square'></div>;
      }
    }
  };
  return (
    <div className='spinner-container'>
      <div className='spDefault'>
        {renderedSpinner()}
        <div className='spinnerText'>{text}</div>
      </div>
    </div>
  );
};

Spinner.defaultProps = {
  type: 'spinner',
  text: 'Loading...',
};
export default Spinner;
