import Head from 'next/head';

type HelmetProps = {
	title?: string;
	description?: string;
};

/**
 * @description - This is where you can define the description and other headers
 * @example
 * 	<Helmet title="Title of my page" description="Page Description" />
 */
export const Helmet: React.FC<HelmetProps> = ({
	title = '',
	description = '',
}) => (
	<Head>
		<title>{title}</title>
		<meta name="description" content={description} />
	</Head>
);
