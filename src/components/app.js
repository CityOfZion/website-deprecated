import { Component } from 'preact';
import { Router } from 'preact-router';
import { StickyContainer } from 'react-sticky';

import Footer from './Footer';
import Home from '../routes/home';
import PageMenu from './PageMenu';
// import Home from 'async!./home';

export default class App extends Component {
  constructor(props) {
    super(props);

    /** Gets fired when the route changes.
     *  @param {Object} event   "change" event from [preact-router](http://git.io/preact-router)
     *  @param {string} event.url The newly routed URL
     */
    this.handleRoute = (e) => {
      this.currentUrl = e.url;
    };

    this.data = {
      page: {
        copyright: '© Copyright City of Zion, 2017',
      },
      pageMenu: {
        links: [
          { name: 'Welcome', target: 'welcome' },
          { name: 'Events', target: 'events' },
          { name: 'Projects', target: 'projects' },
          { name: 'Governance', target: 'governance' },
          { name: 'Resources', target: 'resources' },
        ],
      },
      content: {
        eventList: [
          {
            description: 'The City of Zion council is promoting a decentralised apps (dApps) competition to further elevate the NEO developer community.',
            heading: 'dApps Competition #1',
            link: 'Submit your registration',
            target: 'https://cityofzion.io/dapps/1',
            thumbnail: {
              alt: 'dApps Competition #1',
              src: '/assets/images/dapps-comp-1.png',
            },
          },
        ],
        projectList: [
          {
            description: 'An Electron-based light wallet (no need for chain copy nor VM) for Windows, OSX, and Linux users.',
            heading: 'Neon Wallet',
            link: 'Download NEON Wallet',
            target: 'http://www.neonwallet.com/',
            thumbnail: {
              alt: 'Neon Wallet',
              src: '/assets/images/neon-wallet.jpg',
            },
          },
          {
            description: 'CoZ members coordinate efforts from multilingual translators to share information with the world.',
            heading: 'Internal Documentation',
            link: 'See the Internal Documentation',
            target: 'https://github.com/neo-project/docs',
            thumbnail: {
              alt: 'Internal Documentation',
              src: '/assets/images/internal-docs.jpg',
            },
          },
          {
            description: 'Neoscan is a high-performance block explorer and API laying the foundation for other projects.',
            heading: 'NEOScan',
            link: 'View NEOScan',
            target: 'https://neoscan.io/',
            thumbnail: {
              alt: 'NEOScan',
              src: '/assets/images/neo-scan.jpg',
            },
          },
          {
            description: 'A portal to unify developers on a single app. Supporting projects, invites, and more!',
            heading: 'Neo Portal',
            link: 'View the Portal',
            target: 'https://github.com/CityOfZion/neo-slack-bot',
            thumbnail: {
              alt: 'Neo Portal',
              src: '/assets/images/neo-portal.jpg',
            },
          },
          {
            description: 'NeoMon is a tool for monitoring the status of popular RPC Nodes and REST endpoints on the Neo network.',
            heading: 'NeoMon',
            link: 'View NeoMon',
            target: 'http://monitor.cityofzion.io',
            thumbnail: {
              alt: 'View NeoMon',
              src: '/assets/images/neo-monitor.jpg',
            },
          },
          {
            description: "We're working on lots of things; you can follow along and help vote on priorities on our Trello!",
            heading: 'More to Come...',
            link: 'Check out the Trello Board',
            target: 'https://trello.com/b/6TngvuLf/neoblockchaindevelopment',
            thumbnail: {
              alt: 'More to come',
              src: '/assets/images/more-to-come.jpg',
            },
          },
        ],
        governanceList: [
          {
            description: 'There will be a council always composed of 9 members. They are the Council team in our organization.',
          },
          {
            description: 'There will be a high council composed of 4 members of the council. They are the Maintainers of the Council team.',
          },
          {
            description: 'Any member of CoZ can create and collaborate on projects.',
          },
          {
            description: 'There will be a weekly report delivered to NEO by the high council via a PGP signed email and correspondent pull request on GitHub.',
          },
          {
            description: 'In case of any support from NEO as reward or bounty, the funds will initially be held by a trusted third party in a wallet for distribution.',
            secondary: {
              heading: 'Wallet Address',
              content: 'AXSoNQEKjmqPBNPg5cNrHyWivfjok3Vj9D',
            },
          },
          {
            description: 'After 1 September 2017, all CoZ funds will be held in a multi-sig wallet requiring a majority of the high council to unlock funding.',
          },
          {
            description: 'Rewards distribution will be voted on by project before being sent. There must be a majority agreement of all 9 council members.',
          },
          {
            description: 'All decisions not explicitly differentiated in this list will be voted upon as in item 7.',
          },
          {
            description: 'Item 7 voting polls of the council will run for 1 week on the #council Slack channel and after closing will be published in the #develop channel.',
          },
          {
            description: 'The high council will be voted upon each quarter, synchronizing with the quarters of the year. The first election will be on 1 October 2017. The newly elected high council can propose changes to these rules during the first week after the election. Changes will be voted upon as in item 7.',
          },
          {
            description: 'Any member of the council or high council is free to forfeit their position at any time. When this happens, an election will take place and a majority of council members must decide upon a replacement.',
          },
          {
            description: 'Any member of the council that does not vote on polls for more than 2 months will automatically forfeit their position.',
          },
        ],
        resources: {
          socialList: [
            {
              name: 'Reddit', heading: 'Subscribe', subtitle: 'to NEO Reddit', target: 'https://www.reddit.com/r/NEO/', logo: '/assets/images/reddit.png',
            },
            {
              name: 'Slack', heading: 'Join', subtitle: 'our Slack Channel', target: 'https://slack.cityofzion.io', logo: '/assets/images/slack.png',
            },
            {
              name: 'Github', heading: 'Fork', subtitle: 'our Github Repository', target: 'https://github.com/CityOfZion', logo: '/assets/images/github.png',
            },
            {
              name: 'Facebook', heading: 'Message us', subtitle: 'on Facebook', target: 'https://www.facebook.com/CityOfZionOfficial', logo: '/assets/images/facebook.png',
            },
            {
              name: 'Twitter', heading: 'Tweet us', subtitle: 'on Twitter', target: 'https://twitter.com/cityofzion_neo', logo: '/assets/images/twitter.png',
            },
            {
              name: 'Medium', heading: 'Follow us', subtitle: 'on Medium', target: 'https://medium.com/@cityofzion', logo: '/assets/images/medium.png',
            },
          ],
        },
      },
    };
  }

  render() {
    return (
      <div id="app">
        <StickyContainer>
          <PageMenu links={this.data.pageMenu.links} />

          <Router onChange={this.handleRoute}>
            <Home path="/" content={this.data.content} />
          </Router>

          <Footer copyright={this.data.page.copyright} />
        </StickyContainer>
      </div>
    );
  }
}
