import React from 'react';
const SVG = (
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 48 48') => (
  <svg
    width={width}
    style={style}
    height={width}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      fill={fill}
      d="M6.75015599e-13,-1.687539e-13 L22.817738,-1.687539e-13 L22.817738,15.4912215 L6.75015599e-13,15.4912215 L6.75015599e-13,-1.687539e-13 Z M25.2054773,-2.23820962e-13 L47.9993973,-2.23820962e-13 L47.9993973,32.847927 L25.2054773,32.847927 L25.2054773,-2.23820962e-13 Z M6.75015599e-13,17.8789625 L22.817738,17.8789625 L22.817738,48 L6.75015599e-13,48 L6.75015599e-13,17.8789625 Z M25.2054773,35.2363188 L47.9993973,35.2363188 L47.9993973,48 L25.2054773,48 L25.2054773,35.2363188 Z"
    />
  </svg>
);

export default SVG;
