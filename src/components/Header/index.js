import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';

import ContentWrapper from '../ContentWrapper';
import Logo from '../Logo';

import css from './style.css';

const Header = (props) => {
  const { isSticky, links, style } = props;

  return (
    <header className={css.header} style={style}>
      <div className={isSticky ? css.headerWrapperVisible : css.headerWrapper}>
        <ContentWrapper>
          <div className={css.logo}>
            <Logo />
          </div>

          <MediaQuery query="(min-width: 992px)">
            <nav>
              { links }
            </nav>
          </MediaQuery>
        </ContentWrapper>
      </div>
    </header>
  );
};

Header.defaultProps = {
  isSticky: false,
};

Header.propTypes = {
  isSticky: PropTypes.bool,
  links: PropTypes.node.isRequired,
  style: PropTypes.object.isRequired,
};

export default Header;
