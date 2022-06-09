import type * as Stitches from '@stitches/react'
import { ConfigType } from '@stitches/react/types/config'

type SpaceValue = Stitches.ScaleValue<'space'>

const margins: ConfigType.Utils = {
	m: (v: SpaceValue) => ({ margin: v }),
	mt: (v: SpaceValue) => ({ marginTop: v }),
	mr: (v: SpaceValue) => ({ marginRight: v }),
	mb: (v: SpaceValue) => ({ marginBottom: v }),
	ml: (v: SpaceValue) => ({ marginLeft: v }),
	mx: (v: SpaceValue) => ({ marginLeft: v, marginRight: v }),
	my: (v: SpaceValue) => ({ marginTop: v, marginBottom: v }),
}

const paddings: ConfigType.Utils = {
	p: (v: SpaceValue) => ({ padding: v }),
	pt: (v: SpaceValue) => ({ paddingTop: v }),
	pr: (v: SpaceValue) => ({ paddingRight: v }),
	pb: (v: SpaceValue) => ({ paddingBottom: v }),
	pl: (v: SpaceValue) => ({ paddingLeft: v }),
	px: (v: SpaceValue) => ({ paddingLeft: v, paddingRight: v }),
	py: (v: SpaceValue) => ({ paddingTop: v, paddingBottom: v }),
}

export const utils: ConfigType.Utils = {
	size: (v: SpaceValue) => ({
		width: v,
		height: v,
	}),
	br: (v: SpaceValue) => ({ borderRadius: v }),
	bg: (v: string) => ({ backgroundColor: v }),
	bgImg: (v: string) => ({ backgroundImage: `url(${v})` }),
	...margins,
	...paddings,
}
