import { h, Component } from 'preact';

import BlockGrid from '../BlockGrid';

import style from './style';

const GovernanceList = ( props ) => {
  const { list } = props;

  const listItems = list.map((item, index) => {
    const Secondary = () => {
      if (item.secondary) {
        return (
          <div class={ style.secondary }>
            <h3>{ item.secondary.heading }</h3>
            <p>{ item.secondary.content }</p>
          </div>
        )
      }
    }

    return (
      <div class={ style.governanceList }>
        <div class={ style.itemWrapper }>
          <div class={ style.itemContent }>
            <h2 class={ style.count }>
              <small>No</small>{ index + 1 }
            </h2>
            <div class={ style.content }>
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
    <BlockGrid items={ listItems } />
  )
};

GovernanceList.defaultProps = {
  list: [],
}

export default GovernanceList;
