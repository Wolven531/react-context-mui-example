import { Container, Link, Typography } from '@material-ui/core'
import { FC } from 'react'
import { TitleContextConsumer } from './TitleContextProvider'

const Home: FC = () => {
	return (
		<TitleContextConsumer>
			{(context) => {
				context.setTitle('Home')

				return (
					<Container className="app">
						<Typography>Hello world</Typography>
						<Link href="/other-page">To other page</Link>
					</Container>
				)
			}}
		</TitleContextConsumer>
	)
}

export { Home }
