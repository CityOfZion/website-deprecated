import { h, Component } from 'preact';

import style from './style';

const BlockGrid = ( props ) => {
  const {
    items,
    size
  } = props;

  const gridItems = items.map((item) =>
    <div class={ (size === 3) ? style.itemThird : style.itemFourth }>
      { item }
    </div>
  );

  return (
    <div class={ style.blockGrid }>
      { gridItems }
    </div>
  )
};

BlockGrid.defaultProps = {
  items: [],
  size: 3
}

export default BlockGrid;
