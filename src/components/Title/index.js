import { h, Component } from 'preact';

import style from './style';

const Title = ( props ) => {
  const {
    children
  } = props;

  return (
    <div class={ style.title }>
      <svg
        viewBox="0 0 44 38"
        xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" fill-rule="evenodd">
          <path d="M44 26l-5.666 6H27l11.334-12M33 15.067l-4.826-4.932L33 5.202 27.75.27 22.5 5.2 17.536 0 12 5.202 27.75 20M5.75 12L23 27.6 11.5 38H0l11.5-10.4L0 17.2"/>
        </g>
      </svg>

      <h1>
        { children }
      </h1>
    </div>
  )
};

export default Title;
