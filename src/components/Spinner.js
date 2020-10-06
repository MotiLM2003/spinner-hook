import React from 'react';
import './spinner.css';

const Spinner = ({ type }) => {
  const renderedSpinner = () => {
    switch (type) {
      case 'spinner': {
        return <div className='spDefault spinner'></div>;
        break;
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
    }
  };
  return <div className='spinner-container'>{renderedSpinner()}</div>;
};

export default Spinner;
