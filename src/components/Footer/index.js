import PropTypes from 'prop-types';

import style from './style.css';

const Footer = (props) => {
  const {
    copyright,
  } = props;

  return (
    <footer className={style.footer}>{ copyright }</footer>
  );
};

Footer.propTypes = {
  copyright: PropTypes.string.isRequired,
};

export default Footer;
