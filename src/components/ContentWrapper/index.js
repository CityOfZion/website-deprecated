import PropTypes from 'prop-types';

import style from './style.css';

const ContentWrapper = (props) => {
  const {
    children,
    narrow,
  } = props;

  const isNarrow = () => narrow;

  return (
    <div className={isNarrow() ? style.contentWrapperNarrow : style.contentWrapper}>
      { children }
    </div>
  );
};

ContentWrapper.defaultProps = {
  narrow: false,
};

ContentWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  narrow: PropTypes.bool,
};

export default ContentWrapper;
