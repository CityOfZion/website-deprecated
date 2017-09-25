import { h, Component } from 'preact';

import style from './style';

const ContentWrapper = ( props ) => {
  const {
    children,
    narrow
  } = props;

  const isNarrow = () => {
    return narrow;
  }

  return (
    <div class={ isNarrow() ? style.contentWrapperNarrow : style.contentWrapper }>
      { children }
    </div>
  )
};

ContentWrapper.defaultProps = {
  narrow: false,
}

export default ContentWrapper;
