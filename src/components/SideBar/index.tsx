import { InstagramIcon, LinkedinIcon, TwitterIcon } from '~/assets';
import { LogoAnimation } from '../Header/animation';
import { GHIcon, Icon, Wrapper } from './styles';

interface Props {
	animate?: boolean;
}

export function SideBar({ animate }: Props) {
	return (
		<Wrapper
			transition={LogoAnimation.transition}
			initial={LogoAnimation.initial(animate)}
			animate={LogoAnimation.animate}
		>
			<div onClick={() => window.open('https://github.com/LFSCamargo')}>
				<GHIcon />
			</div>
			<div onClick={() => window.open('https://instagram.com/luiziscodingx')}>
				<Icon src={InstagramIcon} />
			</div>
			<div
				onClick={() =>
					window.open('https://www.linkedin.com/in/luizfernando-lxspandora/')
				}
			>
				<Icon src={LinkedinIcon} />
			</div>
			<div onClick={() => window.open('https://twitter.com/lXSLuizinho')}>
				<Icon src={TwitterIcon} />
			</div>
		</Wrapper>
	);
}
