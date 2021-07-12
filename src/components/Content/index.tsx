import { FC } from 'react';
import { Loading } from '../Loading';
import { Animation } from './animations';
import { LoadingWrapper, Wrapper } from './styles';

type Props = {
	style?: React.CSSProperties;
	loading?: boolean;
};

export const Content: FC<Props> = ({
	children,
	style = {},
	loading = false,
}) => {
	if (loading) {
		return (
			<LoadingWrapper>
				<Loading />
			</LoadingWrapper>
		);
	}
	return (
		<Wrapper
			transition={Animation.transition}
			initial={Animation.initial}
			animate={Animation.animate}
		>
			<div style={style}>{children}</div>
		</Wrapper>
	);
};
