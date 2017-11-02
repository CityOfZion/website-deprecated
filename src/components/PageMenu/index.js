import PropTypes from 'prop-types';

import { slide as Menu } from 'react-burger-menu';
import Scroll from 'react-scroll';
import { Sticky } from 'react-sticky';

import Header from '../Header';

import css from './style.css'; // Uses css instead of the usual 'style' to avoid variable shadowing with the sticky nav

const { Link } = Scroll;

const PageMenu = (props) => {
  const {
    links,
  } = props;

  const menuLinks = links.map(link =>
    (
      <Link
        activeClass={css.active}
        to={link.target}
        spy
        smooth
        offset={-130}
        duration={500}
      >
        { link.name }
      </Link>));

  return (
    <div className={css.pageMenu}>
      <Sticky>
        { ({ isSticky, style }) => (
          <Header
            isSticky={isSticky}
            links={menuLinks}
            style={style}
          />
        ) }
      </Sticky>

      <Menu right>
        { menuLinks }
      </Menu>
    </div>
  );
};

PageMenu.defaultProps = {
  links: [],
};

PageMenu.propTypes = {
  links: PropTypes.array,
};

export default PageMenu;
