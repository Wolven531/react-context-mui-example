import { Container, Link, Typography } from '@material-ui/core'
import { FC, useEffect } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { useTitleContext } from './contexts/TitleContext'

export const OtherPage: FC = () => {
	const { setTitle } = useTitleContext()

	useEffect(() => {
		setTitle('Other Page')
	}, [])

	return (
		<Container>
			<Typography>Other page</Typography>
			<Link
				component={RouterLink}
				// href="/"
				to="/"
			>
				To Home
			</Link>
		</Container>
	)
}

export default OtherPage
