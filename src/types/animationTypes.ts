/* eslint-disable no-unused-vars */
import { Target, VariantLabels } from 'framer-motion';

export type AnimationType = Partial<{
	transition: {
		duration: number;
	};
	initial:
		| boolean
		| Target
		| VariantLabels
		| ((param: any) => boolean | Target | VariantLabels);

	animate:
		| boolean
		| Target
		| VariantLabels
		| ((param: any) => boolean | Target | VariantLabels);
}>;
