import { Container, Link, Typography } from '@material-ui/core'
import { FC, useContext, useEffect } from 'react'
import { TitleContext } from './TitleContext'

const Home: FC = () => {
	const { setTitle } = useContext(TitleContext)

	useEffect(() => {
		setTitle('Home')
	}, [])

	return (
		<Container className="app">
			<Typography>Hello world</Typography>
			<Link href="/other-page">To other page</Link>
		</Container>
	)
}

export { Home }
