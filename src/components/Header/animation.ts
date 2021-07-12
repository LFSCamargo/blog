export const LogoAnimation = {
	transition: { duration: 0.8 },
	initial: (animate = false) => ({
		opacity: animate ? 0 : 1,
		translateX: -50,
	}),
	animate: {
		opacity: 1,
		translateX: 0,
	},
};

export const MenuAnimation = {
	transition: { duration: 1.2 },
	initial: (animate = false) => ({
		opacity: animate ? 0 : 1,
		translateY: -50,
	}),
	animate: {
		opacity: 1,
		translateY: 0,
	},
};
