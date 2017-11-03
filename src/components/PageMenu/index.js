import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import MediaQuery from 'react-responsive';
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
            style={style}
          >
            <MediaQuery query="(min-width: 992px)">
              {menuLinks}
            </MediaQuery>
          </Header>
        ) }
      </Sticky>

      <MediaQuery query="(max-width: 991px)">
        <Menu
          burgerBarClassName={css.burgerBars}
          burgerButtonClassName={css.burgerButton}
          crossButtonClassName={css.crossButton}
          crossClassName={css.cross}
          itemListClassName={css.itemList}
          menuClassName={css.menu}
          overlayClassName={css.overlay}
          right
        >
          { menuLinks }
        </Menu>
      </MediaQuery>
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
