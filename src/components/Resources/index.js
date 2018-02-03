import PropTypes from 'prop-types';

import BlockGrid from '../../components/BlockGrid';
import ContentWrapper from '../../components/ContentWrapper';
import Title from '../../components/Title';

import style from './style.css';

const Resources = (props) => {
  const {
    socialList,
  } = props;

  const listItems = socialList.map(item =>
    (
      <div className={style.socialList}>
        <a href={item.target}>
          <img
            alt={item.name}
            src={item.logo}
          />

          <div className={style.itemContent}>
            <h2>{ item.heading }</h2>
            <p>{ item.subtitle }</p>
          </div>
        </a>
      </div>));

  return (
    <div className={style.resources}>
      <div className={style.accent} />
      <div className={style.wrapper}>
        <div className={style.container}>
          <ContentWrapper narrow>
            <Title>Resources</Title>

            <p className={style.subtitle}>Anyone can join us to work together or be a source of technical support.</p>

            <BlockGrid items={listItems} />

            <hr />

            <p className={style.license}>Our code is free and 100% MIT-licensed; even this website!</p>
            <p className={style.pullRequest}>If you feel you can improve on anything, just send us a pull request.</p>
            <p className={style.testNet}>
              We also run JSON-RPC nodes for the mainnet and testnet networks at seed[1-5].cityofzion.io:8880
              Furthermore, and we are able to provide testnet NEO and GAS for collaborating developers.
            </p>
          </ContentWrapper>
        </div>
      </div>
    </div>
  );
};

Resources.defaultProps = {
  socialList: [],
};

Resources.propTypes = {
  socialList: PropTypes.array,
};

export default Resources;
