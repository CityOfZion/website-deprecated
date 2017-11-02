import PropTypes from 'prop-types';

import style from './style.css';

const BlockGrid = (props) => {
  const {
    items,
    size,
  } = props;

  const gridItems = items.map(item =>
    (
      <div className={(size === 3) ? style.itemThird : style.itemFourth}>
        { item }
      </div>));

  return (
    <div className={style.blockGrid}>
      { gridItems }
    </div>
  );
};

BlockGrid.defaultProps = {
  items: [],
  size: 3,
};

BlockGrid.propTypes = {
  items: PropTypes.array,
  size: PropTypes.number,
};

export default BlockGrid;
