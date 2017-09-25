import { h, Component } from 'preact';

import style from './style';

const Footer = ( props ) => {
  const {
    copyright
  } = props;

  return (
    <footer class={ style.footer }>{ copyright }</footer>
  )
};

export default Footer;
