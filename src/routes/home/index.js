import { Component } from 'preact';
import PropTypes from 'prop-types';
import Scroll from 'react-scroll';

import ContentWrapper from '../../components/ContentWrapper';
import GovernanceList from '../../components/GovernanceList';
import EventList from '../../components/EventList';
import ProjectList from '../../components/ProjectList';
import Resources from '../../components/Resources';
import Title from '../../components/Title';

import style from './style.css';

const { Element, scrollSpy } = Scroll;

export default class Home extends Component {
  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    const {
      governanceList,
      eventList,
      projectList,
      resources,
    } = this.props.content;

    return (
      <div className={style.home}>
        <section>
          <Element name="welcome" class={style.welcomeBox}>
            <ContentWrapper narrow>
              <h1 className={style.subHeadingCOZ}>Welcome, we are</h1>
              <h1 className={style.headingCOZ}>City of Zion</h1>

              <div className={style.taglineWrapper}>
                <div className={style.tagline}>
                  <div className={style.taglineContent}>
                      Home of the Open-source Global NEO Developer Community
                  </div>
                </div>
              </div>

              <p className={style.heroContent}>We are an independent group of open source developers, designers and translators formed to support the NEO BlockChain core and ecosystem.</p>
            </ContentWrapper>
          </Element>
        </section>

        <section>
          <Element name="events">
            <ContentWrapper narrow>
              <Title>Events</Title>
              <p className={style.subtitle}>Events and competitions run for the community by the City of Zion.</p>

              <EventList list={eventList} />
            </ContentWrapper>
          </Element>
        </section>

        <section>
          <Element name="projects">
            <ContentWrapper narrow>
              <Title>Projects</Title>
              <p className={style.subtitle}>Exemplary projects created through collaborative or individual efforts from the City of Zion.</p>

              <ProjectList list={projectList} />

              <p className={style.subtitle}>You can find many more projects on the <a href="https://github.com/CityOfZion">City of Zion GitHub</a>.</p>
            </ContentWrapper>
          </Element>
        </section>

        <section>
          <Element name="governance">
            <ContentWrapper narrow>
              <Title>Governance</Title>
              <p className={style.subtitle}>The community is free to choose its own targets and objectives. That said, our goal is to improve NEO, so we will align with the NEO team&apos;s needs and avoid retreading old ground as much as possible, unless it is possible to attain a substantially higher level of quality.</p>

              <GovernanceList list={governanceList} />

              <p className={style.governanceSubtitle}>Our most up to date governance can be found <a href="https://github.com/CityOfZion/governance">here</a></p>
            </ContentWrapper>
          </Element>
        </section>

        <section>
          <Element name="resources">
            <ContentWrapper>
              <Resources socialList={resources.socialList} />
            </ContentWrapper>
          </Element>
        </section>
      </div>
    );
  }
}

Home.propTypes = {
  content: PropTypes.object.isRequired,
};
