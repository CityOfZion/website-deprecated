import { h, Component } from 'preact';
import Scroll from 'react-scroll';

const Element = Scroll.Element;
const scrollSpy = Scroll.scrollSpy;

import ContentWrapper from '../../components/ContentWrapper';
import GovernanceList from '../../components/GovernanceList';
import EventList from '../../components/EventList';
import ProjectList from '../../components/ProjectList';
import Resources from '../../components/Resources';
import Title from '../../components/Title';

import style from './style';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    scrollSpy.update();
  }

  render() {
    const {
      governanceList,
      eventList,
      projectList,
      resources
    } = this.props.content;

    return (
      <div class={ style.home }>
          <section>
            <Element name="welcome" class={ style.welcomeBox }>
              <ContentWrapper narrow>
                <h1 class={ style.subHeadingCOZ }>Welcome, we are</h1>
                <h1 class={ style.headingCOZ }>City of Zion</h1>

                <div class={ style.taglineWrapper }>
                  <div class={ style.tagline }>
                    <div class={ style.taglineContent }>
                      Home of the Open-source Global NEO Developer Community
                    </div>
                  </div>
                </div>

                <p class={ style.heroContent }>We are an independent group of open source developers, designers and translators formed to support the NEO BlockChain core and ecosystem.</p>
              </ContentWrapper>
            </Element>
          </section>

          <section>
            <Element name="events">
              <ContentWrapper narrow>
                <Title>Events</Title>
                <p class={ style.subtitle }>Events and competitions run for the community by the City of Zion.</p>

                <EventList list={ eventList } />
              </ContentWrapper>
            </Element>
          </section>

          <section>
            <Element name="projects">
              <ContentWrapper narrow>
                <Title>Projects</Title>
                <p class={ style.subtitle }>Exemplary projects created through collaborative or individual efforts from the City of Zion.</p>

                <ProjectList list={ projectList } />
              </ContentWrapper>
            </Element>
          </section>

          <section>
            <Element name="governance">
              <ContentWrapper narrow>
                <Title>Governance</Title>
                <p class={ style.subtitle }>The community is free to choose its own targets and objectives. That said, our goal is to improve NEO, so we will align with the NEO team's needs and avoid retreading old ground as much as possible, unless it is possible to attain a substantially higher level of quality.</p>

                <GovernanceList list={ governanceList } />

                <p class={ style.governanceSubtitle }>Our most up to date governance can be found <a href="https://github.com/CityOfZion/governance">here</a></p>
              </ContentWrapper>
            </Element>
          </section>

          <section>
            <Element name="resources">
              <ContentWrapper>
                <Resources socialList={ resources.socialList } />
              </ContentWrapper>
            </Element>
          </section>
      </div>
    );
  }
}
