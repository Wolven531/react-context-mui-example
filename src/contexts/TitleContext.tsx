import React, {
	createContext,
	FC,
	ReactNode,
	useContext,
	useState,
} from 'react'

const DefaultTitleContext: ITitleContext = {
	setTitle: (newTitle: string) => {
		console.info(`using default setTitle(), NO-OP; newTitle="${newTitle}"`)
	},
	title: 'Default TitleContext title',
}

const TitleContext = createContext(DefaultTitleContext)

export interface ITitleContext {
	setTitle: (newTitle: string) => void
	title: string
}

export const TitleContextProvider: FC<{ children: ReactNode }> = (props) => {
	const [title, setTitle] = useState(DefaultTitleContext.title)

	return (
		<TitleContext.Provider
			value={{
				setTitle,
				title,
			}}
		>
			{props.children}
		</TitleContext.Provider>
	)
}

export const useTitleContext = () => {
	try {
		const ctx = useContext(TitleContext)

		if (ctx) {
			return ctx
		}

		throw Error('Could not find TitleContext Provider')
	} catch (error) {
		return DefaultTitleContext
	}
}
