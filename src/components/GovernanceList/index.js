import PropTypes from 'prop-types';

import BlockGrid from '../BlockGrid';

import style from './style.css';

const GovernanceList = (props) => {
  const { list } = props;

  const listItems = list.map((item, index) => {
    const Secondary = () => {
      if (item.secondary) {
        return (
          <div className={style.secondary}>
            <h3>{ item.secondary.heading }</h3>
            <p>{ item.secondary.content }</p>
          </div>
        );
      }

      return null;
    };

    return (
      <div className={style.governanceList}>
        <div className={style.itemWrapper}>
          <div className={style.itemContent}>
            <h2 className={style.count}>
              <small>No</small>{ index + 1 }
            </h2>
            <div className={style.content}>
              <p>
                { item.description }
              </p>
              <Secondary />
            </div>
          </div>
        </div>
      </div>
    );
  });

  return (
    <BlockGrid items={listItems} />
  );
};

GovernanceList.defaultProps = {
  list: [],
};

GovernanceList.propTypes = {
  list: PropTypes.array,
};

export default GovernanceList;
