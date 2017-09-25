import { h, Component } from 'preact';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

import ContentWrapper from '../ContentWrapper';
import Logo from '../Logo';

import css from './style';

const Header = ( props ) => {
	const { isSticky, links, style } = props;

	return (
		<header class={ css.header } style={ style }>
			<div class={ isSticky ? css.headerWrapperVisible : css.headerWrapper }>
				<ContentWrapper>
					<div class={ css.logo }>
						<Logo />
					</div>

					<nav>
						{ links }
					</nav>
				</ContentWrapper>
			</div>
		</header>
	);
}

export default Header;
