import { Container, Link, Typography } from '@material-ui/core'
import { FC, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useTitleContext } from './contexts/TitleContext'

export const Home: FC = () => {
	const { setTitle } = useTitleContext()

	useEffect(() => {
		setTitle('Home')
	}, [])

	return (
		<Container className="app">
			<Typography>Hello world</Typography>
			<Link
				component={RouterLink}
				// href="/other-page"
				to="/other-page"
			>
				To other page
			</Link>
		</Container>
	)
}

export default Home
