import { h, Component } from 'preact';

import BlockGrid from '../BlockGrid';

import style from './style';

const EventList = ( props ) => {
  const { list } = props;

  const listItems = list.map((item) =>
    <div class={ style.eventList }>
      <a href={ item.target }>
        <img
          alt={ item.thumbnail.alt }
          class={ style.thumbnail }
          src={ item.thumbnail.src }
        />
      </a>

      <h2>{ item.heading }</h2>
      <p>{ item.description }</p>

      <a href={ item.target }>
        { item.link }
      </a>
    </div>
  );

  return (
    <BlockGrid items={ listItems } />
  )
};

EventList.defaultProps = {
  list: [],
}

export default EventList;
