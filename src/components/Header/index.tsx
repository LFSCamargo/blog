import { motion } from 'framer-motion';
import { useRouter } from 'next/dist/client/router';
import { SideBar } from '../SideBar';
import { LogoAnimation, MenuAnimation } from './animation';
import { LF, Link, LinksWrapper, Wrapper } from './styles';

interface Props {
	animate?: boolean;
}

export function Header({ animate = false }: Props) {
	const { push } = useRouter();

	return (
		<>
			<Wrapper>
				<motion.div
					transition={LogoAnimation.transition}
					initial={LogoAnimation.initial(animate)}
					animate={LogoAnimation.animate}
				>
					<LF>L/F</LF>
				</motion.div>
				<LinksWrapper
					transition={MenuAnimation.transition}
					initial={MenuAnimation.initial(animate)}
					animate={MenuAnimation.animate}
				>
					<Link onClick={() => push('/about')}>about</Link>
					<Link onClick={() => push('/home')}>home</Link>
					<Link onClick={() => push('/articles')}>articles</Link>
					<Link onClick={() => push('/contact')}>contact</Link>
				</LinksWrapper>
			</Wrapper>
			<SideBar animate={animate} />
		</>
	);
}
