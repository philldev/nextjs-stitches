import { createStitches } from '@stitches/react'
import {
	gray,
	blue,
	red,
	green,
	grayDark,
	blueDark,
	redDark,
	greenDark,
} from '@radix-ui/colors'
import { utils } from './utils'

const { createTheme } = createStitches({
	utils: utils,
	theme: {
		colors: {
			...gray,
			...blue,
			...red,
			...green,
		},
		sizes: {
			0: '0',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem',
		},
		fontSizes: {
			xs: '0.75rem',
			sm: '0.875rem',
			base: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			['2xl']: '1.5rem',
			['3xl']: '1.75rem',
			['4xl']: '2rem',
			['5xl']: '2.5rem',
			['6xl']: '3rem',
		},
		fontWeights: {
			light: 300,
			regular: 400,
			medium: 500,
			bold: 700,
		},
		fonts: {
			body: '"Roboto", sans-serif',
			heading: '"Roboto", sans-serif',
		},
		letterSpacings: {
			normal: 'normal',
			tight: '-0.05em',
			wide: '0.05em',
		},
		lineHeights: {
			none: 1,
			tight: 1.25,
			snug: 1.375,
			normal: 1.5,
			relaxed: 1.625,
			loose: 2,
		},
		radii: {
			none: '0',
			sm: '0.125rem',
			base: '0.25rem',
			lg: '0.5rem',
			full: '9999px',
		},
		shadows: {
			none: 'none',
			xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
			sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
			md: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
			lg: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
			xl: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
			'2xl':
				'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		},
		space: {
			0: '0',
			0.5: '0.125rem',
			1: '0.25rem',
			1.5: '0.375rem',
			2: '0.5rem',
			2.5: '0.625rem',
			3: '0.75rem',
			3.5: '0.875rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			9: '2.25rem',
			10: '2.5rem',
			11: '2.75rem',
			12: '3rem',
			14: '3.5rem',
			16: '4rem',
			20: '5rem',
			24: '6rem',
			28: '7rem',
			32: '8rem',
			36: '9rem',
			40: '10rem',
			44: '11rem',
			48: '12rem',
			52: '13rem',
			56: '14rem',
			60: '15rem',
			64: '16rem',
			72: '18rem',
			80: '20rem',
			96: '24rem',
		},
		zIndices: {
			none: 0,
			auto: 'auto',
			base: 1,
			above: 100,
			modal: 1000,
			sticky: 1100,
			fixed: 1200,
			front: 1300,
			back: -100,
		},
	},
	media: {
		bp1: '(min-width: 640px)',
		bp2: '(min-width: 768px)',
		bp3: '(min-width: 1024px)',
	},
})

export const darkTheme = createTheme({
	colors: {
		...grayDark,
		...blueDark,
		...redDark,
		...greenDark,
	},
})
