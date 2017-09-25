import { h, Component } from 'preact';

import BlockGrid from '../../components/BlockGrid';
import ContentWrapper from '../../components/ContentWrapper';
import Title from '../../components/Title';

import style from './style';

const Resources = ( props ) => {
  const {
    socialList
  } = props;

  const listItems = socialList.map((item) =>
    <div class={ style.socialList }>
      <a href={ item.target }>
        <img
          alt={ item.name }
          src={ item.logo }
        />

        <div class={ style.itemContent }>
          <h2>{ item.heading }</h2>
          <p>{ item.subtitle }</p>
        </div>
      </a>
    </div>
  );

  return (
    <div class={ style.resources }>
      <div class={ style.accent } />
      <div class={ style.wrapper }>
        <div class={ style.container }>
          <ContentWrapper narrow>
            <Title>Resources</Title>

            <p class={ style.subtitle }>Anyone can join us to work together or be a source of technical support.</p>

            <BlockGrid items={ listItems } />

            <hr />

            <p class={ style.license }>Our code is free and 100% MIT-licensed; Even this website!</p>
            <p class={ style.pullRequest }>If you feel you can improve on anything, just send us a pull request.*</p>
            <p class={ style.testNet }>*We run JSON-RPC nodes for the mainnet and testnet networks at seed[1-5].cityofzio.io:8880 Furthermore, we are able to provide testnet NEO and GAS for collaborating developers.</p>
          </ContentWrapper>
        </div>
      </div>
    </div>
  )
};

Resources.defaultProps = {
  socialList: [],
}

export default Resources;
