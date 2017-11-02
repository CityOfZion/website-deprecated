import PropTypes from 'prop-types';

import BlockGrid from '../BlockGrid';

import style from './style.css';

const ProjectList = (props) => {
  const { list } = props;

  const listItems = list.map(item =>
    (
      <div className={style.projectList}>
        <a href={item.target}>
          <img
            alt={item.thumbnail.alt}
            className={style.thumbnail}
            src={item.thumbnail.src}
          />
        </a>

        <h2>{ item.heading }</h2>
        <p>{ item.description }</p>

        <a href={item.target}>
          { item.link }
        </a>
      </div>));

  return (
    <BlockGrid items={listItems} />
  );
};

ProjectList.defaultProps = {
  list: [],
};

ProjectList.propTypes = {
  list: PropTypes.array,
};

export default ProjectList;
