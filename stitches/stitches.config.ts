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
		sizes: {},
		fontSizes: {},
		borderStyles: {},
		borderWidths: {},
		fontWeights: {},
		fonts: {},
		letterSpacings: {},
		lineHeights: {},
		radii: {},
		shadows: {},
		space: {},
		transitions: {},
		zIndices: {},
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
