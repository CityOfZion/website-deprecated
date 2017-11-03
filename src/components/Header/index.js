import PropTypes from 'prop-types';

import ContentWrapper from '../ContentWrapper';
import Logo from '../Logo';

import css from './style.css';

const Header = (props) => {
  const { children, isSticky, style } = props;

  return (
    <header className={css.header} style={style}>
      <div className={isSticky ? css.headerWrapperVisible : css.headerWrapper}>
        <ContentWrapper>
          <div className={css.logo}>
            <Logo />
          </div>

          <nav>
            { children }
          </nav>
        </ContentWrapper>
      </div>
    </header>
  );
};

Header.defaultProps = {
  isSticky: false,
};

Header.propTypes = {
  children: PropTypes.node.isRequired,
  isSticky: PropTypes.bool,
  style: PropTypes.object.isRequired,
};

export default Header;
