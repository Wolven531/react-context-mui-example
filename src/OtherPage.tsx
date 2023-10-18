import { Container, Link, Typography } from '@material-ui/core'
import { FC } from 'react'
import { TitleContextConsumer } from './TitleContext'

const OtherPage: FC = () => {
	const { setTitle } = useContext(TitleContext)

	useEffect(() => {
		setTitle('Other Page')
	}, [])

	return (
		<Container>
			<Typography>Other page</Typography>
			<Link href="/">To Home</Link>
		</Container>
	)
}

export { OtherPage }
