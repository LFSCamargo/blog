import { CardTagWrapper, CardTitle, CardWrapper } from './styles';

interface Props {
	title: string;
	image: string;
	tag: string;
	onClick?: () => void;
}

export function ArticleCard({ tag, image, title, onClick = () => {} }: Props) {
	return (
		<CardWrapper onClick={onClick} src={image}>
			<CardTagWrapper>
				<span>{tag}</span>
			</CardTagWrapper>
			<CardTitle>{title}</CardTitle>
		</CardWrapper>
	);
}
