import React from 'react';
import './Error.scss';

export const Error = ({callBack}) => {
  return (
    <div className="error">
      <h2 className="error__message">
        "Oops! ... something went wrong"
      </h2>
      <button className="error__button" onClick={() => callBack(false)}>
        RELOAD
      </button>
    </div>
  )
}