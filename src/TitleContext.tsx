import React, { createContext, FC, useContext, useState } from 'react'

const DefaultTitleContext = {
	setTitle: (newTitle: string) => {
		// alert('using default function to set title, WONT WORK')
		console.info('using default function to set title, WONT WORK')
	},
	title: 'Default Title From Creation',
}

export const TitleContext = createContext(DefaultTitleContext)

// const TitleContextProvider: FC<any> = (props: any) => {
// 	const [title, setTitle] = useState('Default Title From useState')

// 	return <Provider value={{ setTitle, title }}>{props.children}</Provider>
// }

// export { TitleContextProvider, TitleContext.Consumer as TitleContextConsumer }

export const useTitleContext = () => {
	try {
		const ctx = useContext(TitleContext)

		if (ctx) {
			return ctx
		}
	} catch (error) {
		// do nothing when context lookup fails
	}

	return DefaultTitleContext
}
